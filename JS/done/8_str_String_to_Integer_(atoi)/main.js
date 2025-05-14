const main = (s) => {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  const match = s.trim().match(/^[-+]?\d+/);

  if (!match) return 0;

  const num = Number(match[0]);

  return Math.max(Math.min(num, MAX), MIN);
};

// Test cases
const testCases = [
  "42",
  "   -42",
  "4193 with words",
  "words and 987",
  "-91283472332",
  "   +42",
  "3.14159",
  "+-12",
  "",
  "  ",
];

testCases.forEach((test) => {
  console.log(`Input: "${test}"`);
  console.log(`Output: ${main(test)}\n`);
});
