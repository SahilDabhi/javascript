// a function which takes another function as an input or returns a function as output

function wrapper() {
  return "hello";
}

// wrapper is a first class function
// outer is a higher order function

function outer(inner) {
  console.log("sahil", inner());
}

outer(wrapper);

// ----------------------------------------------------------------------------

function display() {
  return function () {
    console.log("inner function executed");
  };
}

display()();
