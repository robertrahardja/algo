const arr = ["a", "b", "a", "c", "b", "a"];

const main = (arr) => {
  let i = 0;
  const seen = new Map();
  let maxLength = 0;

  for (let j = 0; j < arr.length; j++) {
    let current = arr[j];
    if (seen.has(current) && seen.get(current) >= i) {
      i = seen.get(current) + 1;
    }

    seen.set(current, j);
    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
};

console.log(main(arr));
