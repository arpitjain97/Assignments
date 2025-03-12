
/**
 * Creates an array of unique objects from two arrays of objects.
 * @param {Array} arr1 - The first array of objects.
 * @param {Array} arr2 - The second array of objects.
 * @returns {boolean} - True if the objects are deeply equal, false otherwise.
 */
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (obj1 === null || typeof obj1 !== "object" || obj2 === null || typeof obj2 !== "object") return false;
    let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}

/**
 * Adds unique objects from sourceArray to resultArray.
 * @param {Array} sourceArray - The array of objects to process.
 * @param {Array} resultArray - The array to store unique objects.
 */
const addUniqueObjects = (sourceArray, resultArray) => {
    sourceArray.forEach(obj => {
        if (!resultArray.some(item => deepEqual(item, obj))) {
            resultArray.push(obj);
        }
    });
}

/**
 * Creates an array of unique objects from two arrays of objects.
 * @param {Array} arr1 - The first array of objects.
 * @param {Array} arr2 - The second array of objects.
 * @returns {Array} - An array containing unique objects from both input arrays.
 */
const union = (arr1, arr2) => {
    const result = [];
    addUniqueObjects(arr1, result);
    addUniqueObjects(arr2, result);
    return result;
}

module.exports = union;