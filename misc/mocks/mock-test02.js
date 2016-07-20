'use strict'

const assert = require('assert')
const doSomething = require('./mock-module01')

describe('mock-test-02', function () {
  it('foo', () => {
    assert.ok(1 + 3 < 5)
    doSomething()
  })
})

/* global describe, it */