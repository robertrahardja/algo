const map = new Map();

map.set('name', 'John');
map.set('age', 30);

const iterator = map.entries();

console.log(iterator.next().value);

console.log(iterator.next().value);
