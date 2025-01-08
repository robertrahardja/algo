const arr = [50, 1, 2, 81];

const main = (r) => {
  return r
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join("");
};

console.log(main(arr));
