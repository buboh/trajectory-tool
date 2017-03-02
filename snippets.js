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