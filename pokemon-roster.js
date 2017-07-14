var prompt = require('prompt-sync')();

var pokeOne = [
  ["Name: Zoroark"],
  ["Type: Dark"],
  ["Hp: 60"],
  ["Def: 60"],
  ["Atk: 105"],
  ["Legendary: Nope"],
];

var pokeTwo = [
  ["Name: Deoxys"],
  ["Type: Psychic"],
  ["Hp: 50"],
  ["Def: 50"],
  ["Atk: 150"],
  ["Legendary: Yup"],
];

var pokeThree = [
  ["Name: Mawile"],
  ["Type: Fairy, Steel"],
  ["Hp: 50"],
  ["Def: 125"],
  ["Atk: 105"],
  ["Legendary: Nope"],
];

var pokeName = prompt("Choose a name for your pokemon");
var pokeType = prompt("Choose a type for your pokemon");
var pokeHp = prompt("Choose your pokemon's HP");
var pokeDef = prompt("Choose your pokemon's defense");
var pokeAtk = prompt("Choose your pokemon's attack");
var pokeLegendary = prompt("Is you're pokemon legendary? Enter true or false");

var monsterPokemon = pokeName + pokeType + pokeHp + pokeDef + pokeAtk + pokeLegendary;



console.log("Here's your custom pokemon's stats!");
console.log("Name: " + pokeName);
console.log("Type: " + pokeType);
console.log("Hp: " + pokeHp);
console.log("Def: " + pokeDef);
console.log("Atk: " + pokeAtk);
console.log("Legendary? " + pokeLegendary);

var pokeView = prompt("Which pokemon's stats would you like to view? pokeOne pokeTwo or pokeThree? Type your choice exactly as shown. ");

if(pokeView == "pokeOne"){
  console.log(stats(pokeOne));
}else if(pokeView == "pokeTwo"){
  console.log(stats(pokeTwo));
}else{
  console.log(stats(pokeThree));
}

function stats(userChoice){
  for (var i=0; i<6; i++){
	console.log(userChoice[i].toString());
}
return;
}


//console.log(statsOne());
