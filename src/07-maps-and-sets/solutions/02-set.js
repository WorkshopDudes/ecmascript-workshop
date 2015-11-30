let PLAYERS = [
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
    return Array.from(new Set(PLAYERS));
}

module.exports = getUniquePlayers;
