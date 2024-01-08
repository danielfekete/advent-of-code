import fs from "fs";

const numMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function part2(input: string) {
  const lines = input.split("\n");

  return lines
    .filter((el) => el.match(/\d/))
    .map((el) => {
      const onlyDigits = el
        .replace(
          /(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g,
          (str) => numMap[str]
        )
        .replace(/\D/g, "");
      return Number(onlyDigits[0] + onlyDigits.slice(-1));
    })
    .reduce((acc, curr) => acc + curr, 0);
}

const input = fs.readFileSync("./input.txt", "utf8");

console.log(part2(input));
