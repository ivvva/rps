const choices = ["rock", "paper", "scissors"];
//const numberOfRounds
let winners = [];
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function scoreboard() {}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

// function game() {
//   for (let i = 0; i < numberOfRounds; i++) {
//     playRound(i);
//   }
//   //document.querySelector("button").textContent = "Play new game";
//   logWins();
//   console.log('BUYRHLKJHSD')

//   restartGame();
// }

function playRound() {
  const button = this;
  const playerSelection = button.value;
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  confirmGameEnd();
}

// function getPlayerChoice() {
//   let input = prompt("Type Rock, Paper, or Scissors");
//   while (input == null) {
//     input = prompt("Type Rock, Paper, or Scissors");
//   }
//   input = input.toLowerCase();
//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt(
//       "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
//     );
//     while (input == null) {
//       input = prompt("Type Rock, Paper, or Scissors");
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   return input;
// }

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// function validateInput(choice) {
//   return choices.includes(choice);
// }

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

    // Add class with animation
    // Change html element with new score
  } else {
    const computerScore = document.getElementById("scoreboard-ComputerScore");
    computerScore.addEventListener("animationend", () => {
      computerScore.textContent = computerWins;
      computerScore.classList.remove("changingScore");
    });
    computerScore.classList.add("changingScore");
    computerWins = computerWins + 1;
    // Add class with animation
  }
  // let computerChoiceRock = document.getElementById("computerChoiceRock");
  // let computerChoicePaper = document.getElementById("computerChoicePaper");
  // let computerChoiceScissors = document.getElementById("computerChoiceScissors");
  // const choicesC = document.querySelectorAll("#computerChoiceRock", "#computerChoicePaper", "#computerChoiceScissors")

  const computerButtons = document.querySelector(".choicesC .buttons");
  const computerSelection = computerButtons.querySelector(
    `[value="${choiceC}"]`
  );
  computerSelection.addEventListener("animationend", () => {
    computerSelection.classList.remove("chosen");
  });
  computerSelection.classList.add("chosen");

  // add class with animation

  // Cleanup all animations
}
let popup = document.getElementById("popup");

function confirmGameEnd() {
  let playerWinsBanner = document.getElementById("playerWins-banner");
  let computerWinsBanner = document.getElementById("computerWins-banner");
  let restartBtnPlayer = document.getElementById("restart-btnPlayer");
  let restartBtnComputer = document.getElementById("restart-btnComputer");
  const overlay = document.getElementById("overlay");

  // const popupActive = popup.classList.add("active");
  if (playerWins == 5) {
    overlay.classList.add("active");
    popup.style.display = "flex";
    popup.classList.add("active");
    // popup.addEventListener("animationstart", () => {
    //   popup.style.display = null;
    // });
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
    // popup.addEventListener("animationstart", () => {
    //   popup.style.display = null;
    // });
    computerWinsBanner.removeAttribute("hidden");
    restartBtnComputer.removeAttribute("hidden");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetVariables();
  }
}

// function logWins() {
//   const output = `Player won ${playerWins} times, Computer won ${computerWins} times, draws happened ${draws} times`;
//   alert(output);
//   alert(getChampionOutput());
// }
document
  .getElementById("restart-btnPlayer")
  .addEventListener("click", restartGame);
document
  .getElementById("restart-btnComputer")
  .addEventListener("click", restartGame);

// const popup = document.getElementById("popup");
// const popupActive = popup.classList.add("active");

// popupActive.onanimationstart = () => {
//   popupActive.removeAttribute("style");
// };

function resetVariables() {
  playerWins = 0;
  computerWins = 0;
  draws = 0;
}

function restartGame() {
  let playerWinsBanner = document.getElementById("playerWins-banner");
  let computerWinsBanner = document.getElementById("computerWins-banner");
  let restartBtnPlayer = document.getElementById("restart-btnPlayer");
  let restartBtnComputer = document.getElementById("restart-btnComputer");
  const playerScore = document.getElementById("scoreboard-PlayerScore");
  playerScore.innerHTML = playerWins;
  const computerScore = document.getElementById("scoreboard-ComputerScore");
  computerScore.innerHTML = computerWins;

  document.getElementById("rock-btn").disabled = false;
  document.getElementById("paper-btn").disabled = false;
  document.getElementById("scissors-btn").disabled = false;

  playerWinsBanner.setAttribute("hidden", "hidden");
  computerWinsBanner.setAttribute("hidden", "hidden");
  restartBtnPlayer.setAttribute("hidden", "hidden");
  restartBtnComputer.setAttribute("hidden", "hidden");
  popup.style.display = "none";
  overlay.classList.remove("active");
}
