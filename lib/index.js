/**
 * Async wrapper for mocha
 * @module amocha
 */

'use strict'

const amochca = require('./amochca')

let lib = amochca.bind(this)

Object.assign(lib, amochca, {
  amochca
})

module.exports = lib