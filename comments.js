// Create web server
// Usage: node comments.js
// Test with curl -X POST -d "id=5&comment=hello" http://localhost:8080/comments

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var comments = [];

http.createServer(function (req, res) {
  var url_parts = url.parse(req.url);
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      var post = querystring.parse(body);
      comments.push(post);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Comment added\n');
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(comments) + '\n');
  }
}).listen(8080, 'localhost');