const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //console.log(!Array.isArray(arr));
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const newArr = [...arr];
  const buffer = [];
  for (let i = 0; i < newArr.length; i++) {
    //console.log(newArr.indexOf(i + 1), "indes + 1");
    if (newArr[i] === "--double-next") {
      if (newArr.indexOf(i + 1) === -1) {
        return buffer;
        // newArr.splice(i, 1);
      } else {
        newArr[i] = newArr[i + 1];
      }
    } else if (newArr[i] === "--double-prev") {
      if (newArr.indexOf(i - 1) === -1) {
        newArr.splice(i, 1);
      } else {
        newArr[i] = newArr[i - 1];
      }
    } else if (newArr[i] === "--discard-next") {
      if (newArr.indexOf(i + 1) === -1) {
        return buffer;
      } else {
        newArr.splice(i, 2);
      }
    } else if (newArr[i] === "--discard-prev") {
      if (newArr.indexOf(i - 1) === -1) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i, 1);
        buffer.pop();
      }
      //console.log(newArr, "new");
      //console.log(buffer + "buf");
    } else if (newArr[i] === undefined) {
      newArr.splice(i, 1);
    }
    buffer.push(newArr[i]);
  }
  return buffer;
}

module.exports = {
  transform,
};
