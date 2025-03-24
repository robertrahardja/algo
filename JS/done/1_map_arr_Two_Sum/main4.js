const arr = [2, 7, 11, 15];
const main = (n, t) => {
  const map = new Map();

  for (let i = 0; i < n.length; i++) {
    const diff = t - n[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(n[i], i);
  }
};

console.log(main(arr, 9));
