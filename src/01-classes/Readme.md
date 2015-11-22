# Classes

## Prerequisite: Understanding JavaScript Objects

Almost everything in JavaScript are objects (including functions and arrays), except for primitives:
* numbers
* boolean
* strings
* null
* undefined

An object is a collection of properties, 
and a property is an association between a name (or key) and a value. 
A property's value can be a function, in which case the property is known as a method. 

The easiest way to create an object in JavaScript is like this:

```
let myObject = {
  'key1': "Awesome",
  'key2': "Object"
}
```

Or:

```
var myObject = Object.create(new Object());
myObject.key1 = "Awesome";
myObject.key2 = "Object";
```

Or:

```
function MyObject(value1, value2) {
  this.key1 = value1;
  this.key2 = value2;
}
var myObject = new MyObject("Awesome", "Object");
```

Here 'key1' and 'key2' are properties of the object. 

To access a property of an object, we use `object.property`, for example:

```
console.log(myObject.key1); 
```

You can also create properties on an object, like this:

```
myObject["property"] = "Value";
```

That syntax, by the way, is functionally equivalent to this syntax:
```
myObject.property = "Value";
```

The object does also have some inherited methods since 
almost all objects eventually inherit from `Object` in JavaScript and so they inherit its methods.

To invoke a method of an object, we use object.method(), for example :

```
myObject.toString();
```

To find out if a property exists on an object (either as an inherited or an own property), 
you use the in operator:

```
console.log('key1' in myObject); // true
```

## Object-oriented programming in ECMAScript 5

It’s important to understand that while JavaScript is an object-oriented language,
it is prototype-based and does not implement a traditional class system. 

In ECMAScript 5 we have always been able to create JavaScript classes like this:

```
// Constructor
function MyClass (id) {
     // Instance properties can be set on each instance of the class
     this.id = id;
}

// A static method. This method only exists on the class and doesn't exist on child objects
MyClass.myStaticMethod = function() { 
	console.log('hello'); 
};

// Prototype properties are shared across all instances of the class
MyClass.prototype.type = "Awesome object";
MyClass.prototype.myMethod = function () {};

// Create a new instance (object) with the MyClass() constructor, 
// thus allowing this new instance to inherit MyClass's properties and methods.​
var instance1 = new MyClass(1);
var instance2 = new MyClass(2);
newObj1.myMethod();

MyClass.myStaticMethod(); 
```

Now both instances have their own unique id, but they are both of type "Awesome object" and both can call `myMethod()`.

By the way, prototypes having data properties is generally considered an anti-pattern.

The constructor property of the instance is set to MyClass:

```
newObj1.constructor == MyClass  // true
newObj1 instanceof MyClass      // true
```

Objects have inherited properties and own properties:
```
newObj1.hasOwnProperty('type') // false
newObj1.hasOwnProperty('id') // true
```
The own properties are properties that were defined on the instance, 
while the inherited properties were inherited from the Function’s Prototype object.

Inline-style: 
![alt text](https://github.com/BouvetNord/ecmascript-workshop/tree/master/src/01-classes/MyClass.png "MyClass overview")

*** Why is MyClass a function, shouldn’t it be a class?

The new keyword allows us to use a function as a constructor.
The `instance1` and `instance2` is created and assigned to this for the duration of the call to the MyClass function. 
MyClass is a constructor function, and it’s also a class, in the JavaScript sense of the word “class". 
A constructor function, combined with the new keyword, 
work together to create new objects in much in the same way classes do in other OO languages.

*** Prototype

A prototype is an object from which other objects inherit properties.

When you define a function within JavaScript, 
it comes with a few pre-defined properties and one of these is the illusive prototype:
* The prototype property is initially an empty object.
* The prototype property is used primarily for inheritance. 
When an object is constructed, it inherits all of the properties of its constructor’s prototype.
* You can add methods and properties on a function’s prototype property 
to make those methods and properties available to instances of that function.
The implications for performance and maintenance are obvious and significant.

### Subclasses

A class can have subclasses that can inherit all or some of the characteristics of the class.

```
// Child class constructor
function MySubClass() {
  MyClass.call(this);
}

// Inherit from the parent class
MySubClass.prototype = Object.create(MyClass.prototype);
MySubClass.prototype.constructor = MySubClass;

// Child class method
MySubClass.prototype.myMethod = function() {
  MyClass.prototype.method.call(this);
}

```
A class can have subclasses that can inherit all or some of the characteristics of the class.

This is not very easy to read!

## Object-oriented programming in ECMAScript 6

JavaScript classes (ECMAScript 6) provide a much simpler and clearer syntax to create objects and deal with inheritance.
The class syntax in ECMAScript 6 is not introducing a new object-oriented 
inheritance model to JavaScript. Under the hood, ECMAScript 6 classes are not something that is radically new. 
They mainly provide more convenient syntax to create old-school constructor functions. 

### Class Definition

One way to define a class in ECMAScript 6 is using a class declaration.
ECMAScript 6 provides the `class` keyword and `compact method notation` as syntactic sugar for writing a
function and assigning methods to its prototype (there is a little more involved, but that isn’t relevant here). 
The constructor method is a special method for creating and initializing an object created with a class. 
There can only be one special method with the name "constructor" in a class. 
A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

```
class MyClass {
    constructor (id) {
        this.id = id
    }
    myMethod () {}
}
let instance = new MyClass(1);
instance instanceof MyClass; // true
typeof MyClass // 'function' (the result of a class definition is a function)
```

The body of a class is the part that is in curly brackets {}.
This is where you define class members, such as methods or constructors.

### Subclasses

The extends keyword is used in class declarations or class expressions to create a class with a child of another class.

```
class MySubClass extends MyClass {
    constructor (id) {
        super(id)
    }
}
```

A constructor can use the super keyword to call the constructor of a parent class.

## Static methods

The static keyword defines a static method for a class.
Static methods are called without instantiating their class and are also not callable when the class is instantiated.
Static methods are often used to create utility functions for an application.

```
class MyClass {
    constructor (id, x, y) {
        this.id = id
    }
    static staticMethod() {}
}
console.log(MyClass.staticMethod());
```

## Getters and setters

class MyClass {
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: '+value);
    }
}

You use getters and setters as follows:
```
> let instance = new MyClass();
> instance.prop = 123;
setter: 123
> instance.prop
'getter'
```

## Code task 3 - create class 

Create a class equal to the ECMAScript 5 code:

```
function Point(x,y) {
    this.x = x;
    this.y = y;
}

// Static method
Point.distance = function (a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx*dx + dy*dy);
};

Point.prototype.toString = function () {
    return this.x + ' ' + this.y;
};

module.exports = Point;
```

## Code task 4 - class inheritance

Extend the Point class from previous task 
so that it behaves equal to the ECMAScript 5 code below:


```
// Child class constructor
var ColorPoint = function (x, y, color) {
    Point.call(this, x, y);
    this.color = color;
};

// Inherit from the parent class
ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;

// Child class method
ColorPoint.prototype.getColor = function () {
    return this.color;
};
module.exports = ColorPoint;
```

# References

* http://www.objectplayground.com/
* http://blog.pluralsight.com/understanding-javascript-objects-2
* http://blog.pluralsight.com/understanding-javascript-prototypes
* http://aaditmshah.github.io/why-prototypal-inheritance-matters/
* https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword
* https://www.nczonline.net/blog/2012/10/16/does-javascript-need-classes
* http://exploringjs.com/es6/ch_classes.html