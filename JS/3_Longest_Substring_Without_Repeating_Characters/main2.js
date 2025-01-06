const main = (s) => {
  const map = new Map();
  let i = 0;
  let maxLength = 0;
  let result = "";

  for (let j = 0; j < s.length; j++) {
    const currChar = s[j];

    if (map.has(currChar)) {
      i = Math.max(i, map.get(currChar) + 1);
    }

    map.set(currChar, j);

    const currLength = j - i + 1;

    if (currLength > maxLength) {
      maxLength = currLength;
      result = s.slice(i, j + 1);
    }
  }

  return {
    length: maxLength,
    substring: result,
  };
};

// Test cases with updated expected value for "lorem ipsum"
function runTests() {
  const testCases = [
    {
      input: "lorem ipsum dolor sit amet",
      expected: { length: 10, substring: "lorem ipsu" }, // Updated to correct length
    },
    {
      input: "abcabcbb",
      expected: { length: 3, substring: "abc" },
    },
    {
      input: "bbbbb",
      expected: { length: 1, substring: "b" },
    },
    {
      input: "pwwkew",
      expected: { length: 3, substring: "wke" },
    },
    {
      input: "",
      expected: { length: 0, substring: "" },
    },
    {
      input: "aab",
      expected: { length: 2, substring: "ab" },
    },
    {
      input: "dvdf",
      expected: { length: 3, substring: "vdf" },
    },
  ];

  testCases.forEach((testCase, index) => {
    const result = main(testCase.input);
    const passed = result.length === testCase.expected.length &&
      result.substring === testCase.expected.substring;
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: "${testCase.input}"`);
    console.log(`Expected: `, testCase.expected);
    console.log(`Got: `, result);
    console.log(`Status: ${passed ? "PASSED ✅" : "FAILED ❌"}`);
    console.log("------------------------");
  });
}

runTests();
