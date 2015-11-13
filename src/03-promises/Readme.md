# Promises
Promises are a pattern that helps with one particular kind of asynchronous programming: a function (or method) that returns its result asynchronously. To implement such a function, you return a Promise, an object that is a placeholder for the result. The caller of the function registers callbacks with the Promise to be notified once the result has been computed. The function sends the result via the Promise.

The de-facto standard for JavaScript Promises is called Promises/A+ [1]. The ECMAScript 6 Promise API follows that standard.

## An example
A gentle example, to give you a feeling of what working with Promises will be like.

With Node.js-style callbacks, reading a file asynchronously looks like this:
```
fs.readFile('config.json',
    function (error, text) {
        if (error) {
            console.error('Error while reading config file');
        } else {
            try {
                let obj = JSON.parse(text);
                console.log(JSON.stringify(obj, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
```

With Promises, the same functionality is implemented like this:

```
readFilePromisified('config.json')
.then(function (text) { // (A)
    let obj = JSON.parse(text);
    console.log(JSON.stringify(obj, null, 4));
})
.catch(function (reason) { // (B)
    // File read error or JSON SyntaxError
    console.error('An error occurred', reason);
});
```

There are still callbacks, but they are provided via methods that are invoked on the result (then() and catch()). The error callback in line B is convenient in two ways: First, it’s a single style of handling errors (versus if (error) and try-catch in the previous example). Second, you can handle the errors of both readFilePromisified() and the callback in line A from a single location.
