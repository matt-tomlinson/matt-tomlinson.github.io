var playerImage = new Image();
playerImage.src = "assets/kirby.png";

var player = {
    x: width / 1.7,
    y: height / 2.2,
    dx: 0,
    dy: 0,
    gravity: 0.3,
    friction: 0.8,
    width: 40,
    height: 40,
    speed: 3,
    facing: "right",
    isMoving: false,
    inAir: false,
    action: "idle",
    frameCount: 0,
    animateSpeed: 6,
    count: 0,
    jumping: false,
    grounded: false,
    draw: function() {
        switch (player.action) {
            case "walkRight":
                animateFasterSequence(9, 53, 9);
                break;
            case "walkLeft":
                animateFasterSequence(298, 53, 9);
                break;
            case "jumpRight":
                animateSequence(10, 131, 8);
                break;
            case "jumpLeft":
                animateSequence(303, 131, 9);
                break;
            case "fallRight":
                animateSequence(228, 131, 0);
                break;
            case "fallLeft":
                animateSequence(520, 131, 0);
                break;
            default:
                animateSpecialSequence(8, 3, 15, player.facing);
        }
    }
};

function animateSequence(xStart, yStart, numFrames) {
    ctx.drawImage(playerImage, xStart + 24 * player.frameCount, yStart, 21, 21, player.x, player.y, player.width, player.height);
    player.count++;

    if (player.count % player.animateSpeed == 0) {
        player.frameCount++;
    }

    if (player.frameCount > numFrames) {
        player.frameCount = 0;
        if (!player.grounded && player.jumping && player.facing == "right") {
            player.action = "fallRight";
        } else if (!player.grounded && player.jumping && player.facing == "left") {
            player.action = "fallLeft";
        } else {
            player.action = "idle";
        }
    }
}

function animateFasterSequence(xStart, yStart, numFrames) {
    ctx.drawImage(playerImage, xStart + 24 * player.frameCount, yStart, 21, 21, player.x, player.y, player.width, player.height);
    player.count++;

    if (player.count % (player.animateSpeed / (player.animateSpeed / 3)) == 0) {
        player.frameCount++;
    }

    if (player.frameCount > numFrames) {
        player.frameCount = 0;
        if (!player.grounded && player.jumping && player.facing == "right") {
            player.action = "fallRight";
        } else if (!player.grounded && player.jumping && player.facing == "left") {
            player.action = "fallLeft";
        } else {
            player.action = "idle";
        }
    }
}

function animateSpecialSequence(xStart, yStart, every, dir) {
    if (dir == "left") {
        xStart = 57
    } else {
        xStart = 8
    }

    ctx.drawImage(playerImage, xStart + 24 * player.frameCount, yStart, 21, 21, player.x, player.y, player.width, player.height);

    player.count++;
    if (player.count % 10 == 0) {
        if (player.count % (every * 10) == 0) {
            player.frameCount = 1;
            player.count = 0;
        } else player.frameCount = 0;
    }
}
