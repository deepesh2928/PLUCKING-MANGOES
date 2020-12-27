const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree;
var sling;
var stone;
var ground;
var mango1,mango2;
var mango3,mango4,mango5,mango6;

function preload(){
}

function setup() {
  createCanvas(1500, 1000);
  
	engine = Engine.create();
	world = engine.world;

  tree=new TREE();
 
	ground=new GROUND();
  boy=new BOY(400,800,200,300);
  stone=new STONE(330,745,90,100);
	mango1=new MANGO(1215,320,70,80);
	mango2=new MANGO(1145,415,70,80);
	mango3=new MANGO(1310,415,70,80);
	mango4=new MANGO(1220,510,70,80);
	mango5=new MANGO(1400,510,70,80);
	mango6=new MANGO(1060,510,70,80);
  sling=new SLING(stone.body,boy.body,330,745);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 // Engine.update(engine);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  boy.display();
  sling.display();
  stone.display();

 // drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}