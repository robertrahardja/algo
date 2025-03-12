const S = "ADOBECODEBANC";
const T = "ABC";
const main = (s, t) => {
  if (t.length > s.length) return "";

  // Setup character map
  const map = new Map();
  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let start = 0,
    left = 0,
    minLen = Infinity,
    count = t.length;

  // Sliding window
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      if (map.get(s[right]) > 0) count--;
      map.set(s[right], map.get(s[right]) - 1);
    }

    // Contract window
    while (count === 0) {
      if (right - left + 1 < minLen) {
        start = left;
        minLen = right - left + 1;
      }

      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
        if (map.get(s[left]) > 0) count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
};

console.log(main(S, T));
