class Slingshot{
    //constraint class - elastic connection between 2 bodies 
    //in this program, connection is between rock body and point on screen
    constructor(a,b){
        var options ={
            bodyA:a,
            pointB:b,
            length:10,
            //elasticity
            stiffness:0.04,
        }
        this.pointB = b;

        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");

        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        //creating a catapult between bodyA and pointB
        image(this.sling1,200,200);
        image(this.sling2,170,200);

        //pointA and pointB stores x and y of stone and point 
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop()
        }
        
    }
    attach(rock){
        this.sling.bodyA=rock;
    }

    fly(){
        //BodyA becomes empty - rock is no longer attached to slingshot
        this.sling.bodyA = null;
    }
}