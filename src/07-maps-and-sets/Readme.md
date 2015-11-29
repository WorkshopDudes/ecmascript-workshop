# Maps and Sets

In ES6, data structures for maps and sets have been introduced. Instead of
having to implement or include custom map and set structures, you can now use
one of the built-in Map, Set, WeakMap, or WeakSet objects.

## Map

A Map is used to map unique keys to values. Most languages include this as part
of the standard library, but in JavaScript the most common practice has been to
use objects to get the same behavior:

```
var offices = {};
offices['North'] = 'Trondheim';
offices['East'] = 'Oslo';
offices['Rogaland'] = 'Stavanger';
Object.keys(offices).forEach(function (region) {
    console.log('The Bouvet ' + region + ' office is in ' + offices[region]);
});
console.log('There are ' + Object.keys(offices).length + ' offices');

// Output:
// The Bouvet North office is in Trondheim
// The Bouvet East office is in Oslo
// The Bouvet Rogaland office is in Stavanger
// There are 3 offices
```

There are some problems with this approach. F.ex, the keys of an object are
limited to data types that can be represented as strings, and there is no
efficient way of getting the size of an object.

With the introduction of Map, it is now easier to work with map data
structures. Any value type, including objects and functions can be used keys,
and you get a few handy ways of manipulating and querying the map, such as
```set()```, ```get()```, ```delete()```, and ```size```.

In ES6, the example above can now be written like this (also utilizing template
strings):

```
let offices = new Map();
offices.set('North', 'Trondheim')
       .set('East', 'Oslo')
       .set('Rogaland', 'Stavanger');
for (let region of offices) {
    console.log(`The Bouvet ${region} office is in ${offices.get(region)});
}
console.log(`There are ${offices.size} offices`);
```

Objects are still the best choice in a lot of cases, but the following are signs
that you should use Map instead of an object (ref.
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map): 
- Are keys usually unknown until run time, do you need to look them up dynamically?
- Do all values have the same type, and can be used interchangeably?
- Do you need keys that are not strings?
- Are key-value pairs often added or removed?
- Do you have an arbitrary (easily changing) amount of key-value pairs?
- Is the collection iterated?

## Set

Sets can be used to store values of any type, both primitive values and object
references. The values in a Set are unique (they can only occur once), and can
be iterated by insertion order. 

Similar to Map, a Set has some convenient ways of manipulating and querying the
collection, such as ```add()```, ```get()```, ```has()```, ```delete()```, and
```size```.

Example usage:

```
let fruitSet = new Set();
fruitSet.add('Apple');
fruitSet.add('Orange');
fruitSet.add('Pear');

console.log(fruitSet.size); // 3
console.log(fruitSet.has('Orange')); // true
fruitSet.add('Orange'); // has no effect, already exists

for (let fruit of fruitSet) {
    console.log(fruit);
}
// Output:
// Apple
// Orange
// Pear

fruitSet.delete('Apple');
console.log(fruitSet.size); // 2
```

## WeakMap

WeakMap is similar to Map, but in a WeakMap the keys are weakly held. This
means that if there is no longer a reference to the key, then the key and
corresponding value will be removed from the WeakMap by the garbage collector.

Another difference is that the keys of a WeakMap have to be objects. Primitive
key values are not allowed. Also, there is no way to get the list of keys or size
of a WeakMap. This is because the keys would depend on the state of garbage
collection, making it
[non-deterministic](https://en.wikipedia.org/wiki/Nondeterministic_algorithm).
Other than this, the WeakMap has ```set()```, ```get()```, ```has()```, and
```delete()``` methods, similar to the regular Map.

In most cases you probably want to use Map instead of WeakMap. The fact that
you cannot enumerate, get list of keys, or get the size of the map is a deal
breaker for a lot of use cases. However if you do not need these things, then
WeakMap could be the right choice.

One of the best use cases for WeakMaps is to store meta data about DOM
elements. Then you can use DOM elements as keys, and store the meta data as
values. When a DOM element is removed, the element and its meta data will
automatically be garbage collected without the need for any manual cleanup.

Example usage:

```
let map = new WeakMap();

let apple = { id: 1, name: 'Apple' };
map.set(apple, 3);
map.get(apple); // 3

map.set(123, 'some value');
// TypeError: Invalid value used as weak map key

map.set({ id: 2, name: 'Orange' }, 5);
// Will not be held in the map, as there is no other reference to the key
// object ```{ id: 2, name: 'Orange' }```

map.set(document.getElementById('example'), { clickCount: 4 });
// Will be held in the map until the element with id ```example``` is removed
// from DOM
```

## WeakSet

In contrast to Set, a WeakSet can only contain objects. Also, the objects in
the WeakSet collection are weakly held, meaning that they can be garbage
collected if there are no other references to them.

It is not possible to iterate or get the size of a WeakSet, making its use
cases a bit limited. If you have a WeakSet, the only query you can do is the
```has()``` method.

One use case could be tagging of DOM elements. Let us say you have a large HTML
form with a lot of input elements that can be added and removed dynamically.
You want to know if the user has modified (touched) the values of the input
elements or not. This could be implemented like the example below. If some
elements are removed from DOM, we do not want to keep the elements hanging
around in memory. When we use a WeakSet, the garbage collector can
automatically remove the elements from memory - given that there are no other
references to the elements.

```
let touchedElements = new WeakSet();

function addTouched(domElement) {
    touchedElements.add(domElement);
}

function hasBeenTouched(domElement) {
    return touchedElements.has(domElement);
}
});
```
