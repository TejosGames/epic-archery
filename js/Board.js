class Board{
    constructor(x,y,w,h){
        const options = {
            isStatic: true
          };
      
          this.body = Matter.Bodies.rectangle(x, y, width, height, options);
          this.width = w;
          this.height = h;
          this.image = loadImage("./assets/board.png");
      
          World.add(world, this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, this.width, this.height);
        pop();
    }
}