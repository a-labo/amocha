/**
 * Test case for coverage.
 * Runs with mocha.
 */
'use strict'

const coverage = require('../lib/coverage.js')
const assert = require('assert')


describe('coverage', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Coverage', async () => {
    await coverage(
      'mocks/*test*.js',
      {
        cwd: `${__dirname}/../misc`,
        dir: `${__dirname}/../tmp/testing-coverage`
      }
    )
  })
})

/* global describe, before, after, it */
