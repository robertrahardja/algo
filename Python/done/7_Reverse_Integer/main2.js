const main = (s) => {
  if (s === 0) {
    return 0;
  }

  //find if string is negative
  const isNegative = s > 0;

  let numStr = Math.abs(s).split("").reverse().join("");

  const result = isNegative ? -Number(numStr) : Number(numStr);

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(2, 31)) {
    return 0;
  }

  return result;
};

// Test cases
console.log(main(123)); // Output: 321
console.log(main(-123)); // Output: -321
console.log(main(120)); // Output: 21
console.log(main(0)); // Output: 0
console.log(main(1534236469)); // Output: 0 (due to overflow)
