const choices = ["rock", "paper", "scissors"];
let winners = [];
let playerWins = 0;
let computerWins = 0;
const playerWinsBanner = document.getElementById("playerWins-banner");
const computerWinsBanner = document.getElementById("computerWins-banner");
const restartBtnPlayer = document.getElementById("restart-btnPlayer");
const restartBtnComputer = document.getElementById("restart-btnComputer");
const popup = document.getElementById("popup");
restartBtnPlayer.addEventListener("click", restartGame);
restartBtnComputer.addEventListener("click", restartGame);

function scoreboard() {}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

function playRound() {
  const button = this;
  const playerSelection = button.value;
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  confirmGameEnd();
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
  if (choiceP == choiceC) {
    const draw = document.getElementById("draw");
    draw.removeAttribute("hidden");
    draw.addEventListener("animationend", () => {
      draw.setAttribute("hidden", "hidden");
      draw.classList.remove("drawAnimation");
    });
    draw.classList.add("drawAnimation");
  } else if (
    (choiceP == "rock" && choiceC == "scissors") ||
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper")
  ) {
    playerWins = playerWins + 1;

    const playerScore = document.getElementById("scoreboard-PlayerScore");
    playerScore.addEventListener("animationend", () => {
      playerScore.textContent = playerWins;
      playerScore.classList.remove("changingScore");
    });
    playerScore.classList.add("changingScore");
  } else {
    const computerScore = document.getElementById("scoreboard-ComputerScore");
    computerScore.addEventListener("animationend", () => {
      computerScore.textContent = computerWins;
      computerScore.classList.remove("changingScore");
    });
    computerScore.classList.add("changingScore");
    computerWins = computerWins + 1;
  }

  const computerButtons = document.querySelector(".choicesC .buttons");
  const computerSelection = computerButtons.querySelector(
    `[value="${choiceC}"]`
  );
  computerSelection.addEventListener("animationend", () => {
    computerSelection.classList.remove("chosen");
  });
  computerSelection.classList.add("chosen");
}

function confirmGameEnd() {
  const overlay = document.getElementById("overlay");

  if (playerWins == 5) {
    overlay.classList.add("active");
    popup.style.display = "flex";
    popup.classList.add("active");

    playerWinsBanner.removeAttribute("hidden");
    restartBtnPlayer.removeAttribute("hidden");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetVariables();
  } else if (computerWins == 5) {
    overlay.classList.add("active");
    popup.style.display = "flex";
    popup.classList.add("active");

    computerWinsBanner.removeAttribute("hidden");
    restartBtnComputer.removeAttribute("hidden");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetVariables();
  }
}

function resetVariables() {
  playerWins = 0;
  computerWins = 0;
  draws = 0;
}

function restartGame() {
  let restartBtnComputer = document.getElementById("restart-btnComputer");
  const playerScore = document.getElementById("scoreboard-PlayerScore");
  playerScore.innerHTML = playerWins;
  const computerScore = document.getElementById("scoreboard-ComputerScore");
  computerScore.innerHTML = computerWins;

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  playerWinsBanner.setAttribute("hidden", "hidden");
  computerWinsBanner.setAttribute("hidden", "hidden");
  restartBtnPlayer.setAttribute("hidden", "hidden");
  restartBtnComputer.setAttribute("hidden", "hidden");
  popup.style.display = "none";
  overlay.classList.remove("active");
}
