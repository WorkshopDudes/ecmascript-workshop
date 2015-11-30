/*
    TASK
    ----

    In ES5 we often use objects to store key-value pairs, like the carMap
    object below. In ES6 we can use Map instead. Rewrite the carMap object to
    be a Map, and modify the functions so that it works with the Map data 
    structure.
*/

var carMap = {
    'Toyota': ['Avensis', 'Auris', 'Yaris'],
    'Opel': ['Astra', 'Vectra'],
    'Mercedes-Benz': ['A-Klasse', 'B-Klasse', 'C-Klasse']
};

function getModels(manufacturer) {
    return carMap[manufacturer];
}

function getNumberOfManufacturers() {
    return Object.keys(carMap).length;
}

function getAllModels() {
    var models = [];
    Object.keys(carMap).forEach(function (manufacturer) {
        models = models.concat(carMap[manufacturer]);
    });
    return models;
}

module.exports = { 
    getModels: getModels,
    getNumberOfManufacturers: getNumberOfManufacturers,
    getAllModels: getAllModels
};
