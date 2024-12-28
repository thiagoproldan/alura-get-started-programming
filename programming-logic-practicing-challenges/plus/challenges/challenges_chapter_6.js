// 1 - Create a function to validate if a number is positive, negative, or zero.
function validatePositivity(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(validatePositivity(-1));

// 2 - Implement a function to check if a person is of legal age.
function isLegalAge(personAge) {
    return personAge >= 18 ? "Legal age" : "Underage";
}

console.log(isLegalAge(18));

// 3 - Develop a function to validate if a string is empty or not.
function checkStringEmpty(str) {
    return str === "" ? "Empty string" : "Non-empty string";
}

console.log(checkStringEmpty("Is there text here?"));
console.log(checkStringEmpty(""));

// 4 - Create a function to determine if a year is a leap year.
function determineLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap year";
    } else {
        return "Not a leap year";
    }
}

console.log(determineLeapYear(2025)); // Not a leap year

// 5 - Implement a function to calculate the average of two numbers, stopping execution if any number is invalid.
function computeAverage(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        return "One of the numbers is invalid.";
    }
    return (number1 + number2) / 2;
}

console.log(computeAverage(8, 5));

// 6 - Develop a function that receives an array as a parameter and returns its size.
function arrayLength(array) {
    return array.length;
}

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayLength(numbersList));

// 7 - Create an array and use the includes method to check if a specific element is present.
const numbersArray = [10, 20, 30, 40, 50];
console.log("Does the array contain the number 30?", numbersArray.includes(30));
// Expected output: "Does the array contain the number 30?" true

// 8 - Implement a function that receives an array and an element and checks if the element is present in the array.
function elementExistsInArray(array, element) {
    return array.includes(element);
}

const elementsArray = [10, 20, 30, 40, 50];
const targetElement = 30;

// Using the function to check if the element is present in the array
const isTargetPresent = elementExistsInArray(elementsArray, targetElement);

// Displaying the result
if (isTargetPresent) {
    console.log(`The element ${targetElement} is present in the array.`);
} else {
    console.log(`The element ${targetElement} is not present in the array.`);
}

// 9 - Create an array of strings and use includes to check if a specific string is present.
const fruitList = ["apple", "banana", "orange", "grape"];
console.log("Is the word 'banana' in the array?", fruitList.includes("banana"));
// Expected output: "Is the word 'banana' in the array?" true

// 10 - Develop a function that receives an array of objects representing students in a course and an object representing a specific student. Then return if the object is present in the array.
function studentExistsInArray(array, obj) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(obj));
}

// Array of objects representing students
const studentList = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Maria', age: 22 },
    { id: 3, name: 'Peter', age: 21 },
    { id: 4, name: 'Anna', age: 19 }
];

// Object to check if it is present in the array
const targetStudent = { id: 2, name: 'Maria', age: 22 };

// Using the function to check if the object is present in the array
const isStudentPresent = studentExistsInArray(studentList, targetStudent);

// Displaying the result
if (isStudentPresent) {
    console.log('The student is present in the array.');
} else {
    console.log('The student is not present in the array.');
}

// 11 - Create a function that receives an array of numbers and returns the sum of the even elements and the product of the odd elements.
function sumAndProductOfArray(numbersArray) {
    let sumEvenNumbers = 0;
    let productOddNumbers = 1;

    for (let number of numbersArray) {
        if (number % 2 === 0) {
            sumEvenNumbers += number;
        } else {
            productOddNumbers *= number;
        }
    }

    return {
        sumEvenNumbers,
        productOddNumbers
    };
}

const mixedNumbers = [1, 2, 3, 4, 5];
const sumAndProductResult = sumAndProductOfArray(mixedNumbers);
console.log("Sum of evens:", sumAndProductResult.sumEvenNumbers);
console.log("Product of odds:", sumAndProductResult.productOddNumbers);