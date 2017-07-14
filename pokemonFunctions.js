function rand(num) {
  var randNum = Math.random() * num;
  var result = Math.floor(randNum);
  return result;
}

function randLetter() {
  var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var choice = letter[rand(26)];
  console.log(choice);
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
console.log(randWord());

function randSent() {
  var sent = "";
  var len = rand(15);
  for (var i = 0; i < len; i++) {
    sent = sent + " " + randWord();
  }
  return sent;
}
console.log(randSent() + ".")[0].toUppercase;



function pokeAttack(firstPokemon, secondPokemon) {
  var firstPokemon = ["Zoroark", 700, 9999];
  var secondPokemon = ["Deoxys", 900, 6996];
  var outcome = secondPokemon[0] + " " + secondPokemon[1] + " " + (secondPokemon[2] - firstPokemon[1]);
  return outcome;
}

function randAttack() {
  var attackingPoke = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  if (attackingPoke == 1) {
    attackingPoke = ["Zoroark", 700, 9999];
  }
  if (attackingPoke == 2) {
    attackingPoke = ["Deoxys", 900, 6996];
  }
  if (attackingPoke == 3) {
    attackingPoke = ["Mawile", 897, 7777];
  }
  if (attackingPoke == 4) {
    attackingPoke = ["Dante", 10000000000000, 100000000000000000000000];
  }

  var attackingPoketwo = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  if (attackingPoketwo == 1) {
    attackingPoketwo = ["Zoroark", 700, 9999];
  }
  if (attackingPoketwo == 2) {
    attackingPoketwo = ["Deoxys", 900, 6996];
  }
  if (attackingPoketwo == 3) {
    attackingPoketwo = ["Mawile", 897, 7777];
  }
  if (attackingPoketwo == 4) {
    attackingPoketwo = ["Dante", 10000000000000, 100000000000000000000000];
  }

  var final = attackingPoketwo[0] + " " + attackingPoketwo[1] + " " + (attackingPoketwo[2] - attackingPoke[1]);
  return final;
}

console.log(randAttack());

console.log(pokeAttack());
