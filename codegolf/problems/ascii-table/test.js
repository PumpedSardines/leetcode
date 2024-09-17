const fs = require("fs");
let final = "";
globalThis.print = (v) => (final += v);
const code = fs.readFileSync("./better.js", "utf-8");

function test() {
  eval(code);
}

test();
console.log(final);
