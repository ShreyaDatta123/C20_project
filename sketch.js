
var r = 0;
var g = 50;
var b = 255;
var a;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

  a = createSprite(600,200,10,10);
}


function draw(){

  background("black");

  a.x = mouseX;
  a.y = mouseY;

  if(a.x<=300) {
    background("red");
  }
  
  if(a.y<100) {
    background("blue");
  }
  
  if(a.x>300) {
    background("yellow");
  }

  if(a.y>100) {
    background("green");
  }

  drawSprites();
}