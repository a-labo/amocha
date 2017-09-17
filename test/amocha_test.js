/**
 * Test case for amocha.
 * Runs with mocha.
 */
'use strict'

const amocha = require('../lib/amocha.js')
const assert = require('assert')


describe('amocha', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Amocha', async () => {
    await amocha(
      'mocks/*test*.js',
      {
        cwd: `${__dirname}/../misc`
      }
    )
  })
})

/* global describe, before, after, it */
