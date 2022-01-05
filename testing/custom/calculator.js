


const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
}



if (calculator.add(121, 212) !== 333) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }


if (calculator.subtract(79, 2) !== 77) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }


if (calculator.divide(144, 2) !== 72) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }


if (calculator.multiply(32, 4) !== 128) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }