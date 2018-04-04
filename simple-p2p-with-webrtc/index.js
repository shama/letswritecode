const signalhub = require('signalhub')
const hub = signalhub('my-game', [
  'http://localhost:8080'
])

const Player = require('./player.js')
const you = new Player()

const players = {}
hub.subscribe('update').on('data', function (data) {
  if (data.color === you.color) return
  if (!players[data.color]) {
    players[data.color] = new Player(data)
  }
  players[data.color].update(data)
  //console.log(data)
})

setInterval(function () {
  //hub.broadcast('update', window.location.hash)
  you.update()
  hub.broadcast('update', you)
}, 100)

document.addEventListener('keypress', function (e) {
  const speed = 16
  switch (e.key) {
    case 'a':
      you.x -= speed
      break
    case 'd':
      you.x += speed
      break
    case 'w':
      you.y -= speed
      break
    case 's':
      you.y += speed
      break
  }
}, false)


