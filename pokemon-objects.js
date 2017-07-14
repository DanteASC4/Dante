var prompt = require('prompt-sync')();


var pokeArray = [{
  "Name": "Zoroark",
  "Type": "Dark",
  "Hp": 60,
  "Atk": 105,
  "Def": 60,
  "Legendary?": "False",

}, {
  "Name": "Deoxys",
  "Type": "Psychic",
  "Hp": 50,
  "Atk": 150,
  "Def": 50,
  "Legendary?": "True",
}, {
  "Name": "Mawile",
  "Type": "Fairy, Steel",
  "Hp": 50,
  "Atk": 105,
  "Def": 125,
  "Legendary?": "False",
}, {
  "Name": "Dante",
  "Type": "Dark",
  "Hp": 1e9000000000000000000000000000000000000000000,
  "Atk": 1e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
  "Def": 5e000000000000000000000000000000000000000000000000,
  "Legendary?": "True",
}, {
  "Name": "Scizor",
  "Type": "Bug, Steel",
  "Hp": 70,
  "Atk": 150,
  "Def": 140,
  "Legendary?": "False",
}, {
  "Name": "Hitmonchan",
  "Type": "Fighting",
  "Hp": 50,
  "Atk": 105,
  "Def": 79,
  "Legendary?": "False",
}]

function printRoster(pokeArray) {
  for (var i in pokeArray) {
    var obj = pokeArray[i];
    console.log(obj)
  }
  return obj;
}

function pokeAttack(pokeArray) {
  for (var i in pokeArray) {
    var sub = pokeArray[i].Hp - 10;
    console.log(sub)
  }
  return sub;
}
pokeAttack(pokeArray);

function userHit(pokeArray) {
  var userAttack = prompt("How much damage do you want to do?");
  for (var i in pokeArray) {
    var userSub = pokeArray[i].Hp - userAttack;
    console.log(userSub);
  }
  return userSub;
}

function pokeCreate(pokeArray) {
  var userName = prompt("Choose a name for your pokemon");
  var userType = prompt("Choose a type for your pokemon");
  var userHp = prompt("Choose your pokemon's HP");
  var userDef = prompt("Choose your pokemon's defense");
  var userAtk = prompt("Choose your pokemon's attack");
  var Legendary = prompt("Is you're pokemon legendary? Enter true or false");
  pokeArray.push({
    "Name": userName,
    "Type": userType,
    "Hp": userHp,
    "Atk": userAtk,
    "Def": userDef,
    "Legendary?": Legendary,
  })
  console.log(pokeArray);
}

function pokeBattle(pokeArray) {
  var pokemonZero = 0;
  var pokemonOne = 0;


  if (pokeArray[0].Hp > pokeArray[1].Hp) {
    var higherHp = pokeArray[0].Hp;
    pokemonZero++;
  } else {
    var higherHp = pokeArray[1].Hp;
    pokemonOne++;
  }

  if (pokeArray[0].Atk > pokeArray[1].Atk) {
    var higherAtk = pokeArray[0].Atk;
    pokemonZero++;
  } else {
    var higherAtk = pokeArray[1].Atk;
    pokemonOne++;
  }

  if (pokeArray[0].Def > pokeArray[1].Def) {
    var higherDef = pokeArray[0].Def;
    pokemonZero++;
  } else {
    var higherDef = pokeArray[1].Def;
    pokemonOne++;
  }
  if (pokemonZero > pokemonOne) {
    console.log("Zoroark wins! It's stats are overall better!")
  } else {
    console.log("Deoxys wins! It's stats are overall better!")
  }

}

pokeBattle(pokeArray);









pokeCreate(pokeArray);
