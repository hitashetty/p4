class stone{
  constructor(x,y,radius) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.2           
       }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     // this.image = loadImage("Images/stone.png");

      World.add(world, this.body);
}
display(){
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  ellipse(0,0,this.radius,this.radius);
  fill("purple");
 // imageMode(CENTER);
  //image(this.image, 0,0,this.r*2, this.r*2);
  pop();

  }
}