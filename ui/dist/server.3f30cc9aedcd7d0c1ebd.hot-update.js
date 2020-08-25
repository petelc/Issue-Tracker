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
!(function webpackMissingModule() { var e = new Error("Cannot find module './graphQLFetch.'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Toasts_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toasts.jsx */ "./src/Toasts.jsx");
/* eslint-disable linebreak-style */

/* eslint-disable radix */

/* eslint-disable linebreak-style */

/* eslint-disable react/prop-types */

/* eslint-disable linebreak-style */



class IssueDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      issue: {},
      toastVisible: false,
      toastMessage: ' ',
      toastType: 'info'
    };
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (prevId !== id) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      match: {
        params: {
          id
        }
      }
    } = this.props;
    const query = `query issue($id: Int!) {
          issue (id: $id) {
              id description
          }
      }`;
    const data = await !(function webpackMissingModule() { var e = new Error("Cannot find module './graphQLFetch.'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(query, {
      id: parseInt(id)
    }, this.showError);

    if (data) {
      this.setState({
        issue: data.issue
      });
    } else {
      this.setState({
        issue: {}
      });
    }
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: 'danger'
    });
  }

  dismissToast() {
    this.setState({
      toastVisible: false
    });
  }

  render() {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toasts_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showing: toastVisible,
      onDismiss: this.dismissToast,
      type: toastType
    }, toastMessage));
  }

}

/***/ })

};
//# sourceMappingURL=server.3f30cc9aedcd7d0c1ebd.hot-update.js.map