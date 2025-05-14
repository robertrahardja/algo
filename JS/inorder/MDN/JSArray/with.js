const arr = [1, 2, 3, 4, 5];

const ans = arr.with(1, 200)
console.log(ans); // [ 1, 200, 3, 4, 5 ]


const ans2 = arr.with(1, 300)
console.log(ans2); // [ 1, 300, 3, 4, 5 ]
