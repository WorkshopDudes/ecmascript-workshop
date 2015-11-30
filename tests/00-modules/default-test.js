import math from '../../src/00-modules/default';

describe.skip('00-modules - export two functions by default', () => {
    const x = 2;
    const y = 10;

    it('sum method works', () => {
        expect(math.sum(x, y)).to.equal(12);
    });

    it('multiply method works', () => {
        expect(math.multiply(x, y)).to.equal(20);
    });
});
