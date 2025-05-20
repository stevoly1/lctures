
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Good day to you ${this.name}`;
  }
}

class Student extends Person {
    constructor(name , age, studentId){
        super(name, age);
        this.studentId = studentId;
    };
    study(){
        return `${this.name} with ${this.studentId} is studying`;
    }
}

const student1 = new Student("john Godwin", 23, 8675);
console.log(student1)
console.log(student1.greet())
console.log( student1.study())