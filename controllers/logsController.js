const express = require('express');
const router = express.Router();
const logArray = require('../models/log');

// Index
router.get('/', (req, res) => {
  res.status(200).send(logArray);
  next();
});

// Show
router.get('/:index', (req, res) => {
  const { index } = req.params;
  if (logArray[index]) {
    res.status(200).send(logArray[index]);
  } else {
    res.status(404).redirect('/*');
  }
});

// Create
router.post('/', (req, res) => {
  const currentLog = req.body;
  logArray.push(currentLog);
  res.status(200).send(logArray[logArray.length - 1]);
});

// Destroy
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const logIndex = logArray.findIndex((log) => log.id === parseInt(id));
  if (logIndex !== -1) {
    logArray.splice(logIndex, 1);
    res.status(200).send(logArray);
  } else {
    res.status(404).send(`No log with ID ${id} found.`);
  }
});

// Update
router.put('/:id', (req, res) => {
  const { id } = req.params;
  let log = logArray.find((log) => log.id === parseInt(id));
  log = req.body;
  res.status(200).send(log);
});

module.exports = router;
