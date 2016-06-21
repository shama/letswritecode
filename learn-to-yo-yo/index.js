var yo = require('yo-yo')
var css = require('dom-css')

// var element = yo`<div>Grrrr</div>`
// document.body.appendChild(element)
//
// setTimeout(function () {
//   yo.update(element, yo`<h1>Growl</h1>`)
// }, 1000)

function list (items, onadd) {
  return yo`<ul>
    ${items.map(function (item) {
      return yo`<li>${item}</li>`
    })}
    <li>${button(onadd)}</li>
  </ul>`
}

function button (onclick) {
  var el = yo`<button onclick=${onclick}>add bear</button>`
  css(el, {
    'border-radius': 10
  })
  return el
}

var bears = ['Polar', 'Brown', 'Grizzly']
var element = list(bears, function onadd () {
  bears.push('Black')
  yo.update(element, list(bears, onadd))
})
document.body.appendChild(element)
