const nums = [2, 7, 11, 15];
const target = 9;
const main = (arr, n) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let remainder = n - arr[i];

    if (map.has(remainder)) {
      return [i, map.get(remainder)].toString();
    }

    map.set(arr[i], i);
  }
  return 0;
};

console.log(main(nums, target));
