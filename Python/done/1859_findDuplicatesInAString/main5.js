const str = "Hello, world!";

const main = (s) => {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  console.log(map);

  return [...map].filter(([_, value]) => value > 1);
};

console.log(main(str));
