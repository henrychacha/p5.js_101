
let circleX = 100;
let changesA = 1;
function setup(){
    createCanvas(400, 300);
    background(0); 
    
}
function draw(){

    fill(255,50);
    circle(mouseX,mouseY,10);
    circle(circleX,150,changesA);

}

function mousePressed(){

}