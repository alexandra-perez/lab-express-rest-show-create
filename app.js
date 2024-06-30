const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome!');
});

const logsController = require('./controllers/logsController');
app.use('/logs', logsController);

app.get('*', (req, res) => {
  res.status(404);
  res.send(`<h1>Page not found</h1><p><a href="/logs">Back to home page</a></p>`)
});

module.exports = app;
