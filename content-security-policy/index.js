var nets = require('nets')
var assign = require('object-assign')

// When the form is submitted, add a new comment
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  var comment = document.querySelector('textarea').value
  nets({
    url: '/addcomment',
    method: 'POST',
    body: comment
  }, function () {
    location.reload()
  })
}, false)

var h1 = document.querySelector('h1')
//h1.setAttribute('style', 'color: red; text-shadow: 1px 1px 1px #000;')
// h1.style.color = 'red'
// h1.style.textShadow = '1px 1px 1px #000'
assign(h1.style, {
  color: 'red',
  textShadow: '1px 1px 1px #000'
})
