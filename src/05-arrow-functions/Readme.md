# Arrow functions

An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value (does not bind its own this, arguments, super, or new.target). Arrow functions are always anonymous.

## Syntaxt
```
// Basic syntax:
(param1, param2, paramN) => { statements }
(param1, param2, paramN) => expression
   // equivalent to:  => { return expression; }

// Parentheses are optional when there's only one argument:
(singleParam) => { statements }
singleParam => { statements }

// A function with no arguments requires parentheses:
() => { statements }

// Advanced:
// Parenthesize the body to return an object literal expression:
params => ({foo: bar})
```

## Shorter functions

In some functional patterns, shorter functions are welcome. Compare:

```
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );
```

Another example:
```
function(x) { return x+1;}

x => x+1;
```

## Lexically binding this

Javascript has, like Java and Python, a lexical scope. Before "let", it also had function scope, which caused confusion because it uses curly braces indicating a block scope.

Lexical scoping means that the variables are defined by their position in the source code. When a variable needs to be resolved, Javascript starts at the innermost scope. If the variable is not found, the parent scope will be searched next. This is repeated until if finds the value.

Until arrow functions, every new function defined its own this value (a new object in case of a constructor, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.

A common thing that might cause unexpected behavior is when you use a function that is defined in another scope, combined with using this in the callback function.
One example is the setInterval function which is located on the global scope.

```
//Every function define its own this, but when a object method calls this
//the global this is used.
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}
var p = new Person();
```

In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.
```
function Person() {
  var self = this;
  // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
var p = new Person()
```
Hint: To demonstrate the difference, insert a console.log statement in the growUp function, and paste the code into you browser Javascript console.

In ECMAScript 6 this can be done using arrow functions like this:
```
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

Other ways of controlling the value of this is to use call(), apply(), or bind().

## References
* [Javascript scope]http://spin.atomicobject.com/2014/10/20/javascript-scope-closures/
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
