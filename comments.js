// Create web server
// Create a web server that listens to requests on port 3000 and serves the comments.json file. Your server should respond to requests to /comments with the contents of the comments.json file.

// The comments.json file contains an array of objects, each with a comment property.

// You can read the contents of a file by using fs.readFile and then send the contents of the file using res.end.

// You can start your server by running node comments.js.

// You can test your server by visiting http://localhost:3000/comments in your browser.

// You can use the comments.json file from the previous exercise.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.readFile('./comments.json', 'utf8', function (err, data) {
    res.end(data);
  });
}).listen(3000);