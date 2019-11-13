function Player() {
    this.x = 1;
    this.y = 1;
    this.dy = 0;
    this.dx = 0;
    this.ai = 0;
    this.color = 0; // 0 RED, 1 BLUE, 2 ORANGE, 3 GREEN
    this.count = 0;
    this.speed = 0.05;
    this.width = 64;
    this.height = 64;
    this.nextDir = 1; // 0 UP, 1 DOWN, 2 LEFT, 3 RIGHT
    this.facing = 0; // 0 UP, 1 DOWN, 2 LEFT, 3 RIGHT
    this.upOpen = 0;
    this.downOpen = 0;
    this.leftOpen = 0;
    this.rightOpen = 0;
    this.frameCount = 0;
    this.animateSpeed = 3;
}

var madePlayers = [];
var players = [];

Player.prototype.draw = function(ctx) {
    if (this.frameCount % 2) {
        ctx.drawImage(tiles, 160 + (this.facing * tilesize * 2 + tilesize), this.color * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, tileDrawSize, tileDrawSize);
    } else {
        ctx.drawImage(tiles, 160 + (this.facing * tilesize * 2), this.color * tilesize, tilesize, tilesize, this.x * tileDrawSize, this.y * tileDrawSize, tileDrawSize, tileDrawSize);
    }
    this.count++;

    if (this.count % this.animateSpeed == 0) {
        this.frameCount++;
    }

    if (this.frameCount > 2) {
        this.frameCount = 0;
    }
}

Player.prototype.update = function(ctx) {

    if (this.facing == 3) {
        this.dy = 0;
        this.dx = this.speed;

    } else if (this.facing == 2) {
        this.dy = 0;
        this.dx = -this.speed;

    } else if (this.facing == 1) {
        this.dx = 0;
        this.dy = this.speed;

    } else if (this.facing == 0) {
        this.dx = 0;
        this.dy = -this.speed;

    } else {
        this.dx = 0;
        this.dy = 0;
    }

    if (!this.ai) {
        if (rightPressed) {
            this.nextDir = 3;
        } else if (leftPressed) {
            this.nextDir = 2;
        } else if (downPressed) {
            this.nextDir = 1;
        } else if (upPressed) {
            this.nextDir = 0;
        }
        if (spacePressed) {
            switch (this.facing) {
                case 0:
                    makeBomb(this.x + 0.25, this.y - 0.5, 0, -0.13, madeBombs);
                    break;
                case 1:
                    makeBomb(this.x + 0.25, this.y + 1, 0, 0.13, madeBombs);
                    break;
                case 2:
                    makeBomb(this.x - 0.5, this.y + 0.25, -0.13, 0, madeBombs);
                    break;
                case 3:
                    makeBomb(this.x + 1, this.y + 0.25, 0.13, 0, madeBombs);
                    break;
                default:
            }
            spacePressed = false;
        }
    } else { // AI
        this.nextDir = random(0,4);
    }

    if (this.dy == 0) {
        this.x += this.dx;
        this.x = Math.round(this.x * 100) / 100;
    }
    if (this.dx == 0) {
        this.y += this.dy;
        this.y = Math.round(this.y * 100) / 100;
    }
}

function makePlayer(x, y, color, ai, facing, madePlayers) {
    var newPlayer = new Player();

    newPlayer.x = x;
    newPlayer.y = y;
    newPlayer.color = color;
    newPlayer.ai = ai;
    newPlayer.facing = facing;

    madePlayers.push(newPlayer);

    return madePlayers;
}

function makePlayers() {
    //                       x, y, color, ai, facing
    madePlayers = makePlayer(1, 1, 0, 0, 3, madePlayers);
    madePlayers = makePlayer(11, 1, 1, 1, 1, madePlayers);
    madePlayers = makePlayer(1, 11, 2, 1, 0, madePlayers);
    madePlayers = makePlayer(11, 11, 3, 1, 2, madePlayers);

    return madePlayers;
}

function drawPlayers() {
    for (i = 0; i < players.length; i++) {
        players[i].draw(ctx);
    }
}

function updatePlayers() {
    for (i = 0; i < players.length; i++) {
        players[i].update(ctx);
    }
}
