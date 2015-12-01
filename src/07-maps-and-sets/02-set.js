/*
    TASK
    ----
    We have an array of actors. Unfortunately, the array contains some
    duplicates. We only want unique actors, so we have created a function
    getUniqueActors() that generates a new array that is duplicate-free.

    With the introduction of Set in ES6, this can be simplified quite a bit.
    Change the getUniqueActors() to use a Set in order to create a unique
    array of actors. Hint: You can use Array.from() to convert a Set to an 
    array.

    EXPECTED OUTPUT
    ---------------
    ['Connery', 'Travolta', 'Cage', 'Portman', 'Seagal', 'Bullock', 
     'Hanks', 'Depp', 'Pitt']

    BONUS QUESTION
    --------------
    Could we use a WeakSet instead of Set here?
*/

var ACTORS = [
    'Connery',
    'Travolta',
    'Travolta',
    'Cage',
    'Portman',
    'Portman',
    'Seagal',
    'Bullock',
    'Travolta',
    'Hanks',
    'Depp',
    'Pitt'
];

function getUniqueActors() {
    var uniqueActors = [];
    ACTORS.forEach(function (actor) {
        if (!arrayContains(uniqueActors, actor)) {
            uniqueActors.push(actor);
        }
    });
    return uniqueActors;
}

function arrayContains(array, item) {
    return array.some(function (entry) {
        return entry === item;
    });
}

module.exports = getUniqueActors;
