var prompt = require('prompt-sync')();

class Superhero{
  constructor(realName, ability1, gender, archEnemy, heroName){
    this.realName = realName;
    this.ability1 = ability1;
    this.gender = gender;
    this.archEnemy = archEnemy;
    this.heroName = heroName;
  }

}


var realName = prompt("What is your real name? ");
var ability1 = prompt("What is your ability? ");
var gender = prompt("Are you male or female? ");
var archEnemy = prompt("Who is your arch enemy? ");
var heroName = prompt("What is your hero name? ");


var freshHero = new Superhero(realName, ability1, gender, archEnemy, heroName);
//var freshHero = new Superhero()

var realfreshHero = freshHero.replace(/[{}]/g, "");
console.log(freshHero);
