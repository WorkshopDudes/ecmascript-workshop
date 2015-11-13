# Variables and scoping
Variables are so much more fun in ES6 - not!
But they are a lot nicer to hang out with than the old var chap of ES5!

## let and const
ES6 provides two new ways to declare variables: let and const. These new kids on the block basically replace, the ES5 way of declaring variables, using var. However var is still around.


Here is an example where the let declared variable tmp, only exists within the block starting in line A:

```
function switch(x, y) {
    if (x > y) { // (A)
        let tmp = x;
        x = y;
        y = tmp;
    }
    console.log(tmp===x); // ReferenceError: tmp is not defined
    return [x, y];
}
```

const is a read-only, initialize at once constant type. Here are a few examples of correct usage and wrong usage leading to SyntaxError and TypeError:

```
const foo;
    // SyntaxError: missing = in const declaration

const bar = 123;
bar = 456;
    // TypeError: `bar` is read-only
```

##Code task 1 - using constants
Rewrite this ECMAScript 5 code in ES6:

//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
```
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
PI > 3.0;
```

##Code task 2 - block scoped variables
Transform this ECMAScript 5 code into ES6:
```
var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
for (i = 0; i < b.length; i++)
    y = b[i];
    …
}

var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
```
