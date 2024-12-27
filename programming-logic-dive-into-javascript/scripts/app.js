alert('Welcome to the secret number game!'); // Alert - Show a message to the user in a dialog box

let maxNumber = 100; // Maximum number to be guessed

let secretNumber = parseInt(Math.random() * maxNumber + 1); // Random number between 1 and 100
// The function Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
// Example 1: Math.random() returns 0.123456789
// Example 2: Math.random() * 100 returns 12.3456789
// Example 3: parseInt(Math.random() * 100) returns 12
// Example 4: parseInt(Math.random() * 100 + 1) returns 13 (between 1 and 100)

console.log(secretNumber); // Show the secret number in the console
let guess; // Store the user's guess
let attempts = 1; // Attempts counter

// while guess is not equal to the secret number
while (guess != secretNumber) {
    guess = prompt(`Choose a number between 1 and ${maxNumber}`); // Using Template String

    // if guess is equal to the secret number
    if (guess == secretNumber) { // == is a comparison operator
        break;
    } else {
        if (guess > secretNumber) {
            alert(`The secret number is smaller than ${guess}`);
        } else {
            alert(`The secret number is larger than ${guess}`);
        }

        attempts++; // Syntactic Sugar - Increment the attempts counter by 1
    }
}

let attemptWord = attempts > 1 ? 'attempts' : 'attempt'; // Ternary operator
// if attempts is greater than 1, attemptWord is 'attempts', otherwise, attemptWord is 'attempt'
// Example: attempts = 1, attemptWord = 'attempt'

alert(`That's right! You discovered the secret number ${secretNumber} with ${attempts} ${attemptWord}.`);