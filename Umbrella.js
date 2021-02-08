class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic: true,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/WalkingFrame/walking_1.png");
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}