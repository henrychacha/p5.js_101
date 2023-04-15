/* 
    principle:
    x = a to b
    y = c to d
    (x - a) / (b -a) = (y -c) / (d -c )
    ———>  y = (b - x) (c - a) / (d - a) + (c b - a c + a d - c a) / (d - a)
*/
// create a circle that can be used to control the background color.
let g = 0;
function setup(){
createCanvas(400, 200);
}

function draw(){
background(255,g,0,255);
circle(mouseX, 100, 10);
g = map(mouseX, 0, width,0,255);
}

function mousePressed(){}