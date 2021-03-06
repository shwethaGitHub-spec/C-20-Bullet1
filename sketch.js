const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bullet, wall, thickness;
var speed, weight;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    speed = random(223, 321);
    weight = random(30, 52);
    thickness = random(22, 83);

    bullet = createSprite(50, 200, 30, 15);
    bullet.velocityX = speed;
    wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = color(80,80,80);
    
}

function draw(){
    background(0);
    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
        bullet.velocityX=0;
        var deformation=0.5 * weight * speed * speed/thickness*thickness*thickness;
        if(deformation>10){
            wall.shapeColor = "red"
        }
        if(deformation< 10){
            wall.shapeColor = "green"
        }
        
    }

    drawSprites();
}