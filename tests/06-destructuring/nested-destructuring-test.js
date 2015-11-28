import getFirstPersonAndCountryName from '../../src/06-destructuring/03-nested-destructuring';

let england = {
    name: "England",
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
    name: "USA",
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

describe('06 - Object destructuring - return a string of a given persons full name and title', () => {
    it('returns a string containing Mr. George Pennybottom', () => {
        expect(getFirstPersonAndCountryName(england))
        .to.equal('Mr. George Pennybottom comes from England');
    });
    it('returns a string containing Ms. Mary Poppins', () => {
        expect(getFirstPersonAndCountryName(usa))
        .to.equal('Ms. Mary Poppins comes from USA');
    });
});
