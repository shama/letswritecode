var createBear = require('./bear.js')

var grizzly = createBear({
  type: 'grizzly'
})

grizzly.growl().walks().eats()
