webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Eventos.js":
/*!*******************************!*\
  !*** ./components/Eventos.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Master */ "./components/Master.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Precio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Precio */ "./components/Precio.js");
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Eventos__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "D:\\Usuario\\fabianguerrero\\Documents\\GitHub\\CursoReactJS\\bitcoin-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var index = function index(props) {
  return __jsx(_components_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx(_components_Precio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Noticias sobre Bitcoin"), __jsx(_components_Noticias__WEBPACK_IMPORTED_MODULE_6__["default"], {
    noticias: props.noticias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Proximos Eventos Bitcoin"), __jsx(_components_Eventos__WEBPACK_IMPORTED_MODULE_8___default.a, {
    eventos: props.eventos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))));
};

index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, keyNoticias, noticias, keyEventos, eventos, resPrecio, resNoticias, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 2:
          precio = _context.sent;
          keyNoticias = 'dec812f2eb6643aea417507bf61af6ef';
          _context.next = 6;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=".concat(keyNoticias, "&language=es"));

        case 6:
          noticias = _context.sent;
          keyEventos = 'YY2GWV7UZ4OZ5UK7M6RK';
          _context.next = 10;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Colombia&token=".concat(keyEventos, "&locale=es_ES"));

        case 10:
          eventos = _context.sent;
          _context.next = 13;
          return precio.json();

        case 13:
          resPrecio = _context.sent;
          _context.next = 16;
          return noticias.json();

        case 16:
          resNoticias = _context.sent;
          _context.next = 19;
          return eventos.json();

        case 19:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticias.articles,
            eventos: resEventos.events
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.d44fde79a19db24cd647.hot-update.js.map