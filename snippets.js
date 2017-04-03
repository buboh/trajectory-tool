/**
 * Created by Moritz on 02.03.2017.
 */

var xAxis1 = new THREE.Vector3(0, 0, 0);
var xAxis2 = new THREE.Vector3(500, 0, 0);
//y-axis
var yAxis1 = new THREE.Vector3(0, 0, 0);
var yAxis2 = new THREE.Vector3(0, -500, 0);

var coordSys = new THREE.Geometry();
coordSys.vertices.push(xAxis1, xAxis2, yAxis1, yAxis2);



//top view
/*camera.rotation.x = 0;
 camera.rotation.y = 0;
 camera.rotation.z = 0;
 */

/*  for ( var i = - gridSize; i <= gridSize; i += gridStep ) {
 coordSys.vertices.push( new THREE.Vector3( - gridSize, 0, i ) );
 coordSys.vertices.push( new THREE.Vector3(   gridSize, 0, i ) );
 coordSys.vertices.push( new THREE.Vector3( i, 0, - gridSize ) );
 coordSys.vertices.push( new THREE.Vector3( i, 0,   gridSize ) );
 }*/

/* var csvFile = new File();
 csvFile.
 //var url = new URL("as");

 //Papa.parse()
 */


bgImg = new Image();
bgImg.src = 'img/indoors-office.png';
bgRatio = bgImg.naturalWidth / bgImg.naturalHeight;
bgImg.width = WIDTH;
bgImg.height = WIDTH / bgRatio;
background.appendChild(bgImg);


function splitPoints( pointList ) {

    var tempDID, tempFloor, tempTime;
    var newPointList;

    pointList.forEach( function( point )  {

        var tempDidArray = [];
        var tempFloorArray = [];
        var tempTimeArray = [];

        if( tempDID != point.did ) {

            tempFloorArray.push( tempDidArray ) ;
            tempFloorArray = [];

            if( tempFloor != point.f ) {

                tempTimeArray.push( tempTimeArray ) ;
                tempTimeArray = [];

                if( tempTime + CUT_TIME < point.t ) {

                    tempFloorArray.push( tempTimeArray ) ;
                    tempTimeArray = [];
                    tempTimeArray.push( point ) ;

                } else {

                    tempTimeArray.push( point ) ;

                }

            } else {

                if( tempFloor != point.f ) {

                    tempTimeArray.push( tempTimeArray ) ;
                    tempTimeArray = [];

                    if( tempTime + CUT_TIME < point.t ) {

                        tempFloorArray.push( tempTimeArray ) ;
                        tempTimeArray = [];
                        tempTimeArray.push( point ) ;

                    } else {

                        tempTimeArray.push( point ) ;

                    }
                }
            }
        } else {

            tempFloorArray.push( tempDidArray ) ;
            tempFloorArray = [];

            if( tempFloor != point.f ) {

                tempTimeArray.push( tempTimeArray ) ;
                tempTimeArray = [];

                if( tempTime + CUT_TIME < point.t ) {

                    tempFloorArray.push( tempTimeArray ) ;
                    tempTimeArray = [];
                    tempTimeArray.push( point ) ;

                } else {

                    tempTimeArray.push( point ) ;

                }
            } else {

                if( tempFloor != point.f ) {

                    tempTimeArray.push( tempTimeArray ) ;
                    tempTimeArray = [];

                    if( tempTime + CUT_TIME < point.t ) {

                        tempFloorArray.push( tempTimeArray ) ;
                        tempTimeArray = [];
                        tempTimeArray.push( point ) ;

                    } else {

                        tempTimeArray.push( point ) ;

                    }
                }
            }
        }

        newPointList = tempDidArray;

        return newPointList;

    });
}

//console.log( results ) ;

/*var pointList = [];
 results.data.forEach( function ( o ){
 pointList.push( o );
 })*/

//not implemented yet

