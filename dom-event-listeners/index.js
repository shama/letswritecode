const bear = document.createElement('button')
bear.textContent = 'growl'

// bear.addEventListener('click', function onclick (e) {
//   console.log(e.target)
// }, false)


const forest = document.createElement('div')
for (var i = 0; i < 100; i++) {
  const bear = document.createElement('button')
  bear.textContent = 'click ' + i
  forest.appendChild(bear)
}
document.body.appendChild(forest)

forest.addEventListener('click', function (e) {
  console.log(e.currentTarget)
}, false)

document.addEventListener('click', function (e) {
  console.log(e.target)
}, false)

const cat = document.createElement('button')
cat.textContent = 'meow'
forest.appendChild(cat)
cat.addEventListener('click', function (e) {
  e.stopPropagation()
  console.log('mew')
}, false)