var cat1 , mouse1 ; 
var cat2, mouse2 ;
var cat3 , mouse3 ;
var cat4 , mouse4 ;
var garden ; 
var mouseimg , catimg ;

function preload() {
    //load the images here
catimg = loadImage("images/cat1.png");
mouseimg=loadImage("images/mouse1.png")
cat2 = loadAnimation("images/cat2.png", "images/cat3.png")
garden = loadImage("images/garden.png")
mouseanime = loadAnimation("images/mouse2.png","images/mouse3.png")
catstanding = loadImage("images/cat4.png")
mousestanding = loadImage("images/mouse4.png")




}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat1=createSprite(900,700,20,20);
cat1.addImage(catimg)
cat1.scale= 0.1

mouse1=createSprite(100,700,20,20);
mouse1.addImage(mouseimg)
mouse1.scale = 0.1




}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2)
{
    cat1.addAnimation("catisstanding",catstanding)
    cat1.changeAnimation("catisstanding");
    cat1.velocityX = 0 ; 
    cat1.x = 200

    mouse1.addAnimation("mouseisstanding",mousestanding)
    mouse1.changeAnimation("mouseisstanding")
    
}

    drawSprites();
}

function keyPressed(){

    if (keyCode === LEFT_ARROW) {
cat1.addAnimation("catismoving",cat2);
cat1.changeAnimation("catismoving");
cat1.frameDelay = 25
cat1.velocityX = -3

mouse1.addAnimation("mouseteasing",mouseanime)
mouse1.changeAnimation("mouseteasing");
mouse1.frameDelay = 25;


    }

}

