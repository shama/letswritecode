var fs = require('fs')
var Transform = require('stream').Transform
var inherits = require('util').inherits

function ActualBears () {
  Transform.call(this)
}
inherits(ActualBears, Transform)

ActualBears.prototype._transform = function (chunk, enc, done) {
  chunk = chunk.toString().split('\n').filter(function (bear) {
    return (bear !== 'koala')
  }).join('\n')
  this.push(chunk)
  done()
}

var read = fs.createReadStream('bears.txt')
var write = fs.createWriteStream('actualbears.txt')

read.pipe(new ActualBears()).pipe(write)
