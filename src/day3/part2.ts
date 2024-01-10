import fs from "fs";

console.time();

function searchLine(line: string, starIndex: number) {
  let nums: number[] = [];

  // Search the left side
  let leftSide = "";
  let i = starIndex - 1;
  while (i >= 0 && line[i].match(/[\d]/)) {
    leftSide = line[i] + leftSide;
    i--;
  }
  // Search the right side
  let rightSide = "";
  i = starIndex + 1;
  while (i < line.length && line[i].match(/[\d]/)) {
    rightSide = rightSide + line[i];
    i++;
  }

  // Check if the starindex is a number in the line string
  if (line[starIndex].match(/[\d]/)) {
    nums.push(Number(leftSide + line[starIndex] + rightSide));
  } else {
    if (leftSide) {
      nums.push(Number(leftSide));
    }
    if (rightSide) {
      nums.push(Number(rightSide));
    }
  }

  return nums;
}

function searchForNums(lines: string[], lineIndex: number, starIndex: number) {
  let nums: number[] = [];
  [lineIndex - 1, lineIndex, lineIndex + 1].forEach((index) => {
    const line = lines[index];
    if (line) {
      nums.push(...searchLine(line, starIndex));
    }
  });

  return nums;
}

function part2(input: string) {
  const lines = input.split("\n");

  let adjacentNumbers: { starIndex: number; nums: number[] }[] = [];

  // Loop through each line
  lines.forEach((line, i) => {
    const stars = [...line.matchAll(/[*]/g)].map(({ index }) => index);

    // Loop through each star character
    stars.forEach((starIndex) => {
      if (starIndex !== undefined) {
        // Search for nums
        const nums = searchForNums(lines, i, starIndex);
        adjacentNumbers.push({
          starIndex,
          nums,
        });
      }
    });
  });

  return adjacentNumbers
    .filter(({ nums }) => nums.length === 2)
    .reduce(
      (acc, { nums }) => acc + nums.reduce((acc, curr) => acc * curr, 1),
      0
    );
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");

const solution = part2(input);

console.timeEnd();
console.log(`The solution is: ${solution}`);
