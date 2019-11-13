var enemy = new Image();
enemy.src = "assets/enemies.png";

function Enemy() {
    this.x = width / 2;
    this.y = height / 2;
    this.dy = 0;
    this.dx = 0;
    this.width = 32;
    this.height = 32;
    this.gravity = 0.3;
    this.speed = 3;
    this.facing = "right";
    this.isMoving = false;
    this.inAir = false;
    this.action = "idle";
    this.frameCount = 0;
    this.animateSpeed = 6;
    this.jumping = false;
    this.grounded = false;
    this.type = 0; //stationary
}

function makeEnemy(x, y, type, arrayOfEnemies) {
    var newEnemy = new Enemy();

    newEnemy.x = mapX(x);
    newEnemy.y = mapY(y);
    newEnemy.type = type;

    arrayOfEnemies.push(newEnemy);

    return arrayOfEnemies;
}

function makeEnemies() {
    var madeEnemies = [];

    madeEnemies = makeEnemy(10, 3, 0, madeEnemies);

    return madeEnemies;
}

Enemy.prototype.draw = function(ctx) {
    ctx.drawImage(enemy, 6, 10, 28, 28, this.x, this.y, 48, 48);
}

var enemies = [];
var initEnemy = 1;

function drawEnemies() {
    if (initEnemy) {
        enemies = makeEnemies();
        initEnemy--;
    }
    for (i = 0; i < enemies.length; i++) {
        enemies[i].draw(ctx);
    }
}
