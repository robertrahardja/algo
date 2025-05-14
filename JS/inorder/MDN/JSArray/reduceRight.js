
const arr = [1, 2, 3, 4, 5];

const config = { initialValue: 0 };

const ans = arr.reduceRight((accumulator, currentValue) => {
  console.log(`Accumulator : ${accumulator}, Current Value : ${currentValue}`)

  return accumulator + currentValue
}, config.initialValue)

console.log(ans)

const ans2 = arr.reduce((accumulator, currentValue) => {
  console.log(`Accumulator : ${accumulator}, Current Value : ${currentValue}`)

  return accumulator + currentValue
}, config.initialValue)
console.log(ans2)
