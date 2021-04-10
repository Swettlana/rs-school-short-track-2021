/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const str = String(num);
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const n = +str.replace(str[i], '');
    if (max < n) {
      max = n;
    }
  }
  return max;
}

module.exports = deleteDigit;
