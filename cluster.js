/**
 * Created by Moritz on 28.04.2017.
 */

addEventListener('message', function(e) {
    let traj = e.data[0];
    this.postMessage('Done' + data.clts.val.length);
    close();
});

function cluster(vertices) {
    /*const vertices = [];

    flags.clustering.subsaPoints = 0;

    trajs.forEach(function(traj) {
        traj.subsaPoints = subsamplePoints(traj);
        vertices.push(traj.subsaPoints);
    });

    console.log("subsaP: " + flags.clustering.subsaPoints);*/

    //centroid seed
    const P = vertices; //Points
    const G = generateGrid(P); //Grid
    const R = seedCentroids(P, G); //Results

    flags.clustering.redistChange = true;
    let i = 0;
    while((i < bd.redist) && flags.clustering.redistChange) {
        redistributePoints(P, R, G);
        recalculateCentroids(R, G);
        //console.log(i);
        i++;
    }
    let ml = 0;
    R.forEach(function(cluster) {
        if(ml < cluster.members.length) ml = cluster.members.length;
    });

    R.forEach(function(cluster) {
        //cluster.color = Math.random() * par.ct.color + par.ct.corrColor;
        const scale = chroma.scale(par.cl.colorScaleType).domain([0,ml]);
        cluster.color = scale(cluster.members.length).darken(par.cl.colorDarkenFactor).hex();
        data.clts.val.push(cluster); //ToDo
    });
    data.clts.valid = true;
}

function subsamplePoints(traj) {
    const vertices = [];//R = Radius for subsampling, r = radius remaining for next segment, i = iterator, p0 = first point of traj, //pA and pB are start and end of segment to be subsampled, D = dist between pA and pB, d = remaining distance
    //p = subsampled point, vh = ratio of _________ (?),
    const points = traj.rawPoints;

    const R = par.subsaRadius;
    let r = R;

    const p0 = new Point({
        did: points[0].did,
        x: points[0].x,
        y: points[0].y,
        f: points[0].f,
        t: points[0].t,
        traj: traj,
        ID: flags.clustering.subsaPoints,
    });
    flags.clustering.subsaPoints++;

    //data.subsaPnts.push(p0); //testing

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
                const vh = ( r + ( D - d ) ) / D;// t not interpolated!! f not interpolated
                const p = new Point({
                    did: pA.did,
                    x: (1 - vh) * pA.x + vh * pB.x,
                    y: (1 - vh) * pA.y + vh * pB.y,
                    f: pA.f,
                    t: pA.t,
                    traj: traj,
                    ID: flags.clustering.subsaPoints,
                });
                flags.clustering.subsaPoints++;


                //data.subsaPnts.push(p); //testing

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
function generateGrid(points) {

    const P = points;
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
    for (let x = G.xMin; x <= G.xMax; x += bd.maxRadius) {
        const gX = [];
        for (let y = G.yMin; y <= G.yMax; y += bd.maxRadius) {
            const gY = [];
            gX.push(gY);
        }
        G.grid.push(gX);
    }
    return G;
}
function seedCentroids(points, G) {
    const P = points;
    const R = []; //results

    P.forEach(function(t) {
        t.forEach(function(p) {
            putInProperGroup(p, R, G);
        });
    });
    return R;
}
function redistributePoints(P, R, G) {
    const originList = {};
    flags.clustering.redistChange = false;

    //--Remember number of members of each group, them remove members from group
    let r = 0;
    while(r < R.length) {
        if(R.hasOwnProperty(r)){
            originList[r] = R[r].members.length;
            //R[r].members = [];
            R[r].clearMembers();
        }
        r++;
    }
    data.errors.val = [];
    data.errors.valid = false;

    let cnt = 0;

    //--Assign every Point to a group
    P.forEach(function(t) {
        t.forEach(function(p) {

            let cent = getClosestCentroid(p, G);
            if (cent !== null) {// FEHLER! WARUM KANN c NULL SEIN? -> Kein centroid in reichweite

                cent.cluster.addMember(p);

            } else {

                data.errors.val.push(p); //ToDo
                cnt++;
            }
        });
    });

    console.log('redistPoints: No Centroid found in ' + cnt + ' cases!');

    //test for changes
    r = 0;
    while(r < R.length) {
        if(R.hasOwnProperty(r)){
            if(originList[r] !== R[r].members.length) {
                flags.clustering.redistChange = true;
            }
        }
        r++;
    }
    data.errors.valid = true;
}
function recalculateCentroids(R, G) {

    //console.log('start' + R.length);

    const tempR = R;
    R = [];

    let cnt = 0;

    for(let r = 0; r < tempR.length; r++) {
        if(tempR.hasOwnProperty(r)){
            let clus = tempR[r];
            const cent = clus.centroid;
            let gc = getGridPosition(cent, G);

            const index = G.grid[gc.i][gc.j].indexOf(cent);
            G.grid[gc.i][gc.j].splice(index, 1);

            if(clus.members.length !== 0) {

                clus.updateCentroid();

                gc = getGridPosition(clus.centroid, G);
                G.grid[gc.i][gc.j].push(clus.centroid);

                R.push(clus);

            } else {
                let k = 0;
            }
        }
    }
    //console.log('end ' + R.length + ', Number of merged centroids: ' + cnt);
}

function putInProperGroup(p, R, G) {
    const cent = getClosestCentroid(p, G);
    let clus = new Cluster();
    let gc;

    if (cent === null) {
        clus.centroid = new Centroid(p);
        clus.addMember(p);

        R.push(clus);
    } else {
        clus = cent.cluster; // g is group with centroid cent // indices? centroid array? -------------------------------

        gc = getGridPosition(cent, G);

        const index = G.grid[gc.i][gc.j].indexOf(cent);
        G.grid[gc.i][gc.j].splice(index, 1);

        clus.updateCentroid();
        clus.addMember(p);
    }
    gc = getGridPosition(clus.centroid, G);
    G.grid[gc.i][gc.j].push(clus.centroid);
}
function getClosestCentroid(p, G) {

    const gc = getGridPosition(p, G);
    const C = [];
    const range = 1;


    for(let k = Math.max(gc.i - range, 1);
        k < Math.min(gc.i + range, G.grid.length);
        k++) {

        for(let m = Math.max(gc.j - range, 1);
            m < Math.min(gc.j + range, G.grid[gc.i].length);
            m++) {

            for(let c in G.grid[k][m]) {
                if(G.grid[k][m].hasOwnProperty(c)) {
                    if(((getSpatialDistance(p, G.grid[k][m][c])) <= bd.maxRadius) && (p.f === G.grid[k][m][c].f)) {
                        C.push(G.grid[k][m][c]);
                    }
                }
            }
        }
    }

    if(C.length === 0) {
        return null;
    } else if(C.length === 1) {
        return C[0];
    } else {
        let ck = C[0];
        C.forEach(function(c) {
            if (getSpatialDistance(c, p) <= getSpatialDistance(ck, p)) {
                ck = c;
            }
        });
        return ck;
    }
}
function getGridPosition(p, G) {
    return {
        i: Math.floor(( p.x - G.xMin ) / bd.maxRadius),
        j: Math.floor(( p.y - G.yMin ) / bd.maxRadius)
    };
}
function getSpatialDistance(p1, p2) {
    return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
}
