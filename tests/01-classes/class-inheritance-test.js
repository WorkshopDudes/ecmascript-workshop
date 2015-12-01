import ColorPoint from '../../src/01-classes/solutions/class-inheritance';

describe('01-classes - class inheritance', () => {
    const x = 2;
    const y = 10;
    const color = 'orange';

    it('instance properties are correct', () => {
        let point = new ColorPoint(x, y, color);
        expect(point.x).to.equal(x);
        expect(point.y).to.equal(y);
        expect(point.color).to.equal(color);
    });

    it('default parameters are correct', () => {
        let point = new ColorPoint(x, y);
        expect(point.color).to.equal('red');
    });

    it('toString method works (inherited)', () => {
        let colorPoint = new ColorPoint(x, y);
        expect(colorPoint.toString()).to.equal('2 10');
    });

    it('getColor method works', () => {
        let colorPoint = new ColorPoint(x, y, color);
        expect(colorPoint.getColor()).to.equal(color);
    });
});
