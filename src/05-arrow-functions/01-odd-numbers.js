/*
    Goal: Return an array containing only the odd numbers of the incoming array.
    Example input: [1,2,3,4,5,6,7,8]
    Hint: Check out the ES6 filter method after implementing the arrow function.
*/
var getOddNumbers = function(numbers) {
    var oddNumbers = [];
    numbers.forEach(function (number) {
        if (number % 2 === 1) {
            oddNumbers.push(number);
        }
    });
    return oddNumbers;
};

module.exports = getOddNumbers;
