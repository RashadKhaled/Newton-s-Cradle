
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	roof= new Roof(350,50,600,50);
	//Create the Bodies Here.
	bob1= new Bob(150,300,25);
	bob2= new Bob(250,300,25);
	bob3= new Bob(350,300,25);
	bob4= new Bob(450,300,25);
	bob5= new Bob(550,300,25);
	rope1= new Rope(bob1.body,roof.body,-200,-10);
	rope2= new Rope(bob2.body,roof.body,-100,-10);
	rope3= new Rope(bob3.body,roof.body,0,-10);
	rope4= new Rope(bob4.body,roof.body,100,-10);
	rope5= new Rope(bob5.body,roof.body,200,-10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY);
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
   rope3.display()
   rope4.display()
 rope5.display()
}



