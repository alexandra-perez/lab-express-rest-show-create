const express = require('express');
const router = express.Router();
const logArray = require('../models/log');

// Index
router.get('/', (req, res) => {
  res.status(200).send(logArray);
  next();
});

// Show
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const log = logArray.find((log) => log.id === parseInt(id));
  if (log !== undefined) {
    res.status(200).send(log);
  } else {
    res.status(404).send(`No log with ID ${id} found.`);
  }
});

// Create
router.post('/', (req, res) => {
  const currentLog = req.body;
  logArray.push(currentLog);
  res.status(200).send(logArray[logArray.length - 1]);
});

// Destroy

// Update

module.exports = router;
