632_Smallest_Range_Covering_Elements_from_K_Lists
# 632. Smallest Range Covering Elements from K Lists

You have k lists of sorted integers in ascending order. Find the smallest
        range that includes at least one number from each of the k lists.

    We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a
        < c if b-a == d-c.

     

    Example 1:

    Input: [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
Output: [20,24]
Explanation:
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].

     

    Note:

    
        The given list may contain duplicates, so ascending order means >= here.
        1 <= k <= 3500
        -105 <= value of elements <= 105.