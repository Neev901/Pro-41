const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops=100, drops =[];
var thun1, thun2, thun3, thun4;

function preload(){
    bg = loadImage("/images/bg.jpg")
    thun1 = loadImage("/images/thunderbolt/1.png")
    thun2 = loadImage("/images/thunderbolt/2.png")
    thun3 = loadImage("/images/thunderbolt/3.png")
    thun4 = loadImage("/images/thunderbolt/4.png")
}

function setup(){
  var canvas = createCanvas(700,935);
  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(300,600)
    for (let i = 0; i < maxDrops; i++) {
      drops.push(new Drops(random(10,790), random(0,400)))
    }
  thunder= createSprite(400,180)  
  thunder.addImage("thun1",thun1)
  thunder.scale = 0.5
  thunder.visible = false
}

function draw(){
  background(bg)  
  Engine.update(engine);
  umbrella.display()
  for (let i = 0; i < drops.length; i++) {
    drops[i].display()
    drops[i].Reset_Pos()
  }
  if(frameCount%100 == 0 || frameCount%101 == 0 || frameCount%102 == 0 || frameCount%103 == 0 || frameCount%104 == 0 || frameCount%105 == 0 || frameCount%106 == 0 || frameCount%107 == 0 || frameCount%108 == 0 || frameCount%109 == 0){
    thunder.addImage("thun2",thun2)
    thunder.addImage("thun3",thun3)
    thunder.addImage("thun4",thun4)
    rand = "thun" + random(1,4)
    thunder.changeImage(rand)
    thunder.visible=true
  }
  else{
    thunder.visible=false
  }
  drawSprites()
}   

