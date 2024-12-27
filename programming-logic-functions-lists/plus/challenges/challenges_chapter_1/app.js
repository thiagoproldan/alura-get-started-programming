// 1 - Change the content of the `h1` tag with `document.querySelector` and assign the following text: "Challenge Time".
let h1 = document.querySelector('h1');
h1.innerHTML = 'Challenge Time';

// 2 - Create a function that displays the message "The button was clicked" on the console whenever the Console button is pressed.
function displayMessageInConsole() {
  console.log('The button was clicked');
}

// 3 - Create a function that displays an alert with the message: "I love JS", whenever the Alert button is pressed.
function displayAlert() {
  alert('I love JS');
}

// 4 - Create a function that runs when the prompt button is clicked, asking for the name of a city in Brazil. 
// Then, display an alert with the message concatenating the response with the text: "I was in {city} and I remembered you".
function displayPrompt() {
  let city = prompt('Enter the name of a city in Brazil');
  alert(`I was in ${city} and I remembered you`);
}

// 5 - When clicking the sum button, ask for 2 integers and display the sum result in an alert.
function displaySum() {
  let firstNumber = parseInt(prompt('Enter the first number'));
  let secondNumber = parseInt(prompt('Enter the second number'));
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Please enter valid integers');
  } else {
    let result = firstNumber + secondNumber;
    alert(`The sum is ${firstNumber} + ${secondNumber} = ${result}`);
  }
}