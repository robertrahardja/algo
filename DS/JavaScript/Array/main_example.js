// Array methods comprehensive demonstration
const fruits = ["apple", "banana", "orange"];

// 1. Adding Elements
fruits.push("grape"); // Adds to end
fruits.unshift("pear"); // Adds to beginning
fruits.splice(2, 0, "kiwi"); // Inserts at index 2

// 2. Removing Elements
const lastFruit = fruits.pop(); // Removes from end
const firstFruit = fruits.shift(); // Removes from beginning
fruits.splice(1, 2); // Removes elements starting at index 1

// 3. Finding Elements
const hasApple = fruits.includes("apple"); // Check if exists
const bananaIndex = fruits.indexOf("banana"); // Find first index
const lastOrange = fruits.lastIndexOf("orange"); // Find last index
const foundFruit = fruits.find((f) => f.length > 5); // Find first element matching condition
const fruitIndex = fruits.findIndex((f) => f.length > 5); // Find first index matching condition

// 4. Array Transformations
const upperFruits = fruits.map((f) => f.toUpperCase()); // Transform each element
const longFruits = fruits.filter((f) => f.length > 5); // Filter elements
const fruitString = fruits.join(", "); // Join into string
const reversed = fruits.reverse(); // Reverse array
fruits.sort(); // Sort alphabetically
fruits.sort((a, b) => b.length - a.length); // Sort by length

// 5. Array Iterations
fruits.forEach((fruit) => console.log(fruit)); // Loop through elements
const allLongFruits = fruits.every((f) => f.length > 3); // Check if all match condition
const someLongFruits = fruits.some((f) => f.length > 6); // Check if any match condition
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0); // Reduce to single value

// 6. Array Information
const fruitCount = fruits.length; // Array length
const isArray = Array.isArray(fruits); // Check if array

// 7. Creating New Arrays
const slicedFruits = fruits.slice(1, 3); // Extract portion
const combinedFruits = fruits.concat(["mango", "pear"]); // Combine arrays
const spreadFruits = [...fruits, "mango", "pear"]; // Spread operator
const filledArray = new Array(3).fill("apple"); // Create and fill
const fromRange = Array.from({ length: 3 }, (_, i) => i + 1); // Create from range

// 8. Array Modifications
fruits.copyWithin(0, 2, 4); // Copy elements within array
fruits.fill("apple", 1, 3); // Fill range with value

// 9. Flattening Arrays
const nestedArray = [["apple"], ["banana", ["orange"]]];
const flatArray = nestedArray.flat(); // Flatten one level
const deepFlatArray = nestedArray.flat(Infinity); // Flatten all levels

// 10. Finding Subsets
const iterator = fruits.entries(); // Get key/value pairs
const keys = fruits.keys(); // Get indices
const values = fruits.values(); // Get values

// 11. Modern Array Methods (ES2023+)
const withFruit = fruits.with(1, "grape"); // Return new array with replaced element
const toReversed = fruits.toReversed(); // Return new reversed array
const toSorted = fruits.toSorted(); // Return new sorted array
const toSpliced = fruits.toSpliced(1, 1, "grape"); // Return new array with splice applied

// Examples of using multiple methods together
const uniqueFruits = [...new Set(fruits)]; // Remove duplicates
const groupedByLength = fruits.reduce((acc, fruit) => {
  acc[fruit.length] = acc[fruit.length] || [];
  acc[fruit.length].push(fruit);
  return acc;
}, {});

console.log("Modified array:", fruits);
console.log("Grouped by length:", groupedByLength);
