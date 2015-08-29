/*function Point(x,y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return this.x + ' ' + this.y;
};

module.exports = Point;*/


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return this.x + ' ' + this.y;
    }
}

export default Point;