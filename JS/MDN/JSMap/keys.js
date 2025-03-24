
const map = new Map();

map.set('name', 'John');
map.set('age', 30);

const iter = map.keys();

const ans = iter.next().value;
const ans2 = iter.next().value;

