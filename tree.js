class TREE {
    constructor() {
      var options = {
          isStatic: true
      }
      this.image=loadImage("tree.png");
      this.body = Bodies.rectangle(1200,650,550,900,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      imageMode(CENTER);
      image(this.image,1200,600,550,800);
      pop();
    }
};