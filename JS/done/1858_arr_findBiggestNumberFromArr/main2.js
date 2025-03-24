const arr = [50, 1, 2, 81];

const main = (arr) => {
  const map = arr.sort(String);

  const result = map.sort((a, b) => {
    return b + a - (a + b);
  });

  return result.join("");
};

console.log(main(arr));
