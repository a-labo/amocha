/**
 * Run mocha tests
 * @function amocha
 * @param {string} pattern - Glob file name pattern
 * @param {Object} [options] - Optional settings
 * @param {string} reporter
 * @param {string} [options.cwd=process.cwd()] - Working directory path
 * @param {string} [options.reporter='spec'] - Mocha reporter
 * @param {number} [options.timeout=3000] - Timeout duration
 * @returns {Promise}
 */
'use strict'

const aglob = require('aglob')
const path = require('path')
const Mocha = require('mocha')
const coverage = require('./coverage')

/** @lends amocha */
async function amocha (pattern, options = {}) {
  const {
    cwd = process.cwd(),
    reporter = 'spec',
    timeout = 3000
  } = options
  const mocha = new Mocha({
    reporter,
    timeout
  })
  const filenames = await aglob(pattern, {cwd})
  for (const filename of filenames) {
    mocha.addFile(path.resolve(cwd, filename))
  }
  const failures = await new Promise((resolve) => {
    mocha.run((failures) => resolve(failures)
    )
  })
  process.on('exit', () => process.exit(failures))
  return failures
}

Object.assign(amocha, {coverage})

module.exports = amocha
