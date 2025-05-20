class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Good day to you ${this.name}`;
  }
}
console.log(person1.greet());