const _ = require('lodash')

exports.parse = function parse (opts) {
  const options = _.pick(opts, [ 'page', 'per_page' ])

  return _.defaults({}, options, {
    page: '1',
    per_page: '10'
  })
}
