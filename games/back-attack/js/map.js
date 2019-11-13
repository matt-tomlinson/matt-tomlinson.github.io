var fgTileArray = [];
var bgTileArray = [];

function makeMap(map, pattern) {
    for (i = 0; i < 13; i++) { // Make Background Tiles
        for (j = 0; j < 13; j++) {
            var newTile = new Tile();
            newTile.x = i;
            newTile.y = j;
            newTile.xType = map;
            newTile.yType = 1;
            newTile.collide = 0;

            bgTileArray.push(newTile);
        }
    }

    for (i = 0; i < 13; i++) { // Make Foreground Border Tiles
        for (j = 0; j < 13; j++) {
            if (i == 0 || i == 12 || j == 0 || j == 12) {
                var newTile = new Tile();
                newTile.x = i;
                newTile.y = j;
                newTile.xType = map;
                newTile.yType = 0;
                newTile.collide = 1;

                fgTileArray.push(newTile);
            }
        }
    }

    switch (pattern) { // Make Foreground Inside Tiles
        case 0:
            makeTileBox(2, 2, 2, 4, map);
            makeTileBox(5, 2, 3, 4, map);
            makeTileBox(9, 2, 2, 4, map);
            makeTileBox(2, 7, 2, 4, map);
            makeTileBox(5, 7, 3, 4, map);
            makeTileBox(9, 7, 2, 4, map);
            break;
        case 1:
            makeTileBox(2, 2, 3, 3, map);
            makeTileBox(2, 6, 3, 2, map);
            makeTileBox(2, 9, 3, 2, map);
            makeTileBox(6, 2, 1, 9, map);
            makeTileBox(8, 2, 3, 2, map);
            makeTileBox(8, 5, 3, 2, map);
            makeTileBox(8, 8, 3, 3, map);
            break;
        case 2:
            makeTileBox(2, 2, 1, 5, map);
            makeTileBox(4, 2, 2, 5, map);
            makeTileBox(2, 8, 4, 3, map);
            makeTileBox(7, 2, 4, 3, map);
            makeTileBox(7, 6, 2, 5, map);
            makeTileBox(10, 6, 1, 5, map);
            break;
        case 3:
            makeTileBox(2, 2, 2, 2, map);
            makeTileBox(2, 5, 2, 6, map);
            makeTileBox(5, 2, 3, 4, map);
            makeTileBox(5, 7, 3, 4, map);
            makeTileBox(9, 2, 2, 6, map);
            makeTileBox(9, 9, 2, 2, map);
            break;
        case 4:
            makeTileBox(2, 2, 2, 4, map);
            makeTileBox(2, 7, 2, 4, map);
            makeTileBox(5, 2, 3, 2, map);
            makeTileBox(5, 5, 3, 3, map);
            makeTileBox(5, 9, 3, 2, map);
            makeTileBox(9, 2, 2, 4, map);
            makeTileBox(9, 7, 2, 4, map);
            break;
        default:
            makeTileBox(2, 2, 9, 9, map);
    }

    makeTurnPoints(pattern);
}

function drawMap() {
    for (i = 0; i < bgTileArray.length; i++) { // Draw Background Tiles
        bgTileArray[i].draw(ctx);
    }

    for (i = 0; i < fgTileArray.length; i++) { // Draw All Foreground Tiles
        fgTileArray[i].draw(ctx);
    }
}

function makeTileBox(x, y, width, height, map) {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            var newTile = new Tile();
            newTile.x = x + i;
            newTile.y = y + j;
            newTile.xType = map;
            newTile.yType = 0;
            newTile.collide = 1;

            fgTileArray.push(newTile);
        }
    }
}
