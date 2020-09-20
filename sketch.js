const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var ground,elastic,tree,stone;


function preload()
{
	boyImage=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,700,800,20);

	mango1=new Mango();
	mango2=new Mango();
	mango3=new Mango();
	mango4=new Mango();
	mango5=new Mango();


	elastic=new Elastic(boy.body,{x:200,y:200});

	tree=new Tree();

	stone=new Stone();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  boy .display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  elastic.display();

  tree.display();

  stone.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    elastic.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=distance(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
        elastic.attach(stone.body);
    }
}