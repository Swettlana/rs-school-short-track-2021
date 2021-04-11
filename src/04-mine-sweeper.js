/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rez = [];
  let n = matrix.length;
  let m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j]) {
        rez.push(1);
      } else {
        let count = 0;
        for (let a = i - 1; a < i + 2; a++) {
          for (let b = j - 1; b < j + 2; b++) {
            try {
              if (matrix[a][b]) {
                count++;
              }
            } catch (e) {
              continue;
            }
          }
        }
        rez.push(count);
      }
    }
  }
  const arr = [];
  for (let i = 0; i < rez.length / m; i++) {
    arr[i] = rez.slice(i * m, i * m + m);
  }
  return arr;
}

module.exports = minesweeper;
