/*
This function chooses a random number from a with a set maximum, given by the user,
You can then use this to choose from a random set of things, such as the array below, using some great meme formats in an array,
console.log(choice) chooses a random meme format.
*/

function rand(num) {
  var randNum = Math.random() * num;
  var result = Math.floor(randNum);
  return result;
}

var meme = ["Expanding mind","S U C C","The classic captioned picture","Text messages","Starter pack"];
var choice = meme[rand(5)];
console.log(choice);
