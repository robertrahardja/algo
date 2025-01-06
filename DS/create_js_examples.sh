#!/bin/bash

# Array Example
cat >JavaScript/Array/main_example.js <<'EOF'
// Array methods demonstration
const fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('grape');                    // Add to end
fruits.unshift('pear');                  // Add to beginning

// Removing elements
const lastFruit = fruits.pop();          // Remove from end
const firstFruit = fruits.shift();       // Remove from beginning

// Array methods
const slicedFruits = fruits.slice(1, 2); // Extract portion
fruits.splice(1, 0, 'kiwi');            // Insert at position
const fruitString = fruits.join(', ');   // Convert to string

console.log('Modified array:', fruits);
console.log('Joined string:', fruitString);
EOF

# BigInt Example
cat >JavaScript/BigInt/main_example.js <<'EOF'
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
EOF

# Boolean Example
cat >JavaScript/Boolean/main_example.js <<'EOF'
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
EOF

# Map Example
cat >JavaScript/Map/main_example.js <<'EOF'
// Map operations
const userMap = new Map();

// Adding entries
userMap.set('john', { age: 30, role: 'developer' });
userMap.set('alice', { age: 25, role: 'designer' });

// Getting values
const john = userMap.get('john');
const hasAlice = userMap.has('alice');

// Iteration
console.log('Map entries:');
for (const [key, value] of userMap) {
    console.log(`${key}: ${JSON.stringify(value)}`);
}

// Map operations
console.log('Map size:', userMap.size);
userMap.delete('alice');
console.log('After deletion size:', userMap.size);

// Converting to arrays
const keys = Array.from(userMap.keys());
const values = Array.from(userMap.values());
console.log('Keys:', keys);
console.log('Values:', values);
EOF

# Number Example
cat >JavaScript/Number/main_example.js <<'EOF'
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
EOF

# Object Example
cat >JavaScript/Object/main_example.js <<'EOF'
// Object creation and manipulation
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Boston',
        country: 'USA'
    }
};

// Object methods
console.log('Object keys:', Object.keys(person));
console.log('Object values:', Object.values(person));
console.log('Object entries:', Object.entries(person));

// Property descriptors
Object.defineProperty(person, 'id', {
    value: 12345,
    writable: false,
    enumerable: true,
    configurable: false
});

// Object spreading and merging
const personalInfo = { hobby: 'reading', pet: 'dog' };
const merged = { ...person, ...personalInfo };

// Object freezing and sealing
const frozen = Object.freeze({ x: 1, y: 2 });
const sealed = Object.seal({ a: 1, b: 2 });

console.log('Merged object:', merged);
console.log('Property descriptor:', Object.getOwnPropertyDescriptor(person, 'id'));
EOF

# Set Example
cat >JavaScript/Set/main_example.js <<'EOF'
// Set operations
const numbersSet = new Set([1, 2, 3, 3, 4, 4, 5]); // Duplicates are automatically removed

// Adding and removing elements
numbersSet.add(6);
numbersSet.delete(1);

// Set operations
console.log('Set size:', numbersSet.size);
console.log('Has 3:', numbersSet.has(3));
console.log('Has 1:', numbersSet.has(1));

// Converting to array
const numbersArray = Array.from(numbersSet);
console.log('As array:', numbersArray);

// Set operations with arrays
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

// Union
const union = new Set([...set1, ...set2]);

// Intersection
const intersection = new Set(
    [...set1].filter(x => set2.has(x))
);

// Difference
const difference = new Set(
    [...set1].filter(x => !set2.has(x))
);

console.log('Set operations:', {
    union: [...union],
    intersection: [...intersection],
    difference: [...difference]
});
EOF

# String Example
cat >JavaScript/String/main_example.js <<'EOF'
// String operations and methods
const str = 'Hello, World!';

// Basic properties
console.log('Length:', str.length);
console.log('Character at 1:', str.charAt(1));
console.log('Character code at 1:', str.charCodeAt(1));

// String methods
console.log('Uppercase:', str.toUpperCase());
console.log('Lowercase:', str.toLowerCase());
console.log('Substring:', str.substring(0, 5));
console.log('Slice:', str.slice(-6));
console.log('Split:', str.split(', '));

// Searching
console.log('Index of "World":', str.indexOf('World'));
console.log('Includes "Hello":', str.includes('Hello'));
console.log('Starts with "H":', str.startsWith('H'));
console.log('Ends with "!":', str.endsWith('!'));

