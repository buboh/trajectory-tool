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
 building.trajectoryFloorGroups[tempTrajectory.floor2] = trajectoryFloorGroup;
 }
 }*/


//var fileType = /text.*/;
//if ( file.type.match( fileType ) ){

/*} else {
 alert("File not supported");
 }*/
