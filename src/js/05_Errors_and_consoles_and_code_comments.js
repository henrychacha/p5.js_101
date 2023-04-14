function setup(){
    createCanvas(400, 300);
    print("helloword"); // console
}
function draw(){
    background(250, 123, 12); 
    background(100)
    // this is the rectangle
    fill(0, 0, 255); 
    stroke(255,255,0); 
    strokeWeight(10)
    rect(175, 0, 75, 150);  
    // this is the ellipse
    //TODO I want to make this circle animate later
    noFill()  
    stroke(50)
    ellipse(200,50,100,75);

    
}