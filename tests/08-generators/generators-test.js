import { run } from '../../src/08-generators/01-generators';

describe('08-generators - generator', () => {
    it('the list is correct', () => {

        var result = run();

        expect(result).to.eql([1,4,9,16,25,36,49,64,81,100]);
    });
});
