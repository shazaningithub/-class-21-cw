var fixedRect, movingRect;
var car;
var wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200,225,50,30);
  car.shapeColor = "yellow";
  car.velocityX = 5;

  wall = createSprite(1000,225,40,100);
  wall.shapeColor = "darkgrey";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)) {
    textSize(20);
    //fill("pink");
    text("crashed:(",600,400);
  }
  
  collide(car,wall);
  
  drawSprites();
}





//object2=movingRect
//object1=fixedRect