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
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const UIgameWrapper = document.querySelector("#game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  UIguessBtn = document.querySelector("#guess-btn"),
  UIguessInput = document.querySelector("#guess-input"),
  UImessage = document.querySelector(".message");

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
UIgameWrapper.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

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
    //game over -won!
    gameOver(true, `${winningNum} is correct!, YOU JUST WON!`, "green");
  } else {
    //wrong mumber
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over - lost!
      gameOver(
        false,
        `Game over, you lost! The correct number was ${winningNum}`
      );
    } else {
      //Game continues - answer wrong
      //change border color
      UIguessInput.style.borderColor = "red";
      //Clear input
      UIguessInput.value = "";
      //Notify user that this is wrong number
      setMessage(
        `${guess} is incorrect; You have ${guessesLeft} guesses left`,
        "red"
      );
    }
  }
});

// Set Message function
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}

// gaveOver function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : "red";
  //disable input
  UIguessInput.disabled = true;
  UIguessInput.style.borderColor = color;
  //set text color
  UImessage.style.color = color;
  //set message
  setMessage(msg);
  //play again?
  UIguessBtn.value = "Play Again";
  UIguessBtn.className += "play-again";
}

// getRandomNum funciton
function getRandomNum(min, max) {
  // we want a number between 1 and 10 so we * by: (max-min)+min !
  return Math.floor(Math.random() * (max - min + 1) + min);
}
