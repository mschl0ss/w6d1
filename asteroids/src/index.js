// const Util = require ('./util.js');
const MovingObject = require ('./moving_object.js');
window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  c = document.getElementById("game-canvas");
  ctx = c.getContext("2d");
  m = new MovingObject([200, 200], [1, 1], 50, MovingObject.randomColor());
  m.draw(ctx);
});

