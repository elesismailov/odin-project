



function caesarCipher(str, dl) {

    let pr = '';
    str.split('').forEach(ch => {
        let code = ch.charCodeAt() + dl;
        if ( !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            if ( code > 93 ) {
                let dif = code - 122;
                code = 96 + dif;
            } else if ( code < 93 ) {
                let dif = code - 90;
                code = 64 + dif;
            }
        }
        pr += ( String.fromCharCode(code) )
    })
    
    return pr
}


if ( caesarCipher('hello', 1) !== 'ifmmp') {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }


if ( caesarCipher('bye', 3) !== 'ebh') {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }


if ( caesarCipher('WorLd', 1) !== 'XpsMe') {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }


if ( caesarCipher('bYe', 3) !== 'eBh') {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }
