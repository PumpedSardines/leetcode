/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = (n) =>
  new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .sort();
