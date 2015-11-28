import getFullNameWithTitle from '../../src/06-destructuring/02-object-destructuring';

describe('06 - Object destructuring - return a string of a given persons full name and title', () => {
    it('returns a string containing Mr. George Pennybottom', () => {
        expect(getFullNameWithTitle({firstName: 'George', lastName: 'Pennybottom', title: 'Mr'}))
        .to.equal('Mr. George Pennybottom');
    });
    it('returns a string containing Ms. Mary Poppins', () => {
        expect(getFullNameWithTitle({firstName: 'Mary', lastName: 'Poppins', title: 'Ms'}))
        .to.equal('Ms. Mary Poppins');
    });
});
