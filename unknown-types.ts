let userInput: unknown
let userNames: string

userInput = 5
userInput = 'Max'


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An Error occured', 500)