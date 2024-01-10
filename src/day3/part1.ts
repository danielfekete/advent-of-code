const fs = require("fs");

console.time();

function isSymbol(str: string) {
  return str.match(/[^.\d]/);
}

function searchLine(line: string, startIndex: number, numLen: number) {
  return [
    startIndex - 1,
    ...Array.from(Array(numLen).keys()).map((j) => startIndex + j),
    startIndex + numLen,
  ].find((v) => !!line[v] && isSymbol(line[v]));
}

function part1(input: string) {
  const lines = input.split("\n");

  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    // Prev, current and next line
    const prevLine = i - 1 >= 0 ? lines[i - 1] : null;
    const line = lines[i];
    const nextLine = i + 1 < lines.length ? lines[i + 1] : null;

    //Numbers
    const numbers = [...line.matchAll(/[\d]+/g)];

    // Add to sum with reduce
    sum = numbers
      .filter(({ "0": number, index }) => {
        if (index === undefined) {
          return false;
        }
        return (
          searchLine(line, index, number.length) ||
          (prevLine && searchLine(prevLine, index, number.length)) ||
          (nextLine && searchLine(nextLine, index, number.length))
        );
      })
      .map(({ "0": number }) => Number(number))
      .reduce((acc, curr) => acc + curr, sum);
  }

  return sum;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
// Solution 525181
const solution = part1(input);
console.timeEnd();
console.log(`The solution is: ${solution}`);
