const arr = [1, 2, 3, 4, 5];

function getSquared(number) {
  return number ** 2;
}

arr.map((number) => number ** 2);

// or this

arr.map(getSquared);
