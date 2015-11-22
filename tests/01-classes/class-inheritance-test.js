import ColorPoint from '../../src/01-classes/class-inheritance';

describe.skip('01-classes - class inheritance', () => {
    const x = 2;
    const y = 10;
    const color = 'orange';

    it('instance properties are correct', () => {
        let point = new ColorPoint(x, y);
        expect(point.x).to.equal(x);
        expect(point.y).to.equal(y);
        expect(point.color).to.equal(color);
    });

    it('toString method works (inherited)', () => {
        let colorPoint = new ColorPoint(x, y);
        expect(colorPoint.toString()).to.equal('2 10');
    });

    it('color method works', () => {
        let colorPoint = new ColorPoint(x, y, color);
        expect(colorPoint.getColor()).to.equal(color);
    });
});
