class Chain{
    constructor(bodyA, bodyB){
       var options = {
           bodyA: bodyA,
           bodyB: bodyB,
           length: 10,
           stiffness: 0.05
       }

       this.spring = Constraint.create(options);
       World.add(world, this.spring);
    }
    display(){
        var pointA = this.spring.bodyA.position;
        var pointB = this.spring.bodyB.position;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}