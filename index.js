const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/generate', (req, res) => {
  res.json('hellworold');
});

app.listen(port, () => {
  console.log(`Port ${port}`);
});
