exports.min = function min(array) {
    if (array === undefined) return 0;
    return array.length > 1 ? array.sort((a, b) => a - b)[0] : 0;
};

exports.max = function max(array) {
    if (array === undefined) return 0;
    return array.length > 1 ? array.sort((a, b) => b - a)[0] : 0;
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    const sum = array.reduce((acc, currentValue) => (acc += currentValue), 0);
    return (sum / array.length).toFixed(2);
};
