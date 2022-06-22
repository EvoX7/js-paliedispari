// ! Asking input number from User
const userNumber = parseInt(prompt("Please enter a number from 1 to 5"));
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
const NumberSum = userNumber + computerGen;

// * Checking Even/Odd
function isEven(userNumber) {
  if (userNumber % 2 === 0) return true;
  else return false;
}

// ! Showing Even/Odd result

const EvenOddResult = isEven(NumberSum);
console.log(EvenOddResult);
document.getElementById("even-odd").innerHTML = "Sum is:" + " " + NumberSum + " " + EvenOddResult;


