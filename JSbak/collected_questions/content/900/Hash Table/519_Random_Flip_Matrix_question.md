519_Random_Flip_Matrix
# 519. Random Flip Matrix

You are given the number of rows n_rows and number of columns
        n_cols of a 2D binary matrix where all values are initially
        0. Write a function flip which chooses a 0 value uniformly
            at random, changes it to 1, and then returns the position [row.id,
            col.id] of that value. Also, write a function reset which sets all
        values back to 0. Try to minimize the number of calls to system's
            Math.random() and optimize the time and space complexity.

    Note:

    
        1 <= n_rows, n_cols <= 10000
        0 <= row.id < n_rows and 0 <= col.id < n_cols
        flip will not be called when the matrix has no 0 values left.
        
        the total number of calls to flip and reset will
            not exceed 1000.
        
    

    Example 1:

    Input:
["Solution","flip","flip","flip","flip"]
[[2,3],[],[],[],[]]
Output: [null,[0,1],[1,2],[1,0],[1,1]]