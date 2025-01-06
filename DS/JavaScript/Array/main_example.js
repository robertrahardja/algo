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
