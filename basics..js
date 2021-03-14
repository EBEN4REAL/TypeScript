"use strict";
function add(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input')
    // }
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    return n1 + n2;
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(+num1, num2, printResult, resultPhrase);