// Template literals
const name = 'John';
const age = 30;
const template = `${name} is ${age} years old`;
console.log('Template literal:', template);

// String padding
console.log('Padded start:', str.padStart(20, '*'));
console.log('Padded end:', str.padEnd(20, '*'));
EOF

# Symbol Example
cat >JavaScript/Symbol/main_example.js <<'EOF'
// Symbol creation and usage
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description'); // Note: sym2 !== sym3

// Using symbols as object properties
const obj = {
    [sym1]: 'value1',
    [Symbol('key')]: 'value2'
};

// Symbol properties
console.log('Symbol description:', sym2.description);
console.log('Symbol toString:', sym2.toString());

// Well-known symbols
const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

// Symbol registry
const globalSym = Symbol.for('myGlobalSymbol');
const sameGlobalSym = Symbol.for('myGlobalSymbol');
console.log('Global symbols are the same:', globalSym === sameGlobalSym);

console.log('Symbol keys:', Object.getOwnPropertySymbols(obj));
console.log('Iterating custom iterable:', [...iterable]);
EOF

# TypedArray Example
cat >JavaScript/TypedArray/main_example.js <<'EOF'
// TypedArray demonstrations
const buffer = new ArrayBuffer(16);

// Creating different views of the same buffer
const int32View = new Int32Array(buffer);
const float64View = new Float64Array(buffer);
const uint8View = new Uint8Array(buffer);

// Setting values
int32View[0] = 42;
float64View[1] = 123.456;

// Different typed arrays
const int8Array = new Int8Array([1, 2, 3, 4]);
const uint16Array = new Uint16Array(5);
const float32Array = new Float32Array([1.1, 2.2, 3.3]);

// TypedArray methods
console.log('Int8Array:', int8Array);
console.log('Set value:', uint16Array.set([1, 2], 2));
console.log('Subarray:', float32Array.subarray(1, 2));

// Buffer information
console.log('Buffer byteLength:', buffer.byteLength);
console.log('Int32 byteLength:', int32View.byteLength);
console.log('Float64 byteLength:', float64View.byteLength);

// Converting to regular array
console.log('As array:', Array.from(int8Array));
EOF

# WeakMap Example
cat >JavaScript/WeakMap/main_example.js <<'EOF'
// WeakMap demonstration
let obj1 = { id: 1 };
let obj2 = { id: 2 };

const weakMap = new WeakMap();

// Setting entries
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

// Getting values
console.log('Value for obj1:', weakMap.get(obj1));
console.log('Has obj2:', weakMap.has(obj2));

// WeakMap keeps weak references
console.log('Before nullifying:', weakMap.has(obj1));
obj1 = null;
// After garbage collection, the entry for obj1 will be removed

// Practical use case: private data
const privateData = new WeakMap();

class PrivateClass {
    constructor() {
        privateData.set(this, {
            hidden: 'This is private data'
        });
    }

    getPrivateData() {
        return privateData.get(this).hidden;
    }
}

const instance = new PrivateClass();
console.log('Private data:', instance.getPrivateData());
EOF

# WeakSet Example
cat >JavaScript/WeakSet/main_example.js <<'EOF'
// WeakSet demonstration
let obj1 = { id: 1, name: 'Object 1' };
let obj2 = { id: 2, name: 'Object 2' };

const weakSet = new WeakSet();

// Adding objects
weakSet.add(obj1);
weakSet.add(obj2);

// Checking membership
console.log('Has obj1:', weakSet.has(obj1));
console.log('Has obj2:', weakSet.has(obj2));

// Practical use case: marking objects
const processedItems = new WeakSet();

function processObject(obj) {
    if (processedItems.has(obj)) {
        console.log('Object already processed');
        return;
    }
    
    console.log('Processing object:', obj.name);
    processedItems.add(obj);
}

// Using the marking system
processObject(obj1);
processObject(obj1); // Will log 'already processed'
processObject(obj2);

// WeakSet maintains weak references
console.log('Before nullifying:', weakSet.has(obj1));
obj1 = null;
// After garbage collection, obj1 will be removed from the WeakSet
EOF

chmod +x JavaScript/*/main_example.js

echo "All JavaScript example files have been created and made executable!"
EOF

chmod +x js-examples
