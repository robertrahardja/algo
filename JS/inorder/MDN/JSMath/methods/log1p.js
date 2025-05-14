// log1p.js
// Math.log1p(x) returns the result of the log1p operation
//The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument. 
console.log("Math.log1p(2) =", Math.log1p(2));
console.log("Math.log1p(10) =", Math.log1p(10));
console.log("Math.log1p(1) =", Math.log1p(1));
// Expected output: Math.log1p(1) = 0.6931471805599453

console.log("Math.log1p(0) =", Math.log1p(0));
// Expected output: Math.log1p(0) = 0

console.log("Math.log1p(-1) =", Math.log1p(-1));
// Expected output: Math.log1p(-1) = -Infinity

console.log("Math.log1p(-2) =", Math.log1p(-2));
// Expected output: Math.log1p(-2) = NaN
