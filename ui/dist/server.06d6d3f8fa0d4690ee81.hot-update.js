exports.id = "server";
exports.modules = {

/***/ "./src/IssueReport.jsx":
/*!*****************************!*\
  !*** ./src/IssueReport.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! victory */ "victory");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withToasts_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withToasts.jsx */ "./src/withToasts.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* eslint-disable linebreak-style */



 // Adding Victory Charting






const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];
const myData = [];

class IssueReport extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async fetchData(match, search, showError) {
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_3___default.a(search);
    const vars = {};
    if (params.get('status')) vars.status = params.get('status');
    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
    const {
      params: {
        id
      }
    } = match;
    const idInt = parseInt(id, 10);

    if (!Number.isNaN(idInt)) {
      vars.hasSelection = true;
      vars.selectedId = idInt;
    }

    const query = `query issueList(
      $status: StatusType
      $effortMin: Int
      $effortMax: Int
    ) {
      issueCounts(
        status: $status
        effortMin: $effortMin
        effortMax: $effortMax
      ) {
        owner New Assigned Fixed Closed
      }
    }`;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(query, vars, showError);
    return data;
  }

  constructor(props) {
    super(props);
    const stats = _store_js__WEBPACK_IMPORTED_MODULE_7__["default"].initialData ? _store_js__WEBPACK_IMPORTED_MODULE_7__["default"].initialData.issueCounts : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_7__["default"].initialData;
    this.state = {
      stats
    };
  }

  componentDidMount() {
    const {
      stats
    } = this.state;
    if (stats == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      }
    } = prevProps;
    const {
      location: {
        search
      }
    } = this.props;

    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      location: {
        search
      },
      match,
      showError
    } = this.props;
    const data = await IssueReport.fetchData(match, search, showError);

    if (data) {
      this.setState({
        stats: data.issueCounts
      });
    }
  }

  render() {
    const headerColumns = statuses.map(status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      key: status
    }, status));
    const {
      stats
    } = this.state;
    if (stats == null) return null;
    const statRows = stats.map(counts => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: counts.owner
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, counts.owner), statuses.map(status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      key: status
    }, counts[status]))));
    const cData = stats.map(counts => myData.push({
      x: `${counts.owners}`,
      y: counts.counts
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "text-left bg-dark text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      urlBase: "/report"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spacer"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default.a, {
      striped: true,
      bordered: true,
      hover: true,
      responsive: true,
      variant: "dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), headerColumns)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, statRows)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spacer"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(victory__WEBPACK_IMPORTED_MODULE_4__["VictoryPie"], {
      colorScale: ['tomato', 'orange', 'gold', 'cyan', 'navy'],
      data: cData,
      label: x,
      style: {
        labels: {
          fill: 'gray',
          fontSize: 20,
          fontWeight: 'bold'
        }
      }
    }))));
  }

}

const IssueReportWithToast = Object(_withToasts_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(IssueReport);
IssueReportWithToast.fetchData = IssueReport.fetchData;
/* harmony default export */ __webpack_exports__["default"] = (IssueReportWithToast);

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ })

};
//# sourceMappingURL=server.06d6d3f8fa0d4690ee81.hot-update.js.map