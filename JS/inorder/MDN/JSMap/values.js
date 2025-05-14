const map = new Map();

map.set('name', 'John');
map.set('age', 30);

const iter = map.values();

for (const value of iter) {
  console.log(value);
}
