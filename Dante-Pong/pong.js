function setup(){
  createCanvas(600, 600);
  background(225);
}


var x = 100;
var xPos=100;
var yPos=100;
var dx=5;
var dy=5;

function draw(){
  background(225);
  if(keyIsDown(LEFT_ARROW)){
    x -= 10
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 10
  }
  if(x > 599){
    x = 0
  } else if(x <= 1){
    x = 598
  }

  rect(x, 550, 100, 20);
  fill(random(0, 225), random(0, 225), random(0, 225));


  ellipse(xPos, yPos, 25, 25);
  if( xPos<0 || xPos>600) dx= -dx;
  if( yPos<0 || yPos>550) dy= -dy;
  xPos+=dx;
  yPos+=dy;

  if(yPos > 551 && xPos < x - 100){

  textSize(32);
  text("You lose!", 100, 100);
  exit();
}else if(yPos >= 551 && xPos > x + 100){

textSize(32);
text("You lose!", 100, 100);
exit(ellipse());
}



  fill(random(0, 225), random(0, 225), random(0, 225));
}
