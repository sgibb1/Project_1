userChoice = prompt("Pick either rock, paper or scissors.");

computerChoice = Math.floor(Math.random() * 2);
console.log(computerChoice);

if (computerChoice == 0) {
  computerChoice = "Rock"
}
else if (computerChoice == 1) {
  computerChoice = "Paper"
}
else if (computerChoice == 2) {
  computerChoice = "Scissors"
} console.log("Computer: " + computerChoice);
