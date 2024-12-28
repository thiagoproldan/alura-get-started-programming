// 1. Create a program that checks if a word or phrase is a palindrome.
isPalindrome(); // Hoisting

function isPalindrome() { // Function declaration
    let word = "Osso";
    word = word.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
    let reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
        console.log(`The word "${word}" is a palindrome!`);
    } else {
        console.log(`The word "${word}" is not a palindrome!`);
    }
}

// 2. Create a program with a function that receives three numbers as arguments and returns them in ascending order. Display the sorted numbers.
const sortNumbers = function (num1, num2, num3) { // Function expression
    // Validate inputs
    if ([num1, num2, num3].some(isNaN)) {
        console.log("All inputs must be numbers.");
        return;
    }

    const sortedNumbers = [num1, num2, num3].sort((a, b) => a - b);
    console.log(`Sorted numbers: ${sortedNumbers.join(', ')}`);
};

sortNumbers(3, 1, 5); // Output: Sorted numbers: 1, 3, 5
sortNumbers(10, -5, 2); // Output: Sorted numbers: -5, 2, 10
