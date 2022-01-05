


function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
    return String.fromCharCode(str[0].charCodeAt()-32) + str.slice(1);
}

let string = 'hello, world!';
let string1 = 'this is an another test!';
let string2 = 'and yet another one!';


console.log(capitalize(string))
if ( capitalize(string) !== 'Hello, world!' ) {
    throw new Error("Hello, doesn't work!")
}

console.log(capitalize(string1))
if ( capitalize(string1) !== 'This is an another test!' ) {
    throw new Error("Hello, doesn't work!")
}

console.log(capitalize(string2))
if ( capitalize(string2) !== 'And yet another one!' ) {
    throw new Error("Hello, doesn't work!")
}