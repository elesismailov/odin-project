

function reverse(str) {
    
    return str
        .split('')
        .reduce((init, ch) => ch + init)
}

let string1 = 'hello, world';
let string2 = 'hello';
let string3 = 'world';


if ( reverse(string1) !== 'dlrow ,olleh' ) {
    throw new Error("hello, error 1")
} else { console.log( 'success ❎') }


if ( reverse(string2) !== 'olleh' ) {
    throw new Error("hello, error 2")
} else { console.log( 'success ❎') }


if ( reverse(string3) !== 'dlrow' ) {
    throw new Error("hello, error 3")
} else { console.log( 'success ❎') }