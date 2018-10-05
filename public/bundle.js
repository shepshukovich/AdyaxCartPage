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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/components/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./client/components/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/style.scss */ \"./public/style.scss\");\n/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nlet root = document.getElementById('root');\nlet ih = root.innerHTML;\n\nroot.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_0___default.a + ih;\n\n\n// const typeFile = document.getElementsByClassName('cv')[0];\n// const uploadBtn = document.getElementsByClassName('custom-upload-btn')[0];\n// const input = document.getElementsByTagName('input');\n//\n// typeFile.addEventListener('change', function(event) {\n//   uploadBtn.innerHTML = this.files[0].name;\n// });\n//\n// typeFile.addEventListener('mouseover', function(event) {\n//   uploadBtn.style.border = '1px solid #fddc3e';\n// })\n//\n// typeFile.addEventListener('mouseout', function(event) {\n//   uploadBtn.style.border = '1px solid #dcdcdc';\n// })\n\n// const f = document.getElementsByClassName('form')[0].elements[0];\n//\n// f.addEventListener('change', function() {\n//   console.log();\n//   console.log(f.checked);\n//\n// });\n\n\n//# sourceURL=webpack:///./client/components/App.js?");

/***/ }),

/***/ "./client/components/index.html":
/*!**************************************!*\
  !*** ./client/components/index.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header>\\n  <div class='header container'>\\n    <div class='logo'></div>\\n  </div>\\n</header>\\n<section>\\n  <div class='text container'>\\n    <h1>\\n      Front-End Developer<span>.</span>\\n    </h1>\\n    <p>\\n      Adyax’s core values take top priority: we care for our client, and we care for our people. Staff and clients work in partnership with consistent,   transparent communication.\\n    </p>\\n  </div>\\n</section>\\n<section>\\n  <div class='cart-wrapper'>\\n    <div class='cart'>\\n      <div class='cart-normalizer'>\\n        <div class='item'>\\n          <div class='avatar'></div>\\n          <div class='text-and-select'>\\n            <h1>Title Lorem ipsum dolor sit</h1>\\n            <p>Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et. </p>\\n            <form action=\\\"/action_page.php\\\" class='form'>\\n              <select name=\\\"options\\\">\\n                <option value=\\\"SKU1\\\">SKU1</option>\\n                <option value=\\\"SKU2\\\">SKU2</option>\\n                <option value=\\\"SKU3\\\">SKU3</option>\\n                <option value=\\\"SKU4\\\">SKU4</option>\\n              </select>\\n            </form>\\n          </div>\\n          <div class='counter-wrapper'>\\n            <div class='counter'>\\n              <input type=\\\"button\\\">\\n                <p>5</p>\\n              <input type=\\\"button\\\">\\n            </div>\\n          </div>\\n          <div class='remove-wrapper'>\\n            <div class='remove'>\\n            </div>\\n            <div class='amount'>\\n              <p>75.00 €</p>\\n            </div>\\n          </div>\\n        </div>\\n        <hr>\\n      </div>\\n      <div class='total'>\\n        <p>225.00 €</p>\\n      </div>\\n    </div>\\n  </div>\\n  </div>\\n</section>\\n<section>\\n    <div class='pic'>\\n      <p>\\n        Adyax specializes in working with multi-national, multi-brand companies on a wide range of customer, client and employee-facing solutions.\\n      </p>\\n    </div>\\n</section>\\n\";\n\n//# sourceURL=webpack:///./client/components/index.html?");

/***/ }),

/***/ "./public/style.scss":
/*!***************************!*\
  !*** ./public/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/style.scss?");

/***/ })

/******/ });