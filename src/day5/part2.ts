const fs = require("fs");

console.time();

function part2(input: string) {
  let lowestDestinationNum = 0;

  const lines = input.split("\n\n");

  const seeds = lines[0]
    .replace(/(.+):/, "")
    .trim()
    .split(/\s/)
    .map((str) => Number(str));

  for (let i = 0; i < seeds.length; i += 2) {
    const rangeStart = seeds[i];
    // let rangeLength = seeds[i + 1];
    // const batchLength = 1000;
    // while (rangeLength > 0) {
    //   const length = rangeLength > batchLength ? batchLength : rangeLength;
    //   // for (let num = rangeStart; num < rangeStart + length; num++) {

    //   // }
    //   rangeLength = rangeLength - batchLength;
    // }
    const range = 100000;
    for (let num = rangeStart; num < rangeStart + range; num++) {
      let destinationNum = num;

      for (let line = 1; line < lines.length; line++) {
        const nums = lines[line]
          .replace(/(.+):/, "")
          .trim()
          .split(/\s/)
          .map((str) => Number(str));

        for (let j = 0; j < nums.length; j += 3) {
          let [destinationStart, sourceStart, length] = [
            nums[j],
            nums[j + 1],
            nums[j + 2],
          ];
          const diff = destinationNum - sourceStart;

          if (diff > length || destinationNum < sourceStart) {
            continue;
          }

          destinationNum = destinationStart + diff;
          break;
        }
      }

      if (lowestDestinationNum === 0 || destinationNum < lowestDestinationNum) {
        lowestDestinationNum = destinationNum;
      }
    }
  }

  return lowestDestinationNum;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const result = part2(input);
console.timeEnd();
console.log(result);
