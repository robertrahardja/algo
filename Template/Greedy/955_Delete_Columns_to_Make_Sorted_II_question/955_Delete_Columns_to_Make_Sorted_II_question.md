955_Delete_Columns_to_Make_Sorted_II
# 955. Delete Columns to Make Sorted II

We are given an array A of N lowercase letter strings, all of
        the same length.

    Now, we may choose any set of deletion indices, and for each string, we delete all the
        characters in those indices.

    For example, if we have an array A = ["abcdef","uvwxyz"] and
        deletion indices {0, 2, 3}, then the final array after deletions is ["bef","vyz"].
    

    Suppose we chose a set of deletion indices D such that after deletions, the
        final array has its elements in lexicographic order (A[0] <= A[1]
            <= A[2] ... <= A[A.length - 1]).

    Return the minimum possible value of D.length.