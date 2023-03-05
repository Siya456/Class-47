//Base class (parent class for inheritance)
class Base{
    constructor(x,y,w,h,angle){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("base.png");
        World.add(world,this.body);
    }

    display(){
        push();
        //changes point of axis rotation
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}