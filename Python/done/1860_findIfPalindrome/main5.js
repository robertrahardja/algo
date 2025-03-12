const str = "racecar";

const main = (str) => {
  let i = 0;
  let j = str.length + 1;
  console.log(str.length);

  while (i < j) {
    if (str[i] !== str[j]) {
      return "not a palindrome";
    }
    i++;
    j--;
  }
  return "it is a palindrome";
};

console.log(main(str));
