/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, val) {
  let beg = 0;
  let end = arr.length;
  while (end - beg > 0) {
    const center = Math.floor((end + beg) / 2);
    if (arr[center] === val) {
      return center;
    }
    if (arr[center] > val) {
      end = center;
    } else {
      beg = center;
    }
  }
  return 'no found';
}

module.exports = findIndex;
