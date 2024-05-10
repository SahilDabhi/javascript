const readlineSync = require("readline-sync");

const num = Number(readlineSync.question("Enter a number-- "));

if (num % 2 === 0) {
  console.log(`${num} is even number`);
  if (num % 5 === 0) {
    console.log(`${num} is divisible by 10`);
  } else {
    console.log("It is not divisible by 10 ");
  }
} else {
  console.log(`${num} is odd number`);
}
