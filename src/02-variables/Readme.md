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
