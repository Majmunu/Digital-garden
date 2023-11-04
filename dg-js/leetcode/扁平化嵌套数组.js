/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    while (n > 0 && arr.some(Array.isArray)) {
        arr = [].concat(...arr);
        n--;
    }
    return arr;
};