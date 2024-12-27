// 1 - Create a counter that starts at 1 and goes up to 10 using a while loop. Show each number.
let incrementingCounter = 1;
while (incrementingCounter <= 10) {
    console.log(incrementingCounter);
    incrementingCounter++;
}

// 2 - Create a counter that starts at 10 and goes to 0 using a while loop. Show each number.
let decrementingCounter = 10;
while (decrementingCounter >= 0) {
    console.log(decrementingCounter);
    decrementingCounter--;
}

// 3 - Create a countdown program. Ask for a number and count from that number to 0, using a while loop in the browser console.
let countDownNumber = parseInt(prompt("Enter a number to count down from:"));

if (isNaN(countDownNumber)) {
    alert("Please enter a valid number.");
} else {
    while (countDownNumber >= 0) {
        console.log(countDownNumber);
        countDownNumber--;
    }
}

// 4 - Create a count-up program. Ask for a number and count from 0 to that number using a while loop in the browser console.
let countUpNumber = parseInt(prompt("Enter a number to count up to:"));

if (isNaN(countUpNumber)) {
    alert("Please enter a valid number.");
} else {
    let start = 0;
    while (start <= countUpNumber) {
        console.log(start);
        start++;
    }
}