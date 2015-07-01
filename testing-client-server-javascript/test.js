var Bear = require('./index.js')
var test = require('tape')

test('should growl', function (assert) {
  var bear = new Bear()
  var result = bear.growl()
  assert.equal(result, 'The any bear says grrr')
  assert.end()
})
