# Template strings

## Embedded expressions

With template strings, expressions can be embedded inside the string.

```
var version = 6;
console.log(`This is ECMAScript ${version}`);
```

## Multiline strings

Strings enclosed in backticks can include newline characters. Instead of
this:

```
var multiline = 'Thank you Mario!\nBut our princess is in another castle.';
```

You can now write:

```
var multiline = `Thank you Mario!
But our princess is in another castle.`;
```
