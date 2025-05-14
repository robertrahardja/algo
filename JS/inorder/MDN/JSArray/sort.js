const arr = [40, 1, 5, 200];
const arr2 = [40, 1, 5, 200];
const arr3 = [40, 1, 5, 200];
const arr4 = [40, 1, 5, 200];
const arr5 = [40, 1, 5, 200];
const strArr = ["Carrot", "Blue", "Apple"];
const strArr2 = ["Carrot", "Blue", "Apple"];

// const customLambda = (a, b) => a - b

// function compareFn(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   } else if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
//

function asc(a, b) {

  return a - b;
}


function desc(a, b) {

  return b - a;
}


const ans = arr.sort();
console.log(ans);
const ans2 = arr2.sort(asc);
console.log(ans2)
const ans3 = arr3.sort(desc);
console.log(ans3)
const ans4 = arr4.sort(asc).map(String).join('');
console.log(ans4)
const ans5 = arr5.sort(desc).map(String).join('');
console.log(ans5)



const ansStr = strArr.sort();
console.log(ansStr);
const ansStr2 = strArr2.sort().reverse()
console.log(ansStr2);


