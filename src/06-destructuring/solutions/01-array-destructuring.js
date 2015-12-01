/*
    Goal: Concatenate the first and third element of the incoming list (also add a white space in between)'.
    Hint: You might also want to use template strings as demonstrated in 4.
*/
let concatenateFirstAndThirdElement = function (elements) {
    let [first,,third] = elements;
    return first + ' ' + third;
};

module.exports = concatenateFirstAndThirdElement;
