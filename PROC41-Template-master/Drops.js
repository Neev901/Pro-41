class Drops{
  constructor(x,y){
    var options={
    'friction' :0.1
    }
    this.body = Bodies.circle(x,y,10,options)
    this.radius = 10
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push(); 
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill(255);
    ellipse(0, 0, this.radius,this.radius);
    pop();
  }
  Reset_Pos(){
    if(this.body.position.y>935){
      Matter.Body.setPosition(this.body, {x:random(10,790), y:random(0,400)})
    }
  }
}

