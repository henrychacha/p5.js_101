let squareSize;
let linewidth = 4;
let x, y, r, g, b, a;

function setup(){
    createCanvas(windowWidth, windowHeight);//
    background(0); 

    squareSize = random(50, 100) // random function isn't accessible outside these two functions
    
}
function draw(){
    linewidth = random(4, 28);
    squareSize = random(50,250);
    x = random(width);//
    y = random(height);//
    r = random(255);//
    g= random(0,255);//
    b= random(0,255);//
    a= random(0,255);//
    
    rectMode(CENTER);
    strokeWeight(linewidth)
    stroke(0,0,255,10)
    fill(0,255,0,10)
    rect(100,100,squareSize,squareSize);
    square(200,150,squareSize)

    fill(r,g,b,a)
    circle(x,y,10)
}

function mousePressed(){

}