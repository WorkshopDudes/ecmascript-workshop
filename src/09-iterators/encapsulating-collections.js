function PointCloud(list) {
    this.collection = list;
}

PointCloud.prototype[Symbol.iterator] = function() {
    var index = 0;
    var array = this.collection;

    return {
        next: () => {
            var result = { value: undefined, done: true };
            if (index < array.length) {
                result.value = array[index++];
                result.done = false;
            }
            return result;
        }
    };
};

module.exports = PointCloud;