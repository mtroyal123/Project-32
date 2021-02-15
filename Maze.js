class Maze {
    constructor(x,y, width, height){
        var options={
            isStatic: true
        }
        this.image = loadImage("wodden-blok.jpg");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        fill("black");
        image(this.image, pos.x, pos.y, this.width, this.height);

        if (gameState === "2010"){
            this.body.destroy();
            World.remove(this.body);
        }
    }
}