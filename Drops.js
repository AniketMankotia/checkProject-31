class Drops extends BaseClass{
    constructor(x,y,r){
        super(x,y,r);
    }
    display(){
        super.display();
        //if(frameCount % 200 === 0){
            //for(var i=0; i<maxDrops; i++){
                //drops.push(new Drops(random(0,400), random(0,400)));
            //}
        //}
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)});
        }
      
    }
}