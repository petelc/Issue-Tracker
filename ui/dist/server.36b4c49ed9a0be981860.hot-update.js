exports.id = "server";
exports.modules = {

/***/ "./src/IssueDetail.jsx":
/*!*****************************!*\
  !*** ./src/IssueDetail.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable linebreak-style */

/* eslint-disable radix */

/* eslint-disable react/prop-types */

function IssueDetail() {
  const {
    issue: {
      description
    }
  } = this.state;
  const {
    toastVisible,
    toastMessage,
    toastType
  } = this.state;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toasts, {
    showing: toastVisible,
    onDismiss: this.dismissToast,
    type: toastType
  }, toastMessage));
}

/***/ })

};
//# sourceMappingURL=server.36b4c49ed9a0be981860.hot-update.js.map