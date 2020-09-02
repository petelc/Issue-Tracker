exports.id = "server";
exports.modules = {

/***/ "./src/Auth/LogoutButton.jsx":
/*!***********************************!*\
  !*** ./src/Auth/LogoutButton.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ "@auth0/auth0-react");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__);



const LogoutButton = () => {
  const {
    logout,
    isAuthenticated
  } = Object(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__["useAuth0"])();

  if (isAuthenticated) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => logout({
        returnTo: window.ENV.REACT_APP_AUTH0_CALLBACK_URL
      })
    }, "Log Out");
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (LogoutButton);

/***/ })

};
//# sourceMappingURL=server.11ef7eaabdb9bc11b689.hot-update.js.map