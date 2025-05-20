 const calculator = {
    operand1: 0,
    operand2: 0,
    add: function (operand1, operand2) {
        return operand1 + operand2;
    },
    subtract: function (operand1, operand2) {
        return operand1 - operand2;
    },
    multiply: function (operand1, operand2) {
        return operand1 * operand2;
    },
    divide: function (operand1, operand2) {
        if (operand2 === 0) {
            return "Cannot divide by zero";
        }
        return operand1 / operand2;
    },
 }

console.log(calculator.add(8, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(9, 3));
console.log(calculator.divide(5, 3));
console.log(calculator.divide(5, 0));