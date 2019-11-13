function Animation() {
    this.x = 1;
    this.y = 1;
    this.dy = 0;
    this.dx = 0;
    this.type = 0;
    this.width = 64;
    this.height = 64;
    this.count = 0;
    this.speed = 0;
    this.numFrames = 0;
    this.frameCount = 0;
    this.animateSpeed = 5;
}

var animations = [];

Animation.prototype.draw = function(ctx) {

    ctx.drawImage(tiles, tilesize * 7 + this.frameCount * tilesize, 4 * tilesize + this.type * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, 64, 64);

    this.count++;

    if (this.count % this.animateSpeed == 0) {
        this.frameCount++;
    }

    if (this.frameCount > this.numFrames) {
        this.frameCount = 0;
        if (animations.indexOf(this) > -1) {
            animations.splice(animations.indexOf(this), 1);
        }
    }
}

Animation.prototype.update = function(ctx) {
    //this.x += this.dx;
    //this.y += this.dy;
}

function newAnimation(x, y, dx, dy, type, numFrames) {
    var newAnimation = new Animation();

    newAnimation.x = x;
    newAnimation.y = y;
    newAnimation.dx = dx;
    newAnimation.dy = dy;
    newAnimation.type = type;
    newAnimation.numFrames = numFrames;

    animations.push(newAnimation);
}

function drawAnimations() {
    for (i = 0; i < animations.length; i++) {
        animations[i].draw(ctx);
    }
}

function updateAnimations() {
    for (i = 0; i < animations.length; i++) {
        animations[i].update(ctx);
    }
}
