navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {

  const signalhub = require('signalhub')
  const createSwarm = require('webrtc-swarm')
  const hub = signalhub('my-game', [
    'http://localhost:8080'
  ])
  const swarm = createSwarm(hub, {
    stream: stream
  })

  const Player = require('./player.js')
  const you = new Player()
  you.addStream(stream)

  const players = {}
  swarm.on('connect', function (peer, id) {
    if (!players[id]) {
      players[id] = new Player()
      peer.on('data', function (data) {
        data = JSON.parse(data.toString())
        players[id].update(data)
      })
      players[id].addStream(peer.stream)
    }
  })

  swarm.on('disconnect', function (peer, id) {
    if (players[id]) {
      players[id].element.parentNode.removeChild(players[id].element)
      delete players[id]
    }
  })

  // hub.subscribe('update').on('data', function (data) {
  //   if (data.color === you.color) return
  //   if (!players[data.color]) {
  //     players[data.color] = new Player(data)
  //   }
  //   players[data.color].update(data)
  //   //console.log(data)
  // })

  setInterval(function () {
    //hub.broadcast('update', window.location.hash)
    you.update()
    //hub.broadcast('update', you)
    const youString = JSON.stringify(you)
    swarm.peers.forEach(function (peer) {
      peer.send(youString)
    })
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

})

