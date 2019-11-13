function collisionResolution() {
    for (i = 0; i < players.length; i++) {
        for (m = 0; m < turnPoints.length; m++) {
            var px = Math.round(players[i].x * 100) / 100;
            var py = Math.round(players[i].y * 100) / 100;
            var tpx = Math.round(turnPoints[m].x * 100) / 100;
            var tpy = Math.round(turnPoints[m].y * 100) / 100;

            if (px == tpx && py == tpy) {
                var up = 0;
                var down = 1;
                var left = 2;
                var right = 3;
                if (players[i].nextDir == up && turnPoints[m].upOpen && players[i].facing != 1) {
                    players[i].facing = players[i].nextDir;
                    players[i].speed = 0.05;
                } else if (players[i].nextDir == down && turnPoints[m].downOpen && players[i].facing != 0) {
                    players[i].facing = players[i].nextDir;
                    players[i].speed = 0.05;
                } else if (players[i].nextDir == left && turnPoints[m].leftOpen && players[i].facing != 3) {
                    players[i].facing = players[i].nextDir;
                    players[i].speed = 0.05;
                } else if (players[i].nextDir == right && turnPoints[m].rightOpen && players[i].facing != 2) {
                    players[i].facing = players[i].nextDir;
                    players[i].speed = 0.05;
                }
                if ((players[i].facing == up && !turnPoints[m].upOpen) ||
                    (players[i].facing == down && !turnPoints[m].downOpen) ||
                    (players[i].facing == left && !turnPoints[m].leftOpen) ||
                    (players[i].facing == right && !turnPoints[m].rightOpen)) {
                    players[i].speed = 0;
                }
            }
        }
        for (j = 0; j < fgTileArray.length; j++) {
            var block = fgTileArray[j];
            if (block.collide && ((players[i].x - 1 <= block.x) && (block.x <= players[i].x + 1) &&
                    (players[i].y - 1 <= block.y) && (block.y <= players[i].y + 1))) {
                /*if (block.collide && ((players[i].x - 1 <= block.x) && (block.x <= players[i].x + 2) &&
                          (players[i].y - 1 <= block.y) && (block.y <= players[i].y + 2))) {*/
                var dir0 = colCheck(players[i], block); // player vs grid collision
                //block.xType = 1; see nearby blocks
                if (dir0) {
                    if (players[i].facing == players[i].nextDir) {
                        players[i].facing = random(0, 4);
                    } else {
                        players[i].facing = players[i].nextDir;
                    }
                }
            }
        }
        for (k = 0; k < madeBombs.length; k++) {
            var bomb = madeBombs[k];
            var player = players[i];
            if (bomb && player) {
                var dir1 = colCheck(player, bomb); // player vs bomb collision
            }
            if (dir1 && player) {
                switch (player.facing) {
                    case 0: // up
                        if (dir1 == 'b' && players.indexOf(player) > -1) {
                            newAnimation(player.x, player.y, player.dx, player.dy, 0, 4);
                            players.splice(players.indexOf(player), 1);
                        }
                        break;
                    case 1: // down
                        if (dir1 == 't' && players.indexOf(players[i]) > -1) {
                            newAnimation(player.x, player.y, player.dx, player.dy, 0, 4);
                            players.splice(players.indexOf(player), 1);
                        }
                        break;
                    case 2: // left
                        if (dir1 == 'r' && players.indexOf(players[i]) > -1) {
                            newAnimation(player.x, player.y, player.dx, player.dy, 0, 4);
                            players.splice(players.indexOf(player), 1);
                        }
                        break;
                    case 3: // right
                        if (dir1 == 'l' && players.indexOf(players[i]) > -1) {
                            newAnimation(player.x, player.y, player.dx, player.dy, 0, 4);
                            players.splice(players.indexOf(player), 1);
                        }
                        break;
                    default:
                }
                if (madeBombs.indexOf(madeBombs[k]) > -1) { // remove bomb
                    madeBombs.splice(madeBombs.indexOf(madeBombs[k]), 1);
                }
            }
        }
        for (l = 0; l < players.length; l++) {
            if (players[i] != players[l]) {
                var player1 = players[i];
                var player2 = players[l];
                if (player1 && player2) {
                    var dir2 = colCheck(players[i], players[l]); // player vs player collision
                }
                if (dir2) {
                    if (players[i].facing == 0) {
                        players[i].facing = 1
                    } else if (players[i].facing == 1) {
                        players[i].facing = 0;
                    } else if (players[i].facing == 2) {
                        players[i].facing = 3;
                    } else if (players[i].facing == 3) {
                        players[i].facing = 2;
                    }

                    if (players[l].facing == 0) {
                        players[l].facing = 1
                    } else if (players[l].facing == 1) {
                        players[l].facing = 0;
                    } else if (players[l].facing == 2) {
                        players[l].facing = 3;
                    } else if (players[l].facing == 3) {
                        players[l].facing = 2;
                    }
                }
            }
        }
    }
    for (k = 0; k < madeBombs.length; k++) {
        for (j = 0; j < fgTileArray.length; j++) {
            var bomb = madeBombs[k];
            if (bomb) {
                var dir3 = colCheck(madeBombs[k], fgTileArray[j]); // bomb vs grid collision
            }
            if (dir3) {
                if (madeBombs.indexOf(madeBombs[k]) > -1) {
                    madeBombs.splice(madeBombs.indexOf(madeBombs[k]), 1);
                }
            }
        }
    }
}
