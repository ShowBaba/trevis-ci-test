const express = require("express");
const fs = require("fs");
const logger = require('morgan');

const app = express();
// middlewares
app.use(express.json());
app.use(logger('dev'));

// route handlers
app.get('/', (req, res) => {
  res.json({message: "Hello testing"})
});

app.post('/', (req, res) => {
  res.send('POST route')
})
// server
module.exports = app;
