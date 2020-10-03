exports.min = function min(array) {
    if (array === undefined) return 0;
    return array.length > 1 ? array.sort((a, b) => a - b)[0] : 0;
};

exports.max = function max(array) {
    if (array === undefined) return 0;
    return array.length > 1 ? array.sort((a, b) => b - a)[0] : 0;
};

exports.avg = function avg(array) {
    if (array === undefined) return 0;
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    if (array.length === 0) return 0;
    return (total / array.length).toFixed(2);
};
