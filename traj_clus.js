/**
 * Created by Moritz on 23.03.2017.
 */



let CAM_NEAR = -100;
const CAM_FAR = 100;

const GUI_FLOORMIN = -2;
const GUI_FLOORMAX = 2;
const GUI_FLOORSTEP = 1;
const GUI_SCALEMIN = 50;
const GUI_SCALEMAX = 200;
const GUI_SCALESTEP = 50;

const INIT_FLOOR = 1;
const INIT_SCALE = 50;
const INIT_FILEPATH = 'LUCI-neu-';
const INIT_EXT = '.png';
const INIT_LINETYPE = 'Graph';

const TRAJ_COLOR = 0xff0000;
const TRAJ_CUT_TIME = 10000; // 8 s in ms

const BG_DIR = 'img/';
const BG_COLOR = 0xffffff;
const BG_ALPHA = 0;
const BG_MESH_NAME = 'backgroundMesh-';
const BG_CORR_Z = -0.4;

const GRID_D = 5;
const GRID_CORR_Z = 0.4;

const MAXRADIUS_MIN = 1;
const MAXRADIUS_MAX = 50;
const MAXRADIUS_STEP = 5;
const INIT_MAXRADIUS = 20;

const CENT_DOT_SIZE = 10.0;
const TRAJ_DOT_SIZE = 3.5;

const CSV_REPL_HEADER = 't,x,y,acc,f,did';

//three.js
let camera, scene, renderer;
//    var camerahelper;
let mouse, raycaster;

//dat.gui
let gui;

/*    var cam = {
 C_N: -100,
 C_F: 100,
 cnListener: function() {},
 cfListener: function() {},
 get CAM_NEAR(){

 }
 get CAM_FA

 };*/


//daten des dargestellten gebäudes
const building = {
    w: window.innerWidth,
    h: window.innerHeight,
    ratio: this.w / this.h,
    wListener: function () {},
    hListener: function () {},

    get width() {
        return this.w;
    },
    get height() {
        return this.h;
    },
    set width(val) {
        this.w = val;
        this.wListener(val)
    },
    set height(val) {
        this.h = val;
        this.hListener(val);
    },
    registerWListener: function (listener) {
        this.hListener = listener;
    },
    registerHListener: function (listener) {
        this.wListener = listener;
    },

    f: INIT_FLOOR,
    fListener: function () {},
    get floor() {
        return this.f;
    },
    set floor(val) {
        if (val !== this.f) {
            this.f = val;
            this.fListener(val);
        }
    },
    registerFListener: function (listener) {
        this.fListener = listener;
    },

    s: INIT_SCALE,
    sListener: function () {},
    get scale() {
        return this.s;
    },
    get scaleFraction() {
        return ( 1 / this.s );
    },
    set scale(val) {
        if (val !== this.s) {
            this.s = val;
            this.sListener(val);
        }
    },
    registerSListener: function (listener) {
        this.sListener = listener;
    },

    filePath: INIT_FILEPATH,
    fileExt: INIT_EXT,
    get path() {
        return this.filePath + this.f + this.fileExt;
    },

    lt: INIT_LINETYPE,
    ltListener: function () {},
    get lineType() {
        return this.lt;
    },
    set lineType(val) {
        if (val !== this.lt) {
            this.lt = val;
            this.ltListener(val);
        }
    },
    registerLtListener: function (listener) {
        this.ltListener = listener;
    },

    mR: INIT_MAXRADIUS,
    mRListener: function () {},
    get maxRadius() {
        return this.mR;
    },
    set maxRadius(val) {
        if (val !== this.mR) {
            this.mR = val;
            this.mRListener(val);
        }
    },
    registerMRListener: function (listener) {
        this.mRListener = listener;
    }
};
building.registerWListener(function () {
    this.ratio = this.w / this.h;
    configCamera();
    updateRenderer();
});
building.registerHListener(function () {
    this.ratio = this.w / this.h;
    configCamera();
    updateRenderer();
});
building.registerFListener(function () {
    changeFloors(building.floor, building.path);
});
building.registerSListener(function () {
    changeScale();
});
building.registerLtListener(function () {
    changeLineType();
});
building.registerMRListener(function () {
    changeClusterRadius();
});

const data = {
    points: [],
    trajectories: {
        raw: [],
        subsa: [],
    },
    clusters: {
        centroids: [],
        points: []
    },
    graph: {
        edges: []
    },

    centroids: [],

};

const drawing = {
    bgMeshes: {},
    grids: {},

    points: [],
    trajectories: {
        raw: [],
        subsa: [],
    },
    clusters: {
        centroids: [],
        points: []
    },
    graph: {
        edges: []
    }
};


