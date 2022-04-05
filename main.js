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
  const button = this
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
  console.log(choiceC)
  console.log(choiceP)
  if (choiceP == choiceC) {
    draws = draws + 1;
  } else if (
    (choiceP == "rock" && choiceC == "scissors") ||
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper")
  ) {
    playerWins = playerWins + 1;
  } else {
    computerWins = computerWins + 1;
  }
  // let computerChoiceRock = document.getElementById("computerChoiceRock");
  // let computerChoicePaper = document.getElementById("computerChoicePaper");
  // let computerChoiceScissors = document.getElementById("computerChoiceScissors");
  const choicesC = document.querySelectorAll("#computerChoiceRock", "#computerChoicePaper", "#computerChoiceScissors")
  const playerScore = document.getElementById("scoreboard-PlayerScore");
  playerScore.innerHTML = playerWins;
  const computerScore = document.getElementById("scoreboard-ComputerScore");
  computerScore.innerHTML = computerWins;

 
}

function confirmGameEnd() {
  let playerWinsBanner = document.getElementById("playerWins-banner");
  let computerWinsBanner = document.getElementById("computerWins-banner");
  let restartBtnPlayer = document.getElementById("restart-btnPlayer");
  let restartBtnComputer = document.getElementById("restart-btnComputer");
  if (playerWins == 5) {
    playerWinsBanner.removeAttribute("hidden");
    restartBtnPlayer.removeAttribute("hidden");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetVariables();
  } else if (computerWins == 5) {
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
document.getElementById("restart-btnPlayer").addEventListener("click", restartGame);
document.getElementById("restart-btnComputer").addEventListener("click", restartGame);

function resetVariables() {
  playerWins = 0;
  computerWins = 0;
  draws = 0;
}

function restartGame() {
  let playerWinsBanner = document.getElementById("playerWins-banner");
  let computerWinsBanner = document.getElementById("computerWins-banner");
  let restartBtn = document.getElementById("restart-btn");
  const playerScore = document.getElementById("scoreboard-PlayerScore");
  playerScore.innerHTML = playerWins;
  const computerScore = document.getElementById("scoreboard-ComputerScore");
  computerScore.innerHTML = computerWins;

  document.getElementById("rock-btn").disabled = false;
  document.getElementById("paper-btn").disabled = false;
  document.getElementById("scissors-btn").disabled = false;

  playerWinsBanner.setAttribute("hidden", "hidden");
  computerWinsBanner.setAttribute("hidden", "hidden");
  restartBtn.setAttribute("hidden", "hidden");
}
