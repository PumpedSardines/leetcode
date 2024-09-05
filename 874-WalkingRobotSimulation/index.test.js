const robotSim = require("./index");

// const out1 = robotSim([4, -1, 3], []); // 25
// const out2 = robotSim([4, -1, 4, -2, 4], [[2, 4]]); // 65
// const out3 = robotSim([6, -1, -1, 6], []); // 36
const out4 = robotSim(
  [7, -2, -2, 7, 5],
  [
    [-3, 2],
    [-2, 1],
    [0, 1],
    [-2, 4],
    [-1, 0],
    [-2, -3],
    [0, -3],
    [4, 4],
    [-3, 3],
    [2, 2],
  ],
); // 4

// console.log(out1, 25);
// console.log(out2, 65);
// console.log(out3, 36);
console.log(out4, 4);
