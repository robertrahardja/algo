const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat();
console.log(flattened);    // [1, 2, 3, 4, [5, 6]]
const fullyFlat = nested.flat(2);
console.log(fullyFlat);    // [1, 2, 3, 4, 5, 6]
