/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const final = s
    .split("")
    .map((v) => map[v])
    .reduce(
      (acc, v) => {
        if (v > acc.last) {
          acc.sum += v - acc.last;
          acc.last = Infinity;
        } else if (isFinite(acc.last)) {
          acc.sum += acc.last;
          acc.last = v;
        } else {
          acc.last = v;
        }
        return acc;
      },
      { last: Infinity, sum: 0 },
    );

  return (isFinite(final.last) ? final.last : 0) + final.sum;
};
