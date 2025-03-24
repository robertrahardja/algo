
function recursion(n) {
  // Base case
  if (n === 1) {
    return 1;
  }
  // return the logic
  return n + recursion(n - 1);
}
console.log(`answer is ${recursion(5)} `)

