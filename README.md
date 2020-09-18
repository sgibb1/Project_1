Rock Paper Scissors

Each group should submit a Github repository with their project. This is a tough project and shouldn't be put off till the last minute.

Project Standards

Students will use conditional statements to control program flow.

Students will use loops to repeat program code in an efficient manner.

Students will use variables to store information needed by their application and keep track of their program’s state.

Students will use JavaScript to capture user input and use it in their applications.

Project Task

You will be building a playable rock paper scissors game using HTML and JavaScript. Your program should do the following steps:

1. When your HTML loads, it should prompt the user for how many rounds they want to play. You will save this number to a variable.

  Hint: you’ll need to use the prompt function https://www.w3schools.com/jsref/met_win_prompt.asp

  You will need to parse the user input as an integer https://www.w3schools.com/jsref/jsref_parseint.asp

2. After the user enters the number of rounds they want to play, use the variable where you stored the user input to loop through the number of rounds. For every round you should do the following:

  Prompt the user for r, p, or s (rock, paper, or scissors).

  Write code for the computer to randomly generate a number 0-2 (this will represent the computer choice of rock paper scissors).

  https://www.w3schools.com/js/js_random.asp is a good resource.

  Use conditional statements to compare the user’s choice to the computer.

  If the user wins, increment a global wins variable, and alert that the user won.

  If the computer wins, increment a global losses variable, and alert that the user lost.

  If it’s a tie, increment a global ties variable, and alert that the user tied.

  Make sure you put these 3 variables outside of your loop.

3. After all the rounds, alert the user to how many times they won, how many times they tied, and how many times they lost.

Notes

  Input validation for the user would be nice (checking to make sure they entered the right input) but it’s a stretch goal and I won’t be grading on that. You can assume that  the user will always enter valid input.

  Focus on the steps and not the whole assignment.
