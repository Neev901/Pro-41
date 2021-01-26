class Umbrella{
  constructor(x,y){
    var options={
      isStatic : true
    }
    this.body = Bodies.circle(x,y,275,options)
    this.radius = 10
    this.image = loadImage("images/Walking Frame/walking_1.png");
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}