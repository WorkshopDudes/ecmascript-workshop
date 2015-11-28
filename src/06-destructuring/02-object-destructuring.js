/*
    Goal: Return a string with the title, firstname and lastname of the given person.
    Hint: You might also want to use template strings as demonstrated in 4.
*/
var getFullNameWithTitle = function(person) {
    var firstName = person.firstName;
    var lastName = person.lastName;
    var title = person.title;
    return title + '. ' + firstName + ' ' + lastName;
};

module.exports = getFullNameWithTitle;
