// ! Asking input number from User
const userChoice = prompt("Please choose Even/Odd");
const userNumber = parseInt(prompt("Please enter a number from 1 to 5"));


console.log("User choice is", userChoice);
console.log("User number is", userNumber);
document.getElementById("user-number").innerHTML = "User number is" + " " + userNumber;



// ? Random number for the Computer
function randomNumberC(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}


// ? Random number output
const computerGen = randomNumberC(1, 5);
console.log("Computer number is", computerGen);
document.getElementById("computer-number").innerHTML = "Computer number is" + " " + computerGen;


// ! Numbers  Sum
const numberSum = userNumber + computerGen;

// * Checking Even/Odd
function isEven(numberSum) {
  if (numberSum % 2 === 0) return true;
  else return false;
}

// ! Showing Even/Odd result
const EvenOddResult = isEven(numberSum);
console.log(EvenOddResult);
document.getElementById("even-odd").innerHTML = "Sum is:" + " " + numberSum;


