var http = require('http');

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.end('<strong>obligatory bear!</strong>');
  }
});

server.listen(8080, function () {
  console.log('Im listening on port 8080');
});