const Trajectory = function(points) {
    this.color = TRAJ_COLOR;
    this.points = points;
    this.objects = [];
};

const Point = function(point) {
    this.color = TRAJ_COLOR;
    this.did = point.did;
    this.x = point.x;
    this.y = point.y;
    this.f = point.f;
    this.t = point.t;
    this.c = null;
    this.g = null;
    this.prevPoint = null;
    this.nextPoint = null;
};
const Centroid = function(c) {
    this.x = c.x;
    this.y = c.y;
    this.f = c.f;
    this.g = c.g;
};


init();
update();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(0, 0, 0, 0, 0, 0, 0);
    initRenderer();
    configCamera();
    initRaycaster();
    initDatGUI();
    initBackgroundFileInput();
    initDataFileInput();
    addWindowListeners();
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setClearColor(BG_COLOR, BG_ALPHA);//        renderer.setPixelRatio( window.devicePixelRatio ) ;
    document.body.appendChild(renderer.domElement);
    updateRenderer();
}
function updateRenderer() {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function configCamera() {
    const windowRatio = window.innerWidth / window.innerHeight;

    if (( window.innerWidth / window.innerHeight ) < building.ratio) {
        camera = new THREE.OrthographicCamera(0, building.width,
            0, -building.width / windowRatio, CAM_NEAR, CAM_FAR);
    } else {
        camera = new THREE.OrthographicCamera(0, building.height * windowRatio,
            0, -building.height, CAM_NEAR, CAM_FAR);
    }
    updateCamera();
}
function updateCamera() {

    camera.updateProjectionMatrix();
    /*if( camerahelper ) {
     camerahelper.update();
     }*/
}

function initDatGUI() {
    gui = new dat.GUI();
    gui.add(building, 'floor', GUI_FLOORMIN, GUI_FLOORMAX).step(GUI_FLOORSTEP).name('Floor');
    gui.add(building, 'scale', GUI_SCALEMIN, GUI_SCALEMAX).step(GUI_SCALESTEP).name('Scale (1:X)');
    gui.add(building, 'lineType', ['Line', 'Curve', 'Point', 'Clusters', 'Graph']).name('Line type');
    gui.add(building, 'maxRadius', MAXRADIUS_MIN, MAXRADIUS_MAX).step(MAXRADIUS_STEP).name('Radius');
    /*var f1 = gui.addFolder( 'Dev tools' );
     f1.add( this, 'CAM_FAR' ).step( 0.5 ).listen();
     f1.add( this, 'CAM_NEAR' ).step( 0.5 ).listen();*/
}

function initBackgroundFileInput() {
    const buildingFileInput = document.createElement('input');
    buildingFileInput.id = "buildingFileInput";
    buildingFileInput.type = "file";
    buildingFileInput.accept = "image/*";
    buildingFileInput.style.position = "absolute";
    buildingFileInput.style.visibility = "hidden";
    document.body.appendChild(buildingFileInput);

    buildingFileInput.addEventListener('change', function () {

        const file = buildingFileInput.files[0];
        const fileName = buildingFileInput.files[0].name;
        const fileType = /image.*/;

        if (file.type.match(fileType)) {

            building.filePath = fileName.slice(0, -5);
            building.fileExt = fileName.slice(-4, fileName.length);

            deleteAll();
            changeFloors(building.floor, building.path);

        } else {
            alert("File not supported");
        }
    });

    const buildingFile = {
        loadBuildingFile: function () {
            document.getElementById("buildingFileInput").click();
        }
    };
    gui.add(buildingFile, 'loadBuildingFile').name('Load building');
}
function initDataFileInput() {
    const dataFileInput = document.createElement('input');
    dataFileInput.id = "dataFileInput";
    dataFileInput.type = "file";
    dataFileInput.accept = ".csv";
    dataFileInput.multiple = true;
    dataFileInput.style.position = "absolute";
    dataFileInput.style.visibility = "hidden";
    document.body.appendChild(dataFileInput);

    dataFileInput.addEventListener('change', function () {

        const fileCount = dataFileInput.files.length;
        const result = [];
        for (let file = 0; file < fileCount; file++) {
            const reader = new FileReader();
            reader.onload = function () {
                result.push(this.result);
                if (result.length === fileCount) {
                    loadNewTrajectories(result);
                    makeAllTrajectories();
                    addAllTrajectories();
                }
            };
            reader.readAsText(dataFileInput.files[file]);
        }
        this.value = null; //remove filename from input
    });

    const trajectoryFile = {
        loadDataFile: function () {
            document.getElementById("dataFileInput").click();
        }
    };
    gui.add(trajectoryFile, 'loadDataFile').name('Load trajectories');
}


function loadNewBgMesh(buildingName, floor) {
    const buildingPath = BG_DIR + buildingName;
    let backgroundMesh;
    let bgMaterial = new THREE.MeshBasicMaterial();

    const bgLoader = new THREE.TextureLoader();
    bgLoader.load(
        buildingPath,
        function (texture) {
            bgMaterial = new THREE.MeshBasicMaterial({
                map: texture
            });//pixel in meter umrechnen
            building.width = texture.image.naturalWidth * building.scaleFraction;
            building.height = texture.image.naturalHeight * building.scaleFraction;

            //create bgPlane
            const backgroundPlane = new THREE.Geometry();

            backgroundPlane.vertices.push(new THREE.Vector3(0, 0, floor + BG_CORR_Z));
            backgroundPlane.vertices.push(new THREE.Vector3(0, -building.height, floor + BG_CORR_Z));
            backgroundPlane.vertices.push(new THREE.Vector3(building.width, -building.height, floor + BG_CORR_Z));
            backgroundPlane.vertices.push(new THREE.Vector3(building.width, 0, floor + BG_CORR_Z));

            backgroundPlane.faces.push(new THREE.Face3(0, 1, 3));
            backgroundPlane.faces.push(new THREE.Face3(1, 2, 3));//backgroundPlane.computeFaceNormals();
            backgroundPlane.faceVertexUvs[0] = [];
            backgroundPlane.faceVertexUvs[0].push([new THREE.Vector2(0, 1),
                new THREE.Vector2(0, 0),
                new THREE.Vector2(1, 1)
            ]);
            backgroundPlane.faceVertexUvs[0].push([
                new THREE.Vector2(0, 0),
                new THREE.Vector2(1, 0),
                new THREE.Vector2(1, 1)
            ]);
            backgroundPlane.uvsNeedUpdate = true;

            backgroundMesh = new THREE.Mesh(
                backgroundPlane,
                bgMaterial
            );
            backgroundMesh.name = BG_MESH_NAME + building.floor;

            drawing.bgMeshes[floor] = backgroundMesh;
            scene.add(drawing.bgMeshes[floor]);

            loadNewGrid(floor);
            //initRaycaster(); //testing

        },
        function () {
        },
        function () {
            console.log('BG-loading failed');
        }
    );
}
function loadNewGrid(floor) {

    let coordLines;
    const coordGeometry = new THREE.Geometry();

    //x-axis
    for (let x = 0; x < ( building.height ); x += GRID_D) {
        coordGeometry.vertices.push(new THREE.Vector3(0, -x, floor + GRID_CORR_Z));
        coordGeometry.vertices.push(new THREE.Vector3(building.width, -x, floor + GRID_CORR_Z));
    }
    //y-axis
    for (let y = 0; y < ( building.width ); y += GRID_D) {
        coordGeometry.vertices.push(new THREE.Vector3(y, 0, floor + GRID_CORR_Z));
        coordGeometry.vertices.push(new THREE.Vector3(y, -building.height, floor + GRID_CORR_Z));
    }

    const coordMaterial = new THREE.LineBasicMaterial({color: 0x555555, opacity: 1, linewidth: 1});
    coordLines = new THREE.LineSegments(coordGeometry, coordMaterial);
    drawing.grids[floor] = coordLines;
    scene.add(coordLines);
}
function loadNewTrajectories(readerResult) {

    let pointList = [];
    for (let file = 0; file < readerResult.length; file++) {

        const tempList = parseCSV(readerResult[file]);
        tempList.forEach(function (point) {
            pointList.push(point);
        });
    }
    pointList = sortPoints(pointList);

    const pointListByDID = groupPointListByDid(pointList);
    const pointListByDIDByTime = [];

    for (let did1 in pointListByDID) {
        if(pointListByDID.hasOwnProperty(did1)){
            pointListByDIDByTime[did1] = groupPointListByTime(pointListByDID[did1]);
        }
    }

    for ( let did2 in pointListByDIDByTime) {
        for ( let pointGroup in pointListByDIDByTime [did2]) {
            if (pointListByDIDByTime[did2].hasOwnProperty(pointGroup)) {

                const tempTrajectory = new Trajectory(pointListByDIDByTime[did2][pointGroup]);
                /*var tempPrevPoint = null;
                 pointListByDIDByTime[did2][pointGroup].forEach( function( point ){
                 if( tempPrevPoint !== null ){
                 tempPrevPoint.nextPoint = point;
                 }
                 point.prevPoint = tempPrevPoint;
                 tempPrevPoint = point;
                 });*/
                if (tempTrajectory.points.length > 1) {

                    let tempPrevPoint = tempTrajectory.points[0];
                    tempPrevPoint.prevPoint = null;

                    for(let p = 0; p < tempTrajectory.points.length; p++){
                        tempPrevPoint.nextPoint = tempTrajectory.points[p];
                        tempTrajectory.points[p].prevPoint = tempPrevPoint;
                        tempPrevPoint = tempTrajectory.points[p];
                    }
                    data.trajectories.raw.push(tempTrajectory);
                }

                pointListByDIDByTime[did2][pointGroup].forEach( function(point){
                    data.points.push(point);
                });
            }
        }
    }
}

function parseCSV(csvString) {
    const parseResult = Papa.parse(csvString, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        comments: '#',
        //step: true,
        beforeFirstChunk: function (chunk) {
            const rows = chunk.split(/\r\n|\r|\n/);
            rows[0] = CSV_REPL_HEADER;
            return rows.join("\r\n");
        }
    });
    const pointsList = [];
    parseResult.data.forEach(function (point) {
        const p = new Point(point);
        pointsList.push(p);
    });
    return pointsList; // = array of objects */
    //return parseResult.data;
}
/*function corrPoints ( pointList ){
 pointList.forEach(
 function ( point ) {
 point.y = point.y * -1;
 }
 );
 return pointList;
 }*/
function groupPointListByFloor(pointList) {
    return groupBy(
        pointList,
        function (item) {
            return [item.f]; //, item.t
        }
    );
}
function groupPointListByDid(pointList) {
    return groupBy(pointList, function (item) {
            return [item.did]; //, item.t
        }
    );
}
function groupPointListByTime(pointList) {

    const pointListByTime = [];

    let tempTime = pointList[0].t;
    let tempTimeArray = [];

    pointList.forEach(function (point) {
        if (tempTime + TRAJ_CUT_TIME < point.t) {

            pointListByTime.push(tempTimeArray);
            tempTimeArray = [];
            tempTimeArray.push(point);
            tempTime = point.t;
        } else {
            tempTimeArray.push(point);
            tempTime = point.t;

        }
    });
    pointListByTime.push(tempTimeArray);
    /* var pointListByTime = groupBy(
     pointList,
     function( item )  {
     return [item.did]; //, item.t
     }
     );*/
    return pointListByTime;
}
function groupBy(array, f) {

    const groups = {};
    array.forEach(
        function (object) {
            const group =
                JSON.stringify(f(object));
            groups[group] = groups[group] ||
                []; //if groups[group] doesn't exist, [] is assigned
            groups[group].push(object);
        }
    );
    return groups;
    /*return Object.keys( groups ) .map(
     function( group ) {
     return groups[group];
     }
     )*/
}
function sortPoints(pointList) {
    pointList.sort(
        firstBy("did")
            .thenBy("t")
    );
    return pointList;
}


function cluster(trajs) {
    const vertices = [];
    trajs.forEach(function (traj) {
        const points = traj.points;
        //subsampling
        vertices.push(subsamplePoints(points));
    });
    //centroid seed
    const R = seedAndRedistCentroids(vertices);
    R.forEach( function(cluster) {
        data.clusters.centroids.push(cluster.centroid);
        data.clusters.points.push(cluster.members);
    });
}

function subsamplePoints(points) {
    const vertices = [];//R = Radius for subsampling, r = radius remaining for next segment, i = iterator, p0 = first point of traj, //pA and pB are start and end of segment to be subsampled, D = dist between pA and pB, d = remaining distance
    //p = subsampled point, vh = ratio of _________ (?),

    const R = 3;
    let r = R;

    const p0 = new Point({
        did: points[0].did,
        x: points[0].x,
        y: points[0].y,
        f: points[0].f,
        t: points[0].t
    });
    p0.prevPoint = null;
    vertices.push(p0);

    let tempPrevPoint = p0;

    for (let i = 0; i < points.length - 2; i++) {
        if (points.hasOwnProperty(i)) {

            const pA = points[i];
            const pB = points[i + 1];

            const D = getSpatialDistance(pA, pB);
            let d = D;
            while (d > r) {
                const vh = ( r + ( D - d ) ) / D;// t not interpolated!!
                const p = new Point({
                    did: pA.did,
                    x: ( 1 - vh ) * pA.x + vh * pB.x,
                    y: ( 1 - vh ) * pA.y + vh * pB.y,
                    f: pA.f,
                    t: pA.t
                });
                tempPrevPoint.nextPoint = p;
                p.prevPoint = tempPrevPoint;
                tempPrevPoint = p;

                vertices.push(p);

                d -= r;
                r = R;
            }
            r -= d;
        }
    }
    return vertices;
}
function getSpatialDistance(p1, p2) {
    return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
}

function seedAndRedistCentroids(points) {

    const P = points;

    //grid
    const G = {
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0,
        grid: []
    };
    for (let i in P) {
        if(P.hasOwnProperty(i)){
            for (let j in P[i]) {
                if(P[i].hasOwnProperty(j)){
                    const p = P[i][j];
                    if (G.xMin > p.x) G.xMin = p.x;
                    if (G.xMax < p.x) G.xMax = p.x;
                    if (G.yMin > p.y) G.yMin = p.y;
                    if (G.yMax < p.y) G.yMax = p.y;
                }
            }
        }
    }
    for (let x = G.xMin; x <= G.xMax; x += building.maxRadius) {
        const gX = [];
        for (let y = G.yMin; y <= G.yMax; y += building.maxRadius) {

            const gY = [];
            gX.push(gY);
        }
        G.grid.push(gX);
    }

    const R = []; //results

    for (let i in P) {
        if(P.hasOwnProperty(i)){
            for (let j in P[i]) {
                if (P[i].hasOwnProperty(j)) {
                    putInProperGroup(P[i][j], R, G);
                }
            }
        }
    }
    redistributePoints(P, R, G);

    return R; //change to R later
}
function putInProperGroup(p, R, G) {
    const c = getClosestCentroid(p, G);
    let gr = {
        centroid: {},
        members: []
    };
    let gc;

    if (c === null) {

        gr.centroid = new Centroid({
            x: p.x,
            y: p.y,
            f: p.f,
            g: gr
        });
        p.c = gr.centroid;
        gr.members.push(p);
        data.clusters.centroids.push(gr.centroid);

        R.push(gr);
    } else {
        gr = c.g; // g is group with centroid c // indices? centroid array? -------------------------------
        gc = getGridPosition(c, G);

        const index = G.grid[gc.i][gc.j].indexOf(c);
        G.grid[gc.i][gc.j].splice(index, 1);

        gr.centroid = updateCentroid(c, gr.members);
        gr.centroid.g = gr;
        p.c = gr.centroid;
        gr.members.push(p);
    }
    gc = getGridPosition(gr.centroid, G);
    G.grid[gc.i][gc.j].push(gr.centroid);
}
function getClosestCentroid(p, G) {
    const gc = getGridPosition(p, G);
    const C = [];
    for (let k = Math.max(gc.i - 1, 1); k < Math.min(gc.i + 1, G.grid.length); k++) {
        for (let m = Math.max(gc.j - 1, 1); m < Math.min(gc.j + 1, G.grid[gc.i].length); m++) {
            for (let c in G.grid[k][m]) {
                if (G.grid[k][m].hasOwnProperty(c)) {
                    if ((getSpatialDistance(p, G.grid[k][m][c]) <= building.maxRadius )
                        && p.f === G.grid[k][m][c].f) {
                        C.push(G.grid[k][m][c]);
                    }
                }
            }
        }
    }
    if (C.length === 0) {
        return null;
    } else if (C.length === 1) {
        return C[0];
    } else {
        let ck = C[0];

        for (let l in C) {
            if (getSpatialDistance(C[l], p) <= getSpatialDistance(ck, p)) {
                ck = C[l];
            }
        }
        return ck;
    }
}
function getGridPosition(p, G) {
    return {
        i: Math.floor(( p.x - G.xMin ) / building.maxRadius),
        j: Math.floor(( p.y - G.yMin ) / building.maxRadius)
    };
}
function redistributePoints(P, R, G) {
    for (let r in R) {
        if(R.hasOwnProperty(r)){
            R[r].members = [];
        }
    }
    for (let i in P) {
        if(P.hasOwnProperty(i)){
            for (let j in P[i]) {
                if (P[i].hasOwnProperty(j)) {
                    const c = getClosestCentroid(P[i][j], G);
                    if (c !== null) {// FEHLER! WARUM KANN c NULL SEIN? -> Kein centroid in reichweite
                        const gr = c.g;//---------------------------------------------------
                        gr.members.forEach(function (point) {
                            point.c = c;
                            point.g = gr;
                        });
                        gr.members.push(P[i][j]);
                    }
                }
            }
        }
    }
}
function updateCentroid(centroid, points) {

    /*var c = new Centroid({
     x: 0,
     y: 0,
     f: points[0].f,
     g: {}
     });*/

    let sumX = 0;
    let sumY = 0;
    const numPoints = points.length;

    for (let p in points) {
        if(points.hasOwnProperty(p)){
            sumX += points[p].x;
            sumY += points[p].y;
        }
    }

    if (numPoints > 0) {
        centroid.x = sumX / numPoints;
        centroid.y = sumY / numPoints;
        return centroid;
    } else {
        return null;
    }
}
function connectTheDots1() {

    const matri = [];
    for (let i = 0; i < data.clusters.centroids.length; i++) {
        const matriX = [];
        for (let j = 0; j < data.clusters.centroids.length; j++) {
            const matriY = 0;
            matriX.push(matriY);
        }
        matri.push(matriX);
    }

    for (let m = 0; m < data.clusters.centroids.length; m++) {
        for (let n in data.clusters.centroids[m].g.members) {
            const point = data.clusters.centroids[m].g.members[n];
            if (point.nextPoint !== null) {
                if (point.c !== point.nextPoint.c) {


                }
            }
        }
    }

    let log = '';
    for (let k = 0; k < data.clusters.centroids.length; k++) {

        for (let l = 0; l < data.clusters.centroids.length; l++) {

            log += data.clusters.centroids[k][l];
        }
        log += '\n';
    }
    console.log(log);
}
function connectTheDots( centroids ) {
    centroids.forEach(function (centroid) {

        centroid.prevCents = new Set();
        centroid.nextCents = new Set();

        //compare centroid floors

        centroid.g.members.forEach(function (point) {
            if ((point.prevPoint !== null) && (point.prevPoint.c !== null)){
                if((point.prevPoint.c !== point.c) && (point.prevPoint.c.f === point.c.f)) {
                    centroid.prevCents.add(point.prevPoint.c);
                }
            }
            if ((point.nextPoint !== null) && (point.nextPoint.c !== null)){
                if((point.nextPoint.c !== point.c) && (point.nextPoint.c.f === point.c.f)) {
                    centroid.nextCents.add(point.nextPoint.c);
                }
            }
        });
    });

    centroids.forEach(function (centroid) {
        centroid.nextCents.forEach(function (nextCentroid) {
            data.graph.edges.push({
                start: centroid,
                end: nextCentroid
            });
        });
    });
    /*for( var m = 0; m < centroidList.length; m++ ) {
     for (var n in centroidList[m].g.members) {
     var point = centroidList[m].g.members[n];

     var lineGeom = new THREE.Geometry();

     if (point.nextPoint !== null) {
     if (point.c !== point.nextPoint.c) {
     var pA = centroidList[m].g.members[n];
     lineGeom.vertices.push(new THREE.Vector3())

     }
     }
     }
     }


     for( var i = 0; i < centroidList.length; i++ ){

     var pA = centroidList[m].g.members[n];
     //lineGeom.vertices.push( new THREE.Vector3())

     }

     var lines = new THREE.LineSegments();*/
}


