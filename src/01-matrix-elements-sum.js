/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = 0;
  // считаем сколько всего стобцов (матрица прямоуг, берем любой эл-нт)
  const n = arr[0].length;
  // элементы первой строки никогда не будут по 0, можно сразу посчитать их сумму
  for (j = 0; j < n; j++) {
    sum += arr[0][j];
  }
  // проходимся по столбцам, а внутри по строкам ниже первой
  for (let j = 0; j < n; j++) {
    for (i = 1; i < arr.length; i++) {
      if (arr[i - 1][j] !== 0) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}
module.exports = getMatrixElementsSum;
