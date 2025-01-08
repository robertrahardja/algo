const main = (s) => {
  if (!s || s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  const secondFunc = (i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      const currentLength = j - i + 1;

      if (currentLength > maxLength) {
        start = i;
        maxLength = currentLength;
      }

      i--;
      j++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    secondFunc(i, i);
    secondFunc(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

console.log(main("babad")); // Output: "bab" (or "aba")
console.log(main("cbbd")); // Output: "bb"
console.log(main("a")); // Output: "a"
console.log(main("")); // Output: ""
console.log(main("racecar")); // Output: "racecar"