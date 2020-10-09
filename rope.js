class Rope{
    constructor(body1,body2,x,y){
        var constraintOptions={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:x,y:y}
        }
        this.constraint=Constraint.create(constraintOptions)
        World.add(world,this.constraint)

    }
    display(){
        var bodyApos=this.constraint.bodyA.position
        var bodyBpos=this.constraint.bodyB.position
        var pointBpos=this.constraint.pointB
        var anchorX=pointBpos.x+bodyBpos.x
        var anchorY=pointBpos.y+bodyBpos.y
        push()
        stroke("white")
        strokeWeight(3)
        line(bodyApos.x,bodyApos.y,anchorX,anchorY)
        pop()
    }
}
