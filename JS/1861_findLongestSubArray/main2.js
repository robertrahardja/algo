const arr = ["a", "b", "a", "c", "b", "a"];

const longestSubarray = (arr) => {
  let i = 0;
  let Maxlength = 0;

  const seen = new Map();

  for (let j = 0; j < arr.length; j++) {
    const current = arr[j];

    if (seen.has(current) && seen.get(current) >= i) i = seen.get(current) + 1;
    seen.set(current, j);
    Maxlength = Math.max(Maxlength, j - i + 1);
  }

  return Maxlength;
};

console.log(longestSubarray(arr));
