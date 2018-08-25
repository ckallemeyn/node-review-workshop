const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
  .route('/todolist')
  .get(controller.fetch)
  .post(controller.post)
  .delete(controller.delete);

module.exports = router;