/*var pointList = [
 {x: 0, y: 500, t: 0, f: 1, id: "10"},
 {x: 10, y: 490, t: 10, f: 1, id: "10"},
 {x: 20, y: 500, t: 20, f: 1, id: "10"},
 {x: 30, y: 470, t: 30, f: 1, id: "10"},
 {x: 40, y: 460, t: 40, f: 1, id: "20"},
 {x: 50, y: 450, t: 50, f: 1, id: "20"},
 {x: 60, y: 440, t: 60, f: 1, id: "30"},
 {x: 70, y: 430, t: 70, f: 1, id: "30"},
 {x: 80, y: 420, t: 80, f: 1, id: "30"},
 {x: 90, y: 410, t: 90, f: 1, id: "30"},
 {x: 100, y: 400, t: 100, f: 1, id: "40"},
 {x: Math.random() * iW, y: Math.random() * iH, t: 0, id: "40"},
 {x: Math.random() * iW, y: Math.random() * iH, t: 0, id: "50"},
 {x: Math.random() * iW, y: Math.random() * iH, t: 0, id: "50"},
 {x: Math.random() * iW, y: Math.random() * iH, t: 0, id: "50"},
 {x: Math.random() * iW, y: Math.random() * iH, t: 0, id: "50"}
 ];*/

/*if((WINDOW_WIDTH / WINDOW_HEIGHT) < buildingRatio ) {
 camera = new THREE.OrthographicCamera( buildingWidth / -2, buildingWidth / 2,
 ( buildingWidth / 2) / ratio, ( buildingWidth / -2) / ratio, -500, 1000);
 } else {
 camera = new THREE.OrthographicCamera(( buildingHeight / -2) * ratio, ( buildingHeight / 2) * ratio,
 ( buildingHeight / 2), ( buildingHeight / -2), -500, 1000);
 }*/


//DISPOSING OF REMOVED MESH OBJECTS
/* var hi = scene.getObjectByName('backgroundMesh');
 if( scene.getObjectByName('backgroundMesh') instanceof THREE.Mesh ) {
 deleteObject( scene.getObjectByName('backgroundMesh'));
 }*/

//SHOULD remove mesh objects, geoms, mats and textures
/*    function deleteObject( sceneObject ) {

 scene.remove( sceneObject ) ;

 sceneObject.geometry.dispose();
 sceneObject.material.map.dispose();
 sceneObject.material.dispose();
 }
 */

/*for ( var floor2 in corredPointListByDIDByFloor ) {
 if ( corredPointListByDIDByFloor.hasOwnProperty( floor2 ) ){
 var trajectoryFloorGroup = [];

 for ( var pointGroup in corredPointListByDIDByFloor[floor2]){
 if ( corredPointListByDIDByFloor[floor2].hasOwnProperty( pointGroup ) ){
 var tempTrajectory = new Trajectory();
 tempTrajectory.did1 = pointGroup;
 tempTrajectory.floor2 = corredPointListByDIDByFloor[floor2][pointGroup][0].f;
 tempTrajectory.points = corredPointListByDIDByFloor[floor2][pointGroup];
 trajectoryFloorGroup.push( tempTrajectory ) ;
 }
 }
 building.trajectories[tempTrajectory.floor2] = trajectoryFloorGroup;
 }
 }*/


//var fileType = /text.*/;
//if ( file.type.match( fileType ) ){

/*} else {
 alert("File not supported");
 }*/


/*for( var x = xMin; x <= xMax; x += maxRadius ){

 var u = { x1: x, y1: yMin, x2: x, y2: yMax };
 G.push( u );
 }
 for( var y = yMin; y <= yMax; y += maxRadius ){

 var v = { x1: xMin, y1: y, x2: xMax, y: y };
 G.push( v );
 }*/

/*const mat2 = new THREE.MeshLineMaterial();
 mat2.color = 0x00ff00;
 mat2.lineWidth = 5.0;
 mat2.resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
 mat2.sizeAttenuation = false;
 mat2.near = CAM_NEAR;
 mat2.far = CAM_FAR;

 let line = new THREE.MeshLine();
 line.setGeometry(edgeGeoms[eg]);

 let mesh = new THREE.Mesh(line.geometry, mat2);
 edgeLines.push(mesh);*/

