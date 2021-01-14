var canvas;
var ball;
var block1,block2,block3,block4;
var g1,g2;
var edges;
var music

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    var a = random(20,750);
    ball = createSprite(a,100,40,40);
    ball.velocityX = -6;
    ball.velocityY = 5;
    ball.shapeColor = "white";

    block1 = createSprite(95,590,200,30);
    block1.shapeColor = "blue";
    block2 = createSprite(300,590,190,30);
    block2.shapeColor = "orange";
    block3 = createSprite(500,590,190,30);
    block3.shapeColor = "red";
    block4 = createSprite(705,590,200,30);
    block4.shapeColor = "green";

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();

    if (ball.isTouching(edges)) {
      ball.bounceOff(edges);
    }

    if(IsTouching(ball,block1)){
      ball.bounceOff(block1);
      ball.shapeColor = "blue";
      music.play();
    }

    if(IsTouching(ball,block2)){
      ball.velocityX = 0;
      ball.velocityY = 0;
      ball.shapeColor = "orange";
      music.stop();
    }

    if(IsTouching(ball,block3)){
      ball.bounceOff(block3);
      ball.shapeColor = "red";
    }

    if(IsTouching(ball,block4)){
      ball.bounceOff(block4);
      ball.shapeColor = "green";
    }

  
    drawSprites();
}


function IsTouching(g1,g2){

    if (g1.x-g2.x<g1.width/2+g2.width/2 
      && g2.x-g1.x<g1.width/2+g2.width/2
      &&g1.y-g2.y<g1.height/2+g2.height/2 
      && g2.y-g1.y<g1.height/2+g2.height/2){
      return true
   }
    else{
      return false
    }
  
}
