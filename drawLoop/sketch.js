function setup(){
  createCanvas(500, 500);
  background(225);
}

var xPos=0;
var yPos=0;


function draw(){
  background(225);


  xPos = xPos - 2
  if(xPos < 0){
    xPos = width
  }
  yPos = yPos - 2
  if(yPos < 1){
    yPos = height
  }


  ellipse(xPos, yPos, random(0, 100), random(0, 100));
  fill(random(0, 225), random(0, 225), random(0, 225));
}

/*
xPos = xPos - 1
if(xPos < 0){
  xPos = width
}
yPos = yPos - 1
if(yPos < 1){
  yPos = height
}
*/
