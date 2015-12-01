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
    let set = Set();
    ACTORS.forEach(actor => {
        set.add(actor);
    });
    return Array.from(set);
}

/*
Alternatively, just:

function getUniqueActors() {
    return Array.from(new Set(ACTORS));
}
*/

module.exports = getUniqueActors;
