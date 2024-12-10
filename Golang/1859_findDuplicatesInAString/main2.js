const str = "Hello, World!";

const main = (str) => {
  let cleanStr = str.toLowerCase().replace(/^[a-z]/g, "");

  const letterCount = {};

  for (const char of cleanStr) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  const duplicates = Object.entries(letterCount)
    .filter(([_, count]) => count > 1)
    .map(([letter, count]) => `${letter} (${count} times)`);

  return duplicates.length ? duplicates : "No duplicates found";
};

console.log(main(str));
