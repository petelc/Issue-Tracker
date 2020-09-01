exports.id = "server";
exports.modules = {

/***/ "./src/Auth/LoginButton.jsx":
false,

/***/ "./src/Auth/LogoutButton.jsx":
false,

/***/ "./src/Config/AuthConfig.js":
false,

/***/ "./src/Contents.jsx":
false,

/***/ "./src/IssueAddNavItem.jsx":
false,

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Development\\MERN\\Issue-Tracker\\ui\\src\\Page.jsx: Unexpected token, expected \",\" (80:43)\n\n\u001b[0m \u001b[90m 78 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 79 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mPage\u001b[39m() {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 80 | \u001b[39m  \u001b[36mconst\u001b[39m domain \u001b[33m=\u001b[39m \u001b[33mAuthConfig\u001b[39m\u001b[33m.\u001b[39mfind({ domain }})\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 81 | \u001b[39m  \u001b[36mconst\u001b[39m clientId \u001b[33m=\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mREACT_APP_AUTH0_CLIENT_ID\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 82 | \u001b[39m  \u001b[36mconst\u001b[39m callbackUrl \u001b[33m=\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mREACT_APP_AUTH0_CALLBACK_URL\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 83 | \u001b[39m  \u001b[36mreturn\u001b[39m (\u001b[0m\n    at Object._raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Object.raiseWithData (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:751:17)\n    at Object.unexpected (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8927:16)\n    at Object.expect (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8913:28)\n    at Object.parseCallExpressionArguments (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9978:14)\n    at Object.parseCoverCallAndAsyncArrowHead (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9905:29)\n    at Object.parseSubscript (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9841:19)\n    at Object.parseSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9812:19)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9795:17)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseVar (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11997:26)\n    at Object.parseVarStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11806:10)\n    at Object.parseStatementContent (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11398:21)\n    at Object.parseStatement (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11331:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11913:25)\n    at Object.parseBlockBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11899:10)\n    at Object.parseBlock (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11883:10)\n    at Object.parseFunctionBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10901:24)\n    at Object.parseFunctionBodyAndFinish (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10884:10)\n    at C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12053:12\n    at Object.withTopicForbiddingContext (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11206:14)\n    at Object.parseFunction (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12052:10)\n    at Object.parseExportDefaultExpression (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12523:19)\n    at Object.parseExport (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12438:31)\n    at Object.parseStatementContent (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11437:27)");

/***/ }),

/***/ "./src/Search.jsx":
false,

/***/ "./src/SignInNavItem.jsx":
false,

/***/ "@auth0/auth0-react":
false,

/***/ "react-bootstrap/Badge":
false,

/***/ "react-bootstrap/Container":
false,

/***/ "react-bootstrap/Modal":
false,

/***/ "react-bootstrap/Nav":
false,

/***/ "react-bootstrap/NavDropdown":
false,

/***/ "react-bootstrap/NavItem":
false,

/***/ "react-bootstrap/Navbar":
false,

/***/ "react-icons/go":
false,

/***/ "react-select/lib/Async":
false

};
//# sourceMappingURL=server.0b3880e85dc01a0afc26.hot-update.js.map