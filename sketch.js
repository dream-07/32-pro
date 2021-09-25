const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

let engine;
let world;

var blower,blowerm,ball;

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
blower = new Block(width-700,height-300,250,20)
blowerm = new Block(width-450,height-365,250,150)
ball = new Ball(width-450,150,30)

button = createButton("click to blow")
button.position(250,600)
button.class("blowbutton")
button.mousePressed(blow)
}

function draw() {
  background("black");
  Engine.update(engine);
  blower.show();
  blowerm.show();
  ball.show();

}

function blow() {
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}