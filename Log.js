class Log extends Parent {
    constructor(x, y, height, angle) {

    
     super (x,y,20,height,angle)

    this.Img=loadImage("sprites/wood2.png")
    Matter.Body.setAngle(this.body,angle)
    }


}