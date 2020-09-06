const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  
}

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

for(var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}


function draw() {
  background(255,255,255);  
  stand=new Ground(480,700,700,10);
  stand.display();

  Engine.run(engine);
  drawSprites();
}