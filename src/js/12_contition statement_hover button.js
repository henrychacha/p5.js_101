//create a hangover button
/* 
    - identify the mouse when entering the rectangle
    - when mouse is pressed above the rectangle, change the filled color of the rectangle and background.
*/

let on = true; // regulate mousePress switch
function setup(){
createCanvas(400, 200);
background(10)
}

function draw(){
background(0)
noFill()
stroke(200,0,0);
strokeWeight(1);
if(mouseX >= 150 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150){
    
    // method 1, using the variable: mouseIsPressed
   /*  if(mouseIsPressed){
        // print("pressed");
        background(200)
        fill(190,0,0);
        noStroke();
    } 
     */

    //method 2, use mousePressed function and switching variable
    if(!on){
        background(200)
        fill(190,0,0);
        noStroke();
    }else{
        fill(0,150,0)
        stroke(0,100,0);
    
    }

}



rectMode(CENTER)
rect(200,100,100,100)


}

function mousePressed(){
    print("mousePressed");
    on = !on;
 
}