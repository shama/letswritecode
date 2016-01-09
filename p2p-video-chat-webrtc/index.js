// The following lines try to handle getUserMedia in many different browsers
if (navigator.mediaDevices.getUserMedia) {
  function getUserMedia (constraints, ready, err) {
    navigator.mediaDevices.getUserMedia(constraints).then(ready).catch(err)
  }
} else {
  var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia).bind(navigator)
  if (!getUserMedia) {
    throw new Error('getUserMedia is not supported')
  }
}

getUserMedia({ video: true, audio: false }, function (stream) {
  var Peer = require('simple-peer')
  var peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false,
    stream: stream
  })

  peer.on('signal', function (data) {
    document.getElementById('yourId').value = JSON.stringify(data)
  })

  document.getElementById('connect').addEventListener('click', function () {
    var otherId = JSON.parse(document.getElementById('otherId').value)
    peer.signal(otherId)
  })

  document.getElementById('send').addEventListener('click', function () {
    var yourMessage = document.getElementById('yourMessage').value
    peer.send(yourMessage)
  })

  peer.on('data', function (data) {
    document.getElementById('messages').textContent += data + '\n'
  })

  peer.on('stream', function (stream) {
    var video = document.createElement('video')
    document.body.appendChild(video)

    video.src = window.URL.createObjectURL(stream)
    video.play()
  })
}, function (err) {
  console.error(err)
})
