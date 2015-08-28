import Point from '../../src/01-classes/Point';

describe('ListItem', () => {

    const x = 1;
    const y = 12;

    var component;

    beforeEach(() => {
        component = new Point(x, y);
    });

    it('should print', () => {
        expect(component.toString()).to.equal('1 12');
    });

});