function Point(x,y) {
    this.x = x;
    this.y = y;
}

Point.distance = function (a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
};

Point.prototype.toString = function () {
    return this.x + ' ' + this.y;
};

module.exports = Point;