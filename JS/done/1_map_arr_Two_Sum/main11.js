const main = (arr, target) => {
  if (arr.length <= 0) {
    return []
  }

  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]

    if (map.has(diff)) {
      // return [i, map.get(diff)]
      return [map.get(diff), i]
    }
    map.set(arr[i], i)
  }

  return []

}

console.log(main([2, 7, 11, 15], 9)) // [0, 1]
