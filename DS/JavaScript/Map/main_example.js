const map = new Map();

// set() returns the map object for chaining
const chainedMap = map.set("a", 1).set("b", 2);
console.log(chainedMap === map); // true
// delete() returns boolean
console.log(map.delete("a")); // true
console.log(map.delete("x")); // false (key didn't exist)
// get() returns value or undefined
console.log(map.get("b")); // 2
console.log(map.get("x")); // undefined
// has() returns boolean
console.log(map.has("b")); // true
console.log(map.has("x")); // false
// Iteration methods return iterators
const keys = map.keys();
console.log(keys.next()); // { value: 'b', done: false }
console.log(keys.next()); // { value: undefined, done: true }
// forEach() returns undefined
const result = map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
console.log(result); // undefined
// clear() returns undefined
console.log(map.clear()); // undefined

// Now let's expand with .values(), more .keys() examples and spread operator
const map2 = new Map([["a", 1], ["b", 2], ["c", 3]]);

// .values() example
const values = map2.values();
console.log(values.next()); // { value: 1, done: false }
console.log(values.next()); // { value: 2, done: false }
console.log(values.next()); // { value: 3, done: false }
console.log(values.next()); // { value: undefined, done: true }

// More .keys() examples
const keys2 = map2.keys();
for (const key of map2.keys()) {
  console.log(key); // prints: a, b, c
}

// Spread operator examples
// Convert keys to array
console.log([...map2.keys()]); // ['a', 'b', 'c']

// Convert values to array
console.log([...map2.values()]); // [1, 2, 3]

// Convert entire map to array of key-value pairs
console.log([...map2]); // [['a', 1], ['b', 2], ['c', 3]]

// Create new map using spread
const map3 = new Map([...map2]);
console.log([...map3]); // [['a', 1], ['b', 2], ['c', 3]]

// Merge maps using spread
const mapA = new Map([["x", 10], ["y", 20]]);
const mapB = new Map([["z", 30]]);
const merged = new Map([...mapA, ...mapB]);
console.log([...merged]); // [['x', 10], ['y', 20], ['z', 30]]
