/**
 * Game rules:
 * - Player must guess a number between a min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guesses remaining
 * - Tell player the correct answer if he/she loses
 * - Let a player choose to play again
 */

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector("#game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  UIguessBtn = document.querySelector("#guess-btn"),
  UIguessInput = document.querySelector("#guess-input"),
  UImessage = document.querySelector(".message");

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Listen for guess
UIguessBtn.addEventListener("click", function() {
  let guess = parseInt(UIguessInput.value);
  console.log(guess);
  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  //Check if won
  if (guess === winningNum) {
    //disable input
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = "green";
    //set message
    setMessage(`${winningNum} is correct!, YOU JUST WON!`, "green");
  } else {
  }
});

// Set Message function
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}
