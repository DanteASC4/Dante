var r, g, b;

function rand(num) {
  var randNum = Math.random() * num;
  var result = Math.floor(randNum);
  return result;
}

function setup(){
  createCanvas(1000, 1000);
  background(225);
  r = rand(225);
  g = rand(225);
  b = rand(225);
}



function draw() {
  fill(r, g, b);

}

 function mouseDragged() {
  function rand(num) {
    var randNum = Math.random() * num;
    var result = Math.floor(randNum);
    return result;
  }
  quad(mouseX, mouseY, rand(100), rand(100), rand(100), rand(100), rand(100), rand(100), rand(100));
  ellipse(mouseX, mouseY, rand(100), rand(100));
  rect(mouseX, mouseY, rand(100), rand(100));
  triangle(mouseX, mouseY, rand(100), rand(100), rand(100), rand(100));
  fill(random(0, 225), random(0, 225), random(0, 225));

  return false;
}
/*
function mouseDragged(){
  value = value + 3;
  if (value > 225){
    value = 0
  }
  return false;
}
function draw(){
  quad(value, value, value, value, value, value, value, value);
  ellipse(value, value, value, value);
  rect(value, value, value, value);
  triangle(value, value, value, value, value, value);
  return false;
}


/*
function mouseDragged() {
  function rand(num) {
    var randNum = Math.random() * num;
    var result = Math.floor(randNum);
    if(result > )
    return result;
  }
}


if(rand(4) == 1);{
  function draw(){
quad(rand(100), rand(100), rand(100), rand(100), rand(100), rand(100), rand(100), rand(100));
}
} if(rand(4) == 2){
  function draw(){
ellipse(rand(100), rand(100), rand(100), rand(100));
}
} else if (rand(4) == 3) {
  function draw(){
  rect(rand(100), rand(100), rand(100), rand(100));
}
} else if (rand(4) == 4) {
  function draw() {
    triangle(rand(100), rand(100), rand(100), rand(100), rand(100), rand(100));
  }
}



*/




//var randomnumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
