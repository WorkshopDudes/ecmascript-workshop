# Generators

Ecmascript has been inspired by e.g. Python and introduced generators in ES6. 

## Generator

In JavaScript a generator is recognized by either: ```function*```, ```yield``` or ```yield*``` 
keywords/syntax. This indicates that the function behaves differently compared 
to a normal function, and needs to be treated that way. In fact, it behaves
more closely to an iterator; a generator is in fact a type of iterator.

## Gang of Three

There are 3 types of generators, namely: Iterators, Observers and Co-routines. I will describe them all below.

### Iterators

* They produce data: Syntax: ```yield data;```
* Works as an iterable, and can be used as an iterable in for-loops.
* No initialization

#### Examples:

```
var help = function* helpiterable() {
	yield 100;
}

function* myiterable() {
	while(true) {	
		yield 1;
		yield 2;
		for(var i=0;i<10;i++) {
			yield i*2;
		}
		yield* [1,2,3];
		yield* help();
		yield; // yield undefined;
	}
	return 0;
	// if return is not added, then it is implicit as return undefined;
}

```

### Observers
 
* They consume data: Syntax: ```var data = yield;```
* They can be an expression: ```var data = (yield)++;```
* Requires initialization: ```myObserver.next();```, to start the observer.
* Thus as an observer, a generator pauses until it receives input.
* The initialization can e.g. be wrapped inside a wrapper couroutine to immediately make it ready for use.
* *Study* and test to see when and how the yield is invokes, when the generator is paused and continues etc.

#### Examples

```
function* myobserver() {
	console.log(yield);
}

var miobserver = myobserver();
miobserver.next(); // initialize
miobserver.next("test"); // writes "test" to console
```


### Co-routines

* Both produces AND consumes data.
* Only use when absolutely needed as it makes the code more complex.

#### Examples

```
function* mycoroutine() {
	yield 1; // A
	console.log(yield); // B
	console.log(yield); // C
}

var micoroutine = mycoroutine();
var i = micoroutine.next(); // initialize // A, and pauses at A
micoroutine.next(); // goes to B, and pauses, waits for data
micoroutine.next("test"); // writes "test" to console and continues until next yield, pauses // B->C
micoroutine.next("test2"); // writes "test" to console goes to invisible return // B->C
console.log(micoroutine.next()); // returns "undefined" from return undefined; exits generator
```


A generator can keep the state of where we are in an iteration, and provide us the next
value whenever we need it (lazy evaluation, memory efficient). And if we do not know
how many values we actually want, maybe we only want the first 10 values from 0 to infinity,
then it is nice to only calculate them when we need them instead of waiting forever for
the numbers from 0 to infinity to be calculated.

We can of course call a function inside the for-loop, but then we are mixing the generator/producer
with the consumer, instead of separating them, as we should.


### Usage

* As iterator (iterator)
* Save memory by finishing one item at a time, instead of whole collection in memory (iterator)
* Instead of for-loop that returns all items at the end, can return one by one, and work on. (iterator)
* Less latency to show results (iterator, observer)
* Lazy evaluation (iterator, observer)
* Avoid callback-hell: The fact that generators-as-observers pause while they wait for input makes them perfect for on-demand processing of data that is received asynchronously.
* Chain functions UNIX way: chain them after each other, next(val) -> yield (val) between each other (think pipe). First function only sends, last func only receives.


### Understanding yield

* A generator is suspended/paused when it encounters ```yield```
* To resume we have to send call next() or next(data), depending on usage.
* When yield returns a value, no initialization is needed as it encounters yield, and yields value (and pauses immediately).
* When yield is an operand and accepts a value, initialization is needed as the first next() only executes until the yield.
* The function continues from exactly where it paused, and NOT at the start of the generator.
* next() will resume execution until yield, return or throw is encountered.
* The generator also starts by being initially suspended/paused at the start of its body.

#### Example
```
function* producer() {
        console.log('1');
        yield; // (A)
        console.log('2'); // (B)
    }
let myProducer = producer(); // nothing happens, generator object is returned
myProducer.next(); // will pause on yield on (A)
myProducer.next(); // will continue, and execute (B). Generator is done.
```

### Tips

* We often make loops inside the generator to continue infinitely.
* No return, means that it is implicit and ```return undefined```
* can also throw inside a generator to stop execution
* ```Return value``` is ignored when used as an iterator, because it is set as done.
* The iterators return an object with properties *value* and *done* (indicates if generator is done).
* You can call other generators or itself recursively with yield*
* Not possible to yield inside a callback inside a generator...


## More Resources

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) Look for: iterator, generator, function*, yield, yield*
[A thorough guide to generators](http://www.2ality.com/2015/03/es6-generators.html)
[Another guide to JS generators](http://gajus.com/blog/2/the-definitive-guide-to-the-javascript-generators)
[Yet another guide to JS generators](http://tobyho.com/2013/06/16/what-are-generators/)

