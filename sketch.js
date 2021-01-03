
var monkey , monkey_running, ground, bananaGroup;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,PLAY=1, gamestate=PLAY, END=0;
var score;
var survivalTimer=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  bananaGroup= new Group();
  obstacleGroup = new Group();
 monkey=createSprite(150,350,50,50)
 ground=createSprite(200,395,400,10);
ground.velocityX=5;
 monkey.addAnimation("running", monkey_running);
  monkey.scale=0.2
}

function draw() {
createCanvas(400,400)
background("blue")
text(survivalTimer+"survivalTimer",100,300);
if(gamestate===PLAY){
survivalTimer = survivalTimer + Math.round(getFrameRate()/60);
  obstacles();
  FoodGroup();
    if(monkey.isTouching(obstacleGroup)){
    gamestate=END
    
  }
  if(gamestate===END){
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
  bananaGroup.setLifetimeEach(-1)
  obstacleGroup.setLifetimeEach(-1)
  ground.velocityX=0
  }
}



monkey.collide(ground);
monkey.velocityY=12;
if(keyDown("space")){
  monkey.velocityY=-16;
}
  if(ground.x>350){
    ground.x=200
  }

drawSprites();
  
}
function FoodGroup(){

   if(World.frameCount%80==0){
    banana= createSprite(400,200,20,20);
    banana.velocityX=-5;
    banana.addImage(bananaImage);
    banana.scale=0.2;
    banana.y=Math.round(random(120,200));
    banana.lifetime=200;
     
   bananaGroup.add(banana);

 
   }
}



function obstacles(){

   if(World.frameCount%100===0){
    obstacle= createSprite(400,350,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.Lifetime=500;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);

   }
}





