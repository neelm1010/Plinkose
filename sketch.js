const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var particle;
var turn=0;

var gameState ="start";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  ground=new Ground(240,800,480,20)
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    
      }
      for(var j=75;j<=width;j=j+50){
        plinkos.push(new Plinko(j,75))
      }
      for(var j=50;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,175))
      }
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
      if(frameCount%60===0){
        particles.push(new Particles(random(width/2-10,width/2-10),10,10))
      }
     
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.display();
  noStroke();
  textSize(35)
  fill("black") 
  text("Score:"+ score,300,40)

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
   
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(particle!=null)
  {
    particle.display();
  if(particle.body.position.y>760)
  {
    if(particle.body.position.x<300)
    {
      score=score+500;
      particle=null;
      if(score>=5){
        gameState="end"
      }
    }
    else if(particle.body.position.x < 600 && particle.body.position.x > 301 ) 
    {
          score = score + 100;
          particle=null;
          if ( count>= 5) gameState ="end";

    }
    else if(particle.body.position.x < 900 && particle.body.position.x > 601 ) 
    {
          score = score + 200;
          particle=null;
          if ( count>= 5) gameState ="end";

    }
    }
  }
  
  
  /*for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }*/
  //console.log(particles.x)
  drawSprites();
}


function mousePressed()
 { 
      console.log("hi"); 
      if(gameState!=="end") 
      { 
        score++; 
        console.log("bye"); 
        particle=new Particles(mouseX, 10, 10, 10); 
      }
 }
 