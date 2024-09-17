/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let highest = -Infinity;
  let length = 0;

  let curNum = 0;
  let curCount = 0;

  for (const num of nums) {
    if (curNum != num) {
      if (curNum > highest) {
        highest = curNum;
        length = curCount;
      } else if (curNum === highest) {
        length = Math.max(length, curCount);
      }

      curNum = num;
      curCount = 1;
    } else {
      curCount++;
    }
  }

  if (curNum > highest) {
    highest = curNum;
    length = curCount;
  } else if (curNum === highest) {
    length = Math.max(length, curCount);
  }

  return length;
};
