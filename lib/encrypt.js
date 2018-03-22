const crypto = require('crypto')
const config = require('config')

exports.md5 = function md5 (text) {
  const hash = crypto.createHash('md5')
  const solt = config.get('app.solt')

  hash.update(text + solt)

  return hash.digest('hex')
}
