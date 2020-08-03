/* eslint-disable linebreak-style */
require('dotenv').config();
const express = require('express');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');

const port = process.env.API_SERVER_PORT || 3000;
const app = express();

installHandler(app);

// Making this async and handling the DB connection
(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`App API started on port ${port}`);
    });
  } catch (err) {
    console.log('ERROR', err);
  }
}());
