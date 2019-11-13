var turnPoints = [];

function TurnPoint() {
    this.x = 0;
    this.y = 0;
    this.upOpen = 0;
    this.downOpen = 0;
    this.leftOpen = 0;
    this.rightOpen = 0;
}

function makeTurnPoints(pattern) {
    //Make corner turnPoints for every map pattern
    makeTurnPoint(1, 1, 0, 1, 0, 1); // ┌
    makeTurnPoint(11, 1, 0, 1, 1, 0); // ┐
    makeTurnPoint(1, 11, 1, 0, 0, 1); // └
    makeTurnPoint(11, 11, 1, 0, 1, 0); // ┘

    switch (pattern) {
        case 0:
            makeTurnPoint(4, 1, 0, 1, 1, 1);
            makeTurnPoint(8, 1, 0, 1, 1, 1);
            makeTurnPoint(1, 6, 1, 1, 0, 1);
            makeTurnPoint(4, 6, 1, 1, 1, 1);
            makeTurnPoint(8, 6, 1, 1, 1, 1);
            makeTurnPoint(11, 6, 1, 1, 1, 0);
            makeTurnPoint(4, 11, 1, 0, 1, 1);
            makeTurnPoint(8, 11, 1, 0, 1, 1);
            break;
        default:
            console.log("Error: pattern " + pattern + " does not fall within range");
    }
}

function makeTurnPoint(x, y, upOpen, downOpen, leftOpen, rightOpen) {
    var newTurnPoint = new TurnPoint();
    newTurnPoint.x = x;
    newTurnPoint.y = y;
    newTurnPoint.upOpen = upOpen;
    newTurnPoint.downOpen = downOpen;
    newTurnPoint.leftOpen = leftOpen;
    newTurnPoint.rightOpen = rightOpen;

    turnPoints.push(newTurnPoint);
}
