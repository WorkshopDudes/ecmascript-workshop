# Maps and Sets

In ES6, data structures for maps and sets have been introduced. Instead of
having to implement your own map and set structures, you can now use one of
Map, Set, WeakMap, and WeakSet.

## Map

A Map is used to map unique keys to values. Most languages include this as part
of the standard library, but in JavaScript the most common practice has been to
objects to get the same behavior:

```
var offices = {};
offices['North'] = 'Trondheim';
offices['East'] = 'Oslo';
offices['Rogaland'] = 'Stavanger';
Object.keys(offices).forEach(function (region) {
    console.log('The Bouvet ' + region + ' office is in ' + offices[region]);
});
console.log('There are ' + Object.keys(offices).length + ' offices');
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

TODO

