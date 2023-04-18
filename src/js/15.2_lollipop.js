/* 
    

*/
let lollipop;
function setup(){
    
    createCanvas(1280, 720);
    background(0);
}

function draw(){
}

function mousePressed(){
    lollipop = new Lollipop(mouseX,mouseY,50);
    lollipop.display();
}

function mouseDragged(){
    lollipop = new Lollipop(mouseX,mouseY,50);
    lollipop.display();
}
class Lollipop{
    /* 
        - location: x, y; size of the lollipop(radius)
        - shape: circle + rectangle
        - color: pink + blue
        - create one where my mouse clicks when I click
    */
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display(){
       
        fill(100,106,255)
        rect(this.x-0.1*this.r, this.y+0.8*this.r,0.2*this.r,2*this.r)
        fill(198,18,208);
        circle(this.x, this.y, 2*this.r);
    }
}

