const arr = [50, 1, 2, 8];
const main = (r) => {
  return r
    .map(String)
    .sort((a, b) => {
      return b + a - (a + b);
    })
    .join("");
};

console.log(main(arr));
