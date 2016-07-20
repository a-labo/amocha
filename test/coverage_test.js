/**
 * Test case for coverage.
 * Runs with mocha.
 */
'use strict'

const coverage = require('../lib/coverage.js')
const assert = require('assert')
const co = require('co')

describe('coverage', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Coverage', () => co(function * () {
    yield coverage(
      'mocks/*test*.js',
      {
        cwd: `${__dirname}/../misc`,
        dir: `${__dirname}/../tmp/testing-coverage`
      }
    )
  }))
})

/* global describe, before, after, it */
