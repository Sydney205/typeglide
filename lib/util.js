/**
 * Sleeper function
 * @param {number} ms - Milliseconds
 * @returns {Promise}
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { sleep };
