/* 
    - modularity // bouncing ball
    - reusability // lollipop

    1 modularity 
    - elements: ball, 
    - move the ball
    - hit the wall
    - change the direction of the ball
    - convert to a function and object
*/
// let moveX = 200;
// let moveY =200;
// let speedX = 5;
// let speedY = 5;
let ball;
function setup(){
createCanvas(600, 400);
    ball = new BouncingBall(200,200,30,5,5)
}

function draw(){
    background(0);
    ball.hitWall()
    ball.display()
    ball.move();
    // if(moveY >= height-30 || moveY <= 0+30){
    //     speedY = -speedY;
    // }
    // if(moveX >= width-30 || moveX <= 0+30){
    //     speedX = -speedX;
    // }
    // fill(255);
    // noStroke();
    // circle(moveX,moveY,60)
    // moveX += speedX
    // moveY += speedY
}

function mousePressed(){}

class BouncingBall {
    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    display() {
        circle(this.x, this.y, 2*this.radius);
    }
    hitWall() {
        if (this.x > width-this.radius || this.x < 0+this.radius) {
            this.speedX = -this.speedX;
        }
        if (this.y > height-this.radius || this.y < 0+this.radius) {
            this.speedY = -this.speedY;
        }
    }

}