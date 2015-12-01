import ColorPoint from '../../src/01-classes/solutions/class-inheritance';
import PointCloud from '../../src/09-iterators/encapsulating-collections';

describe('09-iterators - encapsulating collections', () => {
    it('the iterator works', () => {
        var list = [new ColorPoint(1, 2, 'red'), new ColorPoint(1, 2, 'green')];
        let pointCloud = new PointCloud(list);
        let result = [];
        for (let item of pointCloud) {
            result.push(item.color);
        }
        expect(result[0]).to.equal('red');
        expect(result[1]).to.equal('green');
        expect(result.length).to.equal(2);
    });
});
