#!/bin/bash

# Create parent directory
mkdir -p js_array_methods
cd js_array_methods

# Array Creation
mkdir -p array_from
cat >array_from/example.js <<'EOF'
// Converting array-like object
const arrayFromString = Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']

// Using mapping function
const numbers = Array.from([1, 2, 3], x => x * 2);  // [2, 4, 6]
EOF

# Modification Methods
mkdir -p push
cat >push/example.js <<'EOF'
const fruits = ['apple', 'banana'];
fruits.push('orange');  // Returns 3 (new length)
console.log(fruits);    // ['apple', 'banana', 'orange']
EOF

mkdir -p pop
cat >pop/example.js <<'EOF'
const stack = ['a', 'b', 'c'];
const lastElement = stack.pop();  // Returns 'c'
console.log(stack);              // ['a', 'b']
EOF

mkdir -p unshift
cat >unshift/example.js <<'EOF'
const numbers = [2, 3];
numbers.unshift(1);     // Returns 3 (new length)
console.log(numbers);   // [1, 2, 3]
EOF

mkdir -p shift
cat >shift/example.js <<'EOF'
const queue = ['first', 'second', 'third'];
const firstElement = queue.shift();  // Returns 'first'
console.log(queue);                  // ['second', 'third']
EOF

mkdir -p splice
cat >splice/example.js <<'EOF'
const months = ['Jan', 'March', 'April'];
months.splice(1, 0, 'Feb');     // Insert at index 1
console.log(months);            // ['Jan', 'Feb', 'March', 'April']
months.splice(2, 1);            // Remove 1 element at index 2
console.log(months);            // ['Jan', 'Feb', 'April']
EOF

# Searching Methods
mkdir -p indexOf
cat >indexOf/example.js <<'EOF'
const fruits = ['apple', 'banana', 'apple', 'orange'];
console.log(fruits.indexOf('apple'));      // 0
console.log(fruits.indexOf('grape'));      // -1
EOF

mkdir -p lastIndexOf
cat >lastIndexOf/example.js <<'EOF'
const numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2));    // 3
console.log(numbers.lastIndexOf(4));    // -1
EOF

mkdir -p includes
cat >includes/example.js <<'EOF'
const pets = ['cat', 'dog', 'hamster'];
console.log(pets.includes('cat'));     // true
console.log(pets.includes('fish'));    // false
EOF

mkdir -p find
cat >find/example.js <<'EOF'
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found);    // 12
EOF

mkdir -p findIndex
cat >findIndex/example.js <<'EOF'
const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(num => num > 10);
console.log(index);    // 1
EOF

# Transformation Methods
mkdir -p map
cat >map/example.js <<'EOF'
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);    // [2, 4, 6]
EOF

mkdir -p filter
cat >filter/example.js <<'EOF'
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);    // [2, 4, 6]
EOF

mkdir -p reduce
cat >reduce/example.js <<'EOF'
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);    // 10
EOF

mkdir -p reduceRight
cat >reduceRight/example.js <<'EOF'
const array = ['1', '2', '3', '4'];
const concatenated = array.reduceRight((acc, curr) => acc + curr);
console.log(concatenated);    // "4321"
EOF

mkdir -p slice
cat >slice/example.js <<'EOF'
const fruits = ['apple', 'banana', 'orange', 'lemon'];
const citrus = fruits.slice(2);     // ['orange', 'lemon']
const middle = fruits.slice(1, 3);  // ['banana', 'orange']
EOF

# Organization Methods
mkdir -p sort
cat >sort/example.js <<'EOF'
const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits);    // ['apple', 'banana', 'orange']

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);   // [1, 2, 3, 4, 5]
EOF

mkdir -p reverse
cat >reverse/example.js <<'EOF'
const array = [1, 2, 3];
array.reverse();
console.log(array);    // [3, 2, 1]
EOF

mkdir -p concat
cat >concat/example.js <<'EOF'
const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log(combined);    // [1, 2, 3, 4]
EOF

mkdir -p flat
cat >flat/example.js <<'EOF'
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat();
console.log(flattened);    // [1, 2, 3, 4, [5, 6]]
const fullyFlat = nested.flat(2);
console.log(fullyFlat);    // [1, 2, 3, 4, 5, 6]
EOF

# Iteration Methods
mkdir -p forEach
cat >forEach/example.js <<'EOF'
const array = ['a', 'b', 'c'];
array.forEach(element => console.log(element));
// Outputs:
// a
// b
// c
EOF

mkdir -p every
cat >every/example.js <<'EOF'
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);    // true
EOF

mkdir -p some
cat >some/example.js <<'EOF'
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);    // true
EOF

echo "Array method examples have been created in separate directories"
