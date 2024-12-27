// == (Equality)
// The equality operator (==) compares two values for equality, ignoring the data type.
// If the values are equal, the result is true. Otherwise, it is false.
let number1 = 10;
let number2 = "10";

if (number1 == number2) {
    console.log('The values are equal');
} else {
    console.log('The values are not equal');
}

// != (Inequality)
// The inequality operator (!=) compares two values for inequality, ignoring the data type.
// If the values are not equal, the result is true. Otherwise, it is false.
let number3 = 10;
let number4 = 20;

if (number3 != number4) {
    console.log('The values are not equal');
} else {
    console.log('The values are equal');
}

// < (Less than)
// The less than operator (<) checks if the left-hand value is less than the right-hand value.
// If it is, the result is true. Otherwise, it is false.
let value1 = 5;
let value2 = 10;

if (value1 < value2) {
    console.log('Value1 is less than Value2');
} else {
    console.log('Value1 is not less than Value2');
}

// > (Greater than)
// The greater than operator (>) checks if the left-hand value is greater than the right-hand value.
// If it is, the result is true. Otherwise, it is false.
let value3 = 15;
let value4 = 10;

if (value3 > value4) {
    console.log('Value3 is greater than Value4');
} else {
    console.log('Value3 is not greater than Value4');
}

// <= (Less than or equal to)
// The less than or equal to operator (<=) checks if the left-hand value is less than or equal to the right-hand value.
// If it is, the result is true. Otherwise, it is false.
let value5 = 10;
let value6 = 10;

if (value5 <= value6) {
    console.log('Value5 is less than or equal to Value6');
} else {
    console.log('Value5 is not less than or equal to Value6');
}

// >= (Greater than or equal to)
// The greater than or equal to operator (>=) checks if the left-hand value is greater than or equal to the right-hand value.
// If it is, the result is true. Otherwise, it is false.
let value7 = 15;
let value8 = 10;

if (value7 >= value8) {
    console.log('Value7 is greater than or equal to Value8');
} else {
    console.log('Value7 is not greater than or equal to Value8');
}

// AND (&&)
// The AND operator, represented by the symbols "&&", is used to combine two conditions and evaluate whether both are true.
// If both conditions are true, the result will be true. Otherwise, it will be false.
let age = 25;
let hasDriverLicense = true;

// If the person is over 18 years old AND has a driver's license
if (age >= 18 && hasDriverLicense) {
    console.log('The person can drive');
} else {
    console.log('The person cannot drive');
}

// OR (||)
// The OR operator, represented by the symbols "||", is used to combine two conditions and evaluate whether at least one of them is true.
// If one of the conditions is true, the result will be true. Otherwise, it will be false.
let haveApple = true;
let haveBanana = false;

// If the person has an apple OR a banana
if (haveApple || haveBanana) {
    console.log('The person has a fruit');
} else {
    console.log('The person does not have a fruit');
}

// NOT (!)
// The NOT operator, represented by the symbol "!", is used to invert the logical value of a condition.
// If the condition is true, it will become false, and vice-versa.
let isRaining = false;

// Check if it is NOT raining
if (!isRaining) {
    console.log('It is not raining, you can go outside');
} else {
    console.log('It is raining, take an umbrella');
}

// Combining AND (&&) and OR (||)
// You can combine multiple logical operators to create complex conditions.
let hasCar = true;
let knowsRoute = false;
let hasGPS = true;

// If the person has a car AND (knows the route OR has GPS)
if (hasCar && (knowsRoute || hasGPS)) {
    console.log('The person can drive to the destination');
} else {
    console.log('The person cannot drive to the destination');
}