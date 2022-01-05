


let string1 = 'hello, world';
let string2 = 'hello';
let string3 = 'world';

if ( reverse(string1) !== 'dlrow ,olleh' ) {
    throw new Error("hello, error 1")
}
if ( reverse(string2) !== 'olleh' ) {
    throw new Error("hello, error 2")
}
if ( reverse(string3) !== 'dlrow' ) {
    throw new Error("hello, error 3")
}