const str = "Hello, World!";

const main = (s) => {
  const clnStr = s.toLowerCase().replace(/[^a-z]/g, "");
  const map = new Set();

  for (let i = 0; i < clnStr.length; i++) {
    if (map.has(clnStr[i])) {
      return "has duplicate";
    }
    map.set(clnStr[i], i);
  }

  return "no duplicate";
};

console.log(main(str));
