class Snake {
   constructor(x,y,width,height){
   var options= {
       isStatic: true
   }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.x = x;
   this.y = y;
   this.xspeed = 1;
   this.yspeed = 0;
   this.total = 0;
   this.tail = [];
   World.add(world, this.body);
}
eat(pos){
  var d = dist(this.x, this.y, pos.x, pos.y);
  if (d < 1){
      this.total++;
      return true;
  } else {
      return false;
  }
}
dir(x,y){
    this.xspeed = x;
    this.yspeed = y;
}
 update(){
     if (this.total === this.tail.length){
        for (var i = 0; i< this.tail.length - 1; i++){
         this.tail[i] = this.tail[i+1];
    }
  }
  this.tail[this.total-1] = createVector(this.x, this.y);
  this.x = this.x + this.xspeed*scl;
  this.y = this.y + this.yspeed*scl;
 
  this.x = constrain(this.x, 0, width-scl);
  this.y = constrain(this.y, 0, height-scl);
}

death(){
    for (var i = 0; i < this.tail.length; i++){
        var pos = this.tail[i];
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d <1){
            this.total = 0;
            this.tail = [];
        }
    }
}
display(){
    fill(255);
    noStroke();
    rectMode(CENTER);
    for (var i =0; i< this.total; i++){
    rect(this.tail[i].x, this.tail[i].y, scl,scl);
    }
    rect(this.x, this.y, scl, scl);
}
}