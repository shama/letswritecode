var canvas = document.createElement('canvas')
document.body.appendChild(canvas)

canvas.width = window.screen.width
canvas.height = window.screen.height

var context = canvas.getContext('2d')

//context.fillStyle = 'red'
//context.fillRect(0, 0, 100, 100)

// context.fillStyle = 'green'
// context.fillRect(200, 0, 100, 100)

var x = 0
var y = 0
window.requestAnimationFrame(function loop() {
  //x += 1
  //y += .5

  context.clearRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = 'red'
  context.fillRect(x, 0, 100, 100)

  context.fillStyle = 'green'
  context.fillRect(200, y, 100, 100)

  window.requestAnimationFrame(loop)
})


document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    x += 10
  }
  if (event.button === 2) {
    y += 10
  }
})
