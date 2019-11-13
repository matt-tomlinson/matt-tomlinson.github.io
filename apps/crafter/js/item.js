var items = new Image();
items.src = "assets/items2.png";
var itemsize = tilesize * 0.9;

function Item() {
    this.x = width / 2;
    this.y = height / 2;
    this.dy = 0;
    this.width = 32;
    this.height = 32;
    this.collide = 1;
    this.xType = 0;
    this.yType = 0;
    this.gravity = 0.3;
    this.pickedUp = false;
}

Item.prototype.draw = function(ctx) {
    ctx.drawImage(items, 16 + 2 * this.xType + this.xType * 34, 15 + 2 * this.yType + this.yType * 34, 32, 32, this.x, this.y, itemsize, itemsize);
}

function makeItem(x, y, xtype, ytype, arrayOfItems) {
    var newItem = new Item();
    newItem.x = mapX(x);
    newItem.y = mapY(y);
    newItem.xType = xtype;
    newItem.yType = ytype;

    arrayOfItems.push(newItem);

    return arrayOfItems;
}

function makeItems() {
    var items = [];

    //items = makeItem(12, 9, 8, 0, items); // coin
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 6; j++) {
            //items = makeItem(i + 20, j + 11, i, j, items);
            //items = makeItem(random(0, 30), random(17, 20), i, j, items);

        }
        items = makeItem(i + 20, 11, 4, 0, items);
    }

    return items;
}

function itemPlayerCollision(mapItems) {
    for (i = 0; i < mapItems.length; i++) {
        var item = mapItems[i];
        if (item.collide != 0) {
            var dir = colCheck(item, player);
            if (dir != null) {
                item.pickedUp = true;
            }
        }
    }
    return mapItems;
}

function itemMapCollision(mapItems, mapElements) {
    for (i = 0; i < mapItems.length; i++) {
        var item = mapItems[i];
        for (j = 0; j < mapElements.length; j++) {
            for (k = 0; k < mapElements[j].length; k++) {
                var block = mapElements[j][k];
                if (block.collide == 1 && item.collide != 0) {
                    var dir = colCheck(item, block);

                    if (dir === "b") {
                        item.y = block.y - item.height + 3;
                        item.dy = 0;
                    }
                }
            }
        }
        item.dy += item.gravity;
        item.y += item.dy;
    }
}

var mapItems = [];
var init = 1;

function drawItems() {


    if (init) {
        madeItems = makeItems();
        //mapItems.push(madeItems);
        init--;
    }

    for (i = 0; i < madeItems.length; i++) {
        if (!madeItems[i].pickedUp) {
            madeItems[i].draw(ctx);
        }
    }

    return madeItems;
}
