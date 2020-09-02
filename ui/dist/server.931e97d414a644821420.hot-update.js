exports.id = "server";
exports.modules = {

/***/ "./src/Auth/HighLight.jsx":
/*!********************************!*\
  !*** ./src/Auth/HighLight.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_dist_esm_languages_prism_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/languages/prism/json */ "react-syntax-highlighter/dist/esm/languages/prism/json");
/* harmony import */ var react_syntax_highlighter_dist_esm_languages_prism_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_esm_languages_prism_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism/atom-dark */ "react-syntax-highlighter/dist/esm/styles/prism/atom-dark");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_esm_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_3__);




react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismAsyncLight"].registerLanguage('json', react_syntax_highlighter_dist_esm_languages_prism_json__WEBPACK_IMPORTED_MODULE_2___default.a);

const Highlight = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["PrismAsyncLight"], {
  language: "json",
  style: react_syntax_highlighter_dist_esm_styles_prism_atom_dark__WEBPACK_IMPORTED_MODULE_3___default.a
}, children);

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./src/Auth/Profile.jsx":
/*!******************************!*\
  !*** ./src/Auth/Profile.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-react */ "@auth0/auth0-react");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HighLight_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HighLight.jsx */ "./src/Auth/HighLight.jsx");







const Profile = () => {
  const {
    user
  } = _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__["useAuth0"];
  const {
    name,
    picture,
    email
  } = user;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "align-items-center profile-header mb-5 text-center text-md-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: picture,
    alt: "Profile",
    className: "rounded-circle img-fluid profile-picture mb-3-md-0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    md: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "lead text-muted"
  }, email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighLight_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, JSON.stringify(user, null, 2))));
};

/* harmony default export */ __webpack_exports__["default"] = (withAuthenticatedRequired(Profile, {
  onRedirecting: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null)
}));

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/dist/esm/languages/prism/json":
/*!*************************************************************************!*\
  !*** external "react-syntax-highlighter/dist/esm/languages/prism/json" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/esm/languages/prism/json");

/***/ }),

/***/ "react-syntax-highlighter/dist/esm/styles/prism/atom-dark":
/*!***************************************************************************!*\
  !*** external "react-syntax-highlighter/dist/esm/styles/prism/atom-dark" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/esm/styles/prism/atom-dark");

/***/ })

};
//# sourceMappingURL=server.931e97d414a644821420.hot-update.js.map