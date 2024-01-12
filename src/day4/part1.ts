const fs = require("fs");

console.time();

function part1(input: string) {
  let sum = 0;
  input.split(/\n/).forEach((line, i) => {
    const [, numsStr] = line.split(":");
    const [winningNums = [], myNums = []] = numsStr
      .split("|")
      .map((nums) => nums.split(/\s/).filter((n) => n.match(/\d+/)));
    const myWinningNums = myNums.filter((num) => winningNums.includes(num));
    if (myWinningNums.length) {
      sum += Math.pow(2, myWinningNums.length - 1);
    }
  });
  return sum;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const solution = part1(input);
console.timeEnd();
console.log(`The solution is: ${solution}`);
