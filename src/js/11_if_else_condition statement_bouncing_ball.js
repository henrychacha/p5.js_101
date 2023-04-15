// create a bouncing ball using conditional statment
let x = 100;
let speed = 1
function setup(){
createCanvas(400, 200);

}

function draw(){
background(10)
fill(255)
noStroke()
if(x >= (width-5)){
    speed = -1;
}
if(x <=(5)){
    speed = 1;
}
x = x + speed;
circle(x,100,10)

}

function mousePressed(){}