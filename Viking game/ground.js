class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        this.w = width;
        this.h = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("ground.png");
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
        pop();
    }
}