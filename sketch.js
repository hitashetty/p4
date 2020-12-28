const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var engine, world;
var Stone;
var rope1;
var Tree;
var Lit;
var mango1,mango2,mango3,mango4,mango5;
function setup(){
    createCanvas(1440,800);
    engine = Engine.create();
    world = engine.world;

    //creating the stone
    Stone = new stone(500,500,40,40);
    //creating ground
    ground1 = new ground(690,790,1500,20);
    //creating the tree
    Tree = new tree(1100,400,40,40,);
    //creating rope
    rope1 = new rope({x : 250,y : 550},Stone.body);
    //creating the character
    Lit = new lit(400,600,60,60);
    //creating the mangos
    mango1 = new mango(800,400,40,40);
    mango2 = new mango(850,400,40,40);
    mango3 = new mango(950,400,40,40);
    mango4 = new mango(1000,400,40,40);
    mango5 = new mango(1050,400,40,40);

}
function draw(){
    background("lightblue");
    Engine.update(engine);

    //displaying the stone
    fill("grey");
    Stone.display();

    
    //displaying the tree
    Tree.display();

    //displaying the ground
    fill("green");
    ground1.display();

    //displaying the rope
    rope1.display();
     
    //displaying the character
    Lit.display();

    //displaying the mangos
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();

    //detecting collision
    detectollison(Stone,mango1);
    detectollison(Stone,mango2);
    detectollison(Stone,mango3);
    detectollison(Stone,mango4);
    detectollison(Stone,mango5);

}


function mouseReleased(){
    rope1.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x:mouseX , y:mouseY});
}

function keyPressed(){
    if(keyCode === 32){
        rope1.attach(Stone.body);
    }
}

function detectollison(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}
