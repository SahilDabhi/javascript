// the primary way is ----

// const marksScored = 80;
// if (marksScored < 40) {
//   console.log("you need to work hard");
// } else {
//   console.log("Congrats on your result");
// }

// terneary operator uses (condtion) ? yes : no

// marksScored < 40 ? console.log("you need to work hard") : console.log("Congrats on your result");

// const result =
//   marksScored < 40
//     ? "you need to work hard"
//     : marksScored < 60
//     ? "try a bit more"
//     : "genius";

// console.log(result);

const firstName = "";
const lastName = undefined;

const name = firstName || lastName || "Geek";
// this is also known as short circuting where we basically find the truthy values
// ||(or operator) returns the first truthy value or the last falsy value
//  && returns the first falsy value or the last truthy value

console.log(firstName ?? lastName);
