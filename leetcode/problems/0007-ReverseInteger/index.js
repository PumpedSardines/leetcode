/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  a = +`${Math.abs(x)}`.split("").reverse().join() * Math.sign(x);
  return a > 2 ** 31 - 1 || a < -(2 ** 31) ? 0 : a;
};
