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
    let uniquePlayers = new Set();
    PLAYERS.forEach(player => {
        uniquePlayers.add(player);
    });
    return Array.from(uniquePlayers);
}

module.exports = getUniquePlayers;
