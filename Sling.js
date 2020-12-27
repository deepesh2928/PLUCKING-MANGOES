class SLING{
	constructor(body1,body2, offsetX, offsetY){
	this.offsetX=offsetX
	this.offsetY=offsetY
	var options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:offsetX, y:offsetY
	}
	}
	this.sling=Constraint.create(options);
	World.add(world,this.sling)
	}
	
	attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

	display(){
		if(this.sling.bodyA){
			var pointA=this.sling.bodyA.position;
			var pointB=this.sling.bodyB.position;

			strokeWeight(10);

			var Anchor1X=pointA.x
			var Anchor1Y=pointA.y

			var Anchor2X=pointB.x+this.offsetX
			var Anchor2Y=pointB.y+this.offsetY

			line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
			}
	}
}