var tiles = new Image();
tiles.src = "assets/tileset.png";

var bg = new Image();
bg.src = "assets/waterfalls.png";

var count = 0;
var animateCount = 0;
var tilesize = 32;
var columns = width / tilesize;

function drawBackground() {
    if (count > 7) {
        count = 0;
    }

    ctx.drawImage(bg, 0 + 560 * count, 0, bg.width / 8.7, bg.height / 1.08, // source rectangle
        0, 0, width * 1, height); // destination rectangle

    if (animateCount % player.animateSpeed == 0) {
        count++;
    }

    animateCount++;
}

function makeGround(x, y, width) {
    var groundBlock = [];

    while (groundBlock.length < width) {
        var platformPiece = new Tile();
        groundBlock.push(platformPiece);
    }

    for (i = 0; i < groundBlock.length; i++) {
        groundBlock[i].xType = 2;
        groundBlock[i].yType = 2;
        groundBlock[i].x = x + tilesize * i;
        groundBlock[i].y = y;
    }

    return groundBlock;
}

function makeTileLine(x, y, typeX, typeY, width) {
    var tileLine = [];

    while (tileLine.length < width) {
        var tileLinePiece = new Tile();
        tileLine.push(tileLinePiece);
    }

    for (i = 0; i < tileLine.length; i++) {
        tileLine[i].xType = typeX;
        tileLine[i].yType = typeY;
        tileLine[i].x = x + tilesize * i;
        tileLine[i].y = y;
    }

    return tileLine;
}

function makePlatform(x, y, width) {
    var platform = [];

    while (platform.length < width) {
        var platformPiece = new Tile();
        platform.push(platformPiece);
    }

    for (i = 0; i < platform.length; i++) {
        if (i == 0) { // start piece
            platform[i].xType = 9;
            platform[i].yType = 5;
            platform[i].x = x;
            platform[i].y = y;
        } else if (i > 0) {
            if (i == platform.length - 1) { // end piece
                platform[i].xType = 12;
                platform[i].yType = 5;
                platform[i].y = y;
                platform[i].x = x + tilesize * i;
            } else { // middle pieces
                platform[i].xType = 11;
                platform[i].yType = 5;
                platform[i].y = y;
                platform[i].x = x + tilesize * i;
            }
        }
    }

    ctx.drawImage(tiles, 2 + 1 * tileWidth, 2 + 0 * tileHeight, tileWidth - 1, tileHeight - 1,
        x - tilesize, y, tilesize, tilesize);
    ctx.drawImage(tiles, 2 + 17 * tileWidth, 2 + 0 * tileHeight, tileWidth - 1, tileHeight - 1,
        x + platform.length * tilesize, y, tilesize, tilesize);

    return platform;
}

function makeTile(x, y, xtype, ytype, collide, arrayOfTiles) {
    var newTile = new Tile();
    newTile.x = mapX(x);
    newTile.y = mapY(y);
    newTile.xType = xtype;
    newTile.yType = ytype;
    newTile.collide = collide;

    arrayOfTiles.push(newTile);

    return arrayOfTiles;
}

