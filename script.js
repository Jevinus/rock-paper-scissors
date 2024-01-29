let playerScore = 0;
let computerScore = 0;
let round = 0;

console.log("Choose your weapon 'rock' 'paper' 'scissors' ")


// CPU selects random
function computerSelection() {
  Math.random["rock", "paper", "scissors"]
}

function playRound(playerSelection, computerSelection) {
  if(
     ( playerSelection === "king" && computerSelection === "elf") ||
     ( playerSelection === "elf" && computerSelection === "wizard") ||
     ( playerSelection === "wizard" && computerSelection === "king")
    ) {
  playerScore++
  }
  else if (
     ( playerSelection === "king" && computerSelection === "wizard") ||
     ( playerSelection === "elf" && computerSelection === "king") ||
     ( playerSelection === "wizard" && computerSelection === "elf")
    ) {
  computerScore++
  }
  else if (
     ( playerSelection === "king" && computerSelection === "king") ||
     ( playerSelection === "elf" && computerSelection === "elf") ||
     ( playerSelection === "wizard" && computerSelection === "wizard")
    ) {
  }
  round++
}

console.log(playRound("king", "elf"))









/* Original

let playerScore = 0;
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
console.log(playRound(playerSelection, computerSelection)); */
