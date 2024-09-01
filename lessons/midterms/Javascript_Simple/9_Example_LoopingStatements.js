// Add the library
const prompt = require('prompt-sync')();

// ====================
// 1. For Loop Example
// ====================
console.log("1. For Loop Example: Counting from 1 to 5");
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
}
// Output:
// Counting: 1
// Counting: 2
// Counting: 3
// Counting: 4
// Counting: 5

// ====================
// 2. While Loop Example
// ====================
console.log("\n2. While Loop Example: Counting down from 5 to 1");
let count = 5;
while (count > 0) {
    console.log("Counting down: " + count);
    count--;
}
// Output:
// Counting down: 5
// Counting down: 4
// Counting down: 3
// Counting down: 2
// Counting down: 1

// ====================
// 3. Do...While Loop Example
// ====================
console.log("\n3. Do...While Loop Example: Prompting user until they enter a number greater than 10");
let number;
do {
    number = parseFloat(prompt("Enter a number greater than 10:"));
} while (number <= 10);

console.log("You entered: " + number);
// Output will depend on user input

// ====================
// 4. For...of Loop Example
// ====================
console.log("\n4. For...of Loop Example: Iterating through an array of fruits");
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("I like " + fruit);
}
// Output:
// I like apple
// I like banana
// I like cherry

// ====================
// 5. For...in Loop Example
// ====================
console.log("\n5. For...in Loop Example: Iterating through an object's properties");
let person = { name: "Jericho", age: 24, city: "Manila" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Jericho
// age: 24
// city: Manila

// ====================
// 6. Break Statement Example
// ====================
console.log("\n6. Break Statement Example: Exiting loop when i equals 5");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Exit the loop when i equals 5
    }
    console.log(i);
}
// Output:
// 1
// 2
// 3
// 4

// ====================
// 7. Continue Statement Example
// ====================
console.log("\n7. Continue Statement Example: Skipping the iteration when i equals 3");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skip the iteration when i equals 3
    }
    console.log(i);
}
// Output:
// 1
// 2
// 4
// 5

// ====================
// 8. Loop with User Input Example
// ====================
console.log("\n8. Loop with User Input Example: Repeatedly ask for a positive number");
let positiveNumber;
do {
    positiveNumber = parseFloat(prompt("Enter a positive number:"));
} while (positiveNumber <= 0);

console.log("Thank you! You entered: " + positiveNumber);
// Output will depend on user input