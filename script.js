//players score variables

let playerScore = 0;
let computerScore = 0;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const compSelect = document.getElementById("computerSelect");
const playerSelect = document.getElementById("playerSelect");
const message = document.getElementById("message");
let gameActive = false;

// play round funtion checking the result of every round

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Bruh u synced af";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player won!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player won!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Player won!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Computer won!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer won!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Computer won!";
  }
}

//computer choice function 

function computerPlay() {
    let arr = [1, 2, 3];
    let random = arr[Math.floor(Math.random() * arr.length)];
    let value;
    switch (random){
        case 1:
        value = 'rock';
        break;
        case 2:
        value = 'paper';
        break;
        default:
        value = 'scissors';
    }
    return value;
}

