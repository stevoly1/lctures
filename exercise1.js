// creating the object
const person = {
    firstName: "stephen",
    lastName: "Godwin",
    age: 35,
    email:"stevoly1@gmail.com",
    fullName: function() {  return `${this.firstName} ${this.lastName}`; }
};
// Accessing object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.email);
console.log(person.fullName());


if (person.age >= 18) {
    console.log("You are an adult.");
    
}else {
    console.log("You are a minor.");
}

person.email = "adila@gmail.com";
console.log(person.email);

person.address = "43 test street jos nigeria";
console.log(person.address);