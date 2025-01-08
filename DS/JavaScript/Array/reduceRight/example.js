const array = ['1', '2', '3', '4'];
const concatenated = array.reduceRight((acc, curr) => acc + curr);
console.log(concatenated);    // "4321"
