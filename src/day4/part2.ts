const fs = require("fs");

console.time();

function getWinningCount(card: string) {
  const [, numsStr] = card.split(":");
  const [winningNums = [], myNums = []] = numsStr
    .split("|")
    .map((nums) => nums.split(/\s/).filter((n) => n.match(/\d+/)));
  const winningCount = myNums.filter((num) => winningNums.includes(num)).length;

  return winningCount;
}

function processCard(cards: string[], cardIndex: number) {
  const card = cards[cardIndex];
  const winningCount = getWinningCount(card);

  let sum = 1; // Count itself

  // Count the cards won by this card
  Array.from(
    { length: winningCount },
    (_, index) => cardIndex + 1 + index
  ).forEach((index) => {
    sum += processCard(cards, index);
  });

  return sum;
}

function part2(input: string) {
  const cards = input.split(/\n/);

  let sum = 0;

  cards.forEach((_, i) => {
    sum += processCard(cards, i);
  });

  return sum;
}

const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const solution = part2(input);
console.timeEnd();
console.log(`The solution is: ${solution}`);
