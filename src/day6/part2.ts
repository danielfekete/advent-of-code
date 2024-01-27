const fs = require("fs");

console.time();

function part2(input: string) {}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const result = part2(input);
console.timeEnd();
console.log(result);
