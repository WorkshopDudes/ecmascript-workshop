/*
    TASK
    ----
The current code loops through all values from 1 to 10 and adds the square of each value to a new array; all values being produced first,
then all values are consumed and printed one by one.

We want to print each value immediately after it has been produced, meaning the consumer should immediately consume and print a
number. There are probably more than one solution to this, but we are looking for a solution that uses yield twice, once to return value, and once to consume value.

The run method should still be used to transfer data from producer to consumer, and you may have to modify that one as well as a loop...
	
*/
"use strict";
function producer() {
	var i = 1;
	var mylist = [];
	while (i <= 10) {
		mylist.push(i);
		i++;
	}
	return mylist;
}
var newList = [];
function consumer(vals) {
	for(let i of vals) {
		newList.push(i*i);
	}
}

function run() {
	var mylist = producer();	
	consumer(mylist);
	return newList;
}

module.exports = {
	run: run
};
