
const IndexedArray = new Proxy(Array, {
  construct: function (target, [originalArray]) {
    const index = {}
    originalArray.forEach(function (item) {
      index[item.id] = item
    })

    const newArray = new target(...originalArray)

    return new Proxy(newArray, {
      get: function (target, name) {
        if (name === 'push') {
          return function (item) {
            index[item.id] = item
            return target[name].call(target, item)
          }
        } else if (name === 'findById') {
          return function (searchId) {
            return index[searchId]
          }
        }
        return target[name]
      }
    })
  }
})

const bears = new IndexedArray([
  {
    id: 2,
    name: 'grizzly',
  },
  {
    id: 4,
    name: 'black',
  },
  {
    id: 3,
    name: 'polar',
  },
])

bears.push({
  id: 55,
  name: 'brown'
})

const brown = bears.findById(55)
console.log(brown)
console.log(bears.findById(3))

// const index = {}
// bears.forEach(function (bear) {
//   index[bear.id] = bear
// })
//
// const polar = index[3]
// const black = index[4]
