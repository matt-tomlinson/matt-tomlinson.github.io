var tileHeight = 64;
var tileWidth = 64;

function Tile() {
    this.x = width / 2;
    this.y = height / 2;
    this.width = 32;
    this.height = 32;
    this.collide = 1;
    this.xType = 0;
    this.yType = 0;
}

Tile.prototype.draw = function(ctx) {
    ctx.drawImage(tiles, 2 + this.xType * 64, 2 + this.yType * 64, 63, 63, this.x, this.y, tilesize, tilesize);
}
