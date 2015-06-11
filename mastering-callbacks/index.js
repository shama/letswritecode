// Callback Chain
var fs = require('fs')

function getBears (filepath, done) {
  fs.readFile(filepath, function (err, bears) {
    if (err) return done(err)

    fs.readFile('bears.dictionary', function (err, dict) {
      if (err) return done(err)

      compareBears(bears, dict)
    })
  })

  function compareBears (bears, dict) {
    dict = dict.toString().split('\n')
    bears = bears.toString().split('\n').filter(function (bear) {
      return dict.indexOf(bear) !== -1
    })
    done(null, bears)
  }
}

getBears('bears.txt', function (err, bears) {
  console.log(bears)
})

// Callback Chunks
// var bears = ['grizzly', 'polar', 'brown']
// var count = bears.length
//
// bears = bears.map(function (bear) {
//   var img = new Image()
//   img.onload = function () {
//     next()
//   }
//   img.src = bear + '.jpg'
//   return img
// })
//
// function next() {
//   count--
//   if (count < 1) {
//     bears.forEach(function (bear) {
//       console.log(bear.width)
//       document.body.appendChild(bear)
//     })
//   }
// }

// Callback Series
// var bears = ['grizzly', 'polar', 'brown']
// var images = []
//
// function loadBears () {
//   var bear = bears.shift()
//   if (!bear) {
//     console.log('All bears are done', images)
//     return
//   }
//   var img = new Image()
//   img.onload = function () {
//     loadBears()
//   }
//   img.src = bear + '.jpg'
//   images.push(img)
// }
//
// loadBears()
