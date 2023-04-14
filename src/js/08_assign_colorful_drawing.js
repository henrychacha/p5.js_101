// everytime I click the mouse, the paintbrush's color and size will change randomly.
let r,g,b,a, size;
function setup(){
 createCanvas(windowWidth, windowHeight);
 background(255);
}
function draw(){
 fill(r,g,b,a);
 noStroke();
 circle(mouseX,mouseY,size);
}

function mousePressed(){
 r = random(255);
 g = random(255);
 b = random(255);
 a = random(255);
 size = random(100);
}