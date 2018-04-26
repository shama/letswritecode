const person = {
  first: 'Bear',
  last: 'McBearison'
}

const cleverPerson = new Proxy(person, {
  get: function (target, prop) {
    if (!(prop in target)) {
      return prop.split('_').map(function (part) {
        return target[part]
      }).join(' ')
    }
    return target[prop]
  }
})

console.log(cleverPerson.last_first_first_first_first_first)

cleverPerson.last = 'Beary'
console.log(cleverPerson.first_last)