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

