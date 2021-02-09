
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Stone, hammer;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = createSprite(200,200,100,30);
	
	Stone = new stone(200,40,70,70);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.x = mouseX;
  hammer.y = mouseY;

  Stone.display();

  drawSprites();
 
}



