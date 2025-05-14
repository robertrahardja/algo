// The splice() method of Array instances 
// changes the contents of an array 
// by removing or replacing existing elements 
// and/or adding new elements in place.

const arr = [1, 2, 3, 4, 5];

const ans = arr.splice(1, 1, 10);
console.log(ans);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]


