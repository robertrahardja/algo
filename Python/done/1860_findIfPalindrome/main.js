const str = "racecar";

const isPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return "not a palindrome";
    }
    i++;
    console.log(i);
    j--;
    console.log(j);
  }
  return "it is a palindrome";
};

console.log(isPalindrome(str));
