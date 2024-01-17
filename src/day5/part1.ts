const fs = require("fs");

console.time();

function getDestinationNumber(
  sourceNumber: number,
  destinationStart: number,
  sourceStart: number,
  length: number
) {
  if (sourceNumber > sourceStart || sourceNumber > sourceStart + length) {
    return sourceNumber;
  }
  return destinationStart + (sourceNumber - sourceStart);
}

function part1(input: string) {
  let seeds: number[] = [];

  //   console.log([...(input.matchAll(/seeds: (.)+\n/g) || [])]);

  input.split("\n\n").forEach((line, i) => {
    console.log(i, line.replace(/.+:/, ""));
    // Get the seeds
    // if (line.match(/seeds:/)) {
    //   seeds = [
    //     ...line
    //       .replace(/seeds:/, "")
    //       .trim()
    //       .split(/\s/),
    //   ];
    // }
    // console.log(i, line);
  });
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const result = part1(input);
console.log(result);
