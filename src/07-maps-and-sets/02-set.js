/*
    TASK
    ----
    We have an array of players. Unfortunately, the array contains some
    duplicates. We only want unique players, so we have created a function
    getUniquePlayers() that generates a new array that is duplicate-free.

    With the introduction of Set in ES6, this can be simplified quite a bit.
    Change the getUniquePlayers() to use a Set in order to create a unique
    array of players.

    EXPECTED OUTPUT
    ---------------
    ['Lloris', 'Walker', 'Vertonghen', 'Alderweireld', 'Rose', 'Dembele', 
     'Eriksen', 'Son', 'Dier', 'Mason', 'Kane']

    BONUS QUESTION
    --------------
    Could we use a WeakSet instead of Set here?
*/

var PLAYERS = [
    'Lloris',
    'Walker',
    'Vertonghen',
    'Vertonghen',
    'Alderweireld',
    'Rose',
    'Dembele',
    'Dembele',
    'Eriksen',
    'Son',
    'Dier',
    'Dembele',
    'Mason',
    'Kane'
];

function getUniquePlayers() {
    var uniquePlayers = [];
    PLAYERS.forEach(function (player) {
        if (!arrayContains(uniquePlayers, player)) {
            uniquePlayers.push(player);
        }
    });
    return uniquePlayers;
}

function arrayContains(array, item) {
    return array.some(function (entry) {
        return entry === item;
    });
}

module.exports = getUniquePlayers;
