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



function createLine(geom, color, opa, trans, vColors, shad, userData={}) {
    const mat = new THREE.LineBasicMaterial(
        {
            color: color,
            opacity: opa,
            transparent: trans,
            vertexColors: vColors,
            shading: shad
        }
    );
    const line = new THREE.Line(geom, mat);
    line.userData = userData;
    return line;
} //three.js
function createCircle(geom, color, opa, trans, userData={}) {
    const mat = new THREE.MeshBasicMaterial(
        {
            color: color,
            opacity: opa,
            transparent: trans
        }
    );
    const circle = new THREE.Mesh(geom, mat);
    circle.userData = userData;
    return circle;
}