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

// Path: public/index.html
// Create a web page

<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <ul id="comments"></ul>
    <script>
      fetch('/comments')
        .then(response => response.json())
        .then(comments => {
          const commentsList = document.getElementById('comments');
          comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerText = comment.name;
            commentsList.appendChild(li);
          });
        });
    </script>
  </body>
</html>

// Path: comments.json
// Create a JSON file

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "