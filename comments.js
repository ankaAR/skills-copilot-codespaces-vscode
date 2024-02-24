// Create a web server

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.use(express.static('public'));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});