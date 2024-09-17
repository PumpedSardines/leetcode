/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  return timePoints
    .map((v) => +v.split(":")[0] * 60 + +v.split(":")[1])
    .flatMap((v) => [v, v + 24 * 60])
    .sort((a, b) => a - b)
    .reduce(
      (v, cur) => Math.min(cur - (last ?? -Infinity), ((last = cur), v)),
      (last = Infinity),
    );
};

module.exports = findMinDifference;
