// the function can be treated as a variable or as an input in another function is first class function and can be returned to another function

//functions are simply a value and are just another type of object.

const wrappedFunction = function () {
  return "hey";
};

function greetMessage(inner, name) {
  console.log(inner(), name);
}

// greetMessage(wrappedFunction, "sahil");

// --------------------------------------------------------------------------------

function helloMessage() {
  function wrapper() {
    let name = "sahil";
    console.log("hey", name);
  }

  return wrapper;
}

const output = helloMessage();
output();

// helloMessage()()  will also work the same
