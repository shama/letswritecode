function Bear(options) {
  if (!(this instanceof Bear)) return new Bear(options)
  options = options || {}
  this.type = options.type || 'bear'
  this.says = options.says || 'nothing'
}
module.exports = Bear

Bear.prototype.growl = function() {
  console.log('The ' + this.type + ' bear says ' + this.says)
  return this
}

Bear.prototype.walks = function() {
  console.log('The ' + this.type + ' bear walks')
  return this
}

Bear.prototype.eats = function() {
  console.log('The ' + this.type + ' bear eats')
  return this
}
