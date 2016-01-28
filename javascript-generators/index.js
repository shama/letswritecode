// function* bears () {
//   var kind = yield 'grizzly'
//   yield kind + ' polar'
//   console.log('kind: ' + kind)
//   return 'done'
// }
// var bear = bears()
// console.log(bear.next().value)
// console.log(bear.next('ferocious').value)
// console.log(bear.next().value)

var fs = require('fs')

run(function* (resume) {
  var contents = yield fs.readFile('big.file', 'utf8', resume)
  var uppercase = contents.toUpperCase()
  yield fs.writeFile('uppercase.file', uppercase, resume)
  console.log('All done!')
})

function run (generator) {
  var data = null, yielded = false
  var iterator = generator(function () {
    data = arguments
    check()
  })
  yielded = !!(iterator.next())
  check()
  function check () {
    while (data && yielded) {
      var err = data[0], item = data[1]
      data = null
      yielded = false
      if (err) return iterator.throw(err)
      yielded = !!(iterator.next(item))
    }
  }
}
