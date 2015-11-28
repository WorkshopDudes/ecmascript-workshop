import getFirstPersonAndCountryName from '../../src/06-destructuring/03-nested-destructuring';

let england = {
    name: 'England',
    inhabitants: [
        {
            title: 'Mr',
            firstName: 'George',
            lastName: 'Pennybottom'
        },
        {
            title: 'Mr',
            firstName: 'Willy',
            lastName: 'Wally'
        }
    ]
};

let usa = {
    name: 'USA',
    inhabitants: [
        {
            title: 'Ms',
            firstName: 'Mary',
            lastName: 'Poppins'
        },
        {
            title: 'Mrs',
            firstName: 'Lina',
            lastName: 'Ås'
        }
    ]
};

describe('06 - Nested destructuring - return a string of a given persons title, full name and country', () => {
    it('returns a string containing Mr. George Pennybottom comes from England', () => {
        expect(getFirstPersonAndCountryName(england))
        .to.equal('Mr. George Pennybottom comes from England');
    });
    it('returns a string containing Ms. Mary Poppins comes from USA', () => {
        expect(getFirstPersonAndCountryName(usa))
        .to.equal('Ms. Mary Poppins comes from USA');
    });
});
