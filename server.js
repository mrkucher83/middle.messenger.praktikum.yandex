const express = require('express');
const path = require('path');

const app = express();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`App listening on http://${HOSTNAME}:${PORT}`);
});