function hash(str) {
    let hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

/* const centVect = centGeoms[g].vertices[0];
 const rainbowColor = new THREE.Color(
 (1 / bd.width) * centVect.x, //r
 (1 / bd.height) * -centVect.y, //g
 (1 / Math.abs(threePar.cam.near - threePar.cam.far)) * (centVect.z + 100) //b
 );*/


//cam test-----------------------------------------------------------------

renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xFFFFFF);
renderer.setSize(window.innerWidth, window.innerHeight);

$("#webgl-div").append(renderer.domElement);

scene = new THREE.Scene();

var ZCORR = 0;
var CCORR = 100;
var camNearCorr = -0.1;
var camFarCorr = 0.1;
var bgCorr = -0.1;
var gdCorr = 0.1;
var floor = 1;

camera = new THREE.OrthographicCamera(
    window.innerWidth / -2, // frustum left plane
    window.innerWidth / 2, // frustum right plane.
    window.innerHeight / 2, // frustum top plane.
    window.innerHeight / -2, // frustum bottom plane.
    (-floor - gdCorr + camNearCorr) + CCORR , // frustum near plane.
    (-floor - bgCorr + camFarCorr) + CCORR// frustum far plane.
);

camera.position.z = 100;
camera.lookAt(new THREE.Vector3(0,0,0));
camera.updateProjectionMatrix();

//------------------------------------------------------

// far: black plane
var geometry = new THREE.PlaneGeometry(300, 300);
var material = new THREE.MeshBasicMaterial({
    color: 0x000000
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = -camera.far;
console.log(plane.position.z);
scene.add(plane);

//------------------------------------------------------

// -1 red: bg
var geometry = new THREE.PlaneGeometry(210, 210);
var material = new THREE.MeshBasicMaterial({
    color: 0x770000
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (-1 + bgCorr);
console.log(plane.position.z);
scene.add(plane);
// -1 red: traj
var geometry = new THREE.PlaneGeometry(200, 200);
var material = new THREE.MeshBasicMaterial({
    color: 0x880000
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (-1);
console.log(plane.position.z);
scene.add(plane);
// -1 red: grid
var geometry = new THREE.PlaneGeometry(190, 190);
var material = new THREE.MeshBasicMaterial({
    color: 0x990000
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (-1 + gdCorr);
console.log(plane.position.z);
scene.add(plane);

//------------------------------------------------------

// 0 green: bg
var geometry = new THREE.PlaneGeometry(160, 160);
var material = new THREE.MeshBasicMaterial({
    color: 0x007700
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (0 + bgCorr);
console.log(plane.position.z);
scene.add(plane);
// 0 green: traj
var geometry = new THREE.PlaneGeometry(150, 150);
var material = new THREE.MeshBasicMaterial({
    color: 0x008800
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (0);
console.log(plane.position.z);
scene.add(plane);
// 0 green: grid
var geometry = new THREE.PlaneGeometry(140, 140);
var material = new THREE.MeshBasicMaterial({
    color: 0x009900
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (0 + gdCorr);
console.log(plane.position.z);
scene.add(plane);

//----------------------------------------------------

// 1 blue: bg
var geometry = new THREE.PlaneGeometry(110, 110);
var material = new THREE.MeshBasicMaterial({
    color: 0x000077
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (1 + bgCorr);
console.log(plane.position.z);
scene.add(plane);
// 1 blue: traj
var geometry = new THREE.PlaneGeometry(100, 100);
var material = new THREE.MeshBasicMaterial({
    color: 0x000088
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (1);
console.log(plane.position.z);
scene.add(plane);
// 1 blue: grid
var geometry = new THREE.PlaneGeometry(90, 90);
var material = new THREE.MeshBasicMaterial({
    color: 0x000099
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = (1 + gdCorr);
console.log(plane.position.z);
scene.add(plane);

//------------------------------------------------------

// near: grey plane
var geometry = new THREE.PlaneGeometry(10, 10);
var material = new THREE.MeshBasicMaterial({
    color: 0x555555
});
var plane = new THREE.Mesh(geometry, material);
plane.position.z = -camera.near;
console.log(plane.position.z);
scene.add(plane);


camera.lookAt(scene.position);
renderer.render(scene, camera);

