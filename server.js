const express = require('express');
const app = express();
const router = require('./server/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
  next();
});

app.use(express.static('public'));
app.use('/', router);

app.listen(3000, () => console.log('Listening on 3000'));
