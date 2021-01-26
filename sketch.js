
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20)
paper=new Paper(200,20,20)
dustbin=new Dustbin(600,630,10,100)
dustbin2=new Dustbin(400,630,10,100)
dustbin3=new Dustbin(500,680,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  dustbin.display()
  dustbin2.display()
  dustbin3.display()
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-80})
  }
}

