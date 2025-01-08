const months = ['Jan', 'March', 'April'];
months.splice(1, 0, 'Feb');     // Insert at index 1
console.log(months);            // ['Jan', 'Feb', 'March', 'April']
months.splice(2, 1);            // Remove 1 element at index 2
console.log(months);            // ['Jan', 'Feb', 'April']
