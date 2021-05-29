var gardenI;
var cat,mouse;
var catImg1,mouseImg1;
var catImg2,mouseImg2;
var catImg3,mouseImg3;

function preload() {
    //load the images here
    gardenI = loadImage("images/background.png");
    
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png");
    
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites 



    cat = createSprite(800,650,25,25);
    cat.addAnimation("standing1",catImg1);
    cat.scale=0.15;

    mouse = createSprite(100,650,50,50);
    mouse.addAnimation("standing2",mouseImg1);
    mouse.scale=0.15;

}

function draw() {

    background(gardenI);
    //Write condition here to evalute if tom and jerry collide
   
   
 
    keyPressed();
    collide();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;

cat.addAnimation("running",catImg2);
cat.changeAnimation("running");
cat.velocityX=-3;

 }

}

function collide(){
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    
    cat.addAnimation("happycat",catImg3);
    cat.changeAnimation("happycat");

    mouse.addAnimation("happymouse",catImg3);
    mouse.changeAnimation("happymouse");
    cat.velocityX=0;

   }

}

  