var through = require('through2')
module.exports = function (file) {
  var entireFile = []
  return through(function (part, enc, next) {
    entireFile.push(part)
    next()
  }, function (done) {
    entireFile = entireFile.join('')

    entireFile = entireFile.replace(/hi/g, 'hello')
    this.push(entireFile)
    done()
  })
}
