//This is a script that allows a user to play rock paper scissors against a computer
//The computer chooses a random choice each time as if it were another person
//Note this script only works in enviornments that support the javascrip 'prompt' element, such as repl.it
//Also the user must type their choice in all lowercase
//I may add more to this in the future, but I'll leave it like this for now








var cpuChoice = cpuFunc
var cpuPaper = "paper"
var cpuRock = "rock"
var cpuScissors = "scissors"

var cpuFunc = Math.floor(Math.random() * (3 - 1 + 1)) + 1;


if (cpuFunc == 1) {
  cpuChoice = cpuPaper;
} else if (cpuFunc == 2) {
  cpuChoice = cpuRock;
} else {
  cpuChoice = cpuScissors;
}

console.log("Compter chose " + cpuChoice);


$("#rock", "#paper", "#scissors").click(function(){

var playerChoice;

if(  $("rock").click() == true){
  playerChoice = "rock"
}
else if ($("paper").click() == true) {
  playerChoice = "paper"
}
else if ($("scissors").click() == true) {
  playerChoice = "scissors"
}

console.log(playerChoice);


if (playerChoice == "rock") {
  if (cpuChoice == cpuPaper) {
    console.log("You lose!");
  } else if (cpuChoice == cpuRock) {
    console.log("Draw!");
  } else if (cpuChoice == cpuScissors) {
    console.log("You win!")
  }
}
if (playerChoice == "paper") {
  if (cpuChoice == cpuPaper) {
    console.log("Draw!");
  } else if (cpuChoice == cpuRock) {
    console.log("You win!");
  } else if (cpuChoice == cpuScissors) {
    console.log("You lose!")
  }
}
if (playerChoice == "scissors") {
  if (cpuChoice == cpuPaper) {
    console.log("You win!")
  } else if (cpuChoice == cpuRock) {
    console.log("You lose!")
  } else if (cpuChoice == cpuScissors) {
    console.log("Draw!")
  }
}
})
