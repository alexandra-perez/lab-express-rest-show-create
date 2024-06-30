const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome!');
});

const logsController = require('./controllers/logsController');
app.use('/logs', logsController);

module.exports = app;
