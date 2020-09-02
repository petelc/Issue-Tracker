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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Development\\MERN\\Issue-Tracker\\ui\\src\\Page.jsx: Unexpected token (80:45)\n\n\u001b[0m \u001b[90m 78 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 79 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mPage\u001b[39m() {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 80 | \u001b[39m  \u001b[36mconst\u001b[39m domain \u001b[33m=\u001b[39m \u001b[33mAuthConfig\u001b[39m\u001b[33m.\u001b[39mfind((domain) \u001b[33m=>\u001b[39m )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 81 | \u001b[39m  \u001b[36mconst\u001b[39m clientId \u001b[33m=\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mREACT_APP_AUTH0_CLIENT_ID\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 82 | \u001b[39m  \u001b[36mconst\u001b[39m callbackUrl \u001b[33m=\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mREACT_APP_AUTH0_CALLBACK_URL\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 83 | \u001b[39m  \u001b[36mreturn\u001b[39m (\u001b[0m\n    at Object._raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:764:17)\n    at Object.raiseWithData (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raise (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:751:17)\n    at Object.unexpected (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8927:16)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10227:20)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseFunctionBody (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10894:24)\n    at Object.parseArrowExpression (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10870:10)\n    at Object.parseParenAndDistinguishExpression (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10446:12)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10122:21)\n    at Object.parseExprAtom (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:4686:20)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9789:23)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)\n    at Object.parseMaybeUnary (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9758:17)\n    at Object.parseExprOps (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9628:23)\n    at Object.parseMaybeConditional (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9602:23)\n    at Object.parseMaybeAssign (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9565:21)\n    at Object.parseExprListItem (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10989:18)\n    at Object.parseCallExpressionArguments (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9998:22)\n    at Object.parseCoverCallAndAsyncArrowHead (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9905:29)\n    at Object.parseSubscript (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9841:19)\n    at Object.parseSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9812:19)\n    at Object.parseExprSubscripts (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9795:17)\n    at Object.parseUpdate (C:\\Development\\MERN\\Issue-Tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9769:21)");

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
//# sourceMappingURL=server.abe46a98a8b1827daae4.hot-update.js.map