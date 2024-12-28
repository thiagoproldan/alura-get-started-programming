// 2. Add the numbers 1, 2, 3 to a variable called myList and store the numbers 4, 5, and 6 separately in another variable. Use the concat() method to combine the sequences into a new list called newList. Print newList to the console.

// Declaring an array variable
let myList = [];

// Adding elements with push
myList.push(1, 2, 3);
console.log("Adding elements:", myList);

// Creating another array
let otherNumbers = [4, 5, 6];

// Concatenating arrays
let newList = myList.concat(otherNumbers);
console.log("Combining arrays:", newList);

// 3. Remove the last element from newList. Print newList after removal.

newList.pop();
console.log("After removing the last element:", newList); // [1, 2, 3, 4, 5]

// 4. Use the Fisher-Yates algorithm (also known as Knuth Shuffle) to shuffle the elements in newList. Search and adapt the code to perform the shuffle.

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffling newList
newList = shuffleArray(newList);
console.log("Shuffling the list:", newList);

// 5. Create a function called removeDuplicates that accepts an array as a parameter and returns a new array without duplicate elements. Test the function with newList and print the resulting array.

// Function to remove duplicates from an array
function removeDuplicates(array) {
    return [...new Set(array)];
}

// Defining the variable newList
newList = [1, 2, 2, 3, 4, 4, 5];

// Testing the function with newList
let uniqueList = removeDuplicates(newList);
console.log("Removing duplicates:", uniqueList);
