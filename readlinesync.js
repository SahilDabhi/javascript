const readLineSync = require("readline-sync");

const userName = readLineSync.question("What is your name? -- ");
const userAge = readLineSync.question("What is your age? -- ");

// console.log(userName);

console.log(`Hello ${userName}`);
console.log("Thank you for telling your age");

const yearOfBirth = 2024 - Number(userAge);
console.log(`Your year of birth is ${yearOfBirth}`);
