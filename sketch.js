
var trex ,trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  

}

function setup(){
  createCanvas(600,200)

  //create a trex sprite
 trex = createSprite(50,160,10,50);
 trex.addAnimation("run",trex_running )
 trex.scale = 0.5
 ground = createSprite(300,180,600,10)
 ground.velocityX = -4;
}

function draw(){
  background("pink")
  if(ground.x<0){
  ground.x=300  
  }
  if(keyDown("space")){
    trex.velocityY = -10
  }

  trex.velocityY +=0.5


  console.log(trex.y)

trex.collide(ground)
  drawSprites();
}
