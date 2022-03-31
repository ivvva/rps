const choices = ["rock", "paper", "scissors"];
const numberOfRounds = 3;
let winners = [];
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function game() {
  for (let i = 0; i < numberOfRounds; i++) {
    playRound(i);
  }
  //document.querySelector("button").textContent = "Play new game";
  logWins();
  resetValues()
}

function playRound(roundNumber) {
  const playerSelection = getPlayerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, roundNumber);
}

function getPlayerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    draws = draws+1;
    return "ur adopted draw";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    playerWins = playerWins+1;
    return "Player";
  } else {
    computerWins = computerWins+1; 
    return "Computer";
  }
}

function logWins() {
  const output = `Player won ${playerWins} times, Computer won ${computerWins} times, draws happened ${draws} times`
  alert(output);
  alert(getChampionOutput());
}

function logRound(playerChoice, computerChoice, winner, roundNumber) {
  const output = `Round ${roundNumber+1}: you selected ${playerChoice}, computer selected ${computerChoice}, winner is ${winner}`
  alert(output)
}

function getChampionOutput() {
  if (playerWins > computerWins) {
    return "You are adopted and a winner";
  } else if (computerWins > playerWins) {
    return "You are adopted and can't beat a computer";
  } else {
    return "go commit unalive";
  }
}

function resetValues(){
  draws = 0;
  playerWins = 0;
  computerWins = 0;
}
  
