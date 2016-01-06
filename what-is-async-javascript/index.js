var nets = require('nets')

nets('one.bear', function (err, resp, one) {
  console.log(one.toString())
  done()
})
nets('two.bear', function (err, resp, two) {
  console.log(two.toString())
  done()
})
nets('three.bear', function (err, resp, three) {
  console.log(three.toString())
  done()
})

var count = 0
function done () {
  count++
  if (count >= 3) {
    console.log('All done')
  }
}


// var fs = require('fs')
//
// fs.readFile('one.bear', function (err, one) {
//   console.log(one)
// })
// fs.readFile('two.bear', function (err, two) {
//   console.log(two)
// })
// fs.readFile('three.bear', function (err, three) {
//   console.log(three)
// })
