// BigInt operations
const maxNumber = BigInt(Number.MAX_SAFE_INTEGER);
const bigNumber = 1234567890123456789012345n;

// Arithmetic operations
const sum = maxNumber + 1n;
const product = bigNumber * 2n;
const division = bigNumber / 3n;

console.log('Max safe integer:', maxNumber);
console.log('Big number:', bigNumber);
console.log('Operations:', { sum, product, division });

// Type conversion
console.log('String representation:', bigNumber.toString());
console.log('Number conversion (might lose precision):', Number(bigNumber));
