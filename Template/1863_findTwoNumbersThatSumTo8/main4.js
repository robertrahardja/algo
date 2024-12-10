const arr = [-5, 9, 1, -2, 3, 8, 5, 6];

const main = (arr, k) => {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let i = 0;
  let j = sortedArr.length - 1;

  while (i < j) {
    let sum = sortedArr[i] + sortedArr[j];

    if (sum === k) {
      return [sortedArr[i], sortedArr[j]];
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }
  return "No pair found";
};

console.log(main(arr, 8));