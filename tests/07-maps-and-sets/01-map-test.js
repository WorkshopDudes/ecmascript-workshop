import { getModels, getNumberOfManufacturers, getAllModels } from '../../src/07-maps-and-sets/01-map.js';

describe('07-maps-and-sets - map', () => {

    describe('getModels', () => {

        it('returns Avensis, Auris, Yaris for Toyota', () => {
            expect(getModels('Toyota')).to.eql(['Avensis', 'Auris', 'Yaris']);
        });

        it('returns Astra, Vectra for Opel', () => {
            expect(getModels('Opel')).to.eql(['Astra', 'Vectra']);
        });

        it('returns A-Klasse, B-Klasse, C-Klasse for Mercedes-Benz', () => {
            expect(getModels('Mercedes-Benz')).to.eql(['A-Klasse', 'B-Klasse', 'C-Klasse']);
        });

    });

    describe('getNumberOfManufacturers', () => {
        
        it('returns 3', () => {
            expect(getNumberOfManufacturers()).to.equal(3);
        });
        
    });

    describe('getAllModels', () => {
        
        it('returns all car models', () => {
            expect(getAllModels()).to.eql([
                'Avensis', 
                'Auris', 
                'Yaris', 
                'Astra', 
                'Vectra',
                'A-Klasse', 
                'B-Klasse', 
                'C-Klasse'
            ]);
        });
        
    });
});