function makeAllTrajectories() {

    if (building.lineType === 'Line') {
        data.trajectories.raw.forEach(function (traj) {
            const tempTrajGeom = makeLineGeom(traj.points);
            drawing.trajectories.raw.push(makeLine(tempTrajGeom, traj.color));
        });
    } else if (building.lineType === 'Curve') {
        data.trajectories.raw.forEach(function (traj) {
            const tempTrajGeom = makeCurveGeom(traj.points);
            drawing.trajectories.raw.push(makeLine(tempTrajGeom, traj.color));
        });
    } else if (building.lineType === 'Point') {
        const tempTrajGeom = makePointGeom(data.points);
        drawing.points.push(makeDots(tempTrajGeom, TRAJ_COLOR, TRAJ_DOT_SIZE));
    } else if (building.lineType === 'Clusters') {
        cluster(data.trajectories.raw);
        const drawStuff = makeClusteredGeom(data.clusters);
        drawStuff.cents.forEach(function (centGeom) {
            drawing.clusters.centroids.push(centGeom);
        });
        drawStuff.points.forEach(function (pointGeom) {
            drawing.clusters.points.push(pointGeom);
        });
    } else if (building.lineType === 'Graph') {
        cluster(data.trajectories.raw);
        connectTheDots(data.clusters.centroids);
        const drawGraphStuff = makeGraphGeom(data.clusters, data.graph);
        drawGraphStuff.cents.forEach(function (centGeom) {
            drawing.clusters.centroids.push(centGeom);
        });
        drawGraphStuff.edges.forEach(function (edgeGeom) {
            drawing.graph.edges.push(edgeGeom);
        });
    }
}

