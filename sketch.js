var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,400,100,100);
  fixedRect.shapeColor = "white";
  movingRect = createSprite(600,600,100,100);
  movingRect.shapeColor = "white";
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";
  }

  drawSprites();
}