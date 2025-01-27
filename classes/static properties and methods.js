class children {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static sortByAge(a, b) {
    return a.age - b.age;
  }
}

const child1 = new children("sahil", 22);
const child2 = new children("mihir", 24);
const child3 = new children("XYZ", 20);

let arr = [child1, child2, child3];

arr.sort(children.sortByAge);
console.log(arr);

//=========================================================

class student {
  static id = 1;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = student.id++;
  }

  static sortByAge(a, b) {
    return a.age - b.age;
  }
}

const student1 = new student("sahil", 22);
const student2 = new student("mihir", 24);
const student3 = new student("XYZ", 20);

let arr2 = [student1, student2, student3];
console.log(arr2);