function makeLineGeom(points) {
    const vertices = [];
    points.forEach(function (point) {
            vertices.push(new THREE.Vector3(point.x, point.y * -1, point.f));
        }
    );

    const lineGeom = new THREE.Geometry();
    lineGeom.name = points[0].did;
    lineGeom.vertices = vertices;

    return lineGeom;
}
function makeCurveGeom(points) {
    const vertices = [];
    points.forEach(
        function (point) {
            vertices.push(new THREE.Vector3(point.x, point.y * -1, point.f));
        }
    );
    const curve = new THREE.CatmullRomCurve3(vertices);
    const curveGeom = new THREE.Geometry();
    curveGeom.name = points[0].did;
    curveGeom.vertices = curve.getPoints(50);

    return curveGeom;
}
function makePointGeom(points) {
    const vertices = [];
    points.forEach(function (point) {
            vertices.push(new THREE.Vector3(point.x, point.y * -1, point.f));
        }
    );
    const pointsGeom = new THREE.Geometry();
    pointsGeom.name = points[0].did;
    pointsGeom.vertices = vertices;

    return pointsGeom;
}
function makeClusteredGeom(clusters) {

    const centGeoms = [];
    const pointGeoms = [];

    for (let c in clusters.centroids) {

        const centGeom = new THREE.Geometry();
        const cent = clusters.centroids[c];
        centGeom.name = cent.did;
        centGeom.vertices.push(new THREE.Vector3(cent.x, cent.y * -1, cent.f));
        centGeoms.push(centGeom);

        const pointGeom = new THREE.Geometry();
        for (let p in clusters.centroids[c].g.members) {
            const point = clusters.centroids[c].g.members[p];
            pointGeom.name = point.did;
            pointGeom.vertices.push(new THREE.Vector3(point.x, point.y * -1, point.f));
        }
        pointGeoms.push(pointGeom);
    }
    const centDots = [];
    const pointDots = [];
    for (let g in centGeoms) {
        const randColor = Math.random() * 0xffffff;
        centDots.push(makeDots(centGeoms[g], randColor, CENT_DOT_SIZE));
        pointDots.push(makeDots(pointGeoms[g], randColor, TRAJ_DOT_SIZE));
    }

    return {
        cents: centDots,
        points: pointDots
    };
}
function makeGraphGeom(clusters, graph) {

    const centGeoms = [];
    const edgeGeoms = [];

    for(let c in clusters.centroids) {
        const centGeom = new THREE.Geometry();
        const cent = clusters.centroids[c];
        centGeom.name = cent.did;
        centGeom.vertices.push(new THREE.Vector3(cent.x, cent.y * -1, cent.f));
        centGeoms.push(centGeom);
    }

    for(let e in graph.edges){
        const edgeGeom = new THREE.Geometry();
        const edge = graph.edges[e];
        edgeGeom.vertices.push(new THREE.Vector3(edge.start.x, edge.start.y * -1, edge.start.f));
        edgeGeom.vertices.push(new THREE.Vector3(edge.end.x, edge.end.y * -1, edge.end.f));
        edgeGeoms.push(edgeGeom);
    }

    //edges zeichnen
    const centDots = [];
    const edgeLines = [];
    for(let cg in centGeoms) {
        const randColor = Math.random() * 0xffffff;
        centDots.push(makeDots(centGeoms[cg], randColor, CENT_DOT_SIZE));//edgeLines.push( makeLine( edgeGeoms[g], 0x000000 ) );
    }
    for(let eg in edgeGeoms) {
        const mat = new THREE.LineBasicMaterial({color: 0x000000, opacity: 1});
        edgeLines.push(new THREE.LineSegments(edgeGeoms[eg], mat));
    }

    return {
        cents: centDots,
        edges: edgeLines
    };
}

function makeLine(geom, color) {
    const mat = new THREE.LineBasicMaterial({color: color, opacity: 1});
    return new THREE.Line(geom, mat);
}
function makeDots(geom, color, pointSize) {
    const mat = new THREE.PointsMaterial({color: color, opacity: 1, size: pointSize, sizeAttenuation: false});
    return new THREE.Points(geom, mat);
}


function addAllTrajectories() { //abgesehen von clusters
    if ((building.lineType === 'Line') || (building.lineType === 'Curve')) {
        drawing.trajectories.raw.forEach(function (traj) {
            scene.add(traj);
        });
    } else if(building.lineType === 'Point'){
        drawing.points.forEach(function (point){
            scene.add(point);
        });
    } else if (building.lineType === 'Clusters') {
        drawing.clusters.centroids.forEach(function (cent) {
            scene.add(cent);
        });
        drawing.clusters.points.forEach(function (point) {
            scene.add(point);
        });
    } else if (building.lineType === ('Graph' )) {
        drawing.clusters.centroids.forEach(function (cent) {
            scene.add(cent);
        });
        drawing.graph.edges.forEach(function (edge) {
            scene.add(edge);
        });
    }
}

