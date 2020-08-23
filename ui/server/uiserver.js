/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import dotenv from "dotenv";
import path from "path";
import proxy from "http-proxy-middleware";
import sourceMapSupport from "source-map-support";
import express from "express";
// eslint-disable-next-line import/extensions
import render from "./render.jsx";

/** This is the express app to run the ui */
const app = express();
sourceMapSupport.install();
dotenv.config();

const enableHMR = (process.env.ENABLE_HMR || "true") === "true";
if (enableHMR && process.env.NODE_ENV !== "production") {
  console.log("Adding dev middleware", enableHMR);
  /* eslint "global-require": "off" */
  /* eslint "import/no-extraneous-dependencies": "off" */
  const webpack = require("webpack");
  const devMiddleware = require("webpack-dev-middleware");
  const hotMiddleware = require("webpack-hot-middleware");

  /** THe Config */
  const config = require("../webpack.config.js")[0];
  config.entry.app.push("webpack-hot-middleware/client");
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static("public"));

const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use("/graphql", proxy({ target: apiProxyTarget }));
}

// const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || "http://localhost:3000/graphql";
// const env = { UI_API_ENDPOINT };
if (!process.env.UI_API_ENDPOINT) {
  process.env.UI_API_ENDPOINT = 'http://localhost:3000/graphql';
}

if (!process.env.UI_SERVER_API_ENDPOINT) {
  process.env.UI_SERVER_API_ENDPOINT = process.env.UI_API_ENDPOINT;
}

app.get("/env.js", (req, res) => {
  const env = { UI_API_ENDPOINT: process.env.UI_API_ENDPOINT };
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.get("/about", (req, res, next) => {
  render(req, res, next);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

const port = process.env.UI_SERVER_PORT || 8000;

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log(`UI started on port ${port} *8000`);
});

if (module.hot) {
  module.hot.accept("./render.jsx");
}
