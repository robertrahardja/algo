// max.js
// Math.max(x) returns the result of the max operation
console.log("Math.max(2) =", Math.max(2));
console.log("Math.max(10) =", Math.max(10));

console.log("Math.max(1, 3, 2) =", Math.max(1, 3, 2));
// Expected output: Math.max(1, 3, 2) = 3

console.log("Math.max(-1, -3, -2) =", Math.max(-1, -3, -2));
// Expected output: Math.max(-1, -3, -2) = -1

const array1 = [1, 3, 2];
console.log("array1 =", array1);
console.log("Math.max(...[1, 3, 2]) =", Math.max(...array1));
// Expected output: Math.max(...[1, 3, 2]) = 3
