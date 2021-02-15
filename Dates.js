class Dates {
    constructor(x,y,w,h) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w; 
        this.h = h;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        if (gameState === "start"){
            fill("white");
            noStroke();
        rect(pos.x, pos.y, this.w,this.h);
        }
        if (gameState === "1990"){
          fill("white");
          noStroke();
      rect(pos.x, pos.y, this.w,this.h);
      }
      }
}