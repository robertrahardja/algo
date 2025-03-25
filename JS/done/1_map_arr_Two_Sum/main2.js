const nums = [2, 7, 11, 15];

const target = 9;

const main = (nums, target) => {

  // Return empty array for edge cases: empty input or impossible target
  if (nums.length === 0) {
    return [];
  }
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

module.exports = { main };

console.log(main(nums, target));
