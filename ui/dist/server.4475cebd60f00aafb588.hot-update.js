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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Development\\MERN\\Issue-Tracker\\ui\\src\\IssueList.jsx: Unexpected token, expected \"(\" (196:4)\n\n\u001b[0m \u001b[90m 194 | \u001b[39m    \u001b[36mif\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 195 | \u001b[39m    \u001b[90m// eslint-disable-next-line react/prop-types\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 196 | \u001b[39m    \u001b[36mconst\u001b[39m { match } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 197 | \u001b[39m    \u001b[36mconst\u001b[39m { toastVisible\u001b[33m,\u001b[39m toastMessage\u001b[33m,\u001b[39m toastType } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 198 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 199 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Object.raiseWithData (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:751:17)\n    at Object.unexpected (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8927:16)\n    at Object.expect (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8913:28)\n    at Object.parseHeaderExpression (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11601:10)\n    at Object.parseIfStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11684:22)\n    at Object.parseStatementContent (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11376:21)\n    at Object.parseStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11331:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11913:25)\n    at Object.parseBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11899:10)\n    at Object.parseBlock (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11883:10)\n    at Object.parseFunctionBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10901:24)\n    at Object.parseFunctionBodyAndFinish (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10884:10)\n    at Object.parseMethod (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10827:10)\n    at Object.pushClassMethod (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12334:30)\n    at Object.parseClassMemberWithIsStatic (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12251:12)\n    at Object.parseClassMember (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12193:10)\n    at C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12141:14\n    at Object.withTopicForbiddingContext (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11206:14)\n    at Object.parseClassBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12118:10)\n    at Object.parseClass (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12093:22)\n    at Object.parseExportDefaultExpression (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12525:19)\n    at Object.parseExport (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12438:31)\n    at Object.parseStatementContent (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11437:27)\n    at Object.parseStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11331:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11913:25)\n    at Object.parseBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11899:10)\n    at Object.parseTopLevel (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11262:10)\n    at Object.parse (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12967:10)");

/***/ }),

/***/ "./src/IssueTable.jsx":
false,

/***/ "react-bootstrap/Table":
false,

/***/ "url-search-params":
false

};
//# sourceMappingURL=server.4475cebd60f00aafb588.hot-update.js.map