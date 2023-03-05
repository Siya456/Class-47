//child class 
class Box extends Base{
    constructor(x,y,w,h){
        //calls parent class (Base) functions
        super(x,y,w,h);
        this.image = loadImage("wood1.png");
    }
}