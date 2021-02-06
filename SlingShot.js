class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
         

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

           

    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){ 
        
   // image(this.image3, 0, 0);
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(20);
            stroke(48,22,8)
            line(pointA.x -25, pointA.y, pointB.x -10, pointB.y);
            
            
        }
    }
    
}