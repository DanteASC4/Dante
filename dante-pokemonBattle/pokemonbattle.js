function setup(){
  createCanvas(1360, 600);
  background(255, 255, 255);
  textSize(20);

  var pokeHp = 0;

  var pokeView = prompt("Which do you want to use to battle?? zoroark, deoxys or mawile? Type your choice exactly as shown.");

  if(pokeView == "zoroark"){
    stats(zoroark);
  }else if(pokeView == "deoxys"){
    stats(deoxys);
  }else{
    stats(mawile);
  }

  function stats(userChoice){
    for (var i=0; i<6; i++) {
  	   text(userChoice[i], 100, 200 + (30 * i), 500, 500);
     }
  }

  function pokeBattle(){
    if(pokeView == "zoroark"){
      pokeHp = 60;
    }
    else if(pokeView == "deoxys"){
      pokeHp = 50;
    }
    else {
      pokeHp = 50;
    }
  }

}
function mousePressed(){
    var thunderboltbutton1 = dist(mouseX, mouseY, 95,500);
    var thunderboltbutton2 = dist(mouseX,mouseY,210,550);

   if (thunderboltbutton1< 100 && thunderboltbutton2< 100){
        fill(0);
        textSize(20);
        text(pokeView + " attacked the enemy for 70 damage!",50,300)
    }
    if (opponentattack<pokeHp){
        fill(0);
        textSize(20);
        text(pokeView + " has recieved 40 damage and now has " + (pokeHp - opponentattack) + " health left.",600,300);
        pokeHp = pokeHp - opponentattack
   }else if(opponentattack>pokeHp){
        fill(0);
        textSize(20);
        text(pokeView + "has recieved fatal damage and has now fainted.")
    }
    fill(0)
    textSize(20)
    text( pokeView + ": " + pokeHp +"/60",200,400)
}
















var zoroark = [
  ["Name: Zoroark"],
  ["Type: Dark"],
  ["Hp: 60"],
  ["Def: 60"],
  ["Atk: 105"],
  ["Legendary: Nope"],
];

var deoxys = [
  ["Name: Deoxys"],
  ["Type: Psychic"],
  ["Hp: 50"],
  ["Def: 50"],
  ["Atk: 150"],
  ["Legendary: Yup"],
];

var mawile = [
  ["Name: Mawile"],
  ["Type: Fairy, Steel"],
  ["Hp: 50"],
  ["Def: 125"],
  ["Atk: 105"],
  ["Legendary: Nope"],
];
