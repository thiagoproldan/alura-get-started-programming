// 1 - Create a function that displays "Hello, world!" without console.
function showHelloWorld() {
  alert('Hello, world!');
}

showHelloWorld(); // Invoke the function

// 2 - Create a function that takes a name as a parameter and displays "Hello, [name]!" in console.
function greetUserByName(name) {
  console.log(`Hello, ${name}!`);
}

greetUserByName('John'); // Invoke the function with the argument 'John'

// 3 - Create a function that takes a number as a parameter and returns twice that number.
function calculateDouble(number) {
  return number * 2;
}

let doubleResult = calculateDouble(5);
console.log(doubleResult); // Output: 10

// 4 - Create a function that takes three numbers as parameters and returns their average.
function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let averageResult = calculateAverage(5, 10, 15);
console.log(averageResult); // Output: 10

// 5 - Create a function that takes two numbers as parameters and returns the larger of them.
function findLargerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2; // Ternary operator
}

let largerNumber = findLargerNumber(10, 20);
console.log(largerNumber); // Output: 20

// 6 - Create a function that takes a number as a parameter and returns the result of multiplying that number by itself
function calculateSquare(number) {
  return number * number;
}

let squareResult = calculateSquare(5);
console.log(squareResult); // Output: 25