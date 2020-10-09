class Bob{
    constructor(x,y,radius){
        var options={
            restitution: 0.8,
            density:1.2,
            friction:0.2,
            isStatic:true
            
        
        };
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world, this.body)
        this.radius=radius
    }
    display(){
        var pos=this.body.position
        push()
        fill("red")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop()

    }
}
