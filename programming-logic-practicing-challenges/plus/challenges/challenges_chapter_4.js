// 2. Create a function that accepts a string as a parameter, uses the parseInt function to convert that string to an integer, and returns the result.

function convertToInteger(stringValue) {
    return parseInt(stringValue);
}

let stringValue = "42";
let integerValue = convertToInteger(stringValue);
console.log(integerValue);  // Expected output: 42

// 3. Write a simple calculator program with separate functions for addition, subtraction, multiplication, and division. Use a conditional block to determine which function to execute based on a variable representing the desired operation.

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero.";
    }
}

function calculator(operation, a, b) {
    switch (operation) {
        case 'addition':
            return addition(a, b);
        case 'subtraction':
            return subtraction(a, b);
        case 'multiplication':
            return multiplication(a, b);
        case 'division':
            return division(a, b);
        default:
            return "Invalid operation.";
    }
}

let result = calculator('addition', 5, 3);
console.log(result);  // Expected output: 8

// 4. Implement a function that accepts a number as a parameter and uses a conditional block to determine if the number is even or odd.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 7;
let evenOrOddResult = checkEvenOrOdd(number);
console.log(evenOrOddResult);  // Expected output: Odd

// 5. Create a function that converts temperature from Celsius to Fahrenheit and vice versa. Use a variable to indicate the desired scale and a conditional block to determine which conversion to perform.

function convertTemperature(value, scale) {
    if (scale.toLowerCase() === 'celsius') {
        return (value * 9/5) + 32;  // Celsius to Fahrenheit
    } else if (scale.toLowerCase() === 'fahrenheit') {
        return (value - 32) * 5/9;  // Fahrenheit to Celsius
    } else {
        return "Invalid scale.";
    }
}

let celsiusTemperature = 25;
let fahrenheitTemperature = convertTemperature(celsiusTemperature, 'celsius');
console.log(fahrenheitTemperature);  // Expected output: 77
