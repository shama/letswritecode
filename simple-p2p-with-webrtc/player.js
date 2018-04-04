module.exports = Player

function Player (data) {
  data = data || {}
  this.color = data.color || randomColor()
  this.x = 0
  this.y = 0
  this.element = document.createElement('div')
  Object.assign(this.element.style, {
    width: '16px',
    height: '16px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    backgroundColor: this.color
  })
  document.body.appendChild(this.element)
}

Player.prototype.update = function (data) {
  data = data || {}
  this.x = data.x || this.x
  this.y = data.y || this.y
  Object.assign(this.element.style, {
    top: this.y + 'px',
    left: this.x + 'px'
  })
}

function randomColor () {
  return '#' + ((1 << 24) * Math.random() | 0).toString()
}