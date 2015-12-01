/*
    Goal: Return a string with the title, firstname and lastname of the given person.
    Hint: You might also want to use template strings as demonstrated in 4.
*/
let getFullNameWithTitle = function(person) {
    const {firstName, lastName, title} = person;
    return `${title}. ${firstName} ${lastName}`;
};

module.exports = getFullNameWithTitle;
