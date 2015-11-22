import Point from '../../src/01-classes/class';

describe('01-classes - create a class', () => {
    const x = 1;
    const y = 12;

    it('instance properties are correct', () => {
        let point = new Point(x, y);
        expect(point.x).to.equal(x);
        expect(point.y).to.equal(y);
    });

    it('distance method works (static)', () => {
        let a = new Point(x, y);
        let b = new Point(x, y);
        expect(Point.distance(a, b)).to.equal(0);
    });

    it('toString method works', () => {
        let point = new Point(x, y);
        expect(point.toString()).to.equal('1 12');
    });

});
