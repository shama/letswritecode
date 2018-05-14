require('./bears.js')
require('./sizer.js')

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.attributeName === 'style') {
      centerModal()
    }
    if (mutation.addedNodes.length) {
      console.log('Added', mutation.addedNodes[0])
    }
    if (mutation.removedNodes.length) {
      console.log('Removed', mutation.removedNodes[0])
    }
  })
})
const bears = document.querySelector('ul.bears')
observer.observe(bears, {
  childList: false,
  attributes: true
})

function centerModal () {
  const width = parseInt(bears.offsetWidth, 10)
  const height = parseInt(bears.offsetHeight, 10)
  Object.assign(bears.style, {
    top: '50%',
    left: '50%',
    marginTop: -(height / 2) + 'px',
    marginLeft: -(width / 2) + 'px',
  })
}

// const poller = setInterval(function () {
//   const bear = document.querySelector('ul.bears li')
//   if (bear) {
//     console.log(bear)
//     clearInterval(poller)
//   }
// }, 1000)