// const str = "streetcar";
// const str = "Never odd or even";
const str = "Won't lovers revolt now?";

const main = (str) => {
  const lowerStr = str
    .toLowerCase()
    .split(" ")
    .join("")
    .split("'")
    .join("")
    .split("?")
    .join("");
  let i = 0;
  let j = lowerStr.length - 1;

  console.log(lowerStr);
  while (i < j) {
    console.log(lowerStr[i] + " & " + lowerStr[j]);
    if (lowerStr[i] !== lowerStr[j]) {
      return "not a palindrome";
    }
    i++;
    j--;
  }
  return "it is a palindrome";
};

console.log(main(str));
