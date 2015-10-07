var http = require('http')
var fs = require('fs')
var browserify = require('browserify')
var db = require('level')('./db')
var template = require('lodash').template(fs.readFileSync('index.html', 'utf8'))
var sanitize = require('sanitize-html')

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Security-Policy', "script-src 'self' https://apis.google.com; style-src 'self'")

  switch (req.url) {
    case '/index.js':
      // If requesting index.js, browserify our script and return it
      browserify('index.js').bundle().pipe(res)
      break
    case '/index.css':
      // If requesting index.css, just return that file
      fs.createReadStream('index.css').pipe(res)
      break
    case '/addcomment':
      // When adding a comment, put into the database
      var comment = []
      req.on('data', function (data) {
        comment.push(data)
      })
      req.on('end', function () {
        comment = comment.join('')
        db.put(Date.now(), comment, function () {
          res.end()
        })
      })
      break
    default:
      // The default route is our index.html file, grab comments and
      // feed to our template
      var comments = []
      db.createReadStream().on('data', function (data) {
        comments.push(data.value)
      }).on('end', function () {
        res.end(template({comments:comments}))
      })
      break
  }
})

server.listen(9966, function () {
  console.log('Server running at http://locahost:9966')
})
