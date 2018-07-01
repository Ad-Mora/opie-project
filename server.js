const express = require('express');
const app = express();

// make the mongoose connection
require('./model-init');
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const validPaths = ['/', '/walk-test', '/records'];
const apiRoutes = require('./routes/api-routes');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// if the requested URL does not match any of the valid paths, a 404 not found is displayed
app.get(validPaths, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
