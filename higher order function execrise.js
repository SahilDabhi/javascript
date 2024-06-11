const arr = [1, 2, 3, 4, 5];

function squaredNums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
  }
  return newArr;
}

function cubedNums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 3);
  }
  return newArr;
}

console.log(squaredNums(arr));

//-------------------------------------------------------------------------------

let myarr = [1, 2, 3, 4, 5];

function toPower(arr, power) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i] ** power);
  }
  return tempArr;
}

console.log(toPower(myarr, 3));
