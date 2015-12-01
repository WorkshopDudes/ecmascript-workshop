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
    return Array.from(new Set(ACTORS));
}

module.exports = getUniqueActors;
