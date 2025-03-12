# 962. Maximum Width Ramp

Given an array A of integers, a ramp is a tuple (i,
        j) for which i < j and A[i] <= A[j]. 
        The width of such a ramp is j - i.

    Find the maximum width of a ramp in A.  If one doesn't exist, return 0.
    

     

    Example 1:

    Input: [6,0,8,2,1,5]
Output: 4
Explanation: 
The maximum width ramp is achieved at (i, j) = (1, 5): A[1] = 0 and A[5] = 5.