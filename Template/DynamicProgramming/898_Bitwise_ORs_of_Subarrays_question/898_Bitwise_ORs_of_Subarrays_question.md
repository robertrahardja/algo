898_Bitwise_ORs_of_Subarrays
# 898. Bitwise ORs of Subarrays

We have an array A of non-negative integers.

    For every (contiguous) subarray B = [A[i], A[i+1], ..., A[j]] (with i
        <= j), we take the bitwise OR of all the elements in B, obtaining a
        result A[i] | A[i+1] | ... | A[j].

    Return the number of possible results.  (Results that occur more than once are only
        counted once in the final answer.)