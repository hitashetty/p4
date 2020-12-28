class box {
    constructor(x,y,width,height){
      var options = {
      'restitution': 1,
      'friction': 1,
      'density' : 1

      }
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world,this.body);

    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white");   
        rect(0,0,this.width,this.height);
        pop();
    }
}