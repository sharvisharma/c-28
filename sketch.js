
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1,box2,box3,box4,box5;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 // engine = Engine.create();
  //world = engine.world;


  ground= new Ground(200,200,40,10);
  box1= new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3=new Box(390,235,30,40);
  box4=new Box(420,235,30,40);
  box5=new Box(450,235,30,40);
}

function draw() {
  background(255,255,255); 
  //Engine.update(engine); 

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  drawSprites();

  
}