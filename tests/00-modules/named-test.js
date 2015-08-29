import { sum, multiply } from '../../src/00-modules/named';

describe('00-modules - export two named functions', () => {
    const x = 2;
    const y = 10;
    
    it('sum works', () => {
        expect(sum(x,y)).to.equal(12);
    });

    it('multiply works', () => {
        expect(multiply(x,y)).to.equal(20);
    });
});
