const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
const validPaths = ['/', '/walk-test', '/records'];

app.use(express.static('public'));

// if the requested URL does not match any of the valid paths, a 404 not found is displayed
app.get(validPaths, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
