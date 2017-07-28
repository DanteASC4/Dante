var hp = 100;
var gold = 0;
var slain = 0;

function updateStats(){
  $('#stats').text('HP: ' + hp + ' Gold: ' + gold  + ' Ogres sent to the underworld: ' + slain)
}
function attack(){
  if(hp > 0){
    if(Math.random()*100 > gold){
    gold += 10;
    slain++;
    $('#ogres').prepend('<p style="color:green">You Destroyed the ogre! +10 gold!</p>')
    }
    else{
    gold -= 5;
    hp--;
    $('#ogres').prepend('<h1 style="color:darkred">YOU HAVE LOST TO THE OGRE! -5 GOLD -1 HP</h1>')
    }
  updateStats();
  }
  else {
    $('#ogres').prepend('<p style="font-size:50px">YOU HAVE FALLEN TO THE OGRES, YOU HAVE SLAIN ' + slain + ' OGRES WELL FOUGHT</p>');
  }
}



function setup(){
  //title
$('body').append('<h1>Welcome Destroyer of orcs, ready to destroy?</h1>')
  //Stats for the game
$('body').append('<div><h3>STATS</h3><p id="stats"></p></div>')
  //the button
$('body').append('<button id="action" onclick="attack()">ATTACK THE OGREEEEEEEEEEEEE!!!!!!!!</button>')

$('#action').css('background-color', '#AD2828').css('border', 'none').css('display', 'inline-block').css('text-align', 'center').css('text-decoration', 'none').css('font-size', '16px')

$('body').append('<div id="ogres"></div>')
}



$(document).ready(setup);
