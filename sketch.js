
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,400,25);
	bob2 = new Bob(350,400,25);
	bob3 = new Bob(400,400,25);
	bob4 = new Bob(450,400,25);
	bob5 = new Bob(500,400,25);

    rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	roof = new Roof(width/2,height/4,width/7,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position, {x : 70, y : -50});
	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bob.body,bob.body.position,{x : -70, y : -50});
	}
}


