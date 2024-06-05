const objectExample = {
  Name: "sahil ", // object property
  age: 23,
  learn: "MERN",
  isAdmin: "true",
};

// each property can be accessed using the following

// console.log(objectExample);
// console.log(objectExample.Name);
// console.log(objectExample["learn"]); // when using [] compulsory put the parameters as a string
// console.log(objectExample["isAdmin"]);

// ------------------------------------------------------------------------------------------------

// const object = {
//   Name: "sahil ", // object property
//   age: 23,
//   learn: "MERN",
//   isAdmin: "true",
//   greet: function () {
//     console.log("hello there");
//   },
//   bye() {
//     console.log("bye bye ");
//   },
// };

// console.log(object);
// object.greet();

// console.log(object.bye);
// object.bye();

//-----------------------------------------------------------------------------------------------------------

// function getShortHand(name, city) {
//   return { name, city };
// }

// const obj = getShortHand("sahil", "bhavnagar");
// console.log(obj);

// const student = "sahil";
// const course = "MERN";

// console.log({ student, course });

//-----------------------------------------------------------------------------------------------------------

// const object = {
//   name: "sahil ",
//   age: 23,
//   learn: "MERN",
// };

// const isPropertyFound = "name" in object;
// console.log(isPropertyFound);

// for (let item in object) {
//   console.log(item); // will only give key not the value of the key
// }

// for (let item in object) {
//   console.log(object[item]);
// }

// for (let item in object) {
//   console.log(` item - ${item}  value - ${object[item]}`);
// }

//--------------------------------------------------------------------------------

//to get the values of the obejdct or the keys present in the object we can use

const object = {
  name: "sahil",
  age: 21,
  city: "Bhavnagar",
};

console.log(Object.entries(object));
console.log(Object.keys(object));
console.log(Object.values(object));
