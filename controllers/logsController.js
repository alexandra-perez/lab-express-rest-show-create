const express = require('express');
const router = express.Router();
const logArray = require('../models/log');

router.get('/', (req, res) => {
  res.status(200).send(logArray);
});

module.exports = router;
