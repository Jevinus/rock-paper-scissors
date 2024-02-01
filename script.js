let winners = [];
const choices = ["king", "wizard", "elf"];

function resetGame() {
  winners = [];
  document.querySelector(".player_score").textContent = "Your Score: 0";
  document.querySelector(".computer_score").textContent = "CPU Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".player_choice").textContent = "";
  document.querySelector(".computer_choice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You Won 5 Rounds, you win!";
  } else {
    document.querySelector(".winner").textContent =
      "The CPU won 5 times, game over.";
  }
  document.querySelector(".play_again").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".player_choice").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computer_choice"
  ).textContent = `The CPU Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The Computer won the Round";
  } else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".player_score").textContent = `Your Score: ${pWinCount}`;
  document.querySelector(".computer_score").textContent = `CPU Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelect() {
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "king" && choice2 == "elf") ||
    (choice1 == "elf" && choice2 == "wizard") ||
    (choice1 == "wizard" && choice2 == "king")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}
startGame();
