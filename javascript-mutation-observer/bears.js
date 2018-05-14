const theOnlyBearsIKnow = ['Polar', 'Brown', 'Grizzly']

setTimeout(function addBear () {
  const bears = document.querySelector('ul.bears')
  const bear = document.createElement('li')
  bear.textContent = theOnlyBearsIKnow[parseInt(Math.random() * theOnlyBearsIKnow.length, 10)]
  bears.appendChild(bear)
}, Math.random() * 2000)

setTimeout(function removeBear () {
  const bears = document.querySelector('ul.bears')
  bears.removeChild(bears.querySelector('li'))
}, Math.random() * 2000 + 2000)