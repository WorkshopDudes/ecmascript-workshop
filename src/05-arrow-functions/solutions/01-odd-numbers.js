/*
    Goal: Return an array containing only the odd numbers of the incoming array.
    Example input: [1,2,3,4,5,6,7,8]
    Hint: Check out the ES6 filter method after implementing the arrow function.
*/
const getOddNumbers = function(numbersArray) {
    return numbersArray.filter(number => number % 2 === 1);
};
