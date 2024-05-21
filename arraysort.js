// const fruits = ["apple", "mango", "grapes", "melon", "banana"];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);

//-------------------------------------------------------------------------------

// let num = [1, 2, 3, 6, 7, 9, 5, 86, 465, 856, 213];
// num.sort();
// console.log(num.sort());

// converts the numbers into string and then compares the two strings to solve this we use

// const sortInAscending = (a, b) => a - b;
// const sortInDescending = (a, b) => b - a;
// console.log(num.sort(sortInDescending));

//-----------------------------------------------------------------------------

// let userName = "sahil";
// let arr = userName.split("");
// arr.reverse();
// console.log(arr);
// console.log(arr.join(""));

// -------------------------------------------------------------------------------

// let num = [1, 2, 3, 6, 7, 9, 5, 86, 465, 856, 213];
// console.log(num);
// console.log(...num);
// unpacking an array
// we can use the (...)spreading operator to unpack an array  (...arrayName) it avoid mutation

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9];

// let arr = [...num1, ...num2, 10, 11];
// console.log(arr);

// -------------------------------------------------------------------------------
// destructuring in javascript

// const arr = [1, 2, 3, 4, ["html", "java"], 5, 6];
// const [, , , , learned, five] = arr;

// console.log(learned);
// console.log(five);

// const arr = [["html", "java"], 1, 2, 3, 4, 5, 6];
// const [learned, ...rest] = arr;
// console.log(learned);
// console.log(rest);

/**swap number */

// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log("a -", a);
// console.log("b -", b);
