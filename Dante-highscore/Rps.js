//This is a script that allows a user to play rock paper scissors against a computer
//The computer chooses a random choice each time as if it were another person
//Note this script only works in enviornments that support the javascrip 'prompt' element, such as repl.it
//Also the user must type their choice in all lowercase
//I may add more to this in the future, but I'll leave it like this for now

$(document).ready(function() {

var W = 0;
var L = 0;
var D = 0;
// Define variable for wins, losses, and draws
function updateLoss() {
$('#lose').text(L + " L's! ")
}

function updateWin() {
$('#win').text(W + " Wins! ")
}

function updateDraw() {
$('#draw').text(D + " Draws! ")
}


$("#rock").click(function() {
//Rock button
  var playerChoice = "rock";


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


  console.log(cpuChoice);
  console.log(playerChoice);


  if (cpuChoice == cpuPaper) {
    L++;
    console.log("You lose!");
    updateLoss();
  } else if (cpuChoice == cpuRock) {
    console.log("Draw!");
    D++;
    updateDraw()
  } else if (cpuChoice == cpuScissors) {
    console.log("You win!")
    W++;
    updateWin()
  }


})

$("#paper").click(function() {





  var playerChoice = "paper";


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


  console.log(cpuChoice);
  console.log(playerChoice);


  if (cpuChoice == cpuPaper) {
    D++;
    updateDraw()
    console.log("Draw!");
  } else if (cpuChoice == cpuRock) {
    console.log("You win!");
    W++;
    updateWin()
  } else if (cpuChoice == cpuScissors) {
    L++;
    console.log("You lose!");
    updateLoss();
  }

});


$("#scissors").click(function() {

  var playerChoice = "scissors";



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


  console.log(cpuChoice);
  console.log(playerChoice);


  if (cpuChoice == cpuPaper) {
    console.log("You win!")
    W++;
    updateWin();
  } else if (cpuChoice == cpuRock) {
    L++;
    console.log("You lose!")
    updateLoss();
  } else if (cpuChoice == cpuScissors) {
    console.log("Draw!")
    D++;
    updateDraw()
  }

})


var database = firebase.database().ref()

//button executes this function
$("#submission").on("click",function updateData(){

    var newName = $("#initials").val();
    var newWin = W
    var newLose = L
    var newDraw = D
    console.log(newName + " : " + newWin + newDraw + newLose);

    //Update database here
    var value = {name: newName, wins: newWin, losses: newLose, draws: newDraw}

    database.push(value);
})

 $("#scores").on("click", database.on("child_added", function(rowData){
  console.log(rowData.val());
  var name = rowData.val().name;
  var wins = rowData.val().wins;
  var losses = rowData.val().losses;
  var draws = rowData.val().draws;


  var html = "<p>" + name + "<br>" + "wins: " + wins + "<br>" + "Losses: " + losses + "<br>" + "draws: " + draws + "<br></p>"

  $(".results").prepend(html);


}))

});
