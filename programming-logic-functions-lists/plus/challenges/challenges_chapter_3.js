// 1 - Create a function that calculates a person's body mass index (BMI), based on their height, in meters, and weight, in kilograms, which will be received as a parameter.
function calculateBMI(height, weight) {
    return weight / (height * height);
}

let bmi = calculateBMI(1.92, 80);
console.log(`The BMI is ${bmi.toFixed(2)}`);

// 2 - Create a function that calculates the factorial value of a number passed as a parameter.
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

let number = 5;
let factorialResult = calculateFactorial(number);
console.log(`The factorial of ${number} is ${factorialResult}`);

// 3 - Create a function that converts a value in dollars, passed as a parameter, and returns the equivalent value in reais. To do this, consider the dollar exchange rate equal to R$6.20.
function convertDollarToReal(dollar) {
    let exchangeRate = 6.20;
    let real = dollar * exchangeRate;
    return real.toFixed(2); // toFixed(2) is used to round the number to 2 decimal places
}

let dollarAmount = 10;
let convertedValue = convertDollarToReal(dollarAmount);
console.log(`$${dollarAmount} is equivalent to R$${convertedValue}`);

// 4 - Create a function that displays the area and perimeter of a rectangular room on the screen, using the height and width that will be given as parameters.
function calculateAreaAndPerimeter(height, width) {
    let area = height * width;
    let perimeter = 2 * (height + width);
    console.log(`The area of the room is ${area.toFixed(2)} and the perimeter is ${perimeter.toFixed(2)}`);
}

calculateAreaAndPerimeter(5, 10);

// 5 - Create a function that displays the area and perimeter of a circular room on the screen, using its radius that will be provided as a parameter. Use Math.PI for accuracy.
function calculateAreaAndPerimeterCircle(radius) {
    let area = Math.PI * (radius * radius);
    let perimeter = 2 * Math.PI * radius;
    console.log(`The area of the circle is ${area.toFixed(2)} and the perimeter is ${perimeter.toFixed(2)}`);
}

calculateAreaAndPerimeterCircle(5);

// 6 - Create a function that displays the multiplication table of a number given as a parameter on the screen.
function multiplicationTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiplicationTable(5);