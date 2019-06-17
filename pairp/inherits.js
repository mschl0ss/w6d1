Function.prototype.inherits = function (Child) {

  // function Surrogate () {}
  // Surrogate.prototype = this.prototype;
  // Child.prototype = new Surrogate();
  // Child.prototype.constructor = Child;

  Child.prototype = Object.create(this.prototype);
  Child.prototype.constructor = Child;

};


function Animal(color) {
  this.color = color;
}

Animal.prototype.sayHello = function() {
  console.log(`Hi.  Im ${this.color}`);
};

function Dog(color, isAGoodBoy) {
  Animal.call(this, color);
  this.isAGoodBoy = true; //I really dont care what they put in, hes always a good boy
}

Animal.inherits(Dog);

Dog.prototype.tailWag = function () {
  console.log(`wags.`);
};


