exports.id = "server";
exports.modules = {

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* eslint-disable linebreak-style */
function template(body) {
  return `<!DOCTYPE HTML>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Pro MERN Stack</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" >
    
    <link rel="stylesheet" type="text/css" href="/style.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    
  </head>
  <body>
    <!-- Page generated from template. -->
    <div id="content">${body}</div>
    <script
    <script src="/env.js"></script>
    <script src="/vendor.bundle.js"></script>
    <script src="/app.bundle.js"></script>
  </body>
  </html>
  `;
}

/***/ })

};
//# sourceMappingURL=server.8e1d53d4992de7566cde.hot-update.js.map