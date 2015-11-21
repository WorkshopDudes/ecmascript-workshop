# Classes

The class syntax is not introducing a new object-oriented inheritance model to JavaScript.
JavaScript uses `prototypes` where many other object-oriented languages use classes for inheritance.
It is possible to simulate many class-based features with prototypes in JavaScript.

Classes are in fact just functions in JavaScript.

Classses are syntactical sugar over JavaScript's existing prototype-based inheritance,
where you add methods and properties on a function’s prototype property to make those methods and
properties available to instances of that function.

We have always been able to create JavaScript classes like this:

```
function Point (x, y) {
     this.x = y;
     this.y = y;
}

Person.prototype.move = function move (x, y) {
    this.x = x;
    this.y = y;
};
```

Person is a constructor function, and it’s also a class, in the JavaScript sense of the word “class. 

## Class Definition

ECMAScript 6 provides the class keyword and “compact method notation” as syntactic sugar for writing a
function and assigning methods to its prototype (there is a little more involved, but that isn’t relevant here). 

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
The body of a class is the part that is in curly brackets {}.
This is where you define class members, such as methods or constructors.

## Class Inheritance

The extends keyword is used in class declarations or class expressions to create a class with a child of another class.

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

A constructor can use the super keyword to call the constructor of a parent class.

## Static methods

The static keyword defines a static method for a class.
Static methods are called without instantiating their class and are also not callable when the class is instantiated.
Static methods are often used to create utility functions for an application.

```
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
```

```
const p1 = new Shape(5, 5);
const p2 = new Shape(10, 10);
console.log(Shape.distance(p1, p2));
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
