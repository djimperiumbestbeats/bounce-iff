var movingrect,fixedrect



function setup() {
 createCanvas(1600,1600);
  fixedrect =createSprite(200, 800, 50, 50);
fixedrect.shapeColor="green"
 fixedrect.velocityX=5
movingrect=createSprite(1000,800,80,30)
movingrect.shapeColor="green"
movingrect.velocityX=-7.5
}

function draw() {
  background(0);  
 //movingrect.x=mouseX
 //movingrect.y=mouseY
 
 
 BounceOff()
 
  drawSprites();


}
function BounceOff(){
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2){
      movingrect.velocityX=movingrect.velocityX*-1
      fixedrect.velocityX=fixedrect.velocityX*-1
    }
  

  
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
   
movingrect.velocityY=movingrect.velocityY*-1
fixedrect.velocityY=fixedrect.velocityY*-1
}
}