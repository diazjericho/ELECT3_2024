// Add the library in your IDE by typing this:
// npm install prompt-sync

// Add the library
const prompt = require('prompt-sync')();

// Asking for two numbers from the user
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

// Adding the two numbers
console.log("\nResult:");
let total = num1 + num2;
console.log("The sum of the numbers is: " + total);

// Subtracting the two numbers
let difference = num1 - num2;
console.log("The difference between the numbers is: " + difference);