const arr = [50, 1, 2, 81];

const main = (arr) => {
  return arr
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
};

console.log(main(arr));
