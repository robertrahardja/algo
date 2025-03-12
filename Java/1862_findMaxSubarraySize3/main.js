const arr = [1, 3, -2, 5, 9, 2, 6, -1];

const main = (arr, k) => {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(main(arr, 3));
