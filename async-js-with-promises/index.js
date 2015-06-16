var fetch = require('./fetch.js')

// Using then and catch
// var promise = fetch('bears.txt')
//
// promise.then(function (bears) {
//   console.log(bears)
//   //throw new Error('Uh oh')
//   return fetch('fish.txt')
// }).then(function (fish) {
//   console.log(fish)
// }).catch(function (err) {
//   console.error('WE GOT ERROR', err)
// })

// Using Promise.all
// Promise.all([
//   fetch('bears.txt'),
//   fetch('fish.txt'),
// ]).then(function (values) {
//   var bears = values[0]
//   var fish = values[1]
//   console.log(bears, fish)
// })

// Creating promises
var promise = new Promise(function (resolve, reject) {
  //reject(new Error("uh oh"))
  resolve('all good')
})

promise.then(function (result) {
  console.log('was it good?', result)
}).catch(function (err) {
  console.error('ERR', err)
})
