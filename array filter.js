const arr = [1, 2, 3, 68, 4, 76, 5, 6, 7, 8, 9];

function filterNumbers(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

console.log(filterNumbers(arr));

//arr filter

console.log(arr.filter((element) => element > 5));
