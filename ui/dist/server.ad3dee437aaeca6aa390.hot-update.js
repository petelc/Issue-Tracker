exports.id = "server";
exports.modules = {

/***/ "./src/IssueDetail.jsx":
false,

/***/ "./src/IssueFilter.jsx":
false,

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Development\\MERN\\Issue-Tracker\\ui\\src\\IssueList.jsx: Unexpected token (20:52)\n\n\u001b[0m \u001b[90m 18 | \u001b[39m  static async fetchData(match\u001b[33m,\u001b[39m search\u001b[33m,\u001b[39m showError) {\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m    \u001b[36mconst\u001b[39m params \u001b[33m=\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mURLSearchParams\u001b[39m(search)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m    \u001b[36mconst\u001b[39m vars \u001b[33m=\u001b[39m { hasSelection\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m selectedId\u001b[33m:\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m    \u001b[36mif\u001b[39m (params\u001b[33m.\u001b[39mget(\u001b[32m'status'\u001b[39m)) vars\u001b[33m.\u001b[39mstatus \u001b[33m=\u001b[39m params\u001b[33m.\u001b[39mget(\u001b[32m'status'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m    \u001b[36mconst\u001b[39m effortMin \u001b[33m=\u001b[39m parseInt(params\u001b[33m.\u001b[39mget(\u001b[32m'effortMin'\u001b[39m)\u001b[33m,\u001b[39m \u001b[35m10\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Object.raiseWithData (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:751:17)\n    at Object.unexpected (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8927:16)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10227:20)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseObjectProperty (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10760:101)\n    at Object.parseObjPropValue (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10785:100)\n    at Object.parsePropertyDefinition (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10716:10)\n    at Object.parseObjectLike (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10609:25)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10143:23)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseVar (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11997:26)\n    at Object.parseVarStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11806:10)\n    at Object.parseStatementContent (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11398:21)\n    at Object.parseStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11331:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11913:25)\n    at Object.parseBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11899:10)");

/***/ }),

/***/ "./src/IssueTable.jsx":
false,

/***/ "react-bootstrap/Table":
false,

/***/ "url-search-params":
false

};
//# sourceMappingURL=server.ad3dee437aaeca6aa390.hot-update.js.map