// const obj = {
//   name: "sahil",
//   age: 21,
//   displayMessage: function () {
//     console.log(this);
//   },
// };

// obj.displayMessage();

// --------------------------------------------------------

const obj2 = {
  name: "sahil",
  age: 21,
  displayMessage: function () {
    function sayHello() {
      console.log(this);
    }
  },
};

obj2.displayMessage();
