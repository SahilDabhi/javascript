//function passed as an argument is known as a callback function\

const delay = 400;

function a(wrapper) {
  console.log("hello");
  wrapper();
}

function b() {
  console.log("bye");
}

a(b);

// here function b is called as a callback function

//--------------------------------------------------------------------------------

setTimeout(function callback() {}, delay);

//-------------------------------------------------------------------------------

setTimeout(function called() {
  console.log(`Executed after ${delay} ms`);
}, delay);
