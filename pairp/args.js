
// -----------------------------
// sum
// Write a sum funciton that takes any number of arguments

// Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator

function sumOne () {
  // const args = Array.prototype.slice.call(arguments);
  const args = Array.from(arguments);
  let sum = 0;

  args.forEach ( arg => {
    sum += arg;
  });

  return sum;
}

function sumBody(...bananas) {
  let sum = 0;

  bananas.forEach( banana => {
    sum += banana;
  });

  return sum;
}
// -----------------------------
// bind - with args
// Rewrite your myBind method so that it can take both bind - time arguments and call - time arguments.

Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

// test cases for bind with args
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// bind time args
// cat.says.myBind(context, args)();

// run time args
// cat.says.myBind(context)(args)

// bof'em
// cat.says.myBind(context, bindArgs)(callArgs)

// -----------------------------
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.myCurry = function (numArgs) {

  let numbers = [];
  let that = this;

  return function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) return that(...numbers);
    else return _curriedSum;
  };
};

//sumThree.myCurry(3)(4)(20)(6);

Function.prototype.curry = function (numArgs) {

  let args = [];
  let that = this;

  return function _curry (arg) {
    args.push(arg);
    if (args.length === numArgs) return that(...args);
    else return _curry;
  };
};

Function.prototype.applyCurry = function (numArgs) {

  let args = [];
  let that = this;

  return function _curry (arg) {
    // debugger;
    args.push(arg);
    if (args.length === numArgs) return that.apply(that, args);
    else return _curry;
  };
};

function listFruits (...fruits) {
  console.log('there are actually other fruits on the planet besides bananas and mangoes');
  console.log('eg')
  fruits.forEach( (arg,i) => {
    console.log(`${arg}`);
    if(i !== fruits.length-1) console.log('and');
  });
}
