// Add the library in your IDE by typing this:
// npm install prompt-sync

// Add the library
const prompt = require('prompt-sync')();

// Asking for two inputs from the user
let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your second name: ");

// Combining the two inputs
console.log("\nResult:");
let wholeName = `${firstName} ${lastName}`;
console.log(`Your name is ${wholeName}!`);

