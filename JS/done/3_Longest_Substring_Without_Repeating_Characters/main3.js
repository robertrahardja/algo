const main = (s) => {
  let maxLength = 0;
  let result = "";

  const map = new Map();

  let i = 0;

  for (let j = 0; j < s.length; j++) {
    // get current character
    const currC = s[j];

    //check if character is in map
    if (map.has(currC)) {
      //move i to after same character
      i = Math.max(i, map.get(currC) + 1);
    }

    // no character match in map
    // so put character in map to remember
    map.set(currC, j);

    //sove length to maxLength
    //put the result in to return
    //result are the choracters
    //
    const currLength = j - i + 1;

    //check if length is more thon maxLength
    //otherwise don't do anything
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
