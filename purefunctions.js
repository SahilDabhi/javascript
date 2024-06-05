// pure functions V IMP as react is based on pure functions.

// takes an argument
// returns a value
// for the same input we always get the same output

function getDoubleValue(value) {
  return value * 2;
}
console.log(getDoubleValue(3));

//----------------------------------------------------------------------------

// result is not influenced by an outer parameter

const outer = 4;

function getDoubleValueOther(value) {
  return value * 2 * outer;
}
// this is not pure function as the value of outer changes the output can change

//---------------------------------------------------------------------------------------------------

// it should not mutate the original argument

const result = appendValue([1, 2, 3, 4]);

function appendValue(arr) {
  let newArr = [];
  newArr.push(...arr, 4, 5);
  return newArr;
}

console.log(result);

// changes the original array so this is not a pure function
