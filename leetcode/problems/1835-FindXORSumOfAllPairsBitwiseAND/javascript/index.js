/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
  const xorArr1 = arr1.reduce((acc, c) => acc ^ c);
  const xorArr2 = arr2.reduce((acc, c) => acc ^ (c & xorArr1), 0);

  return xorArr2;
};
