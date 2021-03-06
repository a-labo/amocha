/**
 * Async wrapper for mocha
 * @module amocha
 */

'use strict'

const amocha = require('./amocha')

const lib = amocha.bind(this)

Object.assign(lib, amocha, {
  amocha
})

module.exports = lib