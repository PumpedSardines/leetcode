const missingRolls = require("./index");

const test1 = missingRolls([3, 2, 4, 3], 4, 2);
console.log(test1, [6, 6]); // [6, 6]

const test2 = missingRolls([1, 5, 6], 3, 4);
console.log(test2, [2, 3, 2, 2]); // [2, 3, 2, 2]

const test3 = missingRolls([1, 2, 3, 4], 6, 4);
console.log(test3, []); // []
