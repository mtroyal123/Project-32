const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var gameState = "start";
var person, person2, person3;
var Date1990, Date2000, Date2010, Date2020;
var sect1, sect2, sect3, sect4, sect5, sect6, sect7, sect8, sect9, sect10, sect11, sect12, sect13, sect14, sect15, sect16, sect17, sect18,sect19,sect20;
var snake,food;
var scl = 20;
var score; 

var sanitizer, sanitizerImage,  blob, blobImage, blobGroup;
var covid,covidImage, covidGroup;
var backgroundImage, corrupt;
var score2;

function preload(){
  sanitizerImage = loadImage("sanitizer.jpg");
  backgroundImage = loadImage("bad.jpg");
  covidImage = loadImage("covid.jpg");
  blobImage = loadImage("clean-blob.jpg");
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,500);

  person = new Person(400,430,50,110);
  person2 = new Person (900,400,40,100);

  sect1 = new Maze (850, 300, 50,10);
  sect2 = new Maze (800, 445,12,25);
  sect3 = new Maze(880, 170, 70,10);
  sect4 = new Maze(780,250,10,50 );
  sect5 = new Maze (700,400,70,10);
  sect6 = new Maze (670,220, 10, 60);
  sect7 = new Maze (750,10,10,40);
  sect8 = new Maze (950, 20, 30, 10);
  sect9 = new Maze (600,150, 70,10 );
  sect10 = new Maze (590, 350, 10,50);
  sect11 = new Maze (610, 480, 10,60);
  sect12 = new Maze (440, 150, 10,80);
  sect13 = new Maze (300,160, 40,10);
  sect14 = new Maze (410, 400, 60,10);
  sect15 = new Maze (400,490, 10,20);
  sect16 = new Maze (210,310,80,10);
  sect17 = new Maze(100, 250, 10, 70);
  sect18 = new Maze(50,420,90,10);
  sect19 = new Maze(180,470,10,65);
  sect20 = new Maze(150, 10,10,20);

  snake = new Snake(0,0);
  pickLocation();
  score = 0;

  corrupt = createSprite(500,250,1000,500);
 corrupt.addImage(backgroundImage);

 sanitizer = createSprite(970, mouseY, 10,15);
 sanitizer.addImage(sanitizerImage);
 sanitizer.scale = 0.3;
 score2 = 0;
 covidGroup = createGroup();
 blobGroup = createGroup();
}


function draw() {

  Engine.update(engine);
  background(255);  
  

  if (gameState === "start"){

  ground = new Ground(500,485,1000,30);
  ground.display();
  person.display();
  Date1990 = new Dates(405,165,100,10);
  Date1990.display();

  push();
  textSize(20);
  fill("black");
  noStroke();
  text("Press 'Space' to Jump and enter the 1990's!", 550, 50);
  pop();  

  push();
  textSize(40);
  fill("red");
  noStroke();
  text("1990", 360, 200);
  pop();

  var collision = Matter.SAT.collides(person.body, Date1990.body);
  if (collision.collided === true){
   gameState = "1990";
    console.log(collision.collided);
  }

 }


  if (gameState === "1990"){
    person2.display();

  push();
  textSize(20);
  fill("black");
  noStroke();
  text("Go through the maze to enter the new millennium!", 230, 50);
  pop();

  sect1.display();
  sect2.display();
  sect3.display();
  sect4.display();
  sect5.display();
  sect6.display();
  sect7.display();
  sect8.display();
  sect9.display();
  sect10.display();
  sect11.display();
  sect12.display();
  sect13.display();
  sect14.display();
  sect15.display();
  sect16.display();
  sect17.display();
  sect18.display();
  sect19.display();
  sect20.display();

  Date2000 = new Dates(100,100,50,70);
  Date2000.display();

  push();
  textSize(40);
  fill("red");
  noStroke();
  text("2000", 50, 100);
  pop();

  var collision = Matter.SAT.collides(person2.body, Date2000.body);
  if (collision.collided === true){
   gameState = "2000";
  }

 }


  if (gameState === "2000"){

    background(51);
    snake.death();
    snake.update();
    snake.display();
    frameRate(10);
    fill(255,0,0);
    rect(food.x, food.y, scl, scl);
  
    if (snake.eat(food)){
      pickLocation();
      score++;
    }
    textSize(20);
    text("Score: "+ score, 900, 50);
    fill("black");
    text("When your score becomes 20, you travel to 2020", 100,50);

    if (score === 20){
      gameState = "2020";
    }
  }


 if (gameState === "2020"){
 background(0);
 sanitizer.y = mouseY;
 
  if (frameCount%50 ===0){
 CreateCovid();
  }
  if (covidGroup.isTouching(blobGroup)){
    covidGroup.destroyEach();
    blobGroup.destroyEach();
    score2 = score2+1;
  }
  if (score2 === 5){
    if (frameCount&10 ===0){
      CreateCovid();
      covid.velocityX= 9;
    }
  }
  drawSprites();
  textSize(20);
 fill("red");
 text("Score: "+ score2, 800, 50);
 textSize(18);
  text("Defeat Covid-19 to win! Press 'Space' to squirt Sanitizer.", 50,50);
  if (score2 === 10){
    gameState = "end";
  }
}

if (gameState ==="end"){
  textSize(50);
  fill("blue");
  text("YOU WIN!", 400, 250);

}


 }



function keyPressed(){
  if (keyCode == 32 && gameState === "start"){
    Matter.Body.applyForce (person.body, person.body.position, {x: 0, y: -0.3});
  }
  if (keyIsDown (UP_ARROW) && gameState === "1990"){
    person2.body.position.y = person2.body.position.y -10;
  }
  if (keyIsDown(DOWN_ARROW) && gameState === "1990"){
    person2.body.position.y = person2.body.position.y +10;
  }
  if (keyIsDown(RIGHT_ARROW) && gameState === "1990"){
    person2.body.position.x = person2.body.position.x + 5;
  }
  if (keyIsDown(LEFT_ARROW) && gameState === "1990"){
    person2.body.position.x = person2.body.position.x - 5;
  }

  if (keyCode === UP_ARROW && gameState === "2000"){
    snake.dir(0,-1);
  }
  else if (keyCode === DOWN_ARROW ){
    snake.dir(0,1);
  }
  else if(keyCode === RIGHT_ARROW){
    snake.dir(1,0);
  } 
  else if(keyCode === LEFT_ARROW ){
    snake.dir(-1,0);
  }
  if (keyCode === 32 && gameState === "2020"){
    blob = createSprite(970, sanitizer.y - 25, 10,15);
    blob.addImage(blobImage);
    blob.velocityX = -10;
    blobGroup.add(blob);
  }
}

function CreateCovid(){
  covid = createSprite(Math.round(random(100,900)), Math.round(random(100,400)), 10,10);
  covid.addImage(covidImage);
  covid.scale = 0.2;
  covid.velocityX = 7;
  covid.lifetime = 120;
  covidGroup.add(covid);
}