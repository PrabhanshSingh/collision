var mrecth,frecth;
function setup() {
  createCanvas(800,400);
  mrecth=createSprite(200,300,70,70);
  frecth=createSprite(300,100,50,60);

  frecth.shapeColor="red";
  mrecth.shapeColor="red";


}

function draw() {
  background(0); 
  mrecth.x=mouseX;
  mrecth.y=mouseY;
if(mrecth.x-frecth.x<mrecth.width/2 + frecth.width/2 && 
  frecth.x-mrecth.x<mrecth.width/2 + frecth.width/2 &&
  mrecth.y-frecth.y<mrecth.height/2 + frecth.height/2 &&
  frecth.y-mrecth.y<mrecth.height/2 + frecth.height/2 )
{mrecth.shapeColor="blue";
  frecth.shapeColor="blue";
}
else{frecth.shapeColor="red";
mrecth.shapeColor="red";
}


  drawSprites();
}