class rope{
	constructor(body1,body2,pointA,pointB)
	{
//natural propertiess
this.pointA = pointA;
this.pointB = pointB;


//phyisical 
var options = {
	bodyA: body1,
	bodyB: body2,
	pointB: {
    x : this.pointA,
	y : this.pointB,
	}
	
}
	//create rope constraint here
	this.rope = Constraint.create(options);
	world.add(world,this.rope)
	}


    //create display() here 
    display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
line(pointA.x,pointA.y,pointB.x,pointB.y);
	}
}
