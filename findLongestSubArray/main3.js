const arr = ["a", "b", "a", "c", "b", "a"];

const longestSubArray = (arr) => {
  let i = 0;
  let maxlength = 0;

  const seen = new Map();

  for (let j = 0; j < arr.length; j++) {
    let current = arr[j];
    if (seen.has(current) && seen.get(current) >= i) {
      i = seen.get(current) + 1;
    }
    seen.set(current, j);
    maxlength = Math.max(maxlength, j - i + 1);
  }
  return maxlength;
};

console.log(longestSubArray(arr));
