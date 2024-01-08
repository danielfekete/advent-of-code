import fs from "fs";

function part1(input: string) {
  const lines = input.split("\n");

  return lines
    .filter((el) => el.match(/\d/))
    .map((el) => {
      const onlyDigits = el.replace(/[^\d]/g, "");
      return Number(onlyDigits[0] + onlyDigits.slice(-1));
    })
    .reduce((acc, curr) => acc + curr, 0);
}

const input = fs.readFileSync("./input.txt", "utf8");

console.log(part1(input));
