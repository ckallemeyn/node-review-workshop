const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./routes.js');
const PORT = 3000;

const app = express();
const logger = (req, res, next) => {
  console.log('Serving request type:' + req.method + 'to path:' + req.path);
  console.log('Body: ', req.body);
  console.log('Query: ', req.query);
  console.log('Params: ', req.params);
  next();
};

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(logger);

app.use(express.static(path.resolve(__dirname, '../static')));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log('App is listening on Port:', PORT);
});
