import ArrayIterator from './array-iterator';

class PointCloud {
    constructor(list) {
        this.collection = list;
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.collection);
    }
}
export default PointCloud;