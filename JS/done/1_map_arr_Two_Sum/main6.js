const nums = [2, 7, 11, 15];
const target = 9;
const main = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (map.has(remainder)) {
      return [map.get(remainder), i];
    }
    map.set(nums[i], i);
  }
};

console.log(main(nums, target));
