const fs = require("fs");

function part1(input: string) {
  const lines = input
    .split("\n")
    .map((line) => line.replace(/Game [\d]+:/, "").trim());

  const maxBlue = 14;
  const maxGreen = 13;
  const maxRed = 12;
  return lines.reduce((acc, curr, index) => {
    const rounds = curr.split(";");
    for (let round of rounds) {
      const blueMatch = round.match(/(\d+) blue/);
      const redMatch = round.match(/(\d+) red/);
      const greenMatch = round.match(/(\d+) green/);
      const blue = blueMatch ? Number(blueMatch[1]) : 0;
      const green = greenMatch ? Number(greenMatch[1]) : 0;
      const red = redMatch ? Number(redMatch[1]) : 0;
      if (blue > maxBlue || green > maxGreen || red > maxRed) {
        return acc;
      }
    }
    return acc + index + 1;
  }, 0);
}

const input = fs.readFileSync("./input.txt", "utf-8");

console.log(part1(input));
