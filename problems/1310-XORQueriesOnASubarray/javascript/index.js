/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  return queries.map((query) =>
    arr.slice(query[0], query[1] + 1).reduce((acc, curr) => acc ^ curr, 0),
  );
};
