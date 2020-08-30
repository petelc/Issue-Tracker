exports.id = "server";
exports.modules = {

/***/ "./src/Toasts.jsx":
/*!************************!*\
  !*** ./src/Toasts.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toasts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Toast */ "react-bootstrap/Toast");
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_ToastHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/ToastHeader */ "react-bootstrap/ToastHeader");
/* harmony import */ var react_bootstrap_ToastHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToastHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Collapse */ "react-bootstrap/Collapse");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable linebreak-style */

/* eslint-disable react/prop-types */




class Toasts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidUpdate() {
    const {
      showing,
      onDismiss
    } = this.props;

    if (showing) {
      clearTimeout(this.dismissTimer);
      setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    const {
      showing,
      onDismiss,
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_3___default.a, {
      in: showing
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 20,
        left: 20,
        zIndex: 100
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_1___default.a, {
      show: showing,
      onClose: onDismiss
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToastHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "toast-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      className: "mr-auto"
    }, "Issue Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "just now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
      className: "toast-body"
    }, children))));
  }

}

/***/ })

};
//# sourceMappingURL=server.95de9f9f91f2a3395b86.hot-update.js.map