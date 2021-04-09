/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = arr;
  // создаем массив из индексов элементо "-1"
  let arrIndex = [];
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === -1) {
      arrIndex.push(i);
    }
  }
  //новый массив без -1
  let arrNew = [];
  for (let z = 0; z < array.length; z++) {
    if (array[z] !== -1) {
      arrNew.push(array[z]);
    }
  }
  // let newArr = array.filter((el) => !(el == -1));
  arrNew.sort((a, b) => a - b);
  for (let j = 0; j < arrIndex.length; j++) {
    arrNew.splice(arrIndex[j], 0, -1);
  }
  return arrNew;
}

module.exports = sortByHeight;
