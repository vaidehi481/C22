const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object,ball;





function setup() {
 var canvas= createCanvas(1000,400)
 engine=Engine.create();
 world=engine.world;

 var object_options1234 = {
  isStatic : true
 }

 var ball_options1234 = {
  isStatic : false
 }

object=Bodies.rectangle(200,390,1800,20,object_options1234);
 World.add(world,object);

 ball=Bodies.circle(200,100,20,ball_options1234);
 World.add(world,ball);

 console.log(object);
 console.log(object.position.x);
 console.log(object.position.y);
}



function draw() {
 background(0); 
 Engine.update(engine);
 rectMode(CENTER);
 rect(object.position.x,object.position.y,1800,20);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20)
}








