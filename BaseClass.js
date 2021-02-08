class BaseClass{
    constructor(x,y,r){
        var options={
            isStatic: false,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.x,this.y,this.r);
        pop();
    }
}