const nums = [2, 7, 11, 15];
const target = 9;
const main = (nums, target) => {
  // Return empty array for edge cases: empty input or impossible target
  if (nums.length === 0) {
    return [];
  }
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  // Return empty array if no solution is found
  return [];
};

module.exports = { main };

console.log(main(nums, target));
