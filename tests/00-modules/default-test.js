import math from '../../src/00-modules/default';

describe('00-modules - export two functions by default', () => {
    const x = 2;
    const y = 10;

    it('sum works', () => {
        expect(math.sum(x, y)).to.equal(12);
    });

    it('multiply works', () => {
        expect(math.multiply(x, y)).to.equal(20);
    });
});
