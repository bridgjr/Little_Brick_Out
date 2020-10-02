function Ball() {
    this.r = 20;
    this.pos = createVector(width/2,height - 70 - this.r);
    this.speed = createVector(5,10);
    this.endGame = false;
    
    this.show = function() {
        strokeWeight(2);
        stroke(0);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

    this.move = function() {
        ball.pos.x += this.speed.x;
        ball.pos.y += this.speed.y;
    }

    this.checkEdges = function() {
        if (this.pos.x < this.r | this.pos.x > width - this.r) {
            this.speed.x *= -1;
        }
        if (this.pos.y < this.r) {
            this.speed.y *= -1;
        }
        if (this.pos.y > height - this.r) {
            this.speed.y *= 0;
            this.speed.x *= 0;
            this.endGame = true;
            // this.speed.y *= -1;
        }

    }

}