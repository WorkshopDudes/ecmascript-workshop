import Point from '../../src/01-classes/class';

describe.skip('01-classes - create a class', () => {
    const x = 1;
    const y = 12;

    it('toString works', () => {
        let point = new Point(x, y);
        expect(point.toString()).to.equal('1 12');
    });
});
