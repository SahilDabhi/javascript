// class User {
//   id = 1234;
// }

// const user1 = new User();
// console.log(user1);

// user1.id = 321;
// console.log(user1);
//the id cn be changed if we assign it a different value

// to make sure that the id cant be changed, we use # to protect the key

//-----------------------------------------------------------------------------

class User {
  #id = 1234;

  changeID(id) {
    this.#id = id;
  }
}

const user1 = new User();
console.log(user1);
user1.changeID("xyz");
// user1.#id = 321;
console.log(user1);
