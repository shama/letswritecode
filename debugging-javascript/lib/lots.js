
function addBear (arr) {
  arr.push('bear' + arr.length)
}
module.exports.addBear = addBear

module.exports = function () {
  debugger
  var bears = []
  for (var i = 0; i < 100; i++) {
    addBear(bears)
  }
  return bears
}
