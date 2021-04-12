/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const rezStr = [];
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum++;
    } else if (sum > 1) {
      rezStr.push(sum, str[i]);
      sum = 1;
    } else {
      rezStr.push(str[i]);
    }
  }
  return rezStr.join('');
}

module.exports = encodeLine;
