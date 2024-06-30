const express = require('express');
const router = express.Router();
const logArray = require('../models/log');

router.get('/', (req, res) => {
  res.status(200).send(logArray);
  next()
});

router.post("/", (req, res) => {
  const currentLog = { id: logArray.length + 1, ...req.body };
  logArray.push(currentLog);
  res.send(logArray[logArray.length - 1]);
})


module.exports = router;
