const arr = [1, 2, 3, 4, 5];

const config = { initialValue: 0 };
const inintialValue = 1;

const ans = arr.reduce((accumulator, currentValue) => { return accumulator + currentValue }, config.initialValue)

console.log(ans)
const ans2 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, inintialValue)

console.log(ans2)

