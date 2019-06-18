/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asteroid.js":
/*!*********************!*\
  !*** ./asteroid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./moving_object.js\");\n\nconst COLOR = \"#73210E\";\nconst RADIUS = 50;\n\nconst Asteroid = function (pos){\n  MovingObject.call(this, pos, Util.randomVec(length), RADIUS, COLOR);\n};\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./asteroid.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Util = require ('./util.js');\nconst MovingObject = __webpack_require__ (/*! ./moving_object.js */ \"./moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./asteroid.js\");\nwindow.MovingObject = MovingObject;  \n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  console.log('DOM fully loaded and parsed');\n  c = document.getElementById(\"game-canvas\");\n  ctx = c.getContext(\"2d\");\n  m = new MovingObject([200, 200], [1, 1], 50, MovingObject.randomColor());\n  m.draw(ctx);\n\n  a = new Asteroid([50, 50]);\n  a.draw(ctx);\n});\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./moving_object.js":
/*!**************************!*\
  !*** ./moving_object.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (pos, vel, radius, color) {\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n}\n\nconst HEX_DIGITS = \"0123456789ABCDEF\";\n\nMovingObject.randomColor = function () {\n  let color = \"#\";\n  for (let i = 0; i < 6; i++) {\n    color += HEX_DIGITS[Math.floor((Math.random() * 16))];\n  }\n\n  return color;\n};\n\nMovingObject.prototype.draw = function (ctx) {\n  let centerX = this.pos[0];\n  let centerY = this.pos[1];\n  ctx.beginPath();\n  \n  ctx.arc(\n    centerX,\n    centerY,\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.strokeStyle = this.color;\n  ctx.lineWidth = 5;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.draw(window.ctx);\n};\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./moving_object.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits (Child, Parent) {\n    function Surrogate() {}\n    Surrogate.prototype = Parent.prototype;\n    Child.prototype = new Surrogate();\n    Child.prototype.constructor = Child;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ });