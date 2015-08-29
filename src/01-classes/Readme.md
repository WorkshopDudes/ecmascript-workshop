## Code task 3 - create class 

Create a class equal to the code:

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