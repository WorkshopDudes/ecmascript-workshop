import { sum, multiply } from '../../src/00-modules/math';
import math from '../../src/00-modules/math';

describe('Math Module', () => {
    const x = 2;
    const y = 10;
    
    it('should sum correctly', () => {
        expect(sum(x,y)).to.equal(12);
    });

    it('should multiply correctly', () => {
        expect(multiply(x,y)).to.equal(20);
    });

    it('default export works correctly', () => {
        expect(math.sum(x,y)).to.equal(12);
        expect(math.multiply(x,y)).to.equal(20);
    });
});
