function setup(){
createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    noFill()
    stroke(200)
    if(mouseX > 500){
        ellipse(200, 200, 100, 200)
    }else if(mouseX > 400){
        line(200, 200, 100,500)
    }else if(mouseX >300){
        rect(300,100,124,500)
    }else if(mouseX > 200){
        rect(300,700,124,100)
    }else if(mouseX >100){square(600,500,400)}else{
        line(200, 900, 100,500)
    }
    
    
    
    
    
}

function mousePressed(){}