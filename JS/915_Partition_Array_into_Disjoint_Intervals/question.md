# 915. Partition Array into Disjoint Intervals

Given an array A, partition it into two (contiguous) subarrays left and
        right so that:

    
        Every element in left is less than or equal to every element in right.
        
        left and right are non-empty.
        left has the smallest possible size.
    

    Return the length of left after such a partitioning.  It
        is guaranteed that such a partitioning exists.

     

    Example 1:

    Input: [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]