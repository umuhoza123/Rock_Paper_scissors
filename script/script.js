let playerScore = 0;
let computerScore = 0;
let round = 1;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("player-choice").textContent = `Player: ${playerChoice}`;
  document.getElementById("computer-choice").textContent = `Computer: ${computerChoice}`;

  const result = determineWinner(playerChoice, computerChoice);
  document.getElementById("game-result").textContent = result;

  updateScore(result);

  if (round === 5) {
    determineFinalWinner();
  } else {
    round++;
    setTimeout(() => {
      document.getElementById("game-result").textContent = "Choose your move for round " + round;
    }, 2000);
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You win!";
  }

  computerScore++;
  return "Computer wins!";
}

function updateScore(result) {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function determineFinalWinner() {
  if (playerScore > computerScore) {
    document.getElementById("game-result").textContent = "You win the game!";
  } else if (playerScore < computerScore) {
    document.getElementById("game-result").textContent = "Computer wins the game!";
  } else {
    document.getElementById("game-result").textContent = "It's a tie! The game is a draw.";
  }

  // Reset the game for a new round
  playerScore = 0;
  computerScore = 0;
  round = 1;
}
