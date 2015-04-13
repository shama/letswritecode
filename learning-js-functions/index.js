

var context = {
  type: 'grizzly',
  says: 'grr'
}

bear = bear.bind(context)

//var says = bear.apply(context, ['grr', 'grizzly'])
var says = bear()
console.log(says)

// var bear = function() {
//   return 'The ' + arguments[0] + ' bear says: ' + arguments[1]
// }

function bear() {
  console.log(this)
  return 'The ' + this.type + ' bear says: ' + this.says
}
