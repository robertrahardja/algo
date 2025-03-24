const nums = [2, 7, 11, 15];
const target = 9;
const main = (arr, target) => {
  const map = new Map();

  for (let [index, num] of arr.entries()) {
    console.log(index);
    console.log(num);

    const comp = target - num;

    if (map.has(comp)) {
      return [map.get(comp), index];
    }
    map.set(num, index);
  }
  return [];
};

console.log(main(nums, target));
