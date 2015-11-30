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
    var allModels = [];
    for (let models of carMap.values()) {
        allModels.push(...models);
    }
    return allModels;
}

module.exports = { 
    getModels: getModels,
    getNumberOfManufacturers: getNumberOfManufacturers,
    getAllModels: getAllModels
};
