927_Three_Equal_Parts
# 927. Three Equal Parts

Given an array A of 0s and 1s, divide the array into 3
        non-empty parts such that all of these parts represent the same binary value.

    If it is possible, return any [i, j] with i+1 <
        j, such that:

    
        A[0], A[1], ..., A[i] is the first part;
        A[i+1], A[i+2], ..., A[j-1] is the second part, and
        A[j], A[j+1], ..., A[A.length - 1] is the third part.
        All three parts have equal binary value.
    

    If it is not possible, return [-1, -1].

    Note that the entire part is used when considering what binary value it represents.  For
        example, [1,1,0] represents 6 in decimal, not
        3.  Also, leading zeros are allowed, so [0,1,1] and
        [1,1] represent the same value.

     

    Example 1:

    Input: [1,0,1,0,1]
Output: [0,3]