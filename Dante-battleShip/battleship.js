// Set Up Board Here

function setup() {
  createCanvas(800, 600);
  stroke(0);
  fill(150);
}

function draw() {
  //set the background color
  background(240);

  //set up text
  textSize(10);
  textAlign(CENTER);
  fill(0);

  //vertical lines
  var interval = 50;
  for (var i = 0; i <= width; i = i + interval) {
    line(i,0,i,height);
    text(i.toString(), i, 20);
  };
  //horizontal lines
  for (var i = 0; i <= height; i = i + interval) {
    line(0,i,width,i);
    text(i.toString(), 10, i);
  };

  createShip(40,40,300);
  createShip(493,458,250);
  createShip(60,120,200);
  createShip(253,408,120);


  placePins();


}


function createShip(shipX, shipY){
  var c = color(255);
  fill(c);
  stroke(c);

  rect(shipX, shipY, 49, 49);
}
