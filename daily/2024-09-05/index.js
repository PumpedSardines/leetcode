/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  // Get an array rolls containing part of all rolls
  // Get the mean of all rolls
  // Get the missing n rolls

  // Idea: Sum all rolls into a number
  const totalRolls = rolls.length + n;
  const finalSum = rolls.reduce((a, b) => a + b, 0);
  const needed = mean * totalRolls - finalSum;

  if (needed < n || needed > 6 * n) return [];

  const missingRoll = Math.floor(needed / n);
  const diff = needed - missingRoll * n;
  const newRolls = Array(n).fill(missingRoll);
  for (let i = 0; i < diff; i++) {
    newRolls[i % n]++;
  }
  return newRolls;
};

if (module?.exports) {
  module.exports = missingRolls;
}
