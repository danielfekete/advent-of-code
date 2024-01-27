const fs = require("fs");

console.time();

function part1(input: string) {
  let times: number[] = [];
  let distances: number[] = [];
  let numOfWaysToWin = 1;
  input.split("\n").forEach((line) => {
    const nums = (line.match(/\d+/g) || []).map(Number);
    line.match(/Time:/g) ? times.push(...nums) : distances.push(...nums);
  });

  times.forEach((time, index) => {
    let i = Math.ceil(time / 2);
    let j = i - 1;
    let numOfPossibleTimes = 0;
    let stopRightSide = false;
    let stopLeftSide = false;

    while (j >= 0 && (!stopLeftSide || !stopRightSide) && i <= time) {
      if (!stopLeftSide) {
        const distance = j * (time - j);
        if (distance <= distances[index]) {
          stopLeftSide = true;
        } else {
          numOfPossibleTimes++;
          j--;
        }
      }
      if (!stopRightSide) {
        const distance = i * (time - i);
        if (distance <= distances[index]) {
          stopRightSide = true;
        } else {
          numOfPossibleTimes++;
          i++;
        }
      }
    }
    numOfWaysToWin *= numOfPossibleTimes;
  });
  return numOfWaysToWin;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const result = part1(input);
console.timeEnd();
console.log(result);
