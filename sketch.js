const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world;
var     rain1;

function setup(){
    engine = Engine.create();
    world = engine.world
    var canvas = createCanvas(1200,800);
    
    

    
        rain1 = new Rain(10,320,10,70);
        rain2 = new Rain(400,320,10,70);
        rain3 = new Rain(30,240,10,70);
        rain4 = new Rain(430,240,10,70);
        rain5 = new Rain(660,160,20,80);
        rain6 = new Rain(60,100,10,70);
        rain7 = new Rain(760,200,10,70);
        rain8 = new Rain(900,300,30,70);
        rain9 = new Rain(90,0,10,70);
        rain10 = new Rain(100,30,20,70);
        rain11 = new Rain(1100,20,20,70);
        rain12 = new Rain(220,340,10,70);
        rain13 = new Rain(130,20,10,70);
        rain14 = new Rain(450,40,10,70);
        rain15 = new Rain(870,60,20,80);
        rain16 = new Rain(166,00,10,70);
        rain17 = new Rain(570,00,10,70);
        rain18 = new Rain(180,30,30,70);
        rain19 = new Rain(450,0,10,70);
        rain20 = new Rain(200,30,20,70);
}

function draw(){
    background(0);
    Engine.update(engine);
   
        rain1.display();
        rain2.display();
        rain3.display();
        rain4.display();
        rain5.display();
        rain6.display();
        rain7.display();
        rain8.display();
        rain9.display();
        rain10.display();
        rain11.display();
        rain12.display();
        rain13.display();
        rain14.display();
        rain15.display();
        rain16.display();
        rain17.display();
        rain18.display();
        rain19.display();
        rain20.display();
    
}