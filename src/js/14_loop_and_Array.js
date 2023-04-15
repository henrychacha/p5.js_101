/* 
 while
 for
 for of in array
*/
let color;
function setup(){
createCanvas(400, 200);
}

function draw(){
    background(0);
    
    // a bunch of white balls
    fill(255);
    noStroke();
    /* 
        - what content
        - which starting indicator and its number
        - when to start/end
        - how to accrete
    */
    var x =0;
    while(x <= width){
        circle(x,100,10)
        x = x + 15;
    }
    
    // for 
    for(var i = 0; i < width; i = i + 20){
        for(var j = 0; j < height; j = j + 20){
            color = random(255);
            fill(255,color,0)
            ellipse(i,j,20,10)
        }
        
    }

    // for of
    var array1=['a', 'b', 'c', 'd', 'e', 'f'];
    var k = 0
    for( index of array1 ){
        stroke(0,0,255)
        strokeWeight(4)
        text(index,k,100)
        k = k + 20
    }

}

function mousePressed(){}