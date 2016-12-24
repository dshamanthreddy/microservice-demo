'use strict';

const express = require('express');

// Constants
const PORT = 80;

var os = require("os");
// App
const app = express();
app.disable('etag');
app.get('/', function (req, res) {
  res.send('Hello world ' + os.hostname() + '\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
