const arr = [50, 1, 2, 8];

const main = (arr) => {
  const numbers = arr.map(String);

  const sortedArr = numbers.sort((a, b) => {
    return b + a - (a + b);
  });

  return sortedArr.join("");
};

console.log(main(arr));
