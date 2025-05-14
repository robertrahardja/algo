// random.js
// Math.random(x) returns the result of the random operation
console.log("Math.random(2) =", Math.random(2));
console.log("Math.random(10) =", Math.random(10));


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log("getRandomInt(3) =", getRandomInt(3));
// Expected output: getRandomInt(3) = 0, 1 or 2

console.log("getRandomInt(1) =", getRandomInt(1));
// Expected output: getRandomInt(1) = 0

console.log("Math.random() =", Math.random());

// Math.random() generates a random floating-point number between 
// 0 (inclusive) and 1 (exclusive).
// For example, it might return 0.7392.
//
// Multiplying by 10 (Math.random() * 10)
// scales this range to between 0 (inclusive) and 10 (exclusive).
// Our example would become 7.392.
//
//Math.floor() then rounds down to the nearest integer, removing the decimal part.
//This gives us an integer from 0 to 9. Our example would become 7.
console.log("Math.floor(Math.random() * 10)) =", Math.floor(Math.random() * 10))

// Generates random integers from 0 to 16 (17 possible values)
// The possible outputs are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
//
// The key difference is the multiplier:
//
// When you multiply Math.random() by 10, you get values in the range [0, 9.999...]
// When you multiply Math.random() by 17, you get values in the range [0, 16.999...]
console.log("Math.floor(Math.random() * 17)) =", Math.floor(Math.random() * 17))
