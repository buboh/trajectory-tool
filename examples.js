/**
 * Created by Moritz on 08.05.2017.
 */

let data = {
    f: 0,
    get floor() { return this.f },
    set floor(val) {
        this.f = val;
        this.floorListener();
    },
    floorListener: function() {
        alert('Floor changed!');
        //react to floor change
    }
};

const gui = new dat.GUI();
gui.add(data, 'floor', -10, 10).step(1).name('Floor:');

let vector_a = new THREE.Vector3(0,0,0);
let vector_b = new THREE.Vector3(0,0,0);

let geom = new THREE.Geometry();
geom.vertices.push(vector_a, vector_b);

let mat = new THREE.LineBasicMaterial({color: 0x000000});
let line = new THREE.Line(geom, material);

let scene = new THREE.Scene();
scene.add(line);

let renderer = new THREE.WebGLRenderer();
renderer.render(scene, camera);

function doBefore(chunk) {
    const rows = chunk.split(/\r\n|\r|\n/);
    rows[0] = par.csv.header;
    return rows.join("\r\n");
}

function parseCSV(csvString) {
    const parseResult = Papa.parse(csvString, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        comments: '#',
        //step: true,
        beforeFirstChunk: doBefore,
    });
    return parseResult.data;
}

result = {
    name: 'John',
    age: 24,
    gender: 'male'
};

for(let i in P) {
    for(let j in P[i]) {
        const p = P[i][j];
        if (G.xMin > p.x) G.xMin = p.x;
        if (G.xMax < p.x) G.xMax = p.x;
        if (G.yMin > p.y) G.yMin = p.y;
        if (G.yMax < p.y) G.yMax = p.y;
    }
}

function recalculateCentroids(R, G) {

    const tempR = R;
    R = [];

    for(let r = 0; r < tempR.length; r++) {

        let clus = tempR[r];
        const cent = clus.centroid;
        let gc = getGridPosition(cent, G);

        const ix = G.grid[gc.i][gc.j].indexOf(cent);
        G.grid[gc.i][gc.j].splice(ix, 1);

        if(clus.members.length !== 0) {

            clus.updateCentroid();

            gc = getGridPosition(clus.centroid, G);
            G.grid[gc.i][gc.j].push(clus.centroid);

            R.push(clus);
        }
    }
}

function getClosestCentroid(p, G) {

    const gc = getGridPosition(p, G);
    const C = [];

    for(let k = Math.max(gc.i - 1, 1);
        k < Math.min(gc.i + 1, G.grid.length);
        k++) {

        for(let m = Math.max(gc.j - 1, 1);
            m < Math.min(gc.j + 1, G.grid[gc.i].length);
            m++) {

            for(let c in G.grid[k][m]) {

                const td = getEuclidianDistance(p, G.grid[k][m][c]);

                if((td <= bd.maxRadius) && (p.f === G.grid[k][m][c].f)) {
                    C.push(G.grid[k][m][c]);
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
        C.customForEach(function(c) {
            if (getEuclidianDistance(c, p) <= getEuclidianDistance(ck, p)) {
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