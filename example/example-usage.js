'use strict'

const amocha = require('amocha')

;(async () => {
  // Run tests
  await amocha('test/**/*_test.js', {})

  // Measure coverage
  await amocha.coverage('test/**/*_test.js', {
    dir: 'coverage'
  })
}).catch((err) => console.error(err))
