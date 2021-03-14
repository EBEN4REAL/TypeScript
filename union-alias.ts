
type Combinable = string | number //Type ALias
type Conv = 'as-number' | 'as-text'

function combine(n1: Combinable, n2: Combinable , resConv: Conv) {
    let res
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2
    }else {
        res  = n1.toString() + n2.toString()
    }
    if(resConv === 'as-number') {
        return +res
    }else {
        return res.toString()
    }
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)


const combinedStringAges = combine('30', '26', 'as-number')

console.log(combine('Max', 'Anna', 'as-text'))