'use strict'

const amocha = require('amocha')
const co = require('co')

co(function * () {
  yield amocha('test/**/*_test.js', {})
}).catch((err) => console.error(err))
