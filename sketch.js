
const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,a,b,c,bg;

function preload(){
bg = loadImage("Images/Class background.jpg")  	
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 10);

     ground = new Ground(400, 680, 800, 50);
  
	 a = new Dustbin(550, 620, 20, 100);
     b = new Dustbin(635, 660, 150, 20);
     c = new Dustbin(720, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(bg);

  Engine.update(engine);

  paper.display();

  ground.display();

  a.display();
  b.display();
  c.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  }


