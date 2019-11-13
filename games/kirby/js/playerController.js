function playerMovement() {
    if (player.dy == player.gravity || player.dy == 0) {
        player.inAir = false;
    } else {
        player.inAir = true;
    }

    if (leftPressed) {
        if (player.inAir) {
            if (player.dx > -player.speed) {
                player.dx -= 0.1;
            }
        } else {
            player.action = "walkLeft";
        }

        player.x -= player.speed;
        player.facing = "left";
        player.isMoving = true;
    }

    if (rightPressed) {
        if (player.inAir) {
            if (player.dx < player.speed) {
                player.dx += 0.1;
            }
        } else {
            player.action = "walkRight";
        }
        player.x += player.speed;
        player.facing = "right";
        player.isMoving = true;
    }

    if (upPressed) {
        player.dy = -5;
        if (player.inAir) {
            if (player.facing == "right") {
                player.action = "jumpRight";
            } else if (player.facing == "left") {
                player.action = "jumpLeft";
            }
        }
        player.y -= player.speed;
        player.isMoving = true;
    }

    if (downPressed) {
        player.y += player.speed;
        player.isMoving = true;
    }

    //Keep player within canvas
    if (player.x + player.width >= width) {
        player.x = width - player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }
    if (player.y + player.height >= height) {
        player.y = height - player.height;
        player.dy = 0;
        player.dx = 0;
    } else if (player.y <= 0) {
        player.y = 0;
    }

    player.x += player.dx;
    player.y += player.dy;
    player.dy += player.gravity;
}

function playerAction() {
    if (spacePressed) {}
}