function makeTiles() {
    var madeTiles = [];

    madeTiles = makeTile(2, 11, 15, 0, 0, madeTiles); // flower
    madeTiles = makeTile(5, 4, 6, 2, 2, madeTiles); // marker
    madeTiles = makeTile(6, 4, 6, 2, 2, madeTiles); //
    madeTiles = makeTile(7, 4, 6, 2, 2, madeTiles); //
    madeTiles = makeTile(6, 2, 13, 0, 0, madeTiles); // bush
    madeTiles = makeTile(12, 2, 14, 0, 0, madeTiles); //

    madeTiles = makeTile(29, 2, 14, 3, 1, madeTiles); //
    madeTiles = makeTile(28, 2, 13, 3, 1, madeTiles); //bottom
    madeTiles = makeTile(27, 2, 12, 3, 1, madeTiles); //
    madeTiles = makeTile(29, 3, 11, 3, 1, madeTiles);
    madeTiles = makeTile(28, 3, 10, 3, 1, madeTiles);
    madeTiles = makeTile(27, 3, 9, 3, 1, madeTiles);
    madeTiles = makeTile(29, 4, 11, 3, 1, madeTiles);
    madeTiles = makeTile(28, 4, 10, 3, 1, madeTiles);
    madeTiles = makeTile(27, 4, 9, 3, 1, madeTiles);
    madeTiles = makeTile(29, 5, 11, 3, 1, madeTiles);
    madeTiles = makeTile(28, 5, 10, 3, 1, madeTiles);
    madeTiles = makeTile(27, 5, 9, 3, 1, madeTiles);
    madeTiles = makeTile(29, 6, 11, 3, 1, madeTiles);
    madeTiles = makeTile(28, 6, 10, 3, 1, madeTiles);
    madeTiles = makeTile(27, 6, 9, 3, 1, madeTiles);
    madeTiles = makeTile(29, 7, 11, 3, 1, madeTiles);
    madeTiles = makeTile(28, 7, 10, 3, 1, madeTiles);
    madeTiles = makeTile(27, 7, 9, 3, 1, madeTiles);
    madeTiles = makeTile(29, 8, 11, 3, 1, madeTiles);
    madeTiles = makeTile(28, 8, 10, 3, 1, madeTiles);
    madeTiles = makeTile(27, 8, 9, 3, 1, madeTiles);
    madeTiles = makeTile(29, 9, 8, 3, 1, madeTiles); //
    madeTiles = makeTile(28, 9, 7, 3, 1, madeTiles); // top
    madeTiles = makeTile(27, 9, 6, 3, 1, madeTiles); //

    madeTiles = makeTile(26, 2, 7, 2, 1, madeTiles);
    madeTiles = makeTile(25, 2, 8, 2, 1, madeTiles);
    madeTiles = makeTile(24, 2, 9, 2, 1, madeTiles);
    madeTiles = makeTile(23, 2, 10, 2, 1, madeTiles);

    madeTiles = makeTile(23, 3, 9, 2, 1, madeTiles);
    madeTiles = makeTile(24, 3, 13, 2, 1, madeTiles);
    madeTiles = makeTile(25, 3, 14, 2, 1, madeTiles);
    madeTiles = makeTile(26, 3, 8, 2, 1, madeTiles);

    madeTiles = makeTile(23, 4, 7, 2, 1, madeTiles);
    madeTiles = makeTile(24, 4, 11, 2, 1, madeTiles);
    madeTiles = makeTile(25, 4, 12, 2, 1, madeTiles);
    madeTiles = makeTile(26, 4, 10, 2, 1, madeTiles);

    madeTiles = makeTile(26, 5, 8, 2, 1, madeTiles);
    madeTiles = makeTile(25, 5, 7, 2, 1, madeTiles);
    madeTiles = makeTile(24, 5, 9, 2, 1, madeTiles);
    madeTiles = makeTile(23, 5, 10, 2, 1, madeTiles);

    madeTiles = makeTile(17, 9, 6, 1, 0, madeTiles); // pillar top
    for (i = 0; i < 7; i++) {
        madeTiles = makeTile(17, 9 - i, 7, 1, 0, madeTiles);
    }
    madeTiles = makeTile(17, 2, 8, 1, 0, madeTiles);

    return madeTiles;
}

function drawMap() {
    var mapElements = [];
    platform1 = makePlatform(mapX(10), mapY(7), 4);
    platform2 = makePlatform(mapX(1), mapY(10), 6);
    ground = makeGround(mapX(0), mapY(1), width / tilesize);
    tileLine1 = makeTileLine(mapX(17), mapY(10), 6, 2, 13);
    madeTiles = makeTiles();

    mapElements.push(madeTiles);
    mapElements.push(tileLine1);
    mapElements.push(ground);
    mapElements.push(platform1);
    mapElements.push(platform2);

    for (i = 0; i < mapElements.length; i++) {
        for (j = 0; j < mapElements[i].length; j++) {
            mapElements[i][j].draw(ctx);
        }
    }

    return mapElements;
}
