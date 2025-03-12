const main = (s) => {
  const lastSeen = new Map();
  let start = 0;
  let maxLength = 0;
  let result = "";

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (lastSeen.has(char)) {
      start = Math.max(start, lastSeen.get(char) + 1);
    }

    lastSeen.set(char, end);

    const currentLength = end - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      result = s.slice(start, end + 1);
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
