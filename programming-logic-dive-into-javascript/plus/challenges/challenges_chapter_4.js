// 1 - Create a program that uses `console.log` to display a welcome message.
console.log("Welcome!");

// 2 - Create a variable called `name` and give it your name. Then use `console.log` to display the message "Hello, [your name]!" in the browser console.
let name = "Thiago";
console.log(`Hello, ${name}!`);

// 3 - Create a variable called `name` and give it your name. Then use the alert to display the message "Hello, [your name]!" .
alert(`Hello, ${name}!`);

// 4 - Use the prompt and ask the following question: "What programming language do you like most?" Then store the response in a variable and show it in the browser console.
let programmingLanguage = prompt("What programming language do you like most?");
console.log(`You like ${programmingLanguage} the most.`);

// 5 - Create a variable called `value1` and another called `value2`, assigning them numeric values ​​of your choice. Then, add these two values ​​and store the result in a third variable called `result`. Use `console.log` to display the message "The sum of [value1] and [value2] is equal to [result]." in the console.
let value1 = 10;
let value2 = 20;
let result = value1 + value2;
console.log(`The sum of ${value1} and ${value2} is equal to ${result}.`);

// 6 - Create a variable called `value1` and another called `value2`, assigning them numeric values ​​of your choice. Then, subtract these two values ​​and store the result in a third variable called `result`. Use `console.log` to display the message "The difference between [value1] and [value2] is equal to [result]." in the console.
value1 = 20;
value2 = 10;
result = value1 - value2;
console.log(`The difference between ${value1} and ${value2} is equal to ${result}.`);

// 7 - Ask user to enter their age with prompt. Based on the age entered, use an if to check whether the person is older or younger, displaying an appropriate message in the console.
let age = prompt("Enter your age");
if (age >= 18) {
    console.log("You are older.");
} else {
    console.log("You are younger.");
}

// 8 - Create a variable `number` and ask for a value with prompt check if it is positive, negative or zero. Use if-else to print the respective message.
let number = parseFloat(prompt("Enter a number")); // parseFloat converts the string to a number
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 9 - Use a while loop to print the numbers 1 to 10 to the console.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 10 - Create a variable `grade` and assign a numeric value to it. Use if-else to determine whether the grade is greater than or equal to 7 and display "Pass" or "Fail" in the console.
let grade = 8;
if (grade >= 7) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 11 - Use `Math.random` to generate any random number and display that number in the console.
console.log(Math.random());

// 12 - Use `Math.random` to generate an integer between 1 and 10 and display that number in the console.
console.log(parseInt(Math.random() * 10 + 1));

// 13 - Use `Math.random` to generate an integer between 1 and 1000 and display that number in the console.
console.log(parseInt(Math.random() * 1000 + 1));