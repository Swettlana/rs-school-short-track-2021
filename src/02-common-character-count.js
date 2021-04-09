/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let count = 0;
  let index;
  let str = str1;
  let STR = str2;
  for (let i = 0; i < str.length; i++) {
    if (STR.includes(str[i])) {
      count++;
      index = STR.indexOf(str[i]);
      const elem = STR[index];
      STR = STR.replace(elem, '');
      str = str.replace(str[i], '');
      i -= 1;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
