/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || !(classFunction instanceof Function))
        return false;
    return Object(obj) instanceof classFunction;

};

/**
 *
 */
checkIfInstanceOf(new Date(), Date); // true