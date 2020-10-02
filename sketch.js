let paddle;
let ball;
let bricks = [];
let ballMoving = false;
let lives = 2;


function setup() {
    createCanvas(windowWidth - 50, windowHeight - 50);
    //   createCanvas(800,800);
    background(255);
    textSize(50);
    textAlign(CENTER);
    paddle = new Paddle();
    ball = new Ball();
    //bricks[0] = new Brick();
    let numBricks = 25;
    let brickWidth = floor((width - 5) / 25) - 1;
    for (let j = 0; j < 10; j++) {
        let brickHeight = 50;
        for (let i = 0; i < numBricks; i++) {
            let xPos = (i * brickWidth) + 15;
            let yPos = (j * brickHeight) + 50;
            bricks.push(new Brick(xPos, yPos, brickWidth, brickHeight));
        }
    }
}

function keyPressed() {
    if (key == "s" | key == "S" | key == " ") {
        ballMoving = true;
    }
    if ((key == "r" | key == "R") && ball.endGame) {
        ball = new Ball();
        ballMoving = false;
        lives -= 1;
    }
}

function keyReleased() {
    paddle.movingLeft = false;
    paddle.movingRight = false;
}

function draw() {
if (!ball.endGame) {
        background(255);
        noFill();
        strokeWeight(2);
        text("Lives:"+lives,100,height-20);
        rect(1, 1, width - 2, height - 2);

        if (keyIsDown(LEFT_ARROW)) {
            paddle.movingLeft = true;
            paddle.x -= 10;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            paddle.movingRight = true;
            paddle.x += 10;
        }
        paddle.checkEdges();
        paddle.show();
        paddle.hits(ball);
        if (ballMoving) {
            ball.checkEdges();
            ball.move();
        }
        ball.show();

        for (let i = 0; i < bricks.length; i++) {
            bricks[i].show();
            if (bricks[i].hit(ball)) {
                bricks.splice(i, 1);
            }
        }
        if (bricks.length == 0) {
            ball.endGame = true;
        }
    }
    else {

        currentLives = lives - 1;
        if (currentLives == 0) {
            text("GAME OVER",width/2,height/2);
            noLoop();
        } else
        text("Lives Left " + currentLives.toString() + ". Press R to reset",width/2,height/2);
    }
}