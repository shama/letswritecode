var xhr = require('xhr')

module.exports = function (uri) {
  return new Promise(function (resolve, reject) {
    xhr(uri, function (err, res, body) {
      if (err) return reject(err)
      if (res.statusCode !== 200) return reject(new Error(body))
      resolve(body)
    })
  })
}
