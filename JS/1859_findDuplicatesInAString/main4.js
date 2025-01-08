const str = "Hello, world!";

const main = (s) => {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  console.log(map);

  const result = new Map();

  for (let [char, count] of map.entries()) {
    if (count > 1) {
      console.log(char, count);
      result.set(char, count);
    }
  }

  return [...result];
};

console.log(main(str));
