let arr1 = [1, 2, 3]; // refers the memory to a certain location
let arr2 = arr1; // this refers to the location of the first object so both uses the same refernce

// shallow copy

// -----------------------------------------------------------------------------------------------------------
// console.log(arr1);
// console.log(arr2);

// arr2.push(4); //will also push to arr1
// console.log(arr1);
// console.log(arr2);
// this happens because this is done with reference

// -----------------------------------------------------------------------------------------------------------

// spread operator

// arr3 = [...arr1];
// console.log(arr3);
// arr3.push(5);
// console.log(arr1);
// console.log(arr3);

// copy created but this does not change the original array

// -------------------------------------------------------------------------------------------------------------

// another method

// arr1 = [1, 2, 3];
// arr5 = [];

// for (char of arr1) {
//   arr5.push(char);
// }

// console.log(arr5);
// arr5.push(4);
// console.log(arr1);
// console.log(arr5);
