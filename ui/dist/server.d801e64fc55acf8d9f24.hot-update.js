exports.id = "server";
exports.modules = {

/***/ "./src/Search.jsx":
/*!************************!*\
  !*** ./src/Search.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Development\\MERN\\Issue-Tracker\\ui\\src\\Search.jsx: Unexpected token, expected \",\" (10:6)\n\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[36mconst\u001b[39m selectStyles \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m  control\u001b[33m:\u001b[39m (provided \u001b[33m=>\u001b[39m ({ \u001b[33m...\u001b[39mprovided\u001b[33m,\u001b[39m minWidth\u001b[33m:\u001b[39m \u001b[35m240\u001b[39m\u001b[33m,\u001b[39m margin\u001b[33m:\u001b[39m \u001b[35m8\u001b[39m })\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 | \u001b[39m  menu\u001b[33m:\u001b[39m () \u001b[33m=>\u001b[39m ({ boxShadow\u001b[33m:\u001b[39m \u001b[32m'inset 0 1px 0 rgba(0, 0, 0, 0.1)'\u001b[39m })\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mSearch\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[0m\n    at Object._raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Object.raiseWithData (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:751:17)\n    at Object.unexpected (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8927:16)\n    at Object.expect (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8913:28)\n    at Object.parseParenAndDistinguishExpression (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10402:14)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10122:21)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseObjectProperty (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10760:101)\n    at Object.parseObjPropValue (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10785:100)\n    at Object.parsePropertyDefinition (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10716:10)\n    at Object.parseObjectLike (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10609:25)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10143:23)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseVar (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11997:26)\n    at Object.parseVarStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11806:10)\n    at Object.parseStatementContent (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11398:21)\n    at Object.parseStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11331:17)");

/***/ }),

/***/ "react-select/lib/Async":
false

};
//# sourceMappingURL=server.d801e64fc55acf8d9f24.hot-update.js.map