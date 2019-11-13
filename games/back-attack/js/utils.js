function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x * 64 + (shapeA.width / 2)) - (shapeB.x * 64 + (shapeB.width / 2)),
        vY = (shapeA.y * 64 + (shapeA.height / 2)) - (shapeB.y * 64 + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY / 64;
            } else {
                colDir = "b";
                shapeA.y -= oY / 64;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX / 64;
            } else {
                colDir = "r";
                shapeA.x -= oX / 64;
            }
        }
    }
    return colDir;
}
