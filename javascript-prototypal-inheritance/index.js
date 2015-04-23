function Bear(type) {
  this.type = type
}
Bear.prototype.growl = function() {
  console.log('The ' + this.type + ' bear says grrr')
}

function Grizzly() {
  Bear.call(this, 'grizzly')
}
Grizzly.prototype = Object.create(Bear.prototype)
// Grizzly.prototype.growl = function() {
//   console.log('on the Grizzly.prototype')
// }

//var grizzly = new Bear('grizzly')

var grizzly = new Grizzly()
var polar = new Bear('polar')


//grizzly.growl = function() { console.log('override') }
console.log(grizzly.growl())
