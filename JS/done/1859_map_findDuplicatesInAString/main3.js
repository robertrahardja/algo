const str = "Hello, world!";

const main = (str) => {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const result = {};

  for (let char in charCount) {
    if (charCount[char] > 1) {
      result[char] = charCount[char];
    }
  }

  return result;
};

console.log(main(str));
