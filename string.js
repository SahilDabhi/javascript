// let message = "I am a full stack developer";
// let count = 0;
// for (let char of message) {
//   if (char === "a") {
//     count++;
//   }
// }
// console.log(count);

let message = "I am a full stack developer";

// for (let char of message) {
//   console.log(char);
// }
//  gives the character

// for (let i = 0; i < message.length; i++) {
//   console.log(message[i]);
// }
// gives the index of the character

// for (let i = 0; i <= message.length; i++) {
//   if (message[i] === "a") {
//     console.log(i);
//   }
// }

// console.log(message.charAt(2));

// function charAt(num) {
//   console.log(message.charAt(num));
// }

// charAt();

// console.log(message.charCodeAt(0));

// function increaseAsciiValue(input) {
//   let result = "";
//   for (let i = 0; i <= input.length; i++) {
//     let asciiValue = input.charCodeAt(i);
//     let newAsciiValue = asciiValue + 2;
//     result += String.fromCharCode(newAsciiValue);
//   }
//   return result;
// }

// console.log(increaseAsciiValue(message));

// console.log(message.indexOf("q"));

// const vowels = "aeiouAEIOU";
// let flag = false;
// for (let char of message) {
//   if (vowels.includes(char)) {
//     flag = true;
//     break;
//   } else {
//     flag = false;
//   }
// }
// flag
//   ? console.log("String has vowels ")
//   : console.log("string doesnot have vowels");

// console.log(message.toUpperCase());

const userName = "Sahil Dabhi - full stack developer";
// console.log(userName.substring(0, 11)); // this will exclude the last character so add one to include the last character

const trim = "          hi there             ";

console.log(trim.length);
console.log(trim.trim());
