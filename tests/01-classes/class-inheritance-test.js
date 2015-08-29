import ColorPoint from '../../src/01-classes/class-inheritance';

describe.skip('01-classes - class inheritance', () => {
    const x = 2;
    const y = 10;
    const color = 'orange';

    it('color works', () => {
        let colorPoint = new ColorPoint(x, y, color);
        expect(colorPoint.getColor()).to.equal(color);
    });
});
