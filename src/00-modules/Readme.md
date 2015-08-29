# Modules

ECMAScript 6 have built-in support for modules (no more global namespace pollution).

We'll take a look at the various forms of defining and importing modules.

In ECMAScript 6, modules are stored in files. 

There is exactly one module per file and one file per module. 

By default anything you declare in a file in a ES6 project is not available outside that file. 

## Named export/import

There can be multiple named exports:

```
export var myVar1 = ...;
export let myVar2 = ...;
export const MY_CONST = ...;
export function myFunc() {}
export class MyClass {}
```

You can list everything you want to export at the end of the module 
(which is once again similar in style to the revealing module pattern):

```
const MY_CONST = ...;
function myFunc() {}
export { MY_CONST, myFunc };
```

You can also export things under different names:

```
export { MY_CONST as THE_CONST, myFunc as theFunc };
```

```
import { myFunc, myVar1 } from 'src/mylib';
import { myFunc as awesomeFunc, myVar1 } from 'src/mylib';
```

You can also import the complete module (using a wildcard):

```
import * as lib from 'src/mylib';
console.log(lib.square(11));
console.log(lib.diag(4, 3));
```

## Default export/import

The “operand” of a default export is an expression 
(including function expressions and class expressions). 
There can be a single default export. 
Examples:

```
export default 123;
export default function (x) {
    return x
};
export default x => x;
export default class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
```

How to import default:

```
import theDefault from 'src/mylib';
import theDefault, { named1, named2 } from 'src/mylib';
```

