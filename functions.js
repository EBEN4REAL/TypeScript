"use strict";
var printResultz = function (num) {
    console.log('Result: ' + num);
};
var addAndHAndle = function (n1, n2, cb) {
    var result = n1 + n2;
    return cb(result);
};
var combineValues = function (n1, n2) {
    return n1 + n2;
};
console.log(combineValues(8, 8));
addAndHAndle(10, 20, function (result) {
    console.log(result);
});
// String
// Number
// Boolean
// Enums
// Objects
// Arrays
// Tupple
// Function types
