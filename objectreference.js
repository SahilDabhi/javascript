const person1 = {
  name: "sahil ",
  age: 22,
};

const person2 = Object.assign({}, person1);

// will only work fine for one level of objects when we have nested objects, it wont work as expected

person2.name = "sid";

console.log(person1);
console.log(person2);
