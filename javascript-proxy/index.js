let bears = { grizzly: true }

let grizzlyCount = 0

const proxyBears = new Proxy(bears, {
  get: function (target, prop) {
    if (prop === 'grizzly') grizzlyCount++
    return target[prop]
  },
  set: function (target, prop, value) {
    if (['grizzly', 'brown', 'polar'].indexOf(prop) === -1) {
      throw new Error('THAT IS TOTALLY NOT A BEAR!')
    }
    target[prop] = value
  },
  deleteProperty: function (target, prop) {
    console.log(`You have deleted ${prop}`)
    delete target[prop]
  }
})

//proxyBears.aardvark = true
proxyBears.polar = true
//delete proxyBears.polar
//console.log(proxyBears.polar)

// proxyBears.grizzly
// proxyBears.grizzly
// proxyBears.grizzly
// proxyBears.grizzly
// console.log(grizzlyCount)

function growl() {
  return 'grrr'
}
const loudGrowl = new Proxy(growl, {
  apply: function (target, thisArg, args) {
    return target().toUpperCase() + '!!!'
  }
})

console.log(loudGrowl())











