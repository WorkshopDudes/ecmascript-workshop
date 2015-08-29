import Point from '../../src/01-classes/class';

describe('01-classes - create class', () => {

    const x = 1;
    const y = 12;

    var component;

    beforeEach(() => {
        component = new Point(x, y);
    });

    it('toString works', () => {
        expect(component.toString()).to.equal('1 12');
    });
});
