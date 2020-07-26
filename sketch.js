var bullet1;
var bullet2;
var wall;


function setup() {
  createCanvas(1600,400);
 bullet1 = createSprite(40,50,30,30);
 bullet1.velocityX  = 5;
 bullet2 = createSprite(40,250,30,30);
 bullet2.velocityX = 6;
 
 wall = createSprite(1500,200,50,400);
 wall.shapeColor = color(80,80,80);

}
 


function draw() {
  background(0,0,0); 


  if(bullet1.isTouching(wall)){
    wall.shapeColor = color(225,0,0);
  }
  if(bullet1.x > 1550){
    wall.shapeColor = color(30,30,30);
  }
  if(bullet2.isTouching(wall)){
    wall.shapeColor = color(0,225,0);
  }
  

  drawSprites();
}
