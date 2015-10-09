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

## Code task 1 - Variable substitution

Change the ```log``` method in ```variable-substitution.js``` to use embedded
expressions instead of concatenated strings.

## Code task 2 - Multiline strings

In the ```printLyrics``` method in ```multiline-strings.js```, remove all
string concatenations and ```\n``` characters, and use a multiline string with
embedded expressions instead.
