// Boolean operations and conversions
const explicitTrue = new Boolean(true);
const explicitFalse = new Boolean(false);

// Truthy and falsy values
console.log('Boolean conversions:');
console.log('Empty string:', Boolean(''));        // false
console.log('Zero:', Boolean(0));                 // false
console.log('Null:', Boolean(null));             // false
console.log('Undefined:', Boolean(undefined));    // false
console.log('Non-empty string:', Boolean('text')); // true
console.log('Number:', Boolean(42));              // true
console.log('Object:', Boolean({}));              // true

// Logical operations
const and = true && false;
const or = true || false;
const not = !true;

console.log('Logical operations:', { and, or, not });
