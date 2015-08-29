# Classes

## Class Definition

More intuitive, OOP-style and boilerplate-free classes.

```
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
```

## Class Inheritance

More intuitive, OOP-style and boilerplate-free inheritance.

```
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
```

## Code task 3 - create class 

Create a class equal to the ECMAScript 5 code:

```
function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return this.x + ' ' + this.y;
};
module.exports = Point;
```

## Code task 4 - class inheritance

Extend the Point class from previous task 
so that it behaves equal to the ECMAScript 5 code below:


```
var ColorPoint = function (x, y, color) {
    Point.call(this, x, y);
    this.color = color;
};
ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;
ColorPoint.prototype.getColor = function () {
    return this.color;
};
module.exports = ColorPoint;
```
