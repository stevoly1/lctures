class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
  get age(){
    return this._age;
  };

  set age(value){
    if (value < 0) {
        throw new Error("age cannot be negative")
    }
    this._age = value;

  };

  greet() {
    return `Good day to you ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  study() {
    return `${this.name} with ${this.studentId} is studying`;
  }
}


try {
    const p = new Person("John Carson", 30);
    console.log(p.age);       
    p.age = 35;                
    console.log(p.age);      
  
    p.age = -5;                
  } catch (err) {
    console.log(err.message)
  }
