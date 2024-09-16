/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  return timePoints
    .flatMap((v) => {
      const base = +v.split(":")[0] * 60 + +v.split(":")[1];
      return [base, base + 24 * 60];
    })
    .sort((a, b) => a - b)
    .reduce(
      ({ last, min }, cur) => {
        return {
          last: cur,
          min: Math.min(cur - (last ?? -Infinity), min),
        };
      },
      { last: null, min: Infinity },
    ).min;
};

module.exports = findMinDifference;
