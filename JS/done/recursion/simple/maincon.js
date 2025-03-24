
function recursion(n) {
  console.log(`n is now ${n}`)
  // Base case
  if (n === 1) {
    console.log(`\n`)
    console.log(`***********`)
    console.log(`***********`)
    console.log(`base case hit`)
    console.log(`***********`)
    console.log(`***********`)
    console.log(`\n`)

    return 1;
  }
  console.log(`next argument is ${n - 1}`)
  console.log(`-----------`)
  // return the logic
  const returnFromFunction = recursion(n - 1);
  console.log(`returnFromFunction is ${returnFromFunction}`)
  const returnNumber = n + returnFromFunction;
  console.log(`we are at n: ${n} `)
  console.log(`returnNumber is ${returnNumber}`)
  console.log(`-----------`)
  return returnNumber;

}


console.log(`start of recursion\n`)
console.log(`answer is ${recursion(5)} `)

