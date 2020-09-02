exports.id = "server";
exports.modules = {

/***/ "./src/About.jsx":
false,

/***/ "./src/IssueDetail.jsx":
false,

/***/ "./src/IssueEdit.jsx":
false,

/***/ "./src/IssueFilter.jsx":
false,

/***/ "./src/IssueList.jsx":
false,

/***/ "./src/IssueReport.jsx":
false,

/***/ "./src/IssueTable.jsx":
false,

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Development\\MERN\\Issue-Tracker\\ui\\src\\routes.js: Unexpected token (12:10)\n\n\u001b[0m \u001b[90m 10 | \u001b[39m  { path\u001b[33m:\u001b[39m \u001b[32m'/report'\u001b[39m\u001b[33m,\u001b[39m component\u001b[33m:\u001b[39m \u001b[33mIssueReport\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m  { path\u001b[33m:\u001b[39m \u001b[32m'/about'\u001b[39m\u001b[33m,\u001b[39m component\u001b[33m:\u001b[39m \u001b[33mAbout\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 | \u001b[39m  { path\u001b[33m:\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m]\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m routes\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Object.raiseWithData (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:751:17)\n    at Object.unexpected (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8927:16)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10227:20)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseObjectProperty (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10760:101)\n    at Object.parseObjPropValue (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10785:100)\n    at Object.parsePropertyDefinition (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10716:10)\n    at Object.parseObjectLike (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10609:25)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10143:23)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseExprListItem (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10989:18)\n    at Object.parseExprList (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10959:22)\n    at Object.parseArrayLike (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10844:26)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10132:23)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)");

/***/ }),

/***/ "prop-types":
false,

/***/ "react-bootstrap":
false,

/***/ "react-bootstrap/Alert":
false,

/***/ "react-bootstrap/ButtonGroup":
false,

/***/ "react-bootstrap/Card":
false,

/***/ "react-bootstrap/FormControl":
false,

/***/ "react-bootstrap/Pagination":
false,

/***/ "react-bootstrap/Table":
false,

/***/ "react-icons/bs":
false,

/***/ "url-search-params":
false

};
//# sourceMappingURL=server.24f0d262ef6b6c689758.hot-update.js.map