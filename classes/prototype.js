// every object has a hidden property known as prototype

const user = {
  name: "sahil",
  age: 22,
};

// console.log(user);
// console.log(user.toString());

//-----------------------------------------------------------

//to access the prototype of another object we use

const isLoggedIn = {
  login: false,
};

const admin = {
  isAdmin: true,
  __proto__: isLoggedIn,
};

const sahil = {
  name: "sahil",
  __proto__: admin,
};

console.log(sahil);
console.log(sahil.isAdmin);
console.log(sahil.login);

//------------------------------------------------------------------

console.log(Object.keys(sahil));
for (let key in sahil) {
  console.log(key);
}
