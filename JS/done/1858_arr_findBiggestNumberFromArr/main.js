const arr = [50, 1, 2, 81];

const main = (arr) => {
  const numbers = arr.map(String);

  const sortedArr = numbers.sort((a, b) => {
    return b + a - (a + b);
  });

  // return sortedArr.join("");
  return numbers;
};

console.log(main(arr));
