class User {
  constructor(name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
  }

  displayInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const user1 = new User("Sahil", 22, true);
const user2 = new User("Ashhish", 21, false);

console.log(user1);
console.log(user1.displayInfo());
console.log(user2);
