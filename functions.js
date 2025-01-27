function sumMinMax(min, max) {
  let sum = ((max - min + 1) * (max + min)) / 2;
  console.log(sum);
}

let anonymousFunction = function () {
  console.log("HelloWorld");
};

console.log(typeof anonymousFunction);
