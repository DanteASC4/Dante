var myPokemonRoster = ["Zoroark","Deoxys","Mawile","Rayquaza","Zekrom"];
myPokemonRoster.reverse();
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
var rosterSize = myPokemonRoster.length;
myPokemonRoster.pop();
myPokemonRoster.push("Genesect", "Greninja");
var lastPokemon = myPokemonRoster.length;


console.log(firstToFight,secondToFight);
console.log(myPokemonRoster);
console.log(rosterSize);
console.log(lastPokemon);
console.log(myPokemonRoster[5]);
console.log(lastPokemon.length - 1)

for (var i = 0; i < myPokemonRoster.length; i++){
  console.log(myPokemonRoster[i]);

}
if (5 > myPokemonRoster.length){
  console.log("Can't play! Not enough pokemon!")
}
