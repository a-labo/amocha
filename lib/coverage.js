'use strict'

const aglob = require('aglob')
const execcli = require('execcli')
const _mocha = require.resolve('mocha/bin/_mocha')

/** @lends coverage */
async function coverage (pattern, options = {}) {
  const {
    dir = 'coverage',
    timeout = 6000,
    cwd = process.cwd()
  } = options
  const filenames = await aglob(pattern, {cwd})
  if (filenames.length === 0) {
    throw new Error(`File not found with pattern: ${pattern}`)
  }
  const istanbul = require.resolve('istanbul/lib/cli.js')
  return execcli(istanbul, [
    'cover', '--dir', dir, _mocha, '--', '-t', timeout, ...filenames
  ], {
    cwd,
    notfound: 'try `npm install istanbul -g`'
  })
}

module.exports = coverage
