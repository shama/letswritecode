var $ = require('jquery')

var button = $('<button/>').html('click me').on('click', function() {
  alert('it worked')
})

module.exports = button
