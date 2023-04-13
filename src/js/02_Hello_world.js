let x = 0 

function setup(){
    // The setup() block runs once, and is typically used for initialization, or for creating a program that does not need a loop running code repeatedly. 

    // By default, the drawing canvas has a size of 100x100. If you want to set a custom size, use the createCanvas() function. It is a good idea to always make this the first line in setup(). The code below sets the canvas to size 600x400:

    // createCanvas() will create a new drawing canvas in the size specified and append it to the html page you are working with. If there is other content in the body of your html page, it will add on to the page after that, so you may not see it at the top of the window.

    createCanvas(600, 400);
    line(15, 25, 70, 90);
    background(100);
}

function draw(){
    // The draw() block runs repeatedly, and is used for animation.
    ellipse(x, height/2, 20, 20);
    x = x + 1
}