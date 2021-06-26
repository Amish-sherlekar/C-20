
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);


  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug=true;

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true;

  fixedRect2 = createSprite(200, 200, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug=true;

  fixedRect3 = createSprite(300, 200, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug=true;

  fixedRect4 = createSprite(400, 200, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug=true;

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,  fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect, fixedRect2)){
    movingRect.shapeColor = rgb(42, 252, 0);
    fixedRect2.shapeColor = rgb(42, 252, 0);
  }

  else if(isTouching(movingRect, fixedRect3)){
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
  }

  else if(isTouching(movingRect, fixedRect4)){
    movingRect.shapeColor = "pink";
    fixedRect4.shapeColor = "pink";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
    fixedRect3.shapeColor = "green";
    fixedRect4.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

