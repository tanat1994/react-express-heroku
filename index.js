const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dummy = require('./model/dummy');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/generate', (req, res) => {
  res.send(dummy);
});

app.listen(port, () => {
  console.log(`Port ${port}`);
});
