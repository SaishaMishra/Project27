class Roof{
    constructor(x,y,width,height)
{
    var props={
        restitution:0.1,
        
        
        density:1,
        
        
        friction:0.8}

    this.body=Bodies.rectangle(x,y,width,height,props)
    this.width=width;
    this.height=height;

    World.add(world,this.body)

    
}
display(){
    var book=this.body.position;
    push();
rotate(this.body.angle)
translate(book.x, book.y);
rect(0,0,this.width,this.height)
pop();

}

}