import getFullNameWithTitle from '../../src/06-destructuring/02-object-destructuring';

/*
    Goal: Return a string with the title, firstname and lastname of the second person given in the incoming persons list.
    Hint: You might also want to use template strings as demonstrated in 4.
    Example of input:
    var norway = {
        name: "Norway",
        inhabitants: [
            {
                title: 'Mr',
                firstName: 'Peder',
                lastName: 'Ås'
            },
            {
                title: 'Mrs',
                firstName: 'Lina',
                lastName: 'Ås'
            }
        ]
    };
*/
var getFirstPersonAndCountryName = function(country) {
    var firstPerson = country.inhabitants[0];
    var countryName = country.name;

    var fullNameWithTitle = getFullNameWithTitle(firstPerson);

    return fullNameWithTitle + ' comes from ' + countryName;
};

module.exports = getFirstPersonAndCountryName;
