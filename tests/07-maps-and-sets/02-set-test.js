import getUniqueActors from '../../src/07-maps-and-sets/02-set.js';

describe('07-maps-and-sets - set', () => {

    it('returns an array with unique actors', () => {
        expect(getUniqueActors()).to.eql([
            'Connery', 
            'Travolta', 
            'Cage', 
            'Portman', 
            'Seagal', 
            'Bullock', 
            'Hanks', 
            'Depp', 
            'Pitt'
        ]);
    });

});
