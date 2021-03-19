class Roof{
    constructor(x,y,width,height)
{
    var props={
        
        
    isStatic:true
    }

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
fill("blue")
rect(0,0,this.width,this.height)
pop();

}

}