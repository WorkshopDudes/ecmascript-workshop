/*
    Goal: Concatenate the first and third element of the incoming list (also add a white space in between)'.
    Hint: You might also want to use template strings as demonstrated in 4.
*/
var concatenateFirstAndThirdElement = function (elements) {
    var first = elements[0];
    var third = elements[2];
    return first + ' ' + third;
};

module.exports = concatenateFirstAndThirdElement;
