const union = require('../union');

describe(union, () => {
    descirbe('should handle primitive values', () => {
        test('should return an array of unique objects from two arrays of objects', () => {
            const array1 = [1, 2, 3];
            const array2 = [2, 3, 4];
            const expected = [1, 2, 3, 4];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });
        test('should return an array of unique objects from two arrays of objects', () => {
            const array1 = ['a'];
            const array2 = ['b'];
            const expected = ['a', 'b'];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });
        test('should return an array of unique objects from two arrays of objects', () => {
            const array1 = [1];
            const array2 = ['1', 1];
            const expected = [1, '1'];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });
    });
    descirbe('should handle nested objects', () => {
        test('should return an array of unique objects from two arrays of objects', () => {
            const array1 = [{ a: { b: 10 } }];
            const array2 = [{ a: { b: 20 } }];
            const expected = [{ a: { b: 10 } }, { a: { b: 20 } }];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });
        test('should return an array of unique objects from two arrays of objects', () => {
            const array1 = [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2];
            const array2 = [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, '2'];
            const expected = [{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2, '2'];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });
        test('should return an array of unique objects from two arrays of objects', () => {
            const array1 = [{ a: { b: 10 } }, { a: { b: 20 } }, { c: 30 }, { c: null }];
            const array2 = [{ a: { b: 10 } }, { d: 4 }, { c: undefined }, { c: undefined }];
            const expected = [{ a: { b: 10 } }, { a: { b: 20 } }, { c: 30 }, { c: null }, { d: 4 }, { c: undefined }];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });

        test('should return an empty array when both input arrays are empty', () => {
            const array1 = [];
            const array2 = [];
            const expected = [];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });

        test('should return the first array when the second array is empty', () => {
            const array1 = [{ a: 1 }, { b: 2 }];
            const array2 = [];
            const expected = [{ a: 1 }, { b: 2 }];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });

        test('should return the second array when the first array is empty', () => {
            const array1 = [];
            const array2 = [{ a: 1 }, { b: 2 }];
            const expected = [{ a: 1 }, { b: 2 }];
            const result = union(array1, array2);
            expect(result).toEqual(expected);
        });
    });
});