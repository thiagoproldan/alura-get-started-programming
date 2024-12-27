// Functions in JavaScript
// Functions are the main “building blocks” of the program. They allow the code to be called multiple times without repetition.
// They encapsulate reusable blocks of code and can perform specific tasks, from simple calculations to complex operations.
// Functions in JavaScript may or may not have parameters, and they may or may not return values.

// **Examples of Different Types of Functions in JavaScript**

// 1. Function without return and without parameters
function greet() {
  console.log('Hello!');
}
greet(); // Output: Hello!

// 2. Function without return and with parameters
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser('Alice'); // Output: Hello, Alice!

// 3. Function with return and without parameters
function generateRandomNumber() {
  return Math.random();
}
let randomNumber = generateRandomNumber();
console.log(`Generated number: ${randomNumber}`); // Output: Generated number: <random_value>

// 4. Function with return and with parameters
function addNumbers(a, b) {
  return a + b;
}
let sum = addNumbers(5, 10);
console.log(`The sum is ${sum}`); // Output: The sum is 15

// 5. Anonymous Function (assigned to a variable)
let farewell = function() {
  console.log('Goodbye!');
};
farewell(); // Output: Goodbye!

// 6. Arrow Function
let square = x => x * x;
console.log(`The square of 5 is ${square(5)}`); // Output: The square of 5 is 25
