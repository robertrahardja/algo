# 923. 3Sum With Multiplicity

Given an integer array A, and an integer target, return the number
        of tuples i, j, k  such that i < j < k and A[i]
            + A[j] + A[k] == target.

    As the answer can be very large, return it modulo 10^9 + 7.
    

     

    Example 1:

    Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (A[i], A[j], A[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.