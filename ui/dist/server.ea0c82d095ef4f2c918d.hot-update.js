exports.id = "server";
exports.modules = {

/***/ "./src/SignInNavItem.jsx":
/*!*******************************!*\
  !*** ./src/SignInNavItem.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignInNavItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_NavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/NavItem */ "react-bootstrap/NavItem");
/* harmony import */ var react_bootstrap_NavItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "react-bootstrap/NavDropdown");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);







class SignInNavItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      user: {
        signedIn: false,
        givenName: ''
      }
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.hideModal();
    this.setState({
      user: {
        signedIn: true,
        givenName: 'User1'
      }
    });
  }

  signOut() {
    this.setState({
      user: {
        signedIn: false,
        givenName: ''
      }
    });
  }

  showModal() {
    this.setState({
      showing: true
    });
  }

  hideModal() {
    this.setState({
      showing: false
    });
  }

  render() {
    const {
      user
    } = this.state;

    if (user.signedIn) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
        title: user.givenName,
        id: "user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1___default.a.Link, {
        onClick: this.signOut
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["OverlayTrigger"], {
        placement: "bottom",
        delayShow: 1000,
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          id: "create-issue"
        }, "Create Issue")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BsPlusCircle, null))));
    }

    const {
      showing
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_NavItem__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.showModal,
      className: "bg-dark"
    }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
      keyboard: true,
      show: showing,
      onHide: this.hideModal,
      size: "lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default.a.Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default.a.Title, {
      id: "contained-modal-title-vcenter"
    }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "button",
      variant: "primary",
      onClick: this.signIn
    }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default.a.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "link",
      onClick: this.hideModal
    }, "Close"))));
  }

}

/***/ })

};
//# sourceMappingURL=server.ea0c82d095ef4f2c918d.hot-update.js.map