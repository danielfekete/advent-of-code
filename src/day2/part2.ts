const fs = require("fs");

function part2(input: string) {
  const lines = input
    .split("\n")
    .map((line) => line.replace(/Game [\d]+:/, "").trim());

  return lines.reduce((acc, curr, index) => {
    const rounds = curr.split(";");
    let [maxRed, maxGreen, maxBlue] = [0, 0, 0];

    for (let round of rounds) {
      const blueMatch = round.match(/(\d+) blue/);
      const redMatch = round.match(/(\d+) red/);
      const greenMatch = round.match(/(\d+) green/);
      const blue = blueMatch ? Number(blueMatch[1]) : 0;
      const green = greenMatch ? Number(greenMatch[1]) : 0;
      const red = redMatch ? Number(redMatch[1]) : 0;
      if (blue > maxBlue) {
        maxBlue = blue;
      }
      if (green > maxGreen) {
        maxGreen = green;
      }
      if (red > maxRed) {
        maxRed = red;
      }
    }

    return acc + maxBlue * maxGreen * maxRed;
  }, 0);
}
const input = fs.readFileSync("./input.txt", "utf-8");
console.log(part2(input));
