// Had to look up the solution :(

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  let i = 0;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === s[i]) i++;
  }
  if (i === s.length) {
    return s;
  }

  const topPart = s.slice(i, s.length);

  return (
    topPart.split("").reverse().join("") +
    shortestPalindrome(s.slice(0, i)) +
    topPart
  );
};

module.exports = shortestPalindrome;
