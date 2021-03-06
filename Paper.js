class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);

        fill(9, 15, 200);

        circle(this.body.position.x, this.body.position.y, this.radius);

    }       
}