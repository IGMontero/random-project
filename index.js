require('./config/config');

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

// Init express
const app = express();

// Security
app.use(helmet());

// Parsers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '30mb'}));
app.use(cookieParser());

// Let express serve static files.
app.use(express.static(path.join(__dirname, './client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = CONFIG.port;
app.listen(PORT, () => {
  console.log("Listening to port "+PORT);
});
