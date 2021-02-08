var maxDrops=100;
var drops;



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dropsObj1,dropsObj2,dropsObj3,dropsObj4,dropsObj5,dropsObj6,dropsObj7,dropsObj8;
var dropsObj9,dropsObj10,dropsObj11,dropsObj12,dropsObj13,dropsObj14,dropsObj15,dropsObj16,dropsObj17;
var dropsObj18;
var umbrellaObj;

function preload(){
    
}

function setup(){
    canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    

    dropsObj1 = new Drops(100,-10,5);
    dropsObj2 = new Drops(150,0,5);
    dropsObj3 = new Drops(50,-25,5);
    dropsObj4 = new Drops(40,-40,5);
    dropsObj5 = new Drops(80,-20,5);
    dropsObj6 = new Drops(130,-15,5);
    dropsObj7 = new Drops(120,-30,5);
    dropsObj8 = new Drops(160,-35,5);
    dropsObj9 = new Drops(160,-20,5);
    dropsObj10 = new Drops(160,-40,5);
    dropsObj11 = new Drops(160,-35,5);
    dropsObj12 = new Drops(50,-35,5);
    dropsObj13 = new Drops(40,-40,5);
    dropsObj14 = new Drops(80,-30,5);
    dropsObj15 = new Drops(130,-50,5);
    dropsObj16 = new Drops(60,-25,5);
    dropsObj17 = new Drops(150,-60,5);
    dropsObj18 = new Drops(170,-80,5);    

    umbrellaObj = new Umbrella(200,500,200);
}

function draw(){
    background(0);
    Engine.update(engine);

    dropsObj1.display();
    dropsObj2.display();
    dropsObj3.display();
    dropsObj4.display();
    dropsObj5.display();
    dropsObj6.display();
    dropsObj7.display();
    dropsObj8.display();
    dropsObj9.display();
    dropsObj10.display();
    dropsObj11.display();
    dropsObj12.display();
    dropsObj13.display();
    dropsObj14.display();
    dropsObj15.display();
    dropsObj16.display();
    dropsObj17.display();
    dropsObj18.display();

    umbrellaObj.display();

    drawSprites();
}   

