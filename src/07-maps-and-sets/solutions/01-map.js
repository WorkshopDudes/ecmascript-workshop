var carMap = new Map();
carMap.set('Toyota', ['Avensis', 'Auris', 'Yaris']);
carMap.set('Opel', ['Astra', 'Vectra']);
carMap.set('Mercedes-Benz', ['A-Klasse', 'B-Klasse', 'C-Klasse']);

function getModels(manufacturer) {
    return carMap.get(manufacturer);
}

function getNumberOfManufacturers() {
    return carMap.size;
}

function getAllModels() {
    var models = [];
    for (let manufacturer of carMap.keys()) {
        models = models.concat(carMap.get(manufacturer));
    }
    return models;
}

module.exports = { 
    getModels: getModels,
    getNumberOfManufacturers: getNumberOfManufacturers,
    getAllModels: getAllModels
};
