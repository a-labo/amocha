/**
 * Test case for amocha.
 * Runs with mocha.
 */
'use strict'

const amocha = require('../lib/amocha.js')
const assert = require('assert')
const co = require('co')

describe('amocha', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Amocha', () => co(function * () {
    yield amocha(
      'mocks/*_test.js',
      {
        cwd: `${__dirname}/../misc`
      }
    )
  }))
})

/* global describe, before, after, it */
