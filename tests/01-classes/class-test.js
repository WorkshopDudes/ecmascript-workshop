import Point from '../../src/01-classes/class';

describe('01-classes - create a class', () => {
    const x = 1;
    const y = 12;

    if (Point instanceof Function) {
        it('toString works', () => {
            let point = new Point(x, y);
            expect(point.toString()).to.equal('1 12');
        });
    }
});
