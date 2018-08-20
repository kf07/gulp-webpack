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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// const data = [56,40,26,82,19,17,73,99];\r\n// let [x0,x1,x2,...other] = data;\r\n//\r\n// let x = 1;\r\n// let y = 2;\r\n// [x,y] = [y,x];\r\n// console.log(x,y);\r\n//\r\n// let book = { title:'Javaポケットリファレンス',publish:'技術評論社'};\r\n// let { title:name,publish:company } = book;\r\n// console.log(name);\r\n// console.log(company);\r\n//\r\n// let price,title,memo;\r\n// ({price,title,memo='なし'} = book);\r\n// console.log(1 == true);\r\n//\r\n// const data1 = ['JavaScript','Ajax','ASP.NET'];\r\n// const data2 = ['JavaScript','Ajax','ASP.NET'];\r\n//\r\n// console.log(data1 === data2);\r\n//\r\n// console.log('3.14E2' === 314);\r\n//\r\n// const x = 50;\r\n//\r\n// console.log((x >= 70) ? '合格' : '不合格');\r\n//\r\n// const z = 1;\r\n// const y = 2;\r\n// console.log(z === 1 || y === 1);\r\n//\r\n// const x = 2;\r\n//\r\n// if(x === 2){\r\n//     console.log(('こんにちは'));\r\n// }\r\n//\r\n// x === 1 && console.log('こんにちは');\r\n//\r\n// const msg = '';\r\n// msg = msg || 'こんにちは、世界！';\r\n// console.log(msg);\r\n//\r\n//\r\n// const ary = ['JavaScript','Ajax','ASP.NET'];\r\n// console.log(delete ary[0]);\r\n// console.log(ary);\r\n//\r\n// const obj = {x:1,y:2};\r\n//\r\n// console.log(delete obj.x);\r\n// console.log(obj.x);\r\n// const data1 = 1;\r\n// console.log(delete data1);\r\n// console.log(data1);\r\n//\r\n//\r\n// data2 = 10;\r\n// console.log(delete data2);\r\n// console.log(data2);\r\n// var num = 1;\r\n// console.log(typeof num);\r\n//\r\n// var str = 'こんにちは';\r\n// console.log(typeof str);\r\n// const x = 9;\r\n// if(x >= 10)\r\n//     console.log('変数xは10以上です。');\r\n// else\r\n//     console.log('変数は10未満です。');\r\n// let x = 10;\r\n// while(x<10) {\r\n//     console.log('xの値は' + x);\r\n//     x++;\r\n// }\r\n// var data = {apple:150,orange:100,banana:120};\r\n// for (var key in data){\r\n//     console.log(key + '=' + data[key]);\r\n// }\r\n// const data = ['apple','orange','banana'];\r\n// Array.prototype.hoge = function () {}\r\n//\r\n// for (let value of data){\r\n//     console.log(value)\r\n// }\r\n//\r\n// let result = 0;\r\n// for(var i = 1; i <= 100; i++){\r\n//     result += i;\r\n//     if(result > 1000) {break;}\r\n// }\r\n//\r\n// console.log('合計値が1000を超えるのは' + i)\r\n// kuku:\r\n// for(var i = 1;i<10; i++){\r\n//     for(var j =1; j<10; j++){\r\n//         var k = i * j;\r\n//         if(k>30){break kuku;}\r\n//         document.write(k + '&nbsp');\r\n//     }\r\n//     document.write('<br />');\r\n// }\r\nvar i = 1;\r\ntry {\r\n    i = i * j;\r\n}\r\ncatch (e) {\r\n    console.log('例外');\r\n}\r\nfinally {\r\n    console.log('処理は完了しました。');\r\n}\r\nvar x = 1;\r\nvar y = 0;\r\ntry {\r\n    if (y === 0) {\r\n        throw new Error('0で除算しようとしました。');\r\n    }\r\n    var z = x / y;\r\n}\r\ncatch (e) {\r\n    console.log(e.message);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });