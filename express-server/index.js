const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./routes.js');
const PORT = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log('App is listening on Port:', PORT);
});
