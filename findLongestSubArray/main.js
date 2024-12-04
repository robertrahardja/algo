//find the longest substring without repeating characters
const arr = ["a", "b", "a", "c", "b", "a"];

const longestSubstring = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let i = 0;
  let maxLength = 0;
  const seen = new Map();

  for (let j = 0; j < arr.length; j++) {
    const current = arr[j];

    // if we find a duplicate in our current window
    if (seen.has(current) && seen.get(current) >= i) {
      i = seen.get(current) + 1;
    }

    seen.set(current, j);

    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
};

console.log(longestSubstring(arr));
