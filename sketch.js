const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 600);
	

	engine = Engine.create();
	world = engine.world;
roof = new Roof(300,100,350,20);
ball = new Ball(500,300,30);
ball2 = new Ball(400,300,30);
ball3 = new Ball(300,300,30);
ball4 = new Ball(200,300,30);
ball5 = new Ball(50,300,30);
rope1 = new rope(roof,ball,-80,0);
rope2 = new rope(roof,ball2,-40,0);
rope3 = new rope(roof,ball3,0,0);
rope4 = new rope(roof,ball4,40,0);
rope5 = new rope(roof,ball5,80,0);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  textSize(30)
  fill ("yellow")
  text(mouseX+","+mouseY,mouseX,mouseY)
  roof.display();
 ball.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
