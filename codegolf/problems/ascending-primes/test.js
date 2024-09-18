const fs = require("fs");
let final = "";
globalThis.print = (v) => (final += v + "\n");
require("./index.js");
console.log(final);
