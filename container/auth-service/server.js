'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.disable('etag');

app.get('/', function (req, res) {
  console.log('Validating authentication request...');
  if (req.get('API-KEY') == 'demo123'){
	console.log('Authentication valid!');
        res.sendStatus(200);
  }else{
	console.log('Authentication denied!');
        res.sendStatus(401);
  }
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