function removeAllBgMeshes() {
    for (let bgMesh in drawing.bgMeshes) {
        if (drawing.bgMeshes.hasOwnProperty(bgMesh)) {
            scene.remove(drawing.bgMeshes[bgMesh]);
        }
    }
}
function deleteAllBgMeshes() {
    removeAllBgMeshes();
    drawing.bgMeshes = {};
}
function removeAllGrids() {
    for (let grid in drawing.grids) {
        if (drawing.grids.hasOwnProperty(grid)) {
            scene.remove(drawing.grids[grid]);
        }
    }
}
function deleteAllGrids() {
    removeAllGrids();
    drawing.grids = {};
}
function removeAllTrajectories() {
    for (let p in drawing.points) {
        scene.remove(drawing.points[p]);
    }
    drawing.points = [];

    for (let t in drawing.trajectories.raw) {
        scene.remove(drawing.trajectories.raw[t]);
    }
    drawing.trajectories.raw = [];

    for (let c in drawing.clusters.centroids) {
        scene.remove(drawing.clusters.centroids[c]);
    }
    drawing.clusters.centroids = [];

    for (let p in drawing.clusters.points) {
        scene.remove(drawing.clusters.points[p]);
    }
    drawing.clusters.points = [];

    for (let e in drawing.graph.edges) {
        scene.remove(drawing.graph.edges[e]);
    }
}
function deleteAllTrajectories() {
    removeAllTrajectories();
    data.points = [];
    drawing.points = [];
    data.trajectories = {
        raw: [],
        subsa: []
    };
    drawing.trajectories = {
        raw: [],
        subsa: []
    };
    drawing.clusters = {
        centroids: [],
        points: []
    };
    data.clusters = {
        centroids: [],
        points: []
    };
    data.graph = {
        edges: []
    };
}
/* function removeAll(){
 removeAllBgMeshes();
 removeAllGrids();
 removeAllTrajectories();
 }*/
function deleteAll() {
    deleteAllBgMeshes();
    deleteAllGrids();
    deleteAllTrajectories();
}

function changeFloors(floor, path) {
    console.log(floor);
    CAM_NEAR = ( floor + GRID_CORR_Z ) * -1;

    if (drawing.bgMeshes[floor] instanceof THREE.Mesh) {
        configCamera();
    } else {
        loadNewBgMesh(path, floor); //also invokes loadGrid()
    }
}
function changeScale() {
    deleteAllBgMeshes();
    deleteAllGrids();
    loadNewBgMesh(building.path, building.floor); //also invokes loadNewGrid();
    addAllTrajectories();
}
function changeLineType() {
    removeAllTrajectories();
    makeAllTrajectories();
    addAllTrajectories();
}
function changeClusterRadius() {
    removeAllTrajectories();
    data.clusters = {
        centroids: [],
        points: []
    };
    drawing.clusters = {
        centroids: [],
        points: []
    };
    data.graph = {
        edges: []
    };
    drawing.graph = {
        edges: []
    };
    makeAllTrajectories();
    addAllTrajectories();
}

function addWindowListeners() {
    window.addEventListener('resize',
        onWindowResize, false);
}
function onWindowResize() {
    configCamera();

    updateRenderer();
}
function initRaycaster() {
    raycaster = new THREE.Raycaster();
    raycaster.near = CAM_NEAR;
    raycaster.far = CAM_FAR;
    mouse = new THREE.Vector2();

    window.addEventListener('click', onMouseClick, false);
}
function onMouseClick(event){
    mouse.x = (event.clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight)  * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    let intersects = [];
    scene.children.forEach(function (ch){
        intersects.push(raycaster.intersectObject(ch, false))
    });

    //let bg = scene.getObjectByName(BG_MESH_NAME + building.floor);

    // calculate objects intersecting the picking ray
    //let intersects = raycaster.intersectObject(bg, true);

    if(intersects.length > 0){
        intersects.forEach(function(intersect){
            let candidates = [];
            if(intersect.length > 0){
                if(intersect[0].object.type === 'LineSegkments'){
                    intersect[0].object.material.color.set( 0x00ff00 );
                } else if(intersect[0].object.type === 'Mesh'){
                    console.log('x:' + intersect[0].point.x + ' ' +
                        'y:' + intersect[0].point.y + ' ' +
                        'z:' + intersect[0].point.z);
                }
            }
        });
    }
}
function update() {
    requestAnimationFrame(update);

    renderer.render(scene, camera);
}
