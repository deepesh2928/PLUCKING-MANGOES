class STONE {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("stone.png");
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height);
    }
  };