941_Valid_Mountain_Array
# 941. Valid Mountain Array

Given an array A of integers, return true if and only if it is a
        valid mountain array.

    Recall that A is a mountain array if and only if:

    
        A.length >= 3
        There exists some i with 0 < i < A.length - 1 such
            that:
            
                A[0] < A[1] < ... A[i-1] < A[i] 
                A[i] > A[i+1] > ... > A[A.length - 1]
            
        
    

     

    Example 1:

    Input: [2,1]
Output: false