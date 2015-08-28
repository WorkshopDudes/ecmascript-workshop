import Point from '../../src/01-classes/Point';

describe('Point class', () => {

    const x = 1;
    const y = 12;

    var component;

    beforeEach(() => {
        component = new Point(x, y);
    });

    it('should print correctly', () => {
        expect(component.toString()).to.equal('1 12');
    });

});
