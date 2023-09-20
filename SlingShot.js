class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.slingSho = Constraint.create(options);
        World.add(world, this.slingSho);
    }
    fly(){
        this.slingSho.bodyA = null;
    }
    attach(){
        this.slingSho.bodyA = rock.body;   
    }
    display(){
        if(this.slingSho.bodyA){
        var pointA = this.slingSho.bodyA.position;
        var pointB = this.slingSho.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}