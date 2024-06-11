const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reducerFunction = (acc, cur, ci, arr) => {};
// acc is the previous value
// cur current value
// ci current index
// arr is the arr in which we are performing
// usually not interested in ci and arr
// so we dont write them usually

const reducerFun = (acc, cur) => acc + cur;

const output = arr.reduce(reducerFun, 0);

//if zero not given then acc is the first value and cur is the second value

// acc becomes zero
// cur becomes the first value if the array for the first iteration

console.log(output);
