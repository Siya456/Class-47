const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var platform;
var box1;
var box2;
var box3;
var box4;
var box5;
var log1, log2;
var viking1,viking2;
var rock1, rock2, rock3, rock4;
var rocks = [];
var slingshot;
var gameState = "onSling";
var score;

function preload(){
    backgroundImage = loadImage("background_1.png");
}

function setup(){
    canvas = createCanvas(1200,600);
    canvas.position(15,70);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,100);
    platform = new Ground(150,height-120,300,170);
    box1 = new Box(700,height-100,70,100);
    box2 = new Box(920,height-100,70,100);
    log1 = new Log(810,height-160,300,PI/2);
    box3 = new Box(700,240,70,100);
    box4 = new Box(920,240,70,100);
    //PI/2 makes the angle horizontal - angle in physics bodies is in radians
    log2 = new Log(810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    viking1 = new Viking(810,height-100);
    viking2 = new Viking(810,height-220);
    rock1 = new Rock(200,50);
    rock2 = new Rock(150,170);
    rock3 = new Rock(100,170);
    rock4 = new Rock(50,170);
    rocks.push(rock1);
    rocks.push(rock2);
    rocks.push(rock3);
    rocks.push(rock4);

    slingshot = new Slingshot(rock1.body,{x:200,y:220});

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    noStroke();
    textFont("Impact");
    textSize(20);
    fill("red");
    text("Score:"+ score,width-300,20);

    if(rocks.length>0){
        text("Press space key for next rock",width/2-200,25);
        text("Rocks:"+rocks.length,width/2-100,60);
    }
    else{
        text("Game Over! Click reload button to restart the game",width/2-200,70);
    }

    ground.display();
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    viking1.display();
    viking2.display();
    rock1.display();
    rock2.display();
    rock3.display();
    rock4.display();
    slingshot.display();

    if(mouseIsPressed && gameState === "onSling"){
        Body.setPosition(rocks[rocks.length-1].body,{x:mouseX,y:mouseY});
    }
}

function keyPressed(){
    if(keyCode === 32 && gameState==="launched"){
        //checks whether rocks array is empty or not
        if(rocks.length>=0){
            Body.setPosition(rocks[rocks.length-1].body,{x:200,y:220});
            //attaches last rock in the array to the slingshot
            slingshot.attach(rocks[rocks.length-1].body);
            //this if statement becomes false, as there is a rock attached to the catapult
            gameState = "onSling";
        }
    }
}

function mouseDragged(){
    if(gameState!=="launched"){
        Body.setPosition(rocks[rocks.length-1].body,{x:mouseX,y:mouseY});
        //parameters: variable, original force, force to be applied
        Body.applyForce(rocks[rocks.length-1].body,rocks[rocks.length-1].body.position,{x:5,y:-5});
        return false;
    }
}

function mouseReleased(){
    if(gameState!=="launched"){
        slingshot.fly();
        rocks.pop();
        gameState = "launched";
        locked=false;
        return false;
    }
}





