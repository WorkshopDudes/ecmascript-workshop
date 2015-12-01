"use strict";

function *producer() {
	var i = 1;
	while (i <= 100) {
		yield i;
		i++;
	}
}

function *consumer() {
	while(true) {
		var i = yield;
		console.log(i.value);
	}
}

function run() {
	var prod = producer();
	var cons = consumer();
	cons.next();
	var x = 1;
	while (x<=100) {
		var i = prod.next();
		cons.next(i);
		x++;
	}
}

module.exports = { 
    producer: producer,
    consumer: consumer,
    run: run
};
