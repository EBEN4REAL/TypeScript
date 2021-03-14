"use strict";
var userInput;
var userNames;
userInput = 5;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured', 500);
