// var div = document.createElement('div')
// div.innerHTML = 'hello'
// document.body.appendChild(div)

var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')

var data = ['grizzly', 'polar', 'brown']

function render (bears) {
  bears = bears.map(function (bear) {
    return h('li', bear)
  })
  bears.push(h('li', [
    h('button', {
      onclick: function (event) {
        data.push('new bear')
        update()
      }
    }, 'add bear')
  ]))
  return h('ul', bears)
}

var tree = render(data)
var rootNode = createElement(tree)
document.body.appendChild(rootNode)

function update () {
  var newTree = render(data)
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}
