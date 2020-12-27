class MANGO {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("mango.png");
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
      fill(128,128,128);
      image(this.image,this.x,this.y,this.width,this.height);
      pop();
    }
  };