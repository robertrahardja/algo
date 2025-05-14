const findSubstring = (s, words) => {
  if (!s || !words || words.length === 0) return [];

  // Create a map to store the frequency of words
  const wordCountMap = new Map();

  // Populate the word frequency map
  for (const word of words) {
    wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
  }

  const stringLength = s.length;
  const wordArrayLength = words.length;
  const wordLength = words[0].length;
  const indices = [];

  // Iterate through the string in increments of word length
  for (let i = 0; i < wordLength; ++i) {
    const tempCountMap = new Map();
    let left = i;
    let right = i;
    let matchedWordCount = 0;

    // Scan the string in chunks the size of the words' length
    while (right + wordLength <= stringLength) {
      const currentWord = s.substring(right, right + wordLength);
      right += wordLength;

      // Skip the word if it's not in the frequency map
      if (!wordCountMap.has(currentWord)) {
        tempCountMap.clear();
        left = right;
        matchedWordCount = 0;
        continue;
      }

      // Update the temporary count map
      tempCountMap.set(currentWord, (tempCountMap.get(currentWord) || 0) + 1);
      ++matchedWordCount;

      // If the current word has been seen more times than it is present in words array, slide the window to the right
      while (tempCountMap.get(currentWord) > wordCountMap.get(currentWord)) {
        const wordToLeft = s.substring(left, left + wordLength);
        tempCountMap.set(wordToLeft, tempCountMap.get(wordToLeft) - 1);
        left += wordLength;
        --matchedWordCount;
      }

      // Check if all words match; if so, add to results
      if (matchedWordCount === wordArrayLength) {
        indices.push(left);
      }
    }
  }

  return indices;
};

const main = () => {
  // Example 1
  console.log("Example 1:");
  const s1 = "barfoothefoobarman";
  const words1 = ["foo", "bar"];
  console.log("Input:");
  console.log(`s = "${s1}"`);
  console.log(`words = ${JSON.stringify(words1)}`);
  console.log("Output:", findSubstring(s1, words1));

  // Example 2
  console.log("\nExample 2:");
  const s2 = "wordgoodgoodgoodbestword";
  const words2 = ["word", "good", "best", "word"];
  console.log("Input:");
  console.log(`s = "${s2}"`);
  console.log(`words = ${JSON.stringify(words2)}`);
  console.log("Output:", findSubstring(s2, words2));

  // Additional test case
  console.log("\nAdditional Example:");
  const s3 = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
  const words3 = ["fooo", "barr", "wing", "ding", "wing"];
  console.log("Input:");
  console.log(`s = "${s3}"`);
  console.log(`words = ${JSON.stringify(words3)}`);
  console.log("Output:", findSubstring(s3, words3));
};

main();
