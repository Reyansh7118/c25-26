class Parent {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1.5,
        'friction': 2.5,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height =height;
      this.Img=loadImage("sprites/base.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //strokeWeight(3);
      //stroke('blue')
      //fill('red')
      imageMode(CENTER)
      image (this.Img,0,0,this.width,this.height)
      //rectMode(CENTER)
      //rect(0, 0, this.width, this.height);
      pop();
    };
  };
  