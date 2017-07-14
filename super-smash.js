var mashArray = ["Arena Ferox", "Battlefield", "Final Destination", "Smashville"];
var firstQuestion = [9400, 6078];
var secondQuestion = ["Dante", "Ganondorf"];
var prompt = require("prompt-sync")();


function rand(num) {
  var randNum = Math.random() * num;
  var result = Math.floor(randNum);
  return result;
}

var stage = mashArray[rand(3)];

//function questionAnswers(){
  var answerOne = prompt("How many times will you strike?" + firstQuestion);
  if(answerOne == 9400 || answerOne == 6078){
    var strikes = answerOne;
    console.log("You will strike " + strikes + " times!");
    var answerTwo = prompt("Who will you choose to fight? " + secondQuestion);
  }
  console.log("You fought " + answerTwo + " in " + stage + ", you hit him " + strikes + " but you still lost :(" )
//}
