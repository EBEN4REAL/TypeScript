function add(n1: number, n2: number, showResult: Boolean, phrase: string) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input')
    // }
    if(showResult) {
        console.log(phrase + n1 + n2)
    }
    return n1 + n2
}

let num1= 5
let num2 = 2.8
const printResult = true
const resultPhrase = 'Result is: '

const result = add(+num1, num2, printResult, resultPhrase)
