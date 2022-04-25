//módulos da biblioteca Matter
const Engine = Matter.Engine; //motor ou mecanismo de física
const World = Matter.World; //mundo
const Bodies = Matter.Bodies; //corpos (objetos)

var engine, world; //nosso mecanismo e nosso mundo
var ball; //corpo da bola
var ground; //corpo do solo

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  //bola, variável tipo objeto JS
  var ball_options = {
    restitution: 0.95, //elasticidade
    frictionAir: 0.01, //fricção do ar
  }
  //criar a corpo
  ball = Bodies.circle(100,10,20,ball_options);
  //adicionar o corpo ao mundo
  World.add(world,ball);

  //solo, variável tipo objeto JS
  var ground_options = {
    isStatic: true,
  }
  //criar a corpo
  ground = Bodies.rectangle(250,490,500,10,ground_options);
  //adicionar o corpo ao mundo
  World.add(world,ground);

  //configuração das funções de desenho
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  background(100,255,600); //red, green, blue 

  //atualiza o mecanismo de física
  Engine.update(engine);
  
  //desenhar os corpos usando comandos da biblioteca p5.js
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y,500,10);

}