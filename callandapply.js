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
// this wont work as there is nothing to bind the funtion with the object

// sayHello.call(user1);
// // sayHello.call(user3);
// sayHello.call(user2);

//---------------------------------------------------------------------------------------------------------

result = sayHello.bind(user3);
result();
