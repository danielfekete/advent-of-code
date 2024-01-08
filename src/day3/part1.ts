const fs = require("fs");

function part1(input: string) {
  return input.split("\n");
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
console.log(part1(input));
