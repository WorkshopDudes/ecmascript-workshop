/*
    Task: 
    Store country and capitals as key-value pairs in a Map instead of an
    object. Use country as key, and capital as value. Then make sure 
    getCapitalStrings() still returns the same data.

    Expected output is an array of the following strings:
    [ 
        'The capital of Norway is Oslo',
        'The capital of Sweden is Stockholm',
        'The capital of Denmark is Copenhagen',
        'The capital of Iceland is Reykjavik',
        'The capital of Finland is Helsinki'
    ]
*/

var capitals = {
    Norway: 'Oslo',
    Sweden: 'Stockholm',
    Denmark: 'Copenhagen',
    Iceland: 'Reykjavik',
    Finland: 'Helsinki'
};

function getCapitalStrings() {
    return Object.keys(capitals).map(function (country) {
        return 'The capital of ' + country + ' is ' + capitals[country];
    });
}

module.exports = getCapitalStrings;
