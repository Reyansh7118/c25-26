class Bird extends Parent {
    constructor(x, y) {
     super(x,y,50,50)
      this.Img=loadImage("sprites/bird.png")
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
     
  
    super.display()

    };
  };
  