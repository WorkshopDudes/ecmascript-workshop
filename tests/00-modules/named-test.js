import { sum, multiply } from '../../src/00-modules/named';

describe('00-modules - export two named functions', () => {
    const x = 2;
    const y = 10;
    if (sum instanceof Function) {
        it('sum works', () => {
            expect(sum(x, y)).to.equal(12);
        });
    }
    if (multiply instanceof Function) {
        it('multiply works', () => {
            expect(multiply(x, y)).to.equal(20);
        });
    }
});
