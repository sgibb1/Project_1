let userScore = 0;
let computerScore = 0;
let tieScore = 0;
let win = "You Win!"
let lose = "You Lose!"
let tie = "Tie Game!"

let games = prompt("How many games would you like to play?"));
for (var i = 0; i < games; i++) {
  let userSelection = prompt("Pick rock, paper, or scissors.");
  const computerSelection = computerPlay()
  console.log(playRound(playerSelection, computerSelection))
  console.log("Your score = " + userScore);
  console.log("Computer's score = " + computerScore);
  console.log("Tie Games = " + tieScore);
  alert("You won: " + userScore);
  alert("The computer won: " + computerScore);
  alert("Tie games: " + tieScore)
}

function computerPlay() {
  let random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else if (random == 2) {
    return "scissors";
  }
}

function playRound(userSelection, computerSelection) {
  if (userSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      alert lose;
    } else if (computerSelection === "rock") {
      tieScore++;
      alert tie;
    } else if (computerSelection === "scissors") {
      userScore++;
      alert win;
    }
  }

if (userSelection === "scissors") {
  if (computerSelection === "paper") {
    userScore++;
    alert win;
  } else if (computerSelection === "rock") {
    computerScore++;
    alert lose;
  } else if (computerSelection === "scissors") {
    tieScore++;
    alert tie;
  }
}

if (userSelection === "paper") {
  if (computerSelection === "paper") {
    tieScore++;
    alert tie;
  } else if (computerSelection === "rock") {
    userScore++;
    alert win;
  } else if (computerSelection === "scissors") {
    computerScore++;
    alert lose;
  }
 }
}
