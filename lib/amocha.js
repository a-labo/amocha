/**
 * Run mocha tests
 * @function amocha
 * @param {string} pattern - Glob file name pattern
 * @param {Object} [options] - Optional settings
 * @param {string} reporter
 * @param {string} [options.cwd=process.cwd()] - Working directory path
 * @param {string} [options.reporter='spec'] - Mocha reporter
 * @parma {number} [options.timeout=3000] - Timeout duration
 * @returns {Promise}
 */
'use strict'

const aglob = require('aglob')
const defaults = require('defaults')
const path = require('path')
const co = require('co')
const Mocha = require('mocha')

/** @lends amocha */
function amocha (pattern, options = {}) {
  let { cwd, reporter, timeout } = defaults(options, {
    cwd: process.cwd(),
    reporter: 'spec',
    timeout: 3000
  })
  return co(function * () {
    const mocha = new Mocha({ reporter })
    let filenames = yield aglob(pattern, { cwd })
    for (let filename of filenames) {
      mocha.addFile(path.resolve(cwd, filename))
    }
    let failures = yield new Promise((resolve) => {
      mocha.run((failures) => resolve(failures)
      )
    })
    process.on('exit', () => process.exit(failures))
    return failures
  })
}

module.exports = amocha
