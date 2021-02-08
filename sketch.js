const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    box1 = new Box(650,350,50,70);
    box3 = new Box(700,350,50,70);
    box5 = new Box(750,350,50,70);
    box4 = new Box(800,350,50,70);
    box2 = new Box(850,350,50,70);
    //
   
    box6 = new Box(900,350,50,70);
    //
    box7 = new Box(700,300,50,70);
   box8 = new Box(750,300,50,70);
   box9 = new Box(800,300,50,70);
   box10 = new Box(850,300,50,70);
   //
   box11 =new Box(750,250,50,70);
   box12=new Box(800,250,50,70);

   
   // pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,300, PI/2);

    
   
    
   // pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   // pig1.display();
   // pig1.score();
   // log1.display();

    box3.display();
    box4.display();
   // pig3.display();
   // pig3.score();
   // log3.display();

    box5.display();
    //log4.display();
    //log5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    bird.display();
   // platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}


function keyPressed(){
    if(keyCode === 32 && bird.body.speed<=1){
        
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
       slingshot.attach(bird.body);
       
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}