// var polar = false
// var bears = `
// ${polar ? 'Polar' : ''}
// Brown
// Grizzly
// `
// var out = `Bears: ${bears.split('\n').join(', ')}`
// console.log(out)

// var bears = ['Polar', 'Brown', 'Grizzly']
// var html = `<ul>
//   ${bears.map(function (bear) {
//     return `<li>${bear}</li>`
//   }).join('')}
// </ul>`
// console.log(html)

var bear = 'Grizzly'
var createElement = html`<div>${bear}</div>`

function html (strings, expr1, expr2, expr3) {
  return function () {
    var el = document.createElement('div')
    el.textContent = expr1
    return el
  }
}

document.body.appendChild(createElement())

