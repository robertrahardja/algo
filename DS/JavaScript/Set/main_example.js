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
