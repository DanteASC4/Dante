function setup() {
  createCanvas(1300, 600);
  background('black');

}

var xPos = 40;
var xPos1 = 80;
var xPos2 = 120;
var xPos3 = 160;
var xPos4 = 200;

var v = 4;
var w = 4;
var u = 4;
var g = 4;
var z = 4;

var mainCharacter;
var x = 100;
var y = 100;
var bullets = [];

var hit = false;

function draw() {
  background('black');

  if (xPos < 25 || xPos > 1250) u = -u;
  xPos += u;

  if (xPos1 < 25 || xPos1 > 1250) g = -g;
  xPos1 += g;

  if (xPos2 < 25 || xPos2 > 1250) z = -z;
  xPos2 += z;

  if (xPos3 < 25 || xPos3 > 1250) w = -w;
  xPos3 += w;

  if (xPos4 < 25 || xPos4 > 1250) v = -v;
  xPos4 += v;

  ellipseMode(CENTER);



console.log(bullets);
console.log(Bullet(x, y));

  ellipse(xPos, 50, 20, 20);
  if((Bullet(this.x) >= xPos + 50 && Bullet(this.x) <= xPos - 50) && Bullet(this.y) >= 20){
    fill('black')
  }
  ellipse(xPos1, 50, 20, 20);
  ellipse(xPos2, 50, 20, 20);
  ellipse(xPos3, 50, 20, 20);
  ellipse(xPos4, 50, 20, 20);





  function Shooter() {
    this.x = width / 2;
  }

  var mainCharacter = new Shooter();



  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();

  }


  if (keyIsDown(LEFT_ARROW)) {
    x -= 10
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 10
  }
  if (x > 1299) {
    x = 0
  } else if (x <= 1) {
    x = 1298
  }
  if (keyIsDown(UP_ARROW)) {
    bullets.push(new Bullet(x, height));
  }




  rect(x, 500, 20, 100);
  fill("white");




  function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 21;


    this.show = function() {
      // background('black')
      rect(this.x, this.y, 10, 25)
    }

    this.move = function() {
      this.y -= 20;
    }

  }

}
