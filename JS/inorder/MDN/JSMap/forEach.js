const map = new Map();

map.set('name', 'John');
map.set('age', 30);

map.forEach((value, key, map) => {
  console.log(`${key}: ${value} from ${map}`);
})
map.forEach((_, key) => {
  console.log(`${key}`);
})
map.forEach((value) => {
  console.log(`${value}`);
})
