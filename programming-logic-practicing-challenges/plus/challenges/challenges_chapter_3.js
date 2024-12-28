// 3 - Add two numeric variables and display the result in the console with a friendly message using a Template String.
const number1 = 10;
const number2 = 20;

const sum = number1 + number2;
const message = `The sum of ${number1} and ${number2} is ${sum}.`;

console.log(message);

// 4 - Receive at least two sentences as a string and use split() to break them into smaller phrases based on a semicolon as the delimiter.
const twoSentences = "Creating what does not yet exist should be the ambition of every living person; The most important task for someone coming into this world is to create something";
const separatedPhrases = twoSentences.split(';');

console.log(separatedPhrases);

// 5 - Receive a string containing numbers separated by commas. Use split() to separate the numbers and display them in the console.
const separatedNumbers = "10,20,30,40,50";
const numbersArray = separatedNumbers.split(',');
console.log(numbersArray);
