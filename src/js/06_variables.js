
let circleX = 100;
let changesA = 1;
function setup(){
    createCanvas(400, 300);
    background(0); 
    
}
function draw(){
    // background(0); 
   
    // fill(mouseX);
    // stroke(mouseY);
    // strokeWeight(mouseY);
    // ellipse(mouseX,50,100,75);

    noStroke();
    fill(255,50);
    circle(mouseX,mouseY,10);
    circle(circleX,150,changesA);
    circleX += 1;   
    changesA++; //incrementation operator, syntax sugar
}

function mousePressed(){
    //efface all
    background(0)
    circleX = 0
    changesA = 0
}