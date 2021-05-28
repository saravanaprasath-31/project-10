 var ship;
  var sea;

  function preload(){
  shipImg1.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImg.loadImage("sea.png")

  }

  function setup(){
    createCanvas(400,400);
    ship.createSprite = (50,160,60,150);
    ship.addAnimation("floating",shipImg1);
    spriteName.addImage(seaImg);
  }

  function draw() {
    background("blue");
    if(sea.x<0){ 
      sea.x=sea.width/2;
    }

  }