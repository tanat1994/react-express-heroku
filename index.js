const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dummy = require('./model/dummy');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/generate', (req, res) => {
  res.send(dummy);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Port ${port}`);
});
