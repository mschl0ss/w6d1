function MovingObject (pos, vel, radius, color) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

const HEX_DIGITS = "0123456789ABCDEF";

MovingObject.randomColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += HEX_DIGITS[Math.floor((Math.random() * 16))];
  }

  return color;
};

MovingObject.prototype.draw = function (ctx) {
  let centerX = this.pos[0];
  let centerY = this.pos[1];
  ctx.beginPath();
  
  ctx.arc(
    centerX,
    centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.strokeStyle = this.color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.draw(window.ctx);
};
module.exports = MovingObject;