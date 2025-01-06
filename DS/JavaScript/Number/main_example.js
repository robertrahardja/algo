// Number operations and properties
console.log('Number constants:');
console.log('MAX_VALUE:', Number.MAX_VALUE);
console.log('MIN_VALUE:', Number.MIN_VALUE);
console.log('EPSILON:', Number.EPSILON);
console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);

// Number methods
const num = 123.456;
console.log('Number methods:');
console.log('toFixed:', num.toFixed(2));
console.log('toPrecision:', num.toPrecision(4));
console.log('toString:', num.toString(16)); // hexadecimal

// Parsing
console.log('Parsing:');
console.log('parseInt:', parseInt('123', 10));
console.log('parseFloat:', parseFloat('123.456'));

// Special values
console.log('Special values:');
console.log('NaN:', Number.NaN);
console.log('Infinity:', Number.POSITIVE_INFINITY);
console.log('-Infinity:', Number.NEGATIVE_INFINITY);
