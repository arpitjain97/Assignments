// Description: This file is used to show how we can import union function and use.
const union = require('./union.js');
const array1 = [{a: {b:10}}, {a: {b: 20}}, {c: 30},{c:null}];
const array2 = [{a: {b:10}}, {d: 4},{c:undefined},{c:undefined}];
const uniqueArray = union(array1, array2);
console.log(uniqueArray) // [ { a: { b: 10 } }, { a: { b: 20 } }, { c: 30 }, { c: null }, { d: 4 }, { c: undefined } ]