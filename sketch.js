
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobDiameter;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bobDiameter= 35;
  bobObject1 = new Bob(200,400,40);
  bobObject2 = new Bob(250,400,40);
  bobObject3 = new Bob(300,400,40);
  bobObject4 = new Bob(350,400,40);
  bobObject5 = new Bob(400,400,40);
  roofObject = new Roof(330,100,400,20);

rope1=new Rope(bobObject1.body, roofObject.body,-bobDiameter*4)
rope2=new Rope(bobObject2.body, roofObject.body,-bobDiameter*2)
rope3=new Rope(bobObject3.body, roofObject.body,0)
rope4=new Rope(bobObject4.body, roofObject.body,bobDiameter*2)
rope5=new Rope(bobObject5.body, roofObject.body,bobDiameter*4)

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1300,
    height: 600,
    wireframes: false
  }
});

Engine.run(engine);
Render.run(render);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
  
 
}



