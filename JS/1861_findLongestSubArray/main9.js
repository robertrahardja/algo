//find the longest substring without repeating characters
const arr = ["a", "b", "a", "c", "b", "a"];

const main = (r) => {
  if (!r || r.length === 0) {
    return 0;
  }

  let i = 0;
  let maxLength = 0;
  const map = new Map();

  let word = "";
  for (let j = 0; j < r.length; j++) {
    const curr = r[j];

    if (map.has(curr) && map.get(curr) >= i) {
      i = map.get(curr) + 1;
    }

    map.set(curr, j);

    maxLength = Math.max(maxLength, j - i + 1);
    word = r.slice(i, j + 1);
  }
  return {
    word: word,
    maxLength: maxLength,
  };
};

console.log(main(arr));
