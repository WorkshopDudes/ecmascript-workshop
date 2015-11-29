import Person from '../../src/05-arrow-functions/02-lexical-this';

describe('05 - arrow functions - person should age properly', () => {
    it('A person should age ten years', () => {
        let person = new Person(10);
        person.ageTenYears();
        expect(person.age).to.equal(20);
    });

});
