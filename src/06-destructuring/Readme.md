# Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.



## Array destructuring
```
let foo = ["one", "two", "three"];

// without destructuring
let one   = foo[0];
let two   = foo[1];
let three = foo[2];

// with destructuring
let [one, two, three] = foo;
```

## Object destructuring
```
let o = {p: 42, q: true};
let {p, q} = o;
```

It is also possible to give the new variable a new name by using:
```
let {p:age, q}
```

## Nested destructuring


```
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

let { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;
```

## What else?
It is also possible to:
* Swap variables: ```[a, b] = [b, a];```
* Ignore returned values: ```var [a, , b] = f();```
* Use destructuring in loops ``` for (var {name: n, family: { father: f } } of people) {...}```


## References
For more info and examples check out:
* [Destructuring assignment]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
