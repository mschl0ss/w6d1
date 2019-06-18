const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

const Asteroid = function (pos){
  MovingObject.call(this, pos, Util.randomVec(length), this.RADIUS, this.COLOR);
};

Asteroid.prototype.COLOR = "#73210E";
Asteroid.prototype.RADIUS = 500;
