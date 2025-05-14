// log.js
// The Math.log() static method returns the natural logarithm (base e) of a number.
console.log("Math.log(2) =", Math.log(2));
console.log("Math.log(10) =", Math.log(10));
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log("getBaseLog(2, 8) =", getBaseLog(2, 8));
// Expected output: getBaseLog(2, 8) = 3

// 5 x 5 x 5 x 5 = 625
console.log("getBaseLog(5, 625) =", getBaseLog(5, 625));
// Expected output: getBaseLog(5, 625) = 4
