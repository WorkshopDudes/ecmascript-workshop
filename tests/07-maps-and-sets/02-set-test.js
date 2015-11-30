import getUniquePlayers from '../../src/07-maps-and-sets/02-set.js';

describe('07-maps-and-sets - set', () => {

    it('returns an array with unique players', () => {
        expect(getUniquePlayers()).to.eql([
            'Lloris', 
            'Walker', 
            'Vertonghen', 
            'Alderweireld', 
            'Rose', 
            'Dembele', 
            'Eriksen', 
            'Son', 
            'Dier', 
            'Mason', 
            'Kane'
        ]);
    });

});
