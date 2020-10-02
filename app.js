let userScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);

let games = parseInt(prompt("How many games would you like to play?"));

let userChoice = prompt("Please pick rock, paper or scissors");

function computerPlay() {
  computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);

  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else if (computerChoice == 2) {
    computerChoice = "scissors";
  }
}

function playGame(userChoice, computerChoice) {
  if (userChoice === "rock") {
    if (computerChoice === "rock") {
      tieScore++;
    } else if (computerChoice === "paper") {
      computerScore++;
    } else if (computerChoice === "scissors") {
      userScore++;
    }
  }
}

if (userChoice === "paper") {
  if (computerChoice === "paper") {
    tieScore++;
  } else if (computerChoice === "scissors") {
    computerScore++;
  } else if (computerChoice === "rock") {
    userScore++;
  }
}

if (userChoice === "scissors") {
  if (computerChoice === "scissors") {
    tieScore++;
  } else if (computerChoice === "rock") {
    computerScore++;
  } else if (computerChoice === "paper") {
    userScore++;
  }
}
<<<<<<< HEAD

for (var i = 0; i > games; i++) {
  let userChoice = prompt("Please pick rock, paper or scissors");
  const computerChoice = computerPlay()
  console.log(playGame(userChoice, computerChoice))
}

alert("Your score: " + userScore);
alert("Computer score: " + computerScore);
alert("Tie games: " + tieScore);



// let games = parseInt(prompt ("How many games would you like to play?"))
// for (let i = 0; i < games; i++)

//userChoice = prompt("Do you choose rock, paper or scissors?");

//function results() {
//  if (computerChoice === userChoice) {
//    return result = 'You tied!'
//  } else if (computerChoice === 'rock' && userChoice === 'paper') { 
//    return result = 'You win!'
//  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
//    return result = 'You lose'
//  } else if (computerChoice === 'paper' && userChoice === 'rock') {
//   return result = 'You lose'
//  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
//   return result = 'You win!'
//  } else if (computerChoice === 'scissor' && userChoice === 'rock') {
//    return result = 'You win!'
//  } else if (computerChoice === 'scissor' && userChoice === 'paper') {
//    return result = 'You lose'
//  }
}
=======
//////// Comparing Users Choice to Computer

function results() {
  if (computerChoice === userChoice) {
    return result = 'You tied!'
  } else if (computerChoice === 'rock' && userChoice === 'paper') { 
    return result = 'You win!'
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    return result = 'You lose'
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
   return result = 'You lose'
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
   return result = 'You win!'
  } else if (computerChoice === 'scissor' && userChoice === 'rock') {
    return result = 'You win!'
  } else if (computerChoice === 'scissor' && userChoice === 'paper') {
    return result = 'You lose'
  }
}
>>>>>>> 9011e0d9851935b5af68f66e12d546620b056416
