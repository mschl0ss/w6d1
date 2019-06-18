const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

const COLOR = "#73210E";
const RADIUS = 50;

const Asteroid = function (pos){
  MovingObject.call(this, pos, Util.randomVec(length), RADIUS, COLOR);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;