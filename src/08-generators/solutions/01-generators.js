'use strict';

function *producer() {
    var i = 1;
    while (i <= 10) {
        yield i;
        i++;
    }
}

var newList = [];
function *consumer() {
    while(true) {
        var i = yield;
        newList.push(i*i);
    }
}

function run() {
    var prod = producer();
    var cons = consumer();
    cons.next();
	
    for(let i of prod) {
        cons.next(i);
    }
    return newList;
}

module.exports = {
    run: run
};
