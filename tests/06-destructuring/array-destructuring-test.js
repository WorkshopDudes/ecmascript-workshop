import concatenateFirstAndThirdElement from '../../src/06-destructuring/01-array-destructuring';

describe('06 - array destructuring - return a concatenated string containg the first and third element in the provided list', () => {
    it('returns a string containing ECMAScript 6', () => {
        expect(concatenateFirstAndThirdElement(['ECMAScript', '5', '6'])).to.equal('ECMAScript 6');
    });
    it('returns a string containing Everything I ever wanted.', () => {
        expect(concatenateFirstAndThirdElement(['Everything I', 'never wanted', 'ever wanted', 'lol'])).to.equal('Everything I ever wanted');
    });
});
