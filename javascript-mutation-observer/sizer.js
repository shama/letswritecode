setInterval(function sizer () {
  const bears = document.querySelector('ul.bears')
  Object.assign(bears.style, {
    position: 'absolute',
    border: '1px solid #ddd',
    width: (Math.random() * 200) + 'px',
    height: (Math.random() * 200) + 'px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,.3)',
    overflow: 'hidden',
    padding: '20px',
    listStyle: 'none'
  })
}, 1000)