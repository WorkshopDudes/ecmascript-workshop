# Modules

ECMAScript 6 have built-in support for modules (no more global namespace pollution).

We'll take a look at the various forms of defining and importing modules.

##  Export/Import modules 

### Export Syntax

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
``

### Import Syntax

```
import { myFunc, myVar1 } from 'src/mylib';
import { myFunc as awesomeFunc, myVar1 } from 'src/mylib';
```

## Default

The “operand” of a default export is an expression 
(including function expressions and class expressions). Examples:

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

## Wildcard

Importing the module as an object (with one property per named export):
```
import * as mylib from 'src/mylib';
```


