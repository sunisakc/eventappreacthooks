(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\ImageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CUser%5CDesktop%5CReactgit%5Ceventappreacthooks%5Cpages%5CImageChangeOnMouseOver.js!./":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CUser%5CDesktop%5CReactgit%5Ceventappreacthooks%5Cpages%5CImageChangeOnMouseOver.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnMouseOver", function() {
      var page = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js", function() {
          if(!next.router.components["/ImageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
          next.router.update("/ImageChangeOnMouseOver", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageTogglerOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageTogglerOnMouseOver */ "./src/ImageTogglerOnMouseOver.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\Reactgit\\eventappreacthooks\\pages\\ImageChangeOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_src_ImageTogglerOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/static/speakers/Speaker-187.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), "\xA0\xA0\xA0", __jsx(_src_ImageTogglerOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-1124.jpg",
    secondaryImg: "/static/speakers/Speaker-1124.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnMouseOver);

/***/ }),

/***/ "./src/ImageTogglerOnMouseOver.js":
/*!****************************************!*\
  !*** ./src/ImageTogglerOnMouseOver.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\Reactgit\\eventappreacthooks\\src\\ImageTogglerOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageChangeOnMouseOver = function ImageChangeOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CUser%5CDesktop%5CReactgit%5Ceventappreacthooks%5Cpages%5CImageChangeOnMouseOver.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CUser%5CDesktop%5CReactgit%5Ceventappreacthooks%5Cpages%5CImageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=C%3A%5CUsers%5CUser%5CDesktop%5CReactgit%5Ceventappreacthooks%5Cpages%5CImageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_01f9a3fa864a7b7414d8":
/*!*******************************************!*\
  !*** external "dll_01f9a3fa864a7b7414d8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_01f9a3fa864a7b7414d8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnMouseOver.js.map