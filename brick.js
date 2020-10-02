function Brick(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;

    this.show = function () {
        push();
        strokeWeight(2);
        stroke(0);
        fill(255, 0, 0);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }

    this.hit = function (obj) {
        if (((obj.pos.x - obj.r) < (this.x + this.w)) && ((obj.pos.x + obj.r) > (this.x)) && ((obj.pos.y - obj.r) < (this.y + this.h)) && ((obj.pos.y + obj.r) > this.y)) {
            // console.log("Hit");
            obj.speed.y *= -1;
            // obj.speed.x *= 0;
            return true;
        } else {
            return false;
        }

    }

}