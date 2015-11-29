import getCapitalStrings from '../../src/07-maps-and-sets/01-map.js';

describe('07-maps-and-sets - map', () => {

    it('returns a string array with countries and capitals', () => {
        expect(getCapitalStrings()).to.eql([ 
            'The capital of Norway is Oslo',
            'The capital of Sweden is Stockholm',
            'The capital of Denmark is Copenhagen',
            'The capital of Iceland is Reykjavik',
            'The capital of Finland is Helsinki'
        ]);
    });

});
