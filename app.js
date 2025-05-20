




const num = "123";
console.log(typeof num);
console.log(typeof Number(num), Number(num));

const num2 = 456;
console.log(typeof String(num2),String(num2), num2.toString());

const num3 = "50px";

console.log(typeof parseInt(num3),parseInt(num3));

const bol = true;
console.log(typeof Number(bol), Number(bol));

const bol2 = 0;
console.log(typeof Boolean(bol2), Boolean(bol2));


const subject = 33
const subject2 = 33

console.log(subject + subject2); // true


let now = new Date()

let stringValue = "string"
let numberValue = 22;
let arrayValues = [1,2,3,stringValue,numberValue,"genius","house"]

const filterValue = arrayValues.filter((w)=>String(w).includes("house"))
const filterValue2 = arrayValues.filter((u)=>u.toString().includes("1"))
console.log(filterValue)
console.log(filterValue2)

const cities = ["lagos","london","new york","nairobi","accra","hull"]

const spliced = cities.splice(2,7, "kenya")
console.log(spliced)

const extra = cities.slice(3,6)
console.log(cities)

const result = ()=>{return 0.5 - Math.random()};
console.log(result())









