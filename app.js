userChoice = prompt("Pick either rock, paper or scissors.");

computerChoice = Math.floor(Math.random() * 2);
console.log(computerChoice);

// Computer choice for RPS
if (computerChoice == 0) {
  computerChoice = "Rock"
}
else if (computerChoice == 1) {
  computerChoice = "Paper"
}
else if (computerChoice == 2) {
  computerChoice = "Scissors"
} console.log("Computer: " + computerChoice);

// Results
if (userChoice === "Scissors") {
  if (computerChoice === "Paper") {
    userScore++;
  }
  else if (userChoice === "Scissors") {
    if (computerChoice === "Rock")
      computerScore++;
  }
  else if (userChoice === "Scissors") {
    if (computerChoice === "Scissors")
      tie++
  }
}

if (userChoice === "Rock") {
  if (computerChoice === "Scissors") {
    userScore++;
  }
  else if (userChoice === "Rock") {
    if (computerChoice === "Paper")
      computerScore++;
  }
  else if (userChoice === "Rock") {
    if (computerChoice === "Rock") {
      tie++;
    }
  }
}

if (userChoice === "Paper") {
  if (computerChoice === "Rock") {
    userScore++;
  }
  else if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      computerScore++;
    }
    else if (userChoice === "Paper") {
      if (computerChoice === "Paper") {
        tie++;
      }
    }
  }
}
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
