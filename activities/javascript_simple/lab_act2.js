const prompt = require('prompt-sync')();

function startProgram() {
    let choice;

    while (true) {
        // Display the menu
        console.log("\nChoose an option:");
        console.log("1) String Reversal and Age Calculation");
        console.log("2) Palindrome Check");
        console.log("3) Odd or Even Checker");
        console.log("4) Multiplication Table and Factorials");
        console.log("5) Exit");

        // Get the user's choice
        choice = prompt("Choose an option:");

        if (choice === '1') {
            // Problem 1: String Reversal and Age Calculation
            let fullName = prompt("Enter your full name:");

            // Check if the full name contains numbers
            if (/\d/.test(fullName)) {
                console.log("Invalid input. Name should not contain numbers.");
                continue;
            }

            let birthYear = parseInt(prompt("Enter your birth year:"));
            let currentYear = new Date().getFullYear();

            if (isNaN(birthYear) || birthYear <= 1995 || birthYear > currentYear) {
                console.log("Invalid birth year. Please enter a valid number.");
                continue;
            }

            let reversedName = fullName.split('').reverse().join('');
            let age = currentYear - birthYear;

            console.log(`Your name is ${fullName} and its reversed version is ${reversedName}. Your age is ${age} years old.`);

        } else if (choice === '2') {
            // Problem 2: Palindrome Check
            let word = prompt("Enter a word:");

            // Check if the word contains numbers or non-alphabetic characters
            if (/[^a-zA-Z]/.test(word)) {
                console.log("Invalid input. Word should only contain letters.");
            } else {
                let reversedWord = word.split('').reverse().join('');
                if (word === reversedWord) {
                    console.log(`The word "${word}" is a palindrome!`);
                } else {
                    console.log(`The word "${word}" is not a palindrome.`);
                }
            }

        } else if (choice === '3') {
            // Problem 3: Odd or Even Checker
            let input = prompt("Enter a number:");

            // Check if the input contains only digits (no symbols or letters)
            if (/^\d+$/.test(input)) {
                let number = parseInt(input);

                if (number % 2 === 0) {
                    console.log(number + " -> jolly");
                } else {
                    console.log(number + " -> bee");
                }
            } else {
                console.log(input + " -> jollibee");
            }


        } else if (choice === '4') {
            // Problem 4: Multiplication Table and Factorials
            let input = prompt("Enter a number to generate multiplication table:");

            if (/^\d+$/.test(input)) {
                let n = parseInt(input);

                if (n <= 0) {
                    console.log("Invalid number. Please enter a positive integer.");
                } else {
                    console.log("Multiplication Table:");
                    for (let i = 1; i <= n; i++) {
                        let row = '';
                        for (let j = 1; j <= n; j++) {
                            row += (i * j) + '\t';
                        }
                        console.log(row);
                    }

                    console.log("\nFactorials:");
                    for (let i = 1; i <= n; i++) {
                        console.log(`${i}! = ${factorial(i)}`);
                    }
                }
            } else {
                console.log("Invalid input. Please enter a positive integer.");
            }

        } else if (choice === '5') {
            // Exit the program
            console.log("Exiting the program.");
            break;
        } else {
            console.log("Invalid option. Please choose a valid number between 1 and 5.");
        }
    }
}

// Helper function to calculate factorial
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Start the program
startProgram();
