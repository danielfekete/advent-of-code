const fs = require("fs");

console.time();

function part1(input: string) {
  let destinationNums: number[] = [];

  input.split("\n\n").forEach((line, i) => {
    const nums = line
      .replace(/(.+):/, "")
      .trim()
      .split(/\s/)
      .map((str) => Number(str));
    // seeds
    if (i === 0) {
      destinationNums = [...nums];
      return;
    }

    for (let i = 0; i < destinationNums.length; i++) {
      const num = destinationNums[i];
      for (let j = 0; j < nums.length; j += 3) {
        let [destinationStart, sourceStart, length] = [
          nums[j],
          nums[j + 1],
          nums[j + 2],
        ];
        const diff = num - sourceStart;

        if (diff > length || num < sourceStart) {
          continue;
        }

        destinationNums[i] = destinationStart + diff;
        break;
      }
    }
  });

  return destinationNums.sort((a, b) => a - b)[0];
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const result = part1(input);
console.timeEnd();
console.log(result);
