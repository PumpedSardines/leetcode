/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const minutes = timePoints.flatMap((v) => {
    if (v === "00:00") return [24 * 60, 0];
    const base = +v.split(":")[0] * 60 + +v.split(":")[1];
    return [base, base + 24 * 60];
  });

  let max = Infinity;
  for (let i = 0; i < minutes.length; i++) {
    for (let j = i + 1; j < minutes.length; j++) {
      max = Math.min(Math.abs(minutes[i] - minutes[j]), max);
    }
  }
  return max;
};

module.exports = findMinDifference;
