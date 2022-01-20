

let hey = Buffer.from("hey!")

console.log(hey.toString()) // hey!

console.log(hey[1])	// 101

hey[1] = 123

console.log(hey.toString())	// h{y!