var moving;
var fixed;

function setup() {
  createCanvas(800,400);
   moving = createSprite(400, 200, 50, 50);
   moving.shapeColor = "blue"
   fixed =createSprite (200,200,50,50)
   fixed.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2 && fixed.x - moving.x <= moving.width/2 + fixed.width/2 && moving.y - fixed.y <= moving.height/2 + fixed.height/2 && fixed.y - moving.y <= moving.height/2 + fixed.height/2){
moving.shapeColor = "green"
fixed.shapeColor = "green"
  }
  else {
  moving.shapeColor = "blue"
fixed.shapeColor = "red"
}
  drawSprites();
}