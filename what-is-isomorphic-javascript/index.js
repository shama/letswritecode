// var fs = require('fs')
// function upperCaseRead (filename, done) {
//   fs.readFile(filename, function (err, file) {
//     done(null, file.toString().toUpperCase())
//   })
// }
//
// upperCaseRead('bears.txt', function (err, file) {
//   console.log(file)
// })

var document = require('global/document')

var ul = document.createElement('ul')
var bears = ['grizzly', 'polar']

bears.forEach(function (bear) {
  var li = document.createElement('li')
  li.innerText = bear
  ul.appendChild(li)
})

//document.body.appendChild(ul)

console.log(ul.toString())
