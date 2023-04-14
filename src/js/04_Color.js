function setup(){
    createCanvas(400, 300);
}
function draw(){
    background(250, 123, 12); //RGB
    background(100) //greyscale color
    fill(0, 0, 255,100); // command the computer to hold a pen waiting to fill the inside
    stroke(255,255,0); // command the computer to hold a pen waiting to draw the outside 
    strokeWeight(10) //10px
    rect(175, 0, 75, 150);  

    //fill(0,255,0);
    noFill()  // if there is no fill() and noFill(), the default fill color is white.
    stroke(50) // if there is no stroke() and noStroke(), the default stroke color is black.
    
    ellipse(200,50,100,75);

    
}