class GROUND {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(this.width/2,1000,this.width,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill(128,128,128);
      rect(this.width/2,1000,this.width,20);
      pop();
    }
  };