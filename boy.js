class BOY {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("boy.png");
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      imageMode(CENTER);
      var angle = this.body.angle;
      image(this.image,this.x,this.y,this.width,this.height);
      rotate(angle+180);
      pop();
    }
  };