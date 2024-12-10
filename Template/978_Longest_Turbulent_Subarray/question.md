# 978. Longest Turbulent Subarray

A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent
        if and only if:

    
        For i <= k < j, A[k] > A[k+1] when k is
            odd, and A[k] < A[k+1] when k is even;
        
        OR, for i <= k < j, A[k] > A[k+1]
            when k is even, and A[k] < A[k+1] when k is
            odd.
        
    

    That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of
        elements in the subarray.

    Return the length of a maximum size turbulent subarray of A.