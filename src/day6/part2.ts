const fs = require("fs");

console.time();

function part2(input: string) {
  let time = 0;
  let distance = 0;

  input.split("\n").forEach((line) => {
    const num = Number((line.match(/\d+/g) || []).join(""));
    if (line.match(/Time:/g)) {
      time = num;
    } else {
      distance = num;
    }
  });

  let i = Math.ceil(time / 2);
  let j = i - 1;
  let numOfPossibleTimes = 0;
  let stopRightSide = false;
  let stopLeftSide = false;

  while (j >= 0 && (!stopLeftSide || !stopRightSide) && i <= time) {
    if (!stopLeftSide) {
      if (j * (time - j) <= distance) {
        stopLeftSide = true;
      } else {
        numOfPossibleTimes++;
        j--;
      }
    }
    if (!stopRightSide) {
      if (i * (time - i) <= distance) {
        stopRightSide = true;
      } else {
        numOfPossibleTimes++;
        i++;
      }
    }
  }
  return numOfPossibleTimes;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const result = part2(input);
console.timeEnd();
console.log(result);
