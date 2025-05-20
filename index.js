// printing number from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ⁠Print the odd numbers less than 100

for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//⁠Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(sum);
}
console.log("The sum of numbers from 1 to 10 is: " + sum);


// Calculate the sum of odd numbers greater than 10 and less or equal than 30

let sum2 = 0;
for (let i = 11; i <= 30; i++) {
    if (i % 2 !== 0) {
        sum2 = sum2 + i;
        console.log(sum2);
    }
}
console.log("The sum of odd numbers from 10 to 30 is: " + sum2);

// Create a function that will convert from Celsius to Fahrenheit 
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));

// Create a function that will convert from Celsius to Fahrenheit 
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(32));

// Calculate the sum of numbers in an array of numbers. 
const arrayNumbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum3 = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    sum3 = sum3 + arrayNumbers[i];
}
console.log("The sum of numbers in the array is: " + sum3);

// Calculate the average of the numbers in an array of numbers
const arrayNumbers2 = [1, 3, 9, 15, 90];
let sum4 = 0;
for (let i = 0; i < arrayNumbers2.length; i++) {
    sum4 = sum4 + arrayNumbers2[i];
}
console.log(typeof sum4);
const average = sum4 / arrayNumbers2.length;
console.log("The average of the numbers in the array is: " + average);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers.
// Requirement: Use a “for” loop

function filterPositiveNumbers(numbers) {
    if (!Array.isArray(numbers)) { return "Please provide an array of numbers." }
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        const value = numbers[i];
        if (value > 0) {
            result.push(value);
        }
    }
    return result;
}
const numbers = [2, 3, -1, 5, -7, 8, 10, 15, 95];
const positiveNumbers = filterPositiveNumbers(numbers);
console.log(positiveNumbers);

// Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
    if (!Number.isInteger(num)) {
        return { false: "Please provide an integer." };

    }
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(6));

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
//  Current time is : 10 PM : 30 : 38

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const now = new Date();
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds = now.getSeconds().toString().padStart(2, '0');
const period = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
if (hours === 0) hours = 12;


const dayOutput = "Today is : " + day + ".";
const timeOutput =
    "Current time is : " +
    hours +
    " " +
    period +
    " : " +
    minutes +
    " : " +
    seconds;

console.log(dayOutput);
console.log(timeOutput);


// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is: " + area);


// Write a JavaScript program to calculate the multiplication and division of two numbers (input from the user).
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const multiplication = num1 * num2;
// const division = num1 / num2;

// console.log(multiplication);
// console.log(division);

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function computeSum(a, b) {
    const sum = a + b;
    return a === b ? sum * 3 : sum;
}
console.log(computeSum(3, 3));

// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

function startsWithJava(str) {
    return str.startsWith("Java") ? true : false;
}

console.log(startsWithJava("JavaScript"));