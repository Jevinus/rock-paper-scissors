










/* let playerScore = 0;
let computerScore = 0;

// Allows the cpu to assign a random value
function computerPlay() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}
// Registers player input, returns CPU input.
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return ("It's a draw!");
  }

  else if (playerSelection === "rock" & computerSelection === "paper") {
    computerScore += 1
    return ("You lose! :( paper beats rock!")
  }

  else if (playerSelection === "rock" & computerSelection === "scissors") {
    playerScore += 1
    return ("You win! Rock beats scissors!")
  }

  else if (playerSelection === "scissors" & computerSelection === "paper") {
    playerScore += 1
    return ("You win! Scissors beats paper!")
  }

  else if (playerSelection === "scissors" & computerSelection === "rock") {
    computerScore += 1
    return ("You lose! Rock beats scissors!")
  }

  else if (playerSelection === "paper" & computerSelection === "rock") {
    playerScore += 1
    return ("You win! Paper beats rock!")
  }

  else if (playerSelection === "paper" & computerSelection === "scissors") {
    computerScore += 1
    return ("You lose! Scissors beats paper!")
  }

  else if (computerScore >= 5) {
    console.log("You lose the game!")
  }

  else if (playerScore >= 5) {
    console.log("You win the game!")
  }
}

function game() {

}

let computerSelection = computerPlay();
let playerSelection = prompt("Choose your weapon");
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
