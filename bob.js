class Bob{
    constructor(x,y,r)
{
    var props={
        restitution:0.1,       
        
        density:1,        
        
        friction:0.8}

    this.body=Bodies.circle(x,y,r,props)
    this.r= r
    World.add(world,this.body)

    
}
display(){
 
    push();
    var book=this.body.position;
//rotate(this.body.angle)
//translate(book.x, book.y);
ellipseMode(RADIUS)
fill("purple")
ellipse(book.x,book.y,this.r, this.r)
pop();

}

}