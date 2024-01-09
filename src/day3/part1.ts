const fs = require("fs");

function isSymbol(str: string) {
  return str.match(/[^.\d]/);
}

function searchLine(line: string, startIndex: number, numLen: number) {
  const found = [
    startIndex - 1,
    ...Array.from(Array(numLen).keys()).map((j) => startIndex + j),
    startIndex + numLen,
  ].find((v) => !!line[v] && isSymbol(line[v]));
  return found && line[found];
}

function part1(input: string) {
  const lines = input.split("\n");

  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    // Prev, current and next line
    const prevLine = i - 1 >= 0 ? lines[i - 1] : null;
    const line = lines[i];
    const nextLine = i + 1 < lines.length ? lines[i + 1] : null;

    console.log(line, nextLine, prevLine);

    //Numbers
    const numbers = [...line.matchAll(/[\d]+/g)];

    // Add to sum with reduce
    sum = numbers
      .filter(({ "0": number, index }) => {
        if (!index) {
          return false;
        }
        const neighbours = [
          index - 1 >= 0 && isSymbol(line[index - 1]),
          index + number.length < line.length &&
            isSymbol(line[index + number.length]),
          prevLine && searchLine(prevLine, index, number.length),
          nextLine && searchLine(nextLine, index, number.length),
        ];

        console.log(number, index, neighbours);

        return neighbours.some((v) => v);
      })
      .map(({ "0": number }) => Number(number))
      .reduce((acc, curr) => acc + curr, sum);
  }

  return sum;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
// Solution 335497
console.log(part1(input));
