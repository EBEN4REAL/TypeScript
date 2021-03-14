
const  printResultz= (num: number): void => {
    console.log('Result: ' + num)
}
const  addAndHAndle = (n1: number, n2: number, cb: (num: number) => void)  => {
    const result = n1 + n2
    return cb(result)
}
type combineValuesType = (a: number, b: number) => number
let combineValues: combineValuesType =  (n1: number, n2: number): number => {
    return n1 + n2
}
console.log(combineValues(8, 8 ))

addAndHAndle(10, 20, (result) => {
    console.log(result)
})


// String
// Number
// Boolean
// Enums
// Objects
// Arrays
// Tupple
// Function types