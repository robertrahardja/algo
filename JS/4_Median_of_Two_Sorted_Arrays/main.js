const main = (nums1, nums2) => {
  // do work on the shorter array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  //get the total totalLength
  const m = nums1.length;
  const n = nums2.length;
  const totalLength = nums1.length + nums2.length;
  const half = Math.floor((totalLength + 1) / 2);

  let i = 0;
  let j = nums1.length;

  while (i <= j) {
    const partition1 = Math.floor((i + j) / 2);
    const partition2 = half - partition1;

    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];

    //Did we find the right partition?
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      //If even get the middle
      if (totalLength % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) /
          2;
      } else {
        //if odd, mid is the largest number from left partition
        return Math.max(maxLeft1, maxLeft2);
      }
    } // we did not find the right partition
    else if (maxLeft1 > minRight2) {
      // Too many elements taken from nums1, reduce
      j = partition1 - 1;
    } else {
      i = partition1 + 1;
    }
  }
};

// Test cases
console.log(main([1, 3], [2])); // 2.0
console.log(main([1, 2], [3, 4])); // 2.5
