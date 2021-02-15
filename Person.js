class Person {
    constructor(x,y,w,h){
        var options={
            //friction: 0.5,
            isStatic: false
        }
        this.width = w;
        this.height = h;
        this.image = loadImage("girl-walk-begin.jpg");
        this.body = Bodies.rectangle(x,y,this.width, this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
           image(this.image, pos.x, pos.y, this.width, this.height);
    }
}