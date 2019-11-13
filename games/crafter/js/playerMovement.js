function playerMovement(mapElements) {

    if (rightPressed) {
        // right arrow
        if (player.dx < player.speed) {
            player.dx++;
        }
        if (player.grounded) {
            player.action = "walkRight";
        }
        player.facing = "right";
    }
    if (leftPressed) {
        // left arrow
        if (player.dx > -player.speed) {
            player.dx--;
        }
        if (player.grounded) {
            player.action = "walkLeft";
        }
        player.facing = "left";
    }
    // check keys
    if (spacePressed || upPressed) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.dy = -player.speed * 3;
        }

        if (player.facing == "right") {
            player.action = "jumpRight";
        } else if (player.facing == "left") {
            player.action = "jumpLeft";
        }

    }

    player.dx *= player.friction;
    player.dy += player.gravity;

    player.grounded = false;
    for (i = 0; i < mapElements.length; i++) {
        for (j = 0; j < mapElements[i].length; j++) {
            var block = mapElements[i][j];
            if (block.collide != 0) {
                var dir = colCheck(player, block);

                if (dir === "l" || dir === "r") {
                    player.dx = 0;
                    player.jumping = false;
                } else if (dir === "b") {
                    player.grounded = true;
                    player.jumping = false;
                } else if (dir === "t") {
                    player.dy = 0;
                }
            }
        }
    }

    if (player.grounded) {
        player.dy = 0;
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
}

function playerAction() {
    if (spacePressed) {}
}
