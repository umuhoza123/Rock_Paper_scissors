let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("player-choice").textContent = `Player: ${playerChoice}`;
  document.getElementById("computer-choice").textContent = `Computer: ${computerChoice}`;

  const result = determineWinner(playerChoice, computerChoice);
  document.getElementById("game-result").textContent = result;

  updateScore(result);
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
