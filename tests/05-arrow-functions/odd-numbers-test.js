import getOddNumbers from '../../src/05-arrow-functions/01-odd-numbers';

describe('05 - arrow functions - return array of odd numbers', () => {
    it('returns an array containing 1,2 and 3 when given an array containing 1,2,3,4 and 5', () => {
        let oddNumbers = getOddNumbers([1,2,3,4,5]);
        assert.deepEqual(oddNumbers, [1,3,5]);
    });
    it('returns an empty array when given an array containing 2,4 and 6', () => {
        let oddNumbers = getOddNumbers([2,4,6]);
        assert.deepEqual(oddNumbers, []);
    });
});
