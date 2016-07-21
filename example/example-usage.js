'use strict'

const amocha = require('amocha')
const co = require('co')

co(function * () {
  // Run tests
  yield amocha('test/**/*_test.js', {})

  // Measure coverage
  yield amocha.coverage('test/**/*_test.js', {
    dir: 'coverage'
  })
}).catch((err) => console.error(err))
