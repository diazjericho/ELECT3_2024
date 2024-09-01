const prompt = require('prompt-sync')();

function addNumbers(num1, num2) {
    return num1 + num2;
}

// Get user input
let number1 = parseFloat(prompt("Enter the first number: "));
let number2 = parseFloat(prompt("Enter the second number: "));

// Call the function with the user input
let sum = addNumbers(number1, number2);

// Output the result
console.log("The sum of the numbers is: " + sum);
