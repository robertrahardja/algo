const nums = [2, 7, 11, 15];

const target = 9;

const main = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
};

console.log(main(nums, target));
