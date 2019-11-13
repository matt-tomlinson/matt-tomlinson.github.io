var madeBombs = [];

function Bomb() {
    this.x = 1;
    this.y = 1;
    this.dy = 0;
    this.dx = 0;
    this.width = 32;
    this.height = 32;
    this.count = 0;
    this.speed = 0.05;
    this.frameCount = 0;
    this.animateSpeed = 5;
}

Bomb.prototype.draw = function(ctx) {
    if (this.frameCount % 2) {
        ctx.drawImage(tiles, 160, 4 * tilesize, 16, 16, this.x * tileDrawSize, this.y * tileDrawSize, 32, 32);
    } else {
        ctx.drawImage(tiles, 160 + tilesize / 2, 4 * tilesize, 16, 16, this.x * tileDrawSize, this.y * tileDrawSize, 32, 32);
    }
    this.count++;

    if (this.count % this.animateSpeed == 0) {
        this.frameCount++;
    }

    if (this.frameCount > 2) {
        this.frameCount = 0;
    }
}

Bomb.prototype.update = function(ctx) {
    this.x += this.dx;
    this.y += this.dy;
}

function makeBomb(x, y, dx, dy, madeBombs) {
    var newBomb = new Bomb();

    newBomb.x = x;
    newBomb.y = y;
    newBomb.dx = dx;
    newBomb.dy = dy;

    madeBombs.push(newBomb);

    return madeBombs;
}

function drawBombs() {
    for (i = 0; i < madeBombs.length; i++) {
        madeBombs[i].draw(ctx);
    }
}

function updateBombs() {
    for (i = 0; i < madeBombs.length; i++) {
        madeBombs[i].update(ctx);
    }
}
