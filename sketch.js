const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var wall1 ,wall2,wall3,wall4;
function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;

 wall1 = new Ground (250,695,500,10);
 wall2 = new Ground (250,5,500,10);
 wall3 = new Ground (5,350,10,700);
 wall4 = new Ground (475,350,10,700);
}

function draw() {
  background("black");
  Engine.update(engine);
  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  drawSprites();
}