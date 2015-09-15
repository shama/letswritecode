var levelup = require('levelup')
var sublevel = require('level-sublevel')

var db = sublevel(levelup('./db', {
  db: require('leveldown'),
  valueEncoding: 'json'
}))

var bearsdb = db.sublevel('bears')
var regionsdb = db.sublevel('regions')

// regionsdb.put('northamerica', { name: 'North America' }, function (err) {
//   bearsdb.put('steve', { type: 'grizzly', region: 'northamerica' }, function () {
//
//   })
// })

var bears = []
var stream = bearsdb.createReadStream()
stream.on('data', function (bear) {
  regionsdb.get(bear.value.region, function (err, region) {
    bear.value.region = region
    bears.push(bear.value)
  })
})
stream.on('close', function () {
  console.log(bears)
})
