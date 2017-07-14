//Player starts out with $1000
//Player must spend as much as possible
//Keep track of how much money is left
//Keep track of items bought
//Show cost of each items
//Prompt user for which item to buy
//Subtract the cost of item from total
//Store bought items in array

function rand(num) {
  var randNum = Math.random() * num;
  var result = Math.floor(randNum);
  return result;
}

function randLetter() {
  var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var choice = letter[rand(26)];
  return choice;
}

function randWord() {
  var word = "";
  var len = rand(10);
  for (var i = 0; i < len; i++) {
    word = word + randLetter();
  }
  return word;
}
var prompt = require('prompt-sync')();
var playerMunny = 1000;
var cost = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var item = "It's name is " + randWord() + ". It costs $" + cost;


while (playerMunny > 0){
  console.log(playerMunny);
  var buy = prompt("Would you like to buy this item?" + item + "Type yes to buy, or no to pass, all in lowercase: ");
  var spent = 0;
  var bought = "";

  if(buy == "yes"){
  playerMunny = playerMunny - cost;
  console.log("You've spent " + spent + " so far");
  console.log("Your items: " + bought);
  while(buy == "yes"){
    spent = spent + cost;
    bought = bought + item[1];
  }

} if(buy == "no"){
  playerMunny = playerMunny;
  console.log("You've spent " + spent + " so far");
} if(playerMunny <= 0){
  console.log("All out of money! How close to zero were you?")
} if(playerMunny == 0){
  console.log("You got to exactly zero! That's amazing! There's an extremely low chance of this happening, congratulations, you are super lucky!")
}
}
