'use strict'

const co = require('co')
const path = require('path')
const aglob = require('aglob')
const execcli = require('execcli')
const _mocha = require.resolve('mocha/bin/_mocha')

/** @lends coverage */
function coverage (pattern, options = {}) {
  let {
    dir = 'coverage',
    timeout = 6000,
    cwd = process.cwd()
  } = options
  return co(function * () {
    let filenames = yield aglob(pattern, { cwd })
    if (filenames.length === 0) {
      throw new Error(`File not found with pattern: ${pattern}`)
    }
    let istanbul = require.resolve('istanbul/lib/cli.js')
    return execcli(istanbul, [
      'cover', '--dir', dir, _mocha, '--', '-t', timeout, ...filenames
    ], {
      cwd,
      notfound: 'try `npm install istanbul -g`'
    })
  })
}

module.exports = coverage
