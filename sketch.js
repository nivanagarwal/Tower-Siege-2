const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, stone1, sling1;
var backgroundImg,platform;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new ground(300, 300, 300,20);
    box1 = new box(300, 270, 20,20);
    box2 = new box(290, 270, 20,20);
    box3 = new box(310, 270, 20,20);
    box4 = new box(295, 260, 20,20);
    box5 = new box(305, 260, 20,20);
    box6 = new box(300, 280, 20,20);
    stone1 = new stone(100, 200, 30,30);
    sling1 = new SlingShot(stone1.body,{ x: 100, y:170})
}

function draw() {
    Engine.update(engine);
    background("black");
    platform.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    stone1.display()
    sling1.display()
    
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}
