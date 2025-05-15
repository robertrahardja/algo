import { arr } from "./arr.js";

const main = (arr) => {
  const length = arr.length;
  console.log(length);

  if (length <= 2) {
    return arr.reverse();
  }


  let pointer = length - 2;

  //find the first decreasing element from the end
  while (pointer >= 0 && arr[pointer] >= arr[pointer + 1]) {
    pointer--;
  }

  //if no such element is found, reverse the array
  if (pointer === -1) {
    return arr.reverse();
  }






}

console.log(main(arr))

