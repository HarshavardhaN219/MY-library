var fixedRect, movingRect;
var r1,r2,r3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(200,200,50,50);
  r1.shapeColor = "green";
  r2 = createSprite(300,200,50,50);
  r2.shapeColor = "green";
  r3 = createSprite(400,200,50,50);
  r3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(r2,movingRect)){
 movingRect.shapeColor="red";
 r2.shapeColor="red";
 r1.shapeColor="green";
 }
  else if(r1,movingRect){
    movingRect.shapeColor="red";
    r1.shapeColor="red";
    r2.shapeColor="green"; 
  }
  else if(r3,movingRect){
    movingRect.shapeColor="red";
    r3.shapeColor="red"; 
  }
  else{
    movingRect.shapeColor="green";
    r1.shapeColor="green";
    r2.shapeColor="green";
    r3.shapeColor="green"; 
  }

  drawSprites();
}


