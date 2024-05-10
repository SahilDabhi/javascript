const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("Enter number--"));

if (number % 3 === 0 && number % 5 === 0) {
  console.log("Fizz");
} else if (number % 3 === 0 || number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("buzz buzz");
}
