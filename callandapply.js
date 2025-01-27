const user1 = {
  name: "sahil",
  age: 21,
};

const user2 = {
  name: "jatin",
  age: 23,
};

const user3 = {
  name: "mayank",
  age: 24,
};

function sayHello() {
  console.log("hello from -", this.name);
}

// user1.sayHello();
// this wont work as there is nothing to bind the function with the object

// sayHello.call(user1);
// // sayHello.call(user3);
// sayHello.call(user2);

//---------------------------------------------------------------------------------------------------------

let result = sayHello.bind(user3);
result();

let output = sayHello.apply(user3);
console.log(output);
