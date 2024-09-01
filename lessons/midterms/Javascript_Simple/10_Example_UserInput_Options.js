const prompt = require('prompt-sync')();

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

let choice = '';  // Initialize choice with an empty string

while (choice !== '3') {  // Continue the loop until the user chooses to exit
    // Display the menu
    console.log("\nArithmetic Operations");
    console.log("1) Add");
    console.log("2) Subtract");
    console.log("3) Exit");

    // Get the user's choice
    choice = prompt("Choose an option:");

    // Perform the chosen operation
    if (choice === '1') {
        console.log("\nAdding elements");
        let number1 = parseFloat(prompt("Enter the first number: "));
        let number2 = parseFloat(prompt("Enter the second number: "));
        let sum = addNumbers(number1, number2);
        console.log("The sum is: " + sum);
    } else if (choice === '2') {
        console.log("\nSubtracting elements");
        let number1 = parseFloat(prompt("Enter the first number: "));
        let number2 = parseFloat(prompt("Enter the second number: "));
        let difference = subtractNumbers(number1, number2);
        console.log("The difference is: " + difference);
    } else if (choice === '3') {
        console.log("Exiting the program. Goodbye!");
    } else {
        console.log("Invalid choice. Please select 1, 2, or 3.");
    }
}