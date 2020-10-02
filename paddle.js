function Paddle() {
    this.w = 200;
    this.h = 20;
    this.x = width /2 - this.w/2;
    this.y = height - 70;
    this.movingLeft = false;
    this.movingRight = false;

    this.show = function() {
        strokeWeight(2);
        stroke(0);
        rect(this.x, this.y, this.w, this.h);
    }

    this.checkEdges = function() {
        if (this.x < 1 && this.movingLeft) {
            this.x = 2;
        } else if (this.x > width - this.w - 1 && this.movingRight) {
            this.x = width - this.w - 1;
        }
    }

    this.hits = function(obj) {
        if ((obj.pos.x > this.x) && (obj.pos.x < (this.x + this.w)) && ((obj.pos.y + obj.r) > this.y)) {
            console.log("Hit");
            obj.pos.y = this.y - obj.r;
            obj.speed.y *= -1;
            console.log("Before = ",obj.speed.x);
            obj.speed.x = map(obj.pos.x - this.x,0,200,-10,10);
            console.log("After = ",obj.speed.x);
        }
    }

}