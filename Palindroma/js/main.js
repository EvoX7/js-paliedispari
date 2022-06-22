// ! Asking user for an input word 

const userInput = prompt("Please enter a word");


// ? Checking if a word is palindrome 
// ? Naming a function
function checkPal(userInput) {
    const userInputLength = userInput.length;

    // ? Iterate through half of the string, because going through the whole string would compare every character twice
    for (let index = 0; index < userInputLength / 2; index++) {

        //    ? Comparing each character in start position [index] with each character at end position
        if (userInput[index] !== userInput[userInputLength - 1 - index]) {
            return "The word it's NOT palindrome";
        }
    }
    return "The word it's Palindrome";
    
}

// * Defining output 
const functionOutput = checkPal(userInput);
console.warn(functionOutput);
document.getElementById("word-output").innerHTML = functionOutput ;

