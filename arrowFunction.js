const addition = function (x, y) {
  return x + y;
};

const sum = (x, y) => (x < y ? x + y : x - y);

console.log(sum(15, 10));
