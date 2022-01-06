


function analyzeArray(arr) {

    let average = arr.reduce( (init, n) => init + n ) / arr.length;
    let min = arr.reduce( (init, n) => init > n ? n : init , arr[0]);
    let max = arr.reduce( (init, n) => init < n ? n : init , arr[0]);

    return {average, min, max, length: arr.length}
}


if ( analyzeArray([3, 4, 5, 6, 7]).average !== 5 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }

if ( analyzeArray([3, 4, 6, 7]).average !== 5 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }



if ( analyzeArray([5, 6, 3, 4, 5, 6, 7]).min !== 3 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }

if ( analyzeArray([5, 6, 7]).min !== 5 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }



if ( analyzeArray([3, 4, 5]).max !== 5 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }

if ( analyzeArray([3, 4, 5, 6, 7]).max !== 7 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }




if ( analyzeArray([3, 4, 5, 6, 7]).length !== 5 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }

if ( analyzeArray([3, 4, 5, 6, 7, 7, 7, 7]).length !== 8 ) {
    throw new Error("STOPED!")
} else { console.log( 'success ❎') }
