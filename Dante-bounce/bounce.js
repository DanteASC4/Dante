function setup(){
  createCanvas(windowWidth, windowHeight);
  background(225);
}

var xPos=100;
var yPos=100;
var dx=5;
var dy=5;


function draw(){
  background(225);


  if( xPos<0 || xPos>windowWidth) dx= -dx;
  if( yPos<0 || yPos>windowHeight) dy= -dy;
  xPos+=dx;
  yPos+=dy;



  ellipse(xPos, yPos, random(0, 100), random(0, 100));
  fill(random(0, 225), random(0, 225), random(0, 225));
}
