import Point from './class';

var ColorPoint = function (x, y, color) {
    Point.call(this, x, y);
    this.color = color || 'red';
};

ColorPoint.prototype = Object.create(Point.prototype);

ColorPoint.prototype.constructor = ColorPoint;

ColorPoint.prototype.getColor = function () {
    return this.color;
};

module.exports = ColorPoint;