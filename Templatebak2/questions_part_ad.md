-----------------

# 559_Maximum_Depth_of_N-ary_Tree
# 559. Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to
        the farthest leaf node.

    For example, given a 3-ary tree:
     

    
        

     

    We should return its max depth, which is 3.

     

    Note:

    
        The depth of the tree is at most 1000.
        The total number of nodes is at most 5000.
-----------------

# 1755_Closest_Subsequence_Sum
# 1755. Closest Subsequence Sum


-----------------

# 28_Implement_strStr()
# 28. Implement strStr()

Implement strStr().
    

    Return the index of the first occurrence of needle in haystack, or -1 if
        needle is not part of haystack.

    Example 1:

    Input: haystack = "hello", needle = "ll"
Output: 2

    Example 2:

    Input: haystack = "aaaaa", needle = "bba"
Output: -1

    Clarification:

    What should we return when needle is an empty string? This is a great question
        to ask during an interview.

    For the purpose of this problem, we will return 0 when needle is an empty
        string. This is consistent to C's strstr() and Java's indexOf().
-----------------

# 716_Max_Stack
# 716. Max Stack

Design a max stack that supports push, pop, top, peekMax and popMax.

    
    
        push(x) -- Push element x onto stack.
        pop() -- Remove the element on top of the stack and return it.
        top() -- Get the element on the top.
        peekMax() -- Retrieve the maximum element in the stack.
        popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more
            than one maximum elements, only remove the top-most one.
        
    
    

    Example 1:
    MaxStack stack = new MaxStack();
stack.push(5);
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5

    

    Note:
    
        -1e7 <= x <= 1e7
        Number of operations won't exceed 10000.
        The last four operations won't be called when stack is empty.
-----------------

# 269_Alien_Dictionary
# 269. Alien Dictionary

There is a new alien language which uses the latin alphabet. However, the order among letters
        are unknown to you. You receive a list of non-empty words from the dictionary, where
        words are sorted lexicographically by the rules of this new language. Derive the
        order of letters in this language.

    Example 1:

    Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]

Output: "wertf"

    Example 2:

    Input:
[
  "z",
  "x"
]

Output: "zx"

    Example 3:

    Input:
[
  "z",
  "x",
  "z"
]

Output: "" 

Explanation: The order is invalid, so return "".

    Note:

    
        You may assume all letters are in lowercase.
        You may assume that if a is a prefix of b, then a must appear before b in the given
            dictionary.
        
        If the order is invalid, return an empty string.
        There may be multiple valid order of letters, return any one of them is fine.
-----------------

# 51_N-Queens
# 51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n×n
        chessboard such that no two queens attack each other.

    

    Given an integer n, return all distinct solutions to the n-queens puzzle.
    

    Each solution contains a distinct board configuration of the n-queens'
        placement, where 'Q' and '.' both indicate a queen
        and an empty space respectively.

    Example:

    Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
-----------------

# 756_Pyramid_Transition_Matrix
# 756. Pyramid Transition Matrix

We are stacking blocks to form a pyramid. Each block has a color which is a one letter
        string.

    We are allowed to place any color block C on top of two adjacent blocks of
        colors A and B, if and only if ABC is an allowed
        triple.

    We start with a bottom row of bottom, represented as a single string. We also
        start with a list of allowed triples allowed. Each allowed triple is
        represented as a string of length 3.

    Return true if we can build the pyramid all the way to the top, otherwise false.

    Example 1:

    Input: bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"]
Output: true
Explanation:
We can stack the pyramid like this:
    A
   / \
  G   E
 / \ / \
B   C   D

We are allowed to place G on top of B and C because BCG is an allowed triple.  Similarly, we can place E on top of C and D, then A on top of G and E.

     

    Example 2:

    Input: bottom = "AABA", allowed = ["AAA", "AAB", "ABA", "ABB", "BAC"]
Output: false
Explanation:
We can't stack the pyramid to the top.
Note that there could be allowed triples (A, B, C) and (A, B, D) with C != D.

     

    Note:

    
        bottom will be a string with length in range [2, 8].
        allowed will have length in range [0, 200].
        Letters in all strings will be chosen from the set {'A', 'B',
            'C', 'D', 'E', 'F', 'G'}.
-----------------

# 718_Maximum_Length_of_Repeated_Subarray
# 718. Maximum Length of Repeated Subarray

Given two integer arrays A and B, return the maximum length of an
        subarray that appears in both arrays.

    Example 1:

    Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation:
The repeated subarray with maximum length is [3, 2, 1].

     

    Note:

    
        1 <= len(A), len(B) <= 1000
        0 <= A[i], B[i] < 100
-----------------

# 338_Counting_Bits
# 338. Counting Bits

Given a non negative integer number num. For every numbers i in the range 0
        ≤ i ≤ num calculate the number of 1's in their binary representation and
        return them as an array.

    Example 1:

    Input: 2
Output: [0,1,1]

    Example 2:

    Input: 5
Output: [0,1,1,2,1,2]

    Follow up:

    
        It is very easy to come up with a solution with run time O(n*sizeof(integer)).
            But can you do it in linear time O(n) /possibly in a single pass?
        
        Space complexity should be O(n).
        Can you do it like a boss? Do it without using any builtin function like __builtin_popcount
            in c++ or in any other language.
-----------------

# 737_Sentence_Similarity_II
# 737. Sentence Similarity II

Given two sentences words1, words2 (each represented as an array of strings),
        and a list of similar word pairs pairs, determine if two sentences are similar.
    

    For example, words1 = ["great", "acting",
        "skills"] and words2 = ["fine", "drama", "talent"]
        are similar, if the similar word pairs are pairs = [["great", "good"],
            ["fine", "good"], ["acting","drama"], ["skills","talent"]].
    

    Note that the similarity relation is transitive. For example, if "great" and
        "good" are similar, and "fine" and "good" are similar, then
        "great" and "fine" are similar.

    Similarity is also symmetric. For example, "great" and "fine" being
        similar is the same as "fine" and "great" being similar.

    Also, a word is always similar with itself. For example, the sentences words1 = ["great"],
        words2 = ["great"], pairs = [] are similar, even though there are no
        specified similar word pairs.

    Finally, sentences can only be similar if they have the same number of words. So a sentence
        like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].
    

    Note:

    
        The length of words1 and words2 will not exceed
            1000.
        
        The length of pairs will not exceed 2000.
        The length of each pairs[i] will be 2.
        The length of each words[i] and pairs[i][j] will be in the
            range [1, 20].
-----------------

# 1058_Minimize_Rounding_Error_to_Meet_Target
# 1058. Minimize Rounding Error to Meet Target

Given an array of prices [p1,p2...,pn] and a
        target, round each price pi to Roundi(pi)
        so that the rounded array
        [Round1(p1),Round2(p2)...,Roundn(pn)]
        sums to the given target. Each operation Roundi(pi)
        could be either Floor(pi) or Ceil(pi).

    Return the string "-1" if the rounded array is impossible to sum to
        target. Otherwise, return the smallest rounding error, which is defined as
        Σ |Roundi(pi) - (pi)| for
        i
        from 1 to
        n
        , as a string with three places after the decimal.
    

     

    Example 1:

    Input: prices = ["0.700","2.800","4.900"], target = 8
Output: "1.000"
Explanation: 
Use Floor, Ceil and Ceil operations to get (0.7 - 0) + (3 - 2.8) + (5 - 4.9) = 0.7 + 0.2 + 0.1 = 1.0 .

    Example 2:

    Input: prices = ["1.500","2.500","3.500"], target = 10
Output: "-1"
Explanation: 
It is impossible to meet the target.

     

    Note:

    
        1 <= prices.length <= 500.
        Each string of prices prices[i] represents a real number which is between 0
            and 1000 and has exactly 3 decimal places.
        
        target is between 0 and 1000000.
-----------------

# 1771_Maximize_Palindrome_Length_From_Subsequences
# 1771. Maximize Palindrome Length From Subsequences


-----------------

# 1014_Best_Sightseeing_Pair
# 1014. Best Sightseeing Pair

Given an array A of positive integers, A[i] represents the value of
        the i-th sightseeing spot, and two sightseeing spots i and
        j have distance j - i between them.

    The score of a pair (i < j) of sightseeing spots is (A[i]
        + A[j] + i - j) : the sum of the values of the sightseeing spots,
        minus the distance between them.

    Return the maximum score of a pair of sightseeing spots.

     

    Example 1:

    Input: [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11

     

    Note:

    
        2 <= A.length <= 50000
        1 <= A[i] <= 1000
-----------------

# 1329_Sort_the_Matrix_Diagonally
# 1329. Sort the Matrix Diagonally


-----------------

# 1629_Slowest_Key
# 1629. Slowest Key


-----------------

# 42_Trapping_Rain_Water
# 42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each
        bar is 1, compute how much water it is able to trap after raining.

    
        
        The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this
            case, 6 units of rain water (blue section) are being trapped. Thanks
                Marcos for contributing this image!
        
    

    Example:

    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
-----------------

# 1830_Minimum_Number_of_Operations_to_Make_String_Sorted
# 1830. Minimum Number of Operations to Make String Sorted


-----------------

# 209_Minimum_Size_Subarray_Sum
# 209. Minimum Size Subarray Sum

Given an array of n positive integers and a positive integer
        s, find the minimal length of a contiguous subarray of which the sum
        ≥ s. If there isn't one, return 0 instead.

    Example: 

    Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
-----------------

# 313_Super_Ugly_Number
# 313. Super Ugly Number

Write a program to find the nth super ugly number.

    Super ugly numbers are positive numbers whose all prime factors are in the given prime list
        primes of size k.

    Example:

    Input: n = 12, primes = [2,7,13,19]
Output: 32
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12
             super ugly numbers given primes = [2,7,13,19] of size 4.

    Note:

    
        1 is a super ugly number for any given primes.
        The given numbers in primes are in ascending order.
        0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i]
            < 1000.
        
        The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
-----------------

# 982_Triples_with_Bitwise_AND_Equal_To_Zero
# 982. Triples with Bitwise AND Equal To Zero

Given an array of integers A, find the number of triples of indices (i, j,
        k) such that:

    
        0 <= i < A.length
        0 <= j < A.length
        0 <= k < A.length
        A[i] & A[j] & A[k] == 0, where & represents
            the bitwise-AND operator.
        
    

     

    Example 1:

    Input: [2,1,3]
Output: 12
Explanation: We could choose the following i, j, k triples:
(i=0, j=0, k=1) : 2 & 2 & 1
(i=0, j=1, k=0) : 2 & 1 & 2
(i=0, j=1, k=1) : 2 & 1 & 1
(i=0, j=1, k=2) : 2 & 1 & 3
(i=0, j=2, k=1) : 2 & 3 & 1
(i=1, j=0, k=0) : 1 & 2 & 2
(i=1, j=0, k=1) : 1 & 2 & 1
(i=1, j=0, k=2) : 1 & 2 & 3
(i=1, j=1, k=0) : 1 & 1 & 2
(i=1, j=2, k=0) : 1 & 3 & 2
(i=2, j=0, k=1) : 3 & 2 & 1
(i=2, j=1, k=0) : 3 & 1 & 2

     

    Note:

    
        1 <= A.length <= 1000
        0 <= A[i] < 2^16
-----------------

# 436_Find_Right_Interval
# 436. Find Right Interval

Given a set of intervals, for each of the interval i, check if there exists an interval j
        whose start point is bigger than or equal to the end point of the interval i, which can be
        called that j is on the "right" of i.

    For any interval i, you need to store the minimum interval j's index, which means that
        the interval j has the minimum start point to build the "right" relationship for
        interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you
        need output the stored value of each interval as an array.

    Note:

    
        You may assume the interval's end point is always bigger than its start point.
        You may assume none of these intervals have the same start point.
    

     

    Example 1:

    Input: [ [1,2] ]

Output: [-1]

Explanation: There is only one interval in the collection, so it outputs -1.

     

    Example 2:

    Input: [ [3,4], [2,3], [1,2] ]

Output: [-1, 0, 1]

Explanation: There is no satisfied "right" interval for [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.

     

    Example 3:

    Input: [ [1,4], [2,3], [3,4] ]

Output: [-1, 2, -1]

Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point.

    NOTE: input types have been changed on April 15, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 211_Add_and_Search_Word_-_Data_structure_design
# 211. Add and Search Word - Data structure design

Design a data structure that supports the following two operations:

    void addWord(word)
bool search(word)

    search(word) can search a literal word or a regular expression string containing only letters
        a-z or .. A . means it can represent any one letter.
    

    Example:

    addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

    Note:
        You may assume that all words are consist of lowercase letters a-z.
-----------------

# 1576_Replace_All_'s_to_Avoid_Consecutive_Repeating_Characters
# 1576. Replace All ?'s to Avoid Consecutive Repeating Characters


-----------------

# 119_Pascal's_Triangle_II
# 119. Pascal's Triangle II

Given a non-negative index k where k ≤ 33, return the
        kth index row of the Pascal's triangle.

    Note that the row index starts from 0.

    
        In Pascal's triangle, each number is the sum of the two numbers directly above
            it.
        
    

    Example:

    Input: 3
Output: [1,3,3,1]

    Follow up:

    Could you optimize your algorithm to use only O(k) extra space?
-----------------

# 1548_The_Most_Similar_Path_in_a_Graph
# 1548. The Most Similar Path in a Graph


-----------------

# 214_Shortest_Palindrome
# 214. Shortest Palindrome

Given a string s, you are allowed to convert it to a palindrome by adding
        characters in front of it. Find and return the shortest palindrome you can find by
        performing this transformation.

    Example 1:

    Input: "aacecaaa"
Output: "aaacecaaa"

    Example 2:

    Input: "abcd"
Output: "dcbabcd"
-----------------

# 1756_Design_Most_Recently_Used_Queue
# 1756. Design Most Recently Used Queue


-----------------

# 682_Baseball_Game
# 682. Baseball Game

You're now a baseball game point recorder.
    

    
        Given a list of strings, each string can be one of the 4 following types:
    
        Integer (one round's score): Directly represents the number of points you
            get in this round.
        
        "+" (one round's score): Represents that the points you get in this round
            are the sum of the last two valid round's points.
        
        "D" (one round's score): Represents that the points you get in this round
            are the doubled data of the last valid round's points.
        
        "C" (an operation, which isn't a round's score): Represents the last valid
            round's points you get were invalid and should be removed.
        
    
    

    
        Each round's operation is permanent and could have an impact on the round before and the
        round after.
    

    
        You need to return the sum of the points you could get in all the rounds.
    

    Example 1:
    Input: ["5","2","C","D","+"]
Output: 30
Explanation:
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get 2 points. The sum is: 7.
Operation 1: The round 2's data was invalid. The sum is: 5.
Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
Round 4: You could get 5 + 10 = 15 points. The sum is: 30.

    

    Example 2:
    Input: ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get -2 points. The sum is: 3.
Round 3: You could get 4 points. The sum is: 7.
Operation 1: The round 3's data is invalid. The sum is: 3.
Round 4: You could get -4 points (the round 3's data has been removed). The sum is: -1.
Round 5: You could get 9 points. The sum is: 8.
Round 6: You could get -4 + 9 = 5 points. The sum is 13.
Round 7: You could get 9 + 5 = 14 points. The sum is 27.

    

    Note:
    The size of the input list will be between 1 and 1000.
    Every integer represented in the list will be between -30000 and 30000.
-----------------

# 813_Largest_Sum_of_Averages
# 813. Largest Sum of Averages

We partition a row of numbers A into at most K adjacent
        (non-empty) groups, then our score is the sum of the average of each group. What is the
        largest score we can achieve?

    Note that our partition must use every number in A, and that scores are not necessarily
        integers.

    Example:
Input:
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation:
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.

     

    Note: 

    
        1 <= A.length <= 100.
        1 <= A[i] <= 10000.
        1 <= K <= A.length.
        Answers within 10^-6 of the correct answer will be accepted as correct.
-----------------

# 897_Increasing_Order_Search_Tree
# 897. Increasing Order Search Tree

Given a binary search tree, rearrange the tree in in-order so that the
        leftmost node in the tree is now the root of the tree, and every node has no left child and
        only 1 right child.

    Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  

    Note:

    
        The number of nodes in the given tree will be between 1 and 100.
        Each node will have a unique integer value from 0 to 1000.
-----------------

# 572_Subtree_of_Another_Tree
# 572. Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has
        exactly the same structure and node values with a subtree of s. A subtree of s
        is a tree consists of a node in s and all of this node's descendants. The tree
        s could also be considered as a subtree of itself.
    

    Example 1:

        Given tree s:
         3
    / \
   4   5
  / \
 1   2

    Given tree t:
       4
  / \
 1   2

    Return true, because t has the same structure and node values with a subtree of s.
    

    Example 2:

        Given tree s:
         3
    / \
   4   5
  / \
 1   2
    /
   0

    Given tree t:
       4
  / \
 1   2

    Return false.
-----------------

# 1004_Max_Consecutive_Ones_III
# 1004. Max Consecutive Ones III

Given an array A of 0s and 1s, we may change up to K values
        from 0 to 1.

    Return the length of the longest (contiguous) subarray that contains only 1s.
-----------------

# 687_Longest_Univalue_Path
# 687. Longest Univalue Path

Given a binary tree, find the length of the longest path where each node in the path has the
        same value. This path may or may not pass through the root.

    The length of path between two nodes is represented by the number of edges between them.

     

    Example 1:

    Input:

                  5
             / \
            4   5
           / \   \
          1   1   5

    Output: 2

     

    Example 2:

    Input:

                  1
             / \
            4   5
           / \   \
          4   4   5

    Output: 2

     

    Note: The given binary tree has not more than 10000 nodes. The height of the tree is
        not more than 1000.
-----------------

# 1209_Remove_All_Adjacent_Duplicates_in_String_II
# 1209. Remove All Adjacent Duplicates in String II

Given a string s, a k duplicate removal consists
        of choosing k adjacent and equal letters from s and
        removing them causing the left and the right side of the deleted substring to
        concatenate together.

    We repeatedly make k duplicate removals on s until we no longer
        can.

    Return the final string after all such duplicate removals have been made.

    It is guaranteed that the answer is unique.

     
    Example 1:

    Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

    Example 2:

    Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

    Example 3:

    Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"

     
    Constraints:

    
        1 <= s.length <= 10^5
        2 <= k <= 10^4
        s only contains lower case English letters.
-----------------

# 159_Longest_Substring_with_At_Most_Two_Distinct_Characters
# 159. Longest Substring with At Most Two Distinct Characters

Given a string s , find the length of the longest
        substring t  that contains at
            most 2 distinct characters.

    Example 1:

    Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.

    Example 2:

    Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
-----------------

# 1525_Number_of_Good_Ways_to_Split_a_String
# 1525. Number of Good Ways to Split a String


-----------------

# 229_Majority_Element_II
# 229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊
        n/3 ⌋ times.

    Note: The algorithm should run in linear time and in O(1) space.

    Example 1:

    Input: [3,2,3]
Output: [3]

    Example 2:

    Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
-----------------

# 726_Number_of_Atoms
# 726. Number of Atoms

Given a chemical formula (given as a string), return the count of each atom.
    
    
        An atomic element always starts with an uppercase character, then zero or more lowercase
        letters, representing the name.
    
    
        1 or more digits representing the count of that element may follow if the count is greater
        than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible,
        but H1O2 is impossible.
    
    
        Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also
        a formula.
    
    
        A formula placed in parentheses, and a count (optionally added) is also a formula. For
        example, (H2O2) and (H2O2)3 are formulas.
    
    
        Given a formula, output the count of all elements as a string in the following form: the
        first name (in sorted order), followed by its count (if that count is more than 1), followed
        by the second name (in sorted order), followed by its count (if that count is more than 1),
        and so on.

    Example 1:
    Input:
formula = "H2O"
Output: "H2O"
Explanation:
The count of elements are {'H': 2, 'O': 1}.

    

    Example 2:
    Input:
formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation:
The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

    

    Example 3:
    Input:
formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation:
The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

    

    Note:
    All atom names consist of lowercase letters, except for the first character which is
        uppercase.
    
    The length of formula will be in the range [1, 1000].
    formula will only consist of letters, digits, and round parentheses, and is a
        valid formula as defined in the problem.
-----------------

# 1260_Shift_2D_Grid
# 1260. Shift 2D Grid


-----------------

# 101_Symmetric_Tree
# 101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its
        center).

    For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

        1
   / \
  2   2
 / \ / \
3  4 4  3

     

    But the following [1,2,2,null,3,null,3] is not:

        1
   / \
  2   2
   \   \
   3    3

     

    Note:
        Bonus points if you could solve it both recursively and iteratively.
-----------------

# 1527_Patients_With_a_Condition
# 1527. Patients With a Condition


-----------------

# 7_Reverse_Integer
# 7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

    Input: 123
Output: 321

    Example 2:

    Input: -123
Output: -321

    Example 3:

    Input: 120
Output: 21

    Note:
        Assume we are dealing with an environment which could only store integers within the 32-bit
        signed integer range: [−231,  231 − 1]. For the
        purpose of this problem, assume that your function returns 0 when the reversed integer
        overflows.
-----------------

# 241_Different_Ways_to_Add_Parentheses
# 241. Different Ways to Add Parentheses

Given a string of numbers and operators, return all possible results from computing all the
        different possible ways to group numbers and operators. The valid operators are
        +, - and *.

    Example 1:

    Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0
(2-(1-1)) = 2

    Example 2:

    Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation:
(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
-----------------

# 344_Reverse_String
# 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters
        char[].

    Do not allocate extra space for another array, you must do this by modifying the
        input array in-place
        with O(1) extra memory.

    You may assume all the characters consist of printable
        ascii characters.
-----------------

# 1072_Flip_Columns_For_Maximum_Number_of_Equal_Rows
# 1072. Flip Columns For Maximum Number of Equal Rows

Given a matrix consisting of 0s and 1s, we may choose any number of columns in
        the matrix and flip every cell in that column.  Flipping a cell
        changes the value of that cell from 0 to 1 or from 1 to 0.

    Return the maximum number of rows that have all values equal after some number of flips.
-----------------

# 1461_Check_If_a_String_Contains_All_Binary_Codes_of_Size_K
# 1461. Check If a String Contains All Binary Codes of Size K


-----------------

# 699_Falling_Squares
# 699. Falling Squares

On an infinite number line (x-axis), we drop given squares in the order they are given.

    The i-th square dropped (positions[i] = (left, side_length)) is a
        square with the left-most point being positions[i][0] and sidelength positions[i][1].
    

    The square is dropped with the bottom edge parallel to the number line, and from a higher
        height than all currently landed squares. We wait for each square to stick before dropping
        the next.

    The squares are infinitely sticky on their bottom edge, and will remain fixed to any positive
        length surface they touch (either the number line or another square). Squares dropped
        adjacent to each other will not stick together prematurely.
     

    Return a list ans of heights. Each height ans[i] represents the
        current highest height of any square we have dropped, after dropping squares represented by
        positions[0], positions[1], ..., positions[i].

    Example 1:

    Input: [[1, 2], [2, 3], [6, 1]]
Output: [2, 5, 5]
Explanation:

    After the first drop of positions[0] = [1, 2]: _aa _aa ------- The maximum
        height of any square is 2.

    After the second drop of positions[1] = [2, 3]: __aaa __aaa __aaa _aa__ _aa__
        -------------- The maximum height of any square is 5. The larger square stays on top
        of the smaller square despite where its center of gravity is, because squares are infinitely
        sticky on their bottom edge.

    After the third drop of positions[1] = [6, 1]: __aaa __aaa __aaa _aa _aa___a
        -------------- The maximum height of any square is still 5. Thus, we return an answer
        of [2, 5, 5].

     
     

    Example 2:

    Input: [[100, 100], [200, 100]]
Output: [100, 100]
Explanation: Adjacent squares don't get stuck prematurely - only their bottom edge can stick to surfaces.

     

    Note:

    
        1 <= positions.length <= 1000.
        1 <= positions[i][0] <= 10^8.
        1 <= positions[i][1] <= 10^6.
-----------------

# 1379_Find_a_Corresponding_Node_of_a_Binary_Tree_in_a_Clone_of_That_Tree
# 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree


-----------------

# 1409_Queries_on_a_Permutation_With_Key
# 1409. Queries on a Permutation With Key


-----------------

# 502_IPO
# 502. IPO

Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to
        Venture Capital, LeetCode would like to work on some projects to increase its capital before
        the IPO. Since it has limited resources, it can only finish at most k distinct
        projects before the IPO. Help LeetCode design the best way to maximize its total capital
        after finishing at most k distinct projects.
    

    
        You are given several projects. For each project i, it has a pure profit
        Pi and a minimum capital of Ci is needed to start the
        corresponding project. Initially, you have W capital. When you finish a project, you
        will obtain its pure profit and the profit will be added to your total capital.
    

    
        To sum up, pick a list of at most k distinct projects from given projects to maximize
        your final capital, and output your final maximized capital.
    

    Example 1:
    Input: k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].

Output: 4

Explanation: Since your initial capital is 0, you can only start the project indexed 0.
             After finishing it you will obtain profit 1 and your capital becomes 1.
             With capital 1, you can either start the project indexed 1 or the project indexed 2.
             Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
             Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

    

    Note:
    
        You may assume all numbers in the input are non-negative integers.
        The length of Profits array and Capital array will not exceed 50,000.
        The answer is guaranteed to fit in a 32-bit signed integer.
-----------------

# 353_Design_Snake_Game
# 353. Design Snake Game

Design a Snake
        game that is played on a device with screen size = width x height. Play the game online if you
        are not familiar with the game.

    The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

    You are given a list of food's positions in row-column order. When a snake eats the food,
        its length and the game's score both increase by 1.

    Each food appears one by one on the screen. For example, the second food will not appear
        until the first food was eaten by the snake.

    When a food does appear on the screen, it is guaranteed that it will not appear on a block
        occupied by the snake.

    Example:

    Given width = 3, height = 2, and food = [[1,2],[0,1]].

Snake snake = new Snake(width, height, food);

Initially the snake appears at position (0,0) and the food at (1,2).

|S| | |
| | |F|

snake.move("R"); -> Returns 0

| |S| |
| | |F|

snake.move("D"); -> Returns 0

| | | |
| |S|F|

snake.move("R"); -> Returns 1 (Snake eats the first food and right after that, the second food appears at (0,1) )

| |F| |
| |S|S|

snake.move("U"); -> Returns 1

| |F|S|
| | |S|

snake.move("L"); -> Returns 2 (Snake eats the second food)

| |S|S|
| | |S|

snake.move("U"); -> Returns -1 (Game over because snake collides with border)
-----------------

# 880_Decoded_String_at_Index
# 880. Decoded String at Index

An encoded string S is given.  To find and write the decoded
        string to a tape, the encoded string is read one character at a time and
        the following steps are taken:

    
        If the character read is a letter, that letter is written onto the tape.
        If the character read is a digit (say d), the entire current tape is
            repeatedly written d-1 more times in total.
        
    

    Now for some encoded string S, and an index K, find and return the
        K-th letter (1 indexed) in the decoded string.
-----------------

# 940_Distinct_Subsequences_II
# 940. Distinct Subsequences II

Given a string S, count the number of distinct, non-empty subsequences of S
        .

    Since the result may be large, return the answer modulo 10^9 +
        7.

     

    Example 1:

    Input: "abc"
Output: 7
Explanation: The 7 distinct subsequences are "a", "b", "c", "ab", "ac", "bc", and "abc".
-----------------

# 1705_Maximum_Number_of_Eaten_Apples
# 1705. Maximum Number of Eaten Apples


-----------------

# 233_Number_of_Digit_One
# 233. Number of Digit One

Given an integer n, count the total number of digit 1 appearing in all non-negative integers
        less than or equal to n.

    Example:

    Input: 13
Output: 6
Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
-----------------

# 592_Fraction_Addition_and_Subtraction
# 592. Fraction Addition and Subtraction

Given a string representing an expression of fraction addition and subtraction, you need to
        return the calculation result in string format. The final result should be irreducible fraction.
        If your final result is an integer, say 2, you need to change it to the format
        of fraction that has denominator 1. So in this case, 2 should be
        converted to 2/1.

    Example 1:
    Input:"-1/2+1/2"
Output: "0/1"

    

    Example 2:
    Input:"-1/2+1/2+1/3"
Output: "1/3"

    

    Example 3:
    Input:"1/3-1/2"
Output: "-1/6"

    

    Example 4:
    Input:"5/3+1/3"
Output: "2/1"

    

    Note:
    
        The input string only contains '0' to '9', '/',
            '+' and '-'. So does the output.
        
        Each fraction (input and output) has format ±numerator/denominator. If the
            first input fraction or the output is positive, then '+' will be omitted.
        
        The input only contains valid irreducible fractions, where the numerator
            and denominator of each fraction will always be in the range [1,10]. If the
            denominator is 1, it means this fraction is actually an integer in a fraction format
            defined above.
        
        The number of given fractions will be in the range [1,10].
        The numerator and denominator of the final result are guaranteed to be valid and
            in the range of 32-bit int.
-----------------

# 1155_Number_of_Dice_Rolls_With_Target_Sum
# 1155. Number of Dice Rolls With Target Sum

You have d dice, and each die has f faces numbered 1, 2, ...,
        f.

    Return the number of possible ways (out of fd total ways)
        modulo 10^9 + 7 to roll the dice so the sum of the face up
        numbers equals target.

     
    Example 1:

    Input: d = 1, f = 6, target = 3
Output: 1
Explanation: 
You throw one die with 6 faces.  There is only one way to get a sum of 3.

    Example 2:

    Input: d = 2, f = 6, target = 7
Output: 6
Explanation: 
You throw two dice, each with 6 faces.  There are 6 ways to get a sum of 7:
1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

    Example 3:

    Input: d = 2, f = 5, target = 10
Output: 1
Explanation: 
You throw two dice, each with 5 faces.  There is only one way to get a sum of 10: 5+5.

    Example 4:

    Input: d = 1, f = 2, target = 3
Output: 0
Explanation: 
You throw one die with 2 faces.  There is no way to get a sum of 3.

    Example 5:

    Input: d = 30, f = 30, target = 500
Output: 222616187
Explanation: 
The answer must be returned modulo 10^9 + 7.

     
    Constraints:

    
        1 <= d, f <= 30
        1 <= target <= 1000
-----------------

# 1181_Before_and_After_Puzzle
# 1181. Before and After Puzzle

Given a list of phrases, generate a list of Before and After puzzles.

    A phrase is a string that consists of lowercase English letters and spaces only. No
        space appears in the start or the end of a phrase. There are no consecutive spaces in
        a phrase.

    Before and After puzzles are phrases that are formed by merging two
        phrases where the last word of the first phrase is the same as
        the first word of the second phrase.

    Return the Before and After puzzles that can be formed by every two
        phrases phrases[i] and phrases[j] where i
            != j. Note that the order of matching two phrases matters, we want to consider
        both orders.

    You should return a list of distinct strings sorted lexicographically.
    

     
    Example 1:

    Input: phrases = ["writing code","code rocks"]
Output: ["writing code rocks"]

    Example 2:

    Input: phrases = ["mission statement",
                  "a quick bite to eat",
                  "a chip off the old block",
                  "chocolate bar",
                  "mission impossible",
                  "a man on a mission",
                  "block party",
                  "eat my words",
                  "bar of soap"]
Output: ["a chip off the old block party",
         "a man on a mission impossible",
         "a man on a mission statement",
         "a quick bite to eat my words",
         "chocolate bar of soap"]

    Example 3:

    Input: phrases = ["a","b","a"]
Output: ["a"]

     
    Constraints:

    
        1 <= phrases.length <= 100
        1 <= phrases[i].length <= 100
-----------------

# 1481_Least_Number_of_Unique_Integers_after_K_Removals
# 1481. Least Number of Unique Integers after K Removals


-----------------

# 420_Strong_Password_Checker
# 420. Strong Password Checker

A password is considered strong if below conditions are all met:

    
         It has at least 6 characters and at most 20 characters.
         It must contain at least one lowercase letter, at least one uppercase letter, and at
            least one digit.
        
         It must NOT contain three repeating characters in a row ("...aaa..." is weak, but
            "...aa...a..." is strong, assuming other conditions are met).
        
    

    Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM
        change required to make s a strong password. If s is already strong, return 0.

    Insertion, deletion or replace of any one character are all considered as one change.
-----------------

# 1835_Find_XOR_Sum_of_All_Pairs_Bitwise_AND
# 1835. Find XOR Sum of All Pairs Bitwise AND


-----------------

# 1097_Game_Play_Analysis_V
# 1097. Game Play Analysis V

Table: Activity

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key of this table.
This table shows the activity of players of some game.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on some day using some device.

     

    We define the install date of a player to be the first login day of that player.

    We also define day 1 retention of some date X to be the
        number of players whose install date is X and they logged back
        in on the day right after X, divided by the number of players whose install
        date is X, rounded to 2 decimal places.

    Write an SQL query that reports for each install date, the number of
        players that installed the game on that day and the day 1
        retention.

    The query result format is in the following example:

    Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-03-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-01 | 0            |
| 3         | 4         | 2016-07-03 | 5            |
+-----------+-----------+------------+--------------+

Result table:
+------------+----------+----------------+
| install_dt | installs | Day1_retention |
+------------+----------+----------------+
| 2016-03-01 | 2        | 0.50           |
| 2017-06-25 | 1        | 0.00           |
+------------+----------+----------------+
Player 1 and 3 installed the game on 2016-03-01 but only player 1 logged back in on 2016-03-02 so the day 1 retention of 2016-03-01 is 1 / 2 = 0.50
Player 2 installed the game on 2017-06-25 but didn't log back in on 2017-06-26 so the day 1 retention of 2017-06-25 is 0 / 1 = 0.00
-----------------

# 1857_Largest_Color_Value_in_a_Directed_Graph
# 1857. Largest Color Value in a Directed Graph


-----------------

# 1768_Merge_Strings_Alternately
# 1768. Merge Strings Alternately


-----------------

# 272_Closest_Binary_Search_Tree_Value_II
# 272. Closest Binary Search Tree Value II

Given a non-empty binary search tree and a target value, find k values in the BST that
        are closest to the target.

    Note:

    
        Given target value is a floating point.
        You may assume k is always valid, that is: k ≤ total nodes.
        You are guaranteed to have only one unique set of k values in the BST that are
            closest to the target.
        
    

    Example:

    Input: root = [4,2,5,1,3], target = 3.714286, and k = 2

    4
   / \
  2   5
 / \
1   3

Output: [4,3]

    Follow up:
        Assume that the BST is balanced, could you solve it in less than O(n) runtime
        (where n = total nodes)?
-----------------

# 1266_Minimum_Time_Visiting_All_Points
# 1266. Minimum Time Visiting All Points


-----------------

# 1258_Synonymous_Sentences
# 1258. Synonymous Sentences


-----------------

# 257_Binary_Tree_Paths
# 257. Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

    Note: A leaf is a node with no children.

    Example:

    Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
-----------------

# 21_Merge_Two_Sorted_Lists
# 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by
        splicing together the nodes of the first two lists.

    Example:
    Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
-----------------

# 523_Continuous_Subarray_Sum
# 523. Continuous Subarray Sum

Given a list of non-negative numbers and a target integer k, write a function
        to check if the array has a continuous subarray of size at least 2 that sums up to a
        multiple of k, that is, sums up to n*k where n is also an integer.

     

    Example 1:

    Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

    Example 2:

    Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

     

    Note:

    
        The length of the array won't exceed 10,000.
        You may assume the sum of all the numbers is in the range of a signed 32-bit integer.
-----------------

# 569_Median_Employee_Salary
# 569. Median Employee Salary

The Employee table holds all employees. The employee table has three columns:
        Employee Id, Company Name, and Salary.

    +-----+------------+--------+
|Id   | Company    | Salary |
+-----+------------+--------+
|1    | A          | 2341   |
|2    | A          | 341    |
|3    | A          | 15     |
|4    | A          | 15314  |
|5    | A          | 451    |
|6    | A          | 513    |
|7    | B          | 15     |
|8    | B          | 13     |
|9    | B          | 1154   |
|10   | B          | 1345   |
|11   | B          | 1221   |
|12   | B          | 234    |
|13   | C          | 2345   |
|14   | C          | 2645   |
|15   | C          | 2645   |
|16   | C          | 2652   |
|17   | C          | 65     |
+-----+------------+--------+

    Write a SQL query to find the median salary of each company. Bonus points if you can solve it
        without using any built-in SQL functions.

    +-----+------------+--------+
|Id   | Company    | Salary |
+-----+------------+--------+
|5    | A          | 451    |
|6    | A          | 513    |
|12   | B          | 234    |
|9    | B          | 1154   |
|14   | C          | 2645   |
+-----+------------+--------+
-----------------

# 1330_Reverse_Subarray_To_Maximize_Array_Value
# 1330. Reverse Subarray To Maximize Array Value


-----------------

# 1848_Minimum_Distance_to_the_Target_Element
# 1848. Minimum Distance to the Target Element


-----------------

# 856_Score_of_Parentheses
# 856. Score of Parentheses

Given a balanced parentheses string S, compute the score of the string based on
        the following rule:

    
        () has score 1
        AB has score A + B, where A and B are balanced parentheses
            strings.
        
        (A) has score 2 * A, where A is a balanced parentheses string.
-----------------

# 1471_The_k_Strongest_Values_in_an_Array
# 1471. The k Strongest Values in an Array


-----------------

# 748_Shortest_Completing_Word
# 748. Shortest Completing Word

Find the minimum length word from a given dictionary words, which has all the
        letters from the string licensePlate. Such a word is said to complete
        the given string licensePlate
    
    
        Here, for letters we ignore case. For example, "P" on the
        licensePlate still matches "p" on the word.
    
    
        It is guaranteed an answer exists. If there are multiple answers, return the one that occurs
        first in the array.
    
    
        The license plate might have the same letter occurring multiple times. For example, given a
        licensePlate of "PP", the word "pair" does not
        complete the licensePlate, but the word "supper" does.
    
    

    Example 1:
    Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.

    

    Example 2:
    Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
Output: "pest"
Explanation: There are 3 smallest length words that contains the letters "s".
We return the one that occurred first.

    

    Note:
    
        licensePlate will be a string with length in range [1, 7].
        
        licensePlate will contain digits, spaces, or letters (uppercase or
            lowercase).
        
        words will have a length in the range [10, 1000].
        Every words[i] will consist of lowercase letters, and have length in range
            [1, 15].
-----------------

# 1817_Finding_the_Users_Active_Minutes
# 1817. Finding the Users Active Minutes


-----------------

# 801_Minimum_Swaps_To_Make_Sequences_Increasing
# 801. Minimum Swaps To Make Sequences Increasing

We have two integer sequences A and B of the same non-zero length.
    

    We are allowed to swap elements A[i] and B[i].  Note that both
        elements are in the same index position in their respective sequences.

    At the end of some number of swaps, A and B are both strictly
        increasing.  (A sequence is strictly increasing if and only if A[0] <
            A[1] < A[2] < ... < A[A.length - 1].)

    Given A and B, return the minimum number of swaps to make both sequences strictly increasing. 
        It is guaranteed that the given input always makes it possible.

    Example:
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.

    Note:

    
        A, B are arrays with the same length, and that length will be in the range
            [1, 1000].
        
        A[i], B[i] are integer values in the range [0, 2000].
-----------------

# 1438_Longest_Continuous_Subarray_With_Absolute_Diff_Less_Than_or_Equal_to_Limit
# 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit


-----------------

# 1285_Find_the_Start_and_End_Number_of_Continuous_Ranges
# 1285. Find the Start and End Number of Continuous Ranges


-----------------

# 850_Rectangle_Area_II
# 850. Rectangle Area II

We are given a list of (axis-aligned) rectangles.  Each rectangle[i]
        = [x1, y1, x2, y2] , where (x1, y1) are the coordinates of the bottom-left
        corner, and (x2, y2) are the coordinates of the top-right corner of the ith
        rectangle.

    Find the total area covered by all rectangles in the plane.  Since the
        answer may be too large, return it modulo 10^9 + 7.

    

    Example 1:

    Input: [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
Output: 6
Explanation: As illustrated in the picture.

    Example 2:

    Input: [[0,0,1000000000,1000000000]]
Output: 49
Explanation: The answer is 10^18 modulo (10^9 + 7), which is (10^9)^2 = (-7)^2 = 49.

    Note:

    
        1 <= rectangles.length <= 200
        rectanges[i].length = 4
        0 <= rectangles[i][j] <= 10^9
        The total area covered by all rectangles will never exceed 2^63 - 1 and
            thus will fit in a 64-bit signed integer.
-----------------

# 57_Insert_Interval
# 57. Insert Interval

Given a set of non-overlapping intervals, insert a new interval into the intervals
        (merge if necessary).

    You may assume that the intervals were initially sorted according to their start times.

    Example 1:

    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

    Example 2:

    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

    NOTE: input types have been changed on April 15, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 112_Path_Sum
# 112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding
        up all the values along the path equals the given sum.

    Note: A leaf is a node with no children.

    Example:

    Given the below binary tree and sum = 22,

          5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

    return true, as there exist a root-to-leaf path 5->4->11->2 which sum
        is 22.
-----------------

# 1446_Consecutive_Characters
# 1446. Consecutive Characters


-----------------

# 1060_Missing_Element_in_Sorted_Array
# 1060. Missing Element in Sorted Array

Given a sorted array A of unique numbers, find the
        K-th missing number starting from the leftmost number of the array.
    

     

    Example 1:

    Input: A = [4,7,9,10], K = 1
Output: 5
Explanation: 
The first missing number is 5.

    Example 2:

    Input: A = [4,7,9,10], K = 3
Output: 8
Explanation: 
The missing numbers are [5,6,8,...], hence the third missing number is 8.

    Example 3:

    Input: A = [1,2,4], K = 3
Output: 6
Explanation: 
The missing numbers are [3,5,6,7,...], hence the third missing number is 6.

     

    Note:

    
        1 <= A.length <= 50000
        1 <= A[i] <= 1e7
        1 <= K <= 1e8
-----------------

# 834_Sum_of_Distances_in_Tree
# 834. Sum of Distances in Tree

An undirected, connected tree with N nodes labelled 0...N-1
        and N-1 edges are given.

    The ith edge connects nodes edges[i][0] and edges[i][1] together.
    

    Return a list ans, where ans[i] is the sum of the distances between
        node i and all other nodes.

    Example 1:

    Input: N = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: 
Here is a diagram of the given tree:
  0
 / \
1   2
   /|\
  3 4 5
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.  Hence, answer[0] = 8, and so on.

    Note: 1 <= N <= 10000
-----------------

# 653_Two_Sum_IV_-_Input_is_a_BST
# 653. Two Sum IV - Input is a BST

Given a Binary Search Tree and a target number, return true if there exist two elements in
        the BST such that their sum is equal to the given target.

    Example 1:

    Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True

     

    Example 2:

    Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
-----------------

# 664_Strange_Printer
# 664. Strange Printer

There is a strange printer with the following two special requirements:

    
        The printer can only print a sequence of the same character each time.
        At each turn, the printer can print new characters starting from and ending at any
            places, and will cover the original existing characters.
        
    

    

    
        Given a string consists of lower English letters only, your job is to count the minimum
        number of turns the printer needed in order to print it.
    

    Example 1:
    Input: "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".

    

    Example 2:
    Input: "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.

    

    Hint: Length of the given string will not exceed 100.
-----------------

# 1375_Bulb_Switcher_III
# 1375. Bulb Switcher III


-----------------

# 1408_String_Matching_in_an_Array
# 1408. String Matching in an Array


-----------------

# 1166_Design_File_System
# 1166. Design File System

You are asked to design a file system which provides two functions:

    
        createPath(path, value): Creates a new path and associates a value
            to it if possible and returns True. Returns False if
            the path already exists or its parent path doesn't exist.
        
        get(path): Returns the value associated with a path or returns -1 if
            the path doesn't exist.
        
    

    The format of a path is one or more concatenated strings of the
        form: / followed by one or more lowercase English letters. For example,
        /leetcode and /leetcode/problems are valid paths while
        an empty string and / are not.

    Implement the two functions.

    Please refer to the examples for clarifications.

     
    Example 1:

    Input:
["FileSystem","createPath","get"]
[[],["/a",1],["/a"]]
Output:
[null,true,1]
Explanation:
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/a", 1); // return true
fileSystem.get("/a"); // return 1

    Example 2:

    Input:
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
Output:
[null,true,true,2,false,-1]
Explanation:
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // return true
fileSystem.createPath("/leet/code", 2); // return true
fileSystem.get("/leet/code"); // return 2
fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
fileSystem.get("/c"); // return -1 because this path doesn't exist.

     
    Constraints:

    
        The number of calls to the two functions is less than or equal to
            10^4 in total.
        
        2 <= path.length <= 100
        1 <= value <= 10^9
    

    NOTE: create method has been changed on August 29, 2019 to
        createPath. Please reset to default code definition to get new method signature.
-----------------

# 299_Bulls_and_Cows
# 299. Bulls and Cows

You are playing the following Bulls and Cows game with your friend:
        You write down a number and ask your friend to guess what the number is. Each time your
        friend makes a guess, you provide a hint that indicates how many digits in said guess match
        your secret number exactly in both digit and position (called "bulls") and how
        many digits match the secret number but locate in the wrong position (called "cows").
        Your friend will use successive guesses and hints to eventually derive the secret number.
    

    Write a function to return a hint according to the secret number and friend's guess, use
        A to indicate the bulls and B to indicate the cows. 

    Please note that both secret number and friend's guess may contain duplicate digits.

    Example 1:

    Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

    Example 2:

    Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.

    Note: You may assume that the secret number and your friend's guess only
        contain digits, and their lengths are always equal.
-----------------

# 586_Customer_Placing_the_Largest_Number_of_Orders
# 586. Customer Placing the Largest Number of Orders

Query the customer_number from the orders table for the customer who has
        placed the largest number of orders.

    It is guaranteed that exactly one customer will have placed more orders than any other
        customer.

    The orders table is defined as follows:

    | Column            | Type      |
|-------------------|-----------|
| order_number (PK) | int       |
| customer_number   | int       |
| order_date        | date      |
| required_date     | date      |
| shipped_date      | date      |
| status            | char(15)  |
| comment           | char(200) |

    Sample Input

    | order_number | customer_number | order_date | required_date | shipped_date | status | comment |
|--------------|-----------------|------------|---------------|--------------|--------|---------|
| 1            | 1               | 2017-04-09 | 2017-04-13    | 2017-04-12   | Closed |         |
| 2            | 2               | 2017-04-15 | 2017-04-20    | 2017-04-18   | Closed |         |
| 3            | 3               | 2017-04-16 | 2017-04-25    | 2017-04-20   | Closed |         |
| 4            | 3               | 2017-04-18 | 2017-04-28    | 2017-04-25   | Closed |         |

    Sample Output

    | customer_number |
|-----------------|
| 3               |

    Explanation

    The customer with number '3' has two orders, which is greater than either customer '1' or '2' because each of them  only has one order.
So the result is customer_number '3'.

    Follow up: What if more than one customer have the largest number of orders, can
        you find all the customer_number in this case?
-----------------

# 1589_Maximum_Sum_Obtained_of_Any_Permutation
# 1589. Maximum Sum Obtained of Any Permutation


-----------------

# 703_Kth_Largest_Element_in_a_Stream
# 703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that
        it is the kth largest element in the sorted order, not the kth distinct element.

    Your KthLargest class will have a constructor which accepts an integer
        k and an integer array nums, which contains initial elements from the
        stream. For each call to the method KthLargest.add, return the element
        representing the kth largest element in the stream.

    Example:

    int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

    Note: 
        You may assume that nums' length ≥ k-1 and
        k ≥ 1.
-----------------

# 1753_Maximum_Score_From_Removing_Stones
# 1753. Maximum Score From Removing Stones


-----------------

# 979_Distribute_Coins_in_Binary_Tree
# 979. Distribute Coins in Binary Tree

Given the root of a binary tree with N nodes, each
        node in the tree has node.val coins, and there are
        N coins total.

    In one move, we may choose two adjacent nodes and move one coin from one node to another. 
        (The move may be from parent to child, or from child to parent.)

    Return the number of moves required to make every node have exactly one coin.
-----------------

# 1454_Active_Users
# 1454. Active Users


-----------------

# 819_Most_Common_Word
# 819. Most Common Word

Given a paragraph and a list of banned words, return the most frequent word that is not
        in the list of banned words.  It is guaranteed there is at least one word that isn't
        banned, and that the answer is unique.

    Words in the list of banned words are given in lowercase, and free of punctuation. 
        Words in the paragraph are not case sensitive.  The answer is in lowercase.

     

    Example:

    Input:
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.

     

    Note: 

    
        1 <= paragraph.length <= 1000.
        0 <= banned.length <= 100.
        1 <= banned[i].length <= 10.
        The answer is unique, and written in lowercase (even if its occurrences in paragraph may
            have uppercase symbols, and even if it is a proper noun.)
        
        paragraph only consists of letters, spaces, or the punctuation symbols
            !?',;.
        There are no hyphens or hyphenated words.
        Words only consist of letters, never apostrophes or other punctuation symbols.
-----------------

# 1276_Number_of_Burgers_with_No_Waste_of_Ingredients
# 1276. Number of Burgers with No Waste of Ingredients


-----------------

# 77_Combinations
# 77. Combinations

Given two integers n and k, return all possible combinations of k
        numbers out of 1 ... n.

    Example:

    Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
-----------------

# 413_Arithmetic_Slices
# 413. Arithmetic Slices

A sequence of number is called arithmetic if it consists of at least three elements and if
        the difference between any two consecutive elements is the same.

    For example, these are arithmetic sequence:
    1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

    The following sequence is not arithmetic.
    1, 1, 2, 5, 7
    

    A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of
        integers (P, Q) such that 0 <= P < Q < N.

    A slice (P, Q) of array A is called arithmetic if the sequence:
        A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.
    

    The function should return the number of arithmetic slices in the array A. 
    

    Example:
    A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
-----------------

# 707_Design_Linked_List
# 707. Design Linked List

Design your implementation of the linked list. You can choose to use the singly linked
        list or the doubly linked list. A node in a singly linked list should have two
        attributes: val and next. val is the value of
        the current node, and next is a pointer/reference to the next
        node. If you want to use the doubly linked list, you will need one more attribute
        prev to indicate the previous node in the linked list. Assume all nodes in the
        linked list are 0-indexed.

    Implement these functions in your linked list class:

    
        get(index) : Get the value of the index-th node in the linked
            list. If the index is invalid, return -1.
        
        addAtHead(val) : Add a node of value val before the first element of
            the linked list. After the insertion, the new node will be the first node of the linked
            list.
        
        addAtTail(val) : Append a node of value val to the last element of the
            linked list.
        
        addAtIndex(index, val) : Add a node of value val before the index-th node
            in the linked list. If index equals to the length of linked
            list, the node will be appended to the end of linked list. If index is greater than the
            length, the node will not be inserted. If index is negative, the node will be inserted
            at the head of the list.
        
        deleteAtIndex(index) : Delete the index-th node in the linked
            list, if the index is valid.
        
    

    Example:

    MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3

    Note:

    
        All values will be in the range of [1, 1000].
        The number of operations will be in the range of [1, 1000].
        Please do not use the built-in LinkedList library.
-----------------

# 1813_Sentence_Similarity_III
# 1813. Sentence Similarity III


-----------------

# 151_Reverse_Words_in_a_String
# 151. Reverse Words in a String

Given an input string, reverse the string word by word.

     

    Example 1:

    Input: "the sky is blue"
Output: "blue is sky the"

    Example 2:

    Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

    Example 3:

    Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

     

    Note:

    
        A word is defined as a sequence of non-space characters.
        Input string may contain leading or trailing spaces. However, your reversed string
            should not contain leading or trailing spaces.
        
        You need to reduce multiple spaces between two words to a single space in the reversed
            string.
        
    

     

    Follow up:

    For C programmers, try to solve it in-place in O(1) extra space.
-----------------

# 1211_Queries_Quality_and_Percentage
# 1211. Queries Quality and Percentage

Table: Queries

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| query_name  | varchar |
| result      | varchar |
| position    | int     |
| rating      | int     |
+-------------+---------+
There is no primary key for this table, it may have duplicate rows.
This table contains information collected from some queries on a database.
The position column has a value from 1 to 500.
The rating column has a value from 1 to 5. Query with rating less than 3 is a poor query.

     

    We define query quality as:

    
        The average of the ratio between query rating and its position.
    

    We also define poor query percentage as:

    
        The percentage of all queries with rating less than 3.
    

    Write an SQL query to find each query_name, the quality and
        poor_query_percentage.

    Both quality and poor_query_percentage should be rounded to
        2 decimal places.

    The query result format is in the following example:

    Queries table:
+------------+-------------------+----------+--------+
| query_name | result            | position | rating |
+------------+-------------------+----------+--------+
| Dog        | Golden Retriever  | 1        | 5      |
| Dog        | German Shepherd   | 2        | 5      |
| Dog        | Mule              | 200      | 1      |
| Cat        | Shirazi           | 5        | 2      |
| Cat        | Siamese           | 3        | 3      |
| Cat        | Sphynx            | 7        | 4      |
+------------+-------------------+----------+--------+

Result table:
+------------+---------+-----------------------+
| query_name | quality | poor_query_percentage |
+------------+---------+-----------------------+
| Dog        | 2.50    | 33.33                 |
| Cat        | 0.66    | 33.33                 |
+------------+---------+-----------------------+

Dog queries quality is ((5 / 1) + (5 / 2) + (1 / 200)) / 3 = 2.50
Dog queries poor_ query_percentage is (1 / 3) * 100 = 33.33

Cat queries quality equals ((2 / 5) + (3 / 3) + (4 / 7)) / 3 = 0.66
Cat queries poor_ query_percentage is (1 / 3) * 100 = 33.33
-----------------

# 555_Split_Concatenated_Strings
# 555. Split Concatenated Strings

Given a list of strings, you could concatenate these strings together into a loop, where for
        each string you could choose to reverse it or not. Among all the possible loops, you need to
        find the lexicographically biggest string after cutting the loop, which will make the looped
        string into a regular one.

    Specifically, to find the lexicographically biggest string, you need to experience two
        phases:
    
        Concatenate all the strings into a loop, where you can reverse some strings or not and
            connect them in the same order as given.
        
        Cut and make one breakpoint in any place of the loop, which will make the looped string
            into a regular one starting from the character at the cutpoint.
        
    
    

    And your job is to find the lexicographically biggest one among all the possible regular
        strings.

    Example:
    Input: "abc", "xyz"
Output: "zyxcba"
Explanation: You can get the looped string "-abcxyz-", "-abczyx-", "-cbaxyz-", "-cbazyx-", where '-' represents the looped status. The answer string came from the fourth looped one, where you could cut from the middle character 'a' and get "zyxcba".

    

    Note:
    
        The input strings will only contain lowercase letters.
        The total length of all the strings will not over 1,000.
-----------------

# 83_Remove_Duplicates_from_Sorted_List
# 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only
        once.

    Example 1:

    Input: 1->1->2
Output: 1->2

    Example 2:

    Input: 1->1->2->3->3
Output: 1->2->3
-----------------

# 849_Maximize_Distance_to_Closest_Person
# 849. Maximize Distance to Closest Person

In a row of seats, 1 represents a person sitting in that seat, and
        0 represents that the seat is empty. 

    There is at least one empty seat, and at least one person sitting.

    Alex wants to sit in the seat such that the distance between him and the closest person to
        him is maximized. 

    Return that maximum distance to closest person.
-----------------

# 1210_Minimum_Moves_to_Reach_Target_with_Rotations
# 1210. Minimum Moves to Reach Target with Rotations

In an n*n grid, there is a snake that spans 2 cells and starts moving
        from the top left corner at (0, 0) and (0, 1). The grid has empty
        cells represented by zeros and blocked cells represented by ones. The snake wants to reach
        the lower right corner at (n-1, n-2) and (n-1, n-1).
    

    In one move the snake can:

    
        Move one cell to the right if there are no blocked cells there. This move keeps the
            horizontal/vertical position of the snake as it is.
        
        Move down one cell if there are no blocked cells there. This move keeps the
            horizontal/vertical position of the snake as it is.
        
        Rotate clockwise if it's in a horizontal position and the two cells under it are
            both empty. In that case the snake moves from (r,
                c) and (r, c+1) to (r, c) and (r+1,
                c).
            
        Rotate counterclockwise if it's in a vertical position and the two cells to its
            right are both empty. In that case the snake moves from (r, c) and (r+1,
                c) to (r, c) and (r, c+1).
            
    

    Return the minimum number of moves to reach the target.

    If there is no way to reach the target, return -1.

     
    Example 1:

    

    Input: grid = [[0,0,0,0,0,1],
               [1,1,0,0,1,0],
               [0,0,0,0,1,1],
               [0,0,1,0,1,0],
               [0,1,1,0,0,0],
               [0,1,1,0,0,0]]
Output: 11
Explanation:
One possible solution is [right, right, rotate clockwise, right, down, down, down, down, rotate counterclockwise, right, down].

    Example 2:

    Input: grid = [[0,0,1,1,1,1],
               [0,0,0,0,1,1],
               [1,1,0,0,0,1],
               [1,1,1,0,0,1],
               [1,1,1,0,0,1],
               [1,1,1,0,0,0]]
Output: 9

     
    Constraints:

    
        2 <= n <= 100
        0 <= grid[i][j] <= 1
        It is guaranteed that the snake starts at empty cells.
-----------------

# 1788_Maximize_the_Beauty_of_the_Garden
# 1788. Maximize the Beauty of the Garden


-----------------

# 1740_Find_Distance_in_a_Binary_Tree
# 1740. Find Distance in a Binary Tree


-----------------

# 995_Minimum_Number_of_K_Consecutive_Bit_Flips
# 995. Minimum Number of K Consecutive Bit Flips

In an array A containing only 0s and 1s, a K-bit flip consists
        of choosing a (contiguous) subarray of length K and simultaneously changing
        every 0 in the subarray to 1, and every 1 in the subarray to 0.

    Return the minimum number of K-bit flips required so that there is no 0 in the
        array.  If it is not possible, return -1.

     

    Example 1:

    Input: A = [0,1,0], K = 1
Output: 2
Explanation: Flip A[0], then flip A[2].
-----------------

# 297_Serialize_and_Deserialize_Binary_Tree
# 297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits
        so that it can be stored in a file or memory buffer, or transmitted across a network
        connection link to be reconstructed later in the same or another computer environment.

    Design an algorithm to serialize and deserialize a binary tree. There is no restriction on
        how your serialization/deserialization algorithm should work. You just need to ensure that a
        binary tree can be serialized to a string and this string can be deserialized to the
        original tree structure.

    Example: 

    You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"

    Clarification: The above format is the same as how LeetCode serializes a binary tree.
        You do not necessarily need to follow this format, so please be creative and come up with
        different approaches yourself.

    Note: Do not use class member/global/static variables to store states.
        Your serialize and deserialize algorithms should be stateless.
-----------------

# 210_Course_Schedule_II
# 210. Course Schedule II

There are a total of n courses you have to take, labeled from 0 to
        n-1.

    Some courses may have prerequisites, for example to take course 0 you have to first take
        course 1, which is expressed as a pair: [0,1]

    Given the total number of courses and a list of prerequisite pairs, return
        the ordering of courses you should take to finish all courses.

    There may be multiple correct orders, you just need to return one of them. If it is
        impossible to finish all courses, return an empty array.

    Example 1:

    Input: 2, [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
             course 0. So the correct course order is [0,1] .

    Example 2:

    Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .

    Note:

    
        The input prerequisites is a graph represented by a list of edges, not
            adjacency matrices. Read more about how a graph is represented.
        
        You may assume that there are no duplicate edges in the input prerequisites.
-----------------

# 667_Beautiful_Arrangement_II
# 667. Beautiful Arrangement II

Given two integers n and k, you need to construct a list which
        contains n different positive integers ranging from 1 to
        n and obeys the following requirement: 

        Suppose this list is [a1, a2, a3, ... , an],
        then the list [|a1 - a2|, |a2 - a3|,
        |a3 - a4|, ... , |an-1 - an|] has exactly k
        distinct integers.
    

    
        If there are multiple answers, print any of them.
    

    Example 1:
    Input: n = 3, k = 1
Output: [1, 2, 3]
Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.

    

    Example 2:
    Input: n = 3, k = 2
Output: [1, 3, 2]
Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.

    

    Note:
    
        The n and k are in the range 1 <= k < n <= 104.
-----------------

# 1138_Alphabet_Board_Path
# 1138. Alphabet Board Path

On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].
    

    Here, board = ["abcde", "fghij", "klmno", "pqrst",
        "uvwxy", "z"], as shown in the diagram below.

    

    We may make the following moves:

    
        'U' moves our position up one row, if the position exists on the
            board;
        
        'D' moves our position down one row, if the position exists on the
            board;
        
        'L' moves our position left one column, if the position exists on
            the board;
        
        'R' moves our position right one column, if the position exists on
            the board;
        
        '!' adds the character board[r][c] at our current
            position (r, c) to the answer.
        
    

    (Here, the only positions that exist on the board are positions with letters on them.)

    Return a sequence of moves that makes our answer equal to target in the
        minimum number of moves.  You may return any path that does so.

     
    Example 1:
    Input: target = "leet"
Output: "DDR!UURRR!!DDD!"

    Example 2:
    Input: target = "code"
Output: "RR!DDRR!UUL!R!"

     
    Constraints:

    
        1 <= target.length <= 100
        target consists only of English lowercase letters.
-----------------

# 243_Shortest_Word_Distance
# 243. Shortest Word Distance

Given a list of words and two words word1 and word2, return the shortest
        distance between these two words in the list.

    Example:
        Assume that words = ["practice", "makes", "perfect",
            "coding", "makes"].

    Input: word1 = “coding”, word2 = “practice”
Output: 3

    Input: word1 = "makes", word2 = "coding"
Output: 1

    Note:
        You may assume that word1 does not equal to word2, and
        word1 and word2 are both in the list.
-----------------

# 177_Nth_Highest_Salary
# 177. Nth Highest Salary

Write a SQL query to get the nth highest salary from the
        Employee table.

    +----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+

    For example, given the above Employee table, the nth highest salary where
        n = 2 is 200. If there is no nth highest salary,
        then the query should return null.

    +------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
-----------------

# 191_Number_of_1_Bits
# 191. Number of 1 Bits

Write a function that takes an unsigned integer and return the number of '1' bits
        it has (also known as the Hamming weight).

     

    Example 1:

    Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

    Example 2:

    Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

    Example 3:

    Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

     

    Note:

    
        Note that in some languages such as Java, there is no unsigned integer type. In this
            case, the input will be given as signed integer type and should not affect your
            implementation, as the internal binary representation of the integer is the same whether
            it is signed or unsigned.
        
        In Java, the compiler represents the signed integers using 2's
            complement notation. Therefore, in Example 3 above the input
            represents the signed integer -3.
        
    

     

    Follow up:

    If this function is called many times, how would you optimize it?
-----------------

# 1412_Find_the_Quiet_Students_in_All_Exams
# 1412. Find the Quiet Students in All Exams


-----------------

# 107_Binary_Tree_Level_Order_Traversal_II
# 107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values.
        (ie, from left to right, level by level from leaf to root).

    
        For example:
        Given binary tree [3,9,20,null,null,15,7],
        3
   / \
  9  20
    /  \
   15   7

    
    
        return its bottom-up level order traversal as:
    [
  [15,7],
  [9,20],
  [3]
]
-----------------

# 683_K_Empty_Slots
# 683. K Empty Slots

You have N bulbs in a row numbered from 1 to N.
        Initially, all the bulbs are turned off. We turn on exactly one bulb everyday until all
        bulbs are on after N days.

    You are given an array bulbs of length N where bulbs[i]
        = x means that on the (i+1)th day, we will turn on the bulb at position
        x where i is 0-indexed and x is 1-indexed.
    

    Given an integer K, find out the minimum day number such that
        there exists two turned on bulbs that have
        exactly K bulbs between them that are all turned
            off.

    If there isn't such day, return -1.

     

    Example 1:

    Input:
bulbs: [1,3,2]
K: 1
Output: 2
Explanation:
On the first day: bulbs[0] = 1, first bulb is turned on: [1,0,0]
On the second day: bulbs[1] = 3, third bulb is turned on: [1,0,1]
On the third day: bulbs[2] = 2, second bulb is turned on: [1,1,1]
We return 2 because on the second day, there were two on bulbs with one off bulb between them.

    Example 2:

    Input:
bulbs: [1,2,3]
K: 1
Output: -1

     

    Note:

    
        1 <= N <= 20000
        1 <= bulbs[i] <= N
        bulbs is a permutation of numbers from 1 to N.
        
        0 <= K <= 20000
-----------------

# 1242_Web_Crawler_Multithreaded
# 1242. Web Crawler Multithreaded

Given a url startUrl and an interface HtmlParser, implement
        a Multi-threaded web crawler to crawl all links that are under the same
            hostname as startUrl. 

    Return all urls obtained by your web crawler in any order.

    Your crawler should:

    
        Start from the page: startUrl
        Call HtmlParser.getUrls(url) to get all urls from a webpage of given url.
        
        Do not crawl the same link twice.
        Explore only the links that are under the same hostname as startUrl.
        
    

    

    As shown in the example url above, the hostname is example.org. For simplicity
        sake, you may assume all urls use http protocol without
        any port specified. For example, the urls http://leetcode.com/problems
        and http://leetcode.com/contest are under the same hostname, while urls
        http://example.org/test and http://example.com/abc are not under
        the same hostname.

    The HtmlParser interface is defined as such: 

    interface HtmlParser {
  // Return a list of all urls from a webpage of given url.
  // This is a blocking call, that means it will do HTTP request and return when this request is finished.
  public List<String> getUrls(String url);
}

    Note that getUrls(String url) simulates performing a HTTP
        request. You can treat it as a blocking function call which waits for a HTTP request to
        finish. It is guaranteed that getUrls(String url) will return the urls
        within 15ms.  Single-threaded solutions will exceed the time limit so,
        can your multi-threaded web crawler do better?

    Below are two examples explaining the functionality of the problem, for custom testing
        purposes you'll have three variables urls, edges and startUrl. Notice that you will only have access to startUrl in your code, while urls and edges are not directly accessible to you in
        code.

     

    Follow up:

    
        Assume we have 10,000 nodes and 1 billion URLs to crawl. We will deploy the same
            software onto each node. The software can know about all the nodes. We have to
            minimize communication between machines and make sure each node does equal amount of
            work. How would your web crawler design change?
        
        What if one node fails or does not work?
        How do you know when the crawler is done?
    

     
    Example 1:

    

    Input:
urls = [
  "http://news.yahoo.com",
  "http://news.yahoo.com/news",
  "http://news.yahoo.com/news/topics/",
  "http://news.google.com",
  "http://news.yahoo.com/us"
]
edges = [[2,0],[2,1],[3,2],[3,1],[0,4]]
startUrl = "http://news.yahoo.com/news/topics/"
Output: [
  "http://news.yahoo.com",
  "http://news.yahoo.com/news",
  "http://news.yahoo.com/news/topics/",
  "http://news.yahoo.com/us"
]

    Example 2:

    

    Input:
urls = [
  "http://news.yahoo.com",
  "http://news.yahoo.com/news",
  "http://news.yahoo.com/news/topics/",
  "http://news.google.com"
]
edges = [[0,2],[2,1],[3,2],[3,1],[3,0]]
startUrl = "http://news.google.com"
Output: ["http://news.google.com"]
Explanation: The startUrl links to all other pages that do not share the same hostname.

     
    Constraints:

    
        1 <= urls.length <= 1000
        1 <= urls[i].length <= 300
        startUrl is one of the urls.
        Hostname label must be from 1 to 63 characters long, including the dots, may contain
            only the ASCII letters from 'a' to 'z', digits from '0' to
            '9' and the hyphen-minus character ('-').
        
        The hostname may not start or end with the hyphen-minus character ('-'). 
        See:  https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_hostnames
        
        You may assume there're no duplicates in url library.
-----------------

# 1759_Count_Number_of_Homogenous_Substrings
# 1759. Count Number of Homogenous Substrings


-----------------

# 679_24_Game
# 679. 24 Game

You have 4 cards each containing a number from 1 to 9. You need to judge whether they could
        operated through *, /, +, -,
        (, ) to get the value of 24.
    

    Example 1:
    Input: [4, 1, 8, 7]
Output: True
Explanation: (8-4) * (7-1) = 24

    

    Example 2:
    Input: [1, 2, 1, 2]
Output: False

    

    Note:
    
        The division operator / represents real division, not integer division. For
            example, 4 / (1 - 2/3) = 12.
        
        Every operation done is between two numbers. In particular, we cannot use -
            as a unary operator. For example, with [1, 1, 1, 1] as input, the
            expression -1 - 1 - 1 - 1 is not allowed.
        
        You cannot concatenate numbers together. For example, if the input is [1, 2, 1,
            2], we cannot write this as 12 + 12.
-----------------

# 993_Cousins_in_Binary_Tree
# 993. Cousins in Binary Tree

In a binary tree, the root node is at depth 0, and children of each depth k
        node are at depth k+1.

    Two nodes of a binary tree are cousins if they have the same depth, but have
        different parents.

    We are given the root of a binary tree with unique values, and the values x and
        y of two different nodes in the tree.

    Return true if and only if the nodes corresponding to the values
        x and y are cousins.

     

    Example 1:
        

    Input: root = [1,2,3,4], x = 4, y = 3
Output: false
-----------------

# 432_All_O`one_Data_Structure
# 432. All O`one Data Structure

Implement a data structure supporting the following operations:

    
    
        Inc(Key) - Inserts a new key
             with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty
                string.
        
        Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements
            an existing key by 1. If the key does not exist, this function does nothing. Key is
            guaranteed to be a non-empty string.
        
        GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return
            an empty string "".
        
        GetMinKey() - Returns one of the keys with minimal value. If no element exists, return
            an empty string "".
        
    
    

    
        Challenge: Perform all these in O(1) time complexity.
-----------------

# 126_Word_Ladder_II
# 126. Word Ladder II

Given two words (beginWord and endWord), and a dictionary's word list,
        find all shortest transformation sequence(s) from beginWord to endWord,
        such that:

    
        Only one letter can be changed at a time
        Each transformed word must exist in the word list. Note that beginWord is not
            a transformed word.
        
    

    Note:

    
        Return an empty list if there is no such transformation sequence.
        All words have the same length.
        All words contain only lowercase alphabetic characters.
        You may assume no duplicates in the word list.
        You may assume beginWord and endWord are non-empty and are not the
            same.
        
    

    Example 1:

    Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]

    Example 2:

    Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
-----------------

# 1560_Most_Visited_Sector_in_a_Circular_Track
# 1560. Most Visited Sector in a Circular Track


-----------------

# 465_Optimal_Account_Balancing
# 465. Optimal Account Balancing

A group of friends went on holiday and sometimes lent each other money. For example, Alice
        paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model
        each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice,
        Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the
        transactions can be represented as [[0, 1, 10], [2, 0, 5]].

    Given a list of transactions between a group of people, return the minimum number of
        transactions required to settle the debt.

    Note:
    
        A transaction will be given as a tuple (x, y, z). Note that x ≠ y and
            z > 0.
        
        Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also
            have the persons 0, 2, 6.
        
    
    

    Example 1:
    Input:
[[0,1,10], [2,0,5]]

Output:
2

Explanation:
Person #0 gave person #1 $10.
Person #2 gave person #0 $5.

Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.

    

    Example 2:
    Input:
[[0,1,10], [1,0,1], [1,2,5], [2,0,5]]

Output:
1

Explanation:
Person #0 gave person #1 $10.
Person #1 gave person #0 $1.
Person #1 gave person #2 $5.
Person #2 gave person #0 $5.

Therefore, person #1 only need to give person #0 $4, and all debt is settled.
-----------------

# 16_3Sum_Closest
# 16. 3Sum Closest

Given an array nums of n integers and an integer target,
        find three integers in nums such that the sum is closest to target.
        Return the sum of the three integers. You may assume that each input would have exactly one
        solution.

    Example:

    Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
-----------------

# 153_Find_Minimum_in_Rotated_Sorted_Array
# 153. Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you
        beforehand.

    (i.e.,  [0,1,2,4,5,6,7] might become
         [4,5,6,7,0,1,2]).

    Find the minimum element.

    You may assume no duplicate exists in the array.

    Example 1:

    Input: [3,4,5,1,2]
Output: 1

    Example 2:

    Input: [4,5,6,7,0,1,2]
Output: 0
-----------------

# 1639_Number_of_Ways_to_Form_a_Target_String_Given_a_Dictionary
# 1639. Number of Ways to Form a Target String Given a Dictionary


-----------------

# 247_Strobogrammatic_Number_II
# 247. Strobogrammatic Number II

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at
        upside down).

    Find all strobogrammatic numbers that are of length = n.

    Example:

    Input:  n = 2
Output: ["11","69","88","96"]
-----------------

# 1298_Maximum_Candies_You_Can_Get_from_Boxes
# 1298. Maximum Candies You Can Get from Boxes


-----------------

# 696_Count_Binary_Substrings
# 696. Count Binary Substrings

Give a string s, count the number of non-empty (contiguous) substrings that have
        the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are
        grouped consecutively.
    
    Substrings that occur multiple times are counted the number of times they occur.

    Example 1:
    Input: "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

    

    Example 2:
    Input: "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

    

    Note:
    s.length will be between 1 and 50,000.
    s will only consist of "0" or "1" characters.
-----------------

# 1315_Sum_of_Nodes_with_Even-Valued_Grandparent
# 1315. Sum of Nodes with Even-Valued Grandparent


-----------------

# 1297_Maximum_Number_of_Occurrences_of_a_Substring
# 1297. Maximum Number of Occurrences of a Substring


-----------------

# 657_Robot_Return_to_Origin
# 657. Robot Return to Origin

There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of
        its moves, judge if this robot ends up at (0, 0) after it completes its
        moves.

    The move sequence is represented by a string, and the character moves[i] represents its ith
        move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the
        origin after it finishes all of its moves, return true. Otherwise, return false.

    Note: The way that the robot is "facing" is irrelevant. "R"
        will always make the robot move to the right once, "L" will always make it move
        left, etc. Also, assume that the magnitude of the robot's movement is the same for each
        move.

    Example 1:

    Input: "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

     

    Example 2:

    Input: "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
-----------------

# 1648_Sell_Diminishing-Valued_Colored_Balls
# 1648. Sell Diminishing-Valued Colored Balls


-----------------

# 1410_HTML_Entity_Parser
# 1410. HTML Entity Parser


-----------------

# 507_Perfect_Number
# 507. Perfect Number

We define the Perfect Number is a positive integer that is equal to the sum of all its
        positive divisors except itself.
    
    Now, given an integer n, write a function that returns true when it is a perfect number
    and false when it is not.
    

    Example:
    Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14

    

    Note:
        The input number n will not exceed 100,000,000. (1e8)
-----------------

# 158_Read_N_Characters_Given_Read4_II_-_Call_multiple_times
# 158. Read N Characters Given Read4 II - Call multiple times

Given a file and assume that you can only read the file using a given
        method read4, implement a method read to read n
        characters. Your method read may be called multiple times.

     

    Method read4: 

    The API read4 reads 4 consecutive characters from the file, then writes
        those characters into the buffer array buf.

    The return value is the number of actual characters read.

    Note that read4() has its own file pointer, much like FILE *fp
        in C.

    Definition of read4:

        Parameter:  char[] buf
    Returns:    int

Note: buf[] is destination not source, the results from read4 will be copied to buf[]

    Below is a high level example of how read4 works:

    File file("abcdefghijk"); // File is "abcdefghijk", initially file pointer (fp) points to 'a'
char[] buf = new char[4]; // Create buffer with enough space to store characters
read4(buf); // read4 returns 4. Now buf = "abcd", fp points to 'e'
read4(buf); // read4 returns 4. Now buf = "efgh", fp points to 'i'
read4(buf); // read4 returns 3. Now buf = "ijk", fp points to end of file

     

    Method read:

    By using the read4 method, implement the method read that
        reads n characters from the file and store it in the buffer
        array buf. Consider that you cannot manipulate the file
        directly.

    The return value is the number of actual characters read.

    Definition of read: 

        Parameters:	char[] buf, int n
    Returns:	int

Note: buf[] is destination not source, you will need to write the results to buf[]

     

    Example 1:

    File file("abc");
Solution sol;
// Assume buf is allocated and guaranteed to have enough space for storing all characters from the file.
sol.read(buf, 1); // After calling your read method, buf should contain "a". We read a total of 1 character from the file, so return 1.
sol.read(buf, 2); // Now buf should contain "bc". We read a total of 2 characters from the file, so return 2.
sol.read(buf, 1); // We have reached the end of file, no more characters can be read. So return 0.

    Example 2:

    File file("abc");
Solution sol;
sol.read(buf, 4); // After calling your read method, buf should contain "abc". We read a total of 3 characters from the file, so return 3.
sol.read(buf, 1); // We have reached the end of file, no more characters can be read. So return 0.

     

    Note:

    
        Consider that you cannot manipulate the file directly, the file is only
            accesible for read4 but not for read.
        
        The read function may be called multiple times.
        Please remember to RESET your class variables declared in Solution, as
            static/class variables are persisted across multiple test cases. Please see here for more details.
        
        You may assume the destination buffer array, buf, is guaranteed
            to have enough space for storing n characters.
        
        It is guaranteed that in a given test case the same buffer buf is called by
            read.
-----------------

# 736_Parse_Lisp_Expression
# 736. Parse Lisp Expression

You are given a string expression representing a Lisp-like expression to return
        the integer value of.
    
    
        The syntax for these expressions is given as follows.
    
    
    An expression is either an integer, a let-expression, an add-expression, a mult-expression,
        or an assigned variable. Expressions always evaluate to a single integer.
    
    
    (An integer could be positive or negative.)
    
    A let-expression takes the form (let v1 e1 v2 e2 ... vn en expr), where let
        is always the string "let", then there are 1 or more pairs of alternating
        variables and expressions, meaning that the first variable v1 is assigned the
        value of the expression e1, the second variable v2 is assigned the
        value of the expression e2, and so on sequentially; and then the value
        of this let-expression is the value of the expression expr.
    
    
    An add-expression takes the form (add e1 e2) where add is always
        the string "add", there are always two expressions e1, e2, and
        this expression evaluates to the addition of the evaluation of e1 and the
        evaluation of e2.
    
    
    A mult-expression takes the form (mult e1 e2) where mult is always
        the string "mult", there are always two expressions e1, e2, and
        this expression evaluates to the multiplication of the evaluation of e1 and the
        evaluation of e2.
    
    
    For the purposes of this question, we will use a smaller subset of variable names. A
        variable starts with a lowercase letter, then zero or more lowercase letters or digits.
        Additionally for your convenience, the names "add", "let", or "mult" are protected and will
        never be used as variable names.
    
    
    Finally, there is the concept of scope. When an expression of a variable name is evaluated,
        within the context of that evaluation, the innermost scope (in terms of parentheses)
        is checked first for the value of that variable, and then outer scopes are checked
        sequentially. It is guaranteed that every expression is legal. Please see the examples for
        more details on scope.
    
    

    Evaluation Examples:
    Input: (add 1 2)
Output: 3

Input: (mult 3 (add 2 3))
Output: 15

Input: (let x 2 (mult x 5))
Output: 10

Input: (let x 2 (mult x (let x 3 y 4 (add x y))))
Output: 14
Explanation: In the expression (add x y), when checking for the value of the variable x,
we check from the innermost scope to the outermost in the context of the variable we are trying to evaluate.
Since x = 3 is found first, the value of x is 3.

Input: (let x 3 x 2 x)
Output: 2
Explanation: Assignment in let statements is processed sequentially.

Input: (let x 1 y 2 x (add x y) (add x y))
Output: 5
Explanation: The first (add x y) evaluates as 3, and is assigned to x.
The second (add x y) evaluates as 3+2 = 5.

Input: (let x 2 (add (let x 3 (let x 4 x)) x))
Output: 6
Explanation: Even though (let x 4 x) has a deeper scope, it is outside the context
of the final x in the add-expression.  That final x will equal 2.

Input: (let a1 3 b2 (add a1 1) b2)
Output 4
Explanation: Variable names can contain digits after the first character.

    Note:
    The given string expression is well formatted: There are no leading or trailing
        spaces, there is only a single space separating different components of the string, and no
        space between adjacent parentheses. The expression is guaranteed to be legal and evaluate to
        an integer.
    
    The length of expression is at most 2000. (It is also non-empty, as that would
        not be a legal expression.)
    
    The answer and all intermediate calculations of that answer are guaranteed to fit in a
        32-bit integer.
-----------------

# 878_Nth_Magical_Number
# 878. Nth Magical Number

A positive integer is magical if it is divisible by either A or B.

    Return the N-th magical number.  Since the answer may be
        very large, return it modulo 10^9 + 7.
-----------------

# 545_Boundary_of_Binary_Tree
# 545. Boundary of Binary Tree

Given a binary tree, return the values of its boundary in anti-clockwise direction
        starting from root. Boundary includes left boundary, leaves, and right boundary in order
        without duplicate nodes.  (The values of the nodes may still be
        duplicates.)

    Left boundary is defined as the path from root to the left-most node. Right
        boundary is defined as the path from root to the right-most node. If the root
        doesn't have left subtree or right subtree, then the root itself is left boundary or
        right boundary. Note this definition only applies to the input binary tree, and not applies
        to any subtrees.

    The left-most node is defined as a leaf node you could reach when you always
        firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat
        until you reach a leaf node.

    The right-most node is also defined by the same way with left and right exchanged.

    Example 1

    Input:
  1
   \
    2
   / \
  3   4

Ouput:
[1, 3, 4, 2]

Explanation:
The root doesn't have left subtree, so the root itself is left boundary.
The leaves are node 3 and 4.
The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
So order them in anti-clockwise without duplicates and we have [1,3,4,2].

     

    Example 2

    Input:
    ____1_____
   /          \
  2            3
 / \          /
4   5        6
   / \      / \
  7   8    9  10

Ouput:
[1,2,4,7,8,9,10,6,3]

Explanation:
The left boundary are node 1,2,4. (4 is the left-most node according to definition)
The leaves are node 4,7,8,9,10.
The right boundary are node 1,3,6,10. (10 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].
-----------------

# 1433_Check_If_a_String_Can_Break_Another_String
# 1433. Check If a String Can Break Another String


-----------------

# 879_Profitable_Schemes
# 879. Profitable Schemes

There are G people in a gang, and a list of various crimes they could commit.

    The i-th crime generates a profit[i] and requires
        group[i] gang members to participate.

    If a gang member participates in one crime, that member can't participate in another
        crime.

    Let's call a profitable scheme any subset of these crimes that
        generates at least P profit, and the total number of gang members participating
        in that subset of crimes is at most G.

    How many schemes can be chosen?  Since the answer may be very large, return
        it modulo 10^9 + 7.

     

    Example 1:

    Input: G = 5, P = 3, group = [2,2], profit = [2,3]
Output: 2
Explanation: 
To make a profit of at least 3, the gang could either commit crimes 0 and 1, or just crime 1.
In total, there are 2 schemes.
-----------------

# 640_Solve_the_Equation
# 640. Solve the Equation

Solve a given equation and return the value of x in the form of string
        "x=#value". The equation contains only '+', '-' operation, the variable x and
        its coefficient.
    

    
        If there is no solution for the equation, return "No solution".
    
    
        If there are infinite solutions for the equation, return "Infinite solutions".
    
    
        If there is exactly one solution for the equation, we ensure that the value of
        x is an integer.
    

    Example 1:
    Input: "x+5-3+x=6+x-2"
Output: "x=2"

    

    Example 2:
    Input: "x=x"
Output: "Infinite solutions"

    

    Example 3:
    Input: "2x=x"
Output: "x=0"

    

    Example 4:
    Input: "2x+3x-6x=x+2"
Output: "x=-1"

    

    Example 5:
    Input: "x=x+2"
Output: "No solution"
-----------------

# 308_Range_Sum_Query_2D_-_Mutable
# 308. Range Sum Query 2D - Mutable

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by
        its upper left corner (row1, col1) and lower right corner (row2,
        col2).

    
        
        The above rectangle (with the red border) is defined by (row1, col1) = (2, 1)
            and (row2, col2) = (4, 3), which contains sum = 8.
        
    

    Example:
    Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -> 10

    

    Note:
    
        The matrix is only modifiable by the update function.
        You may assume the number of calls to update and sumRegion function is
            distributed evenly.
        
        You may assume that row1 ≤ row2 and col1 ≤ col2.
-----------------

# 47_Permutations_II
# 47. Permutations II

Given a collection of numbers that might contain duplicates, return all possible unique
        permutations.

    Example:

    Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
-----------------

# 951_Flip_Equivalent_Binary_Trees
# 951. Flip Equivalent Binary Trees

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the
        left and right child subtrees.

    A binary tree X is flip equivalent to a binary tree Y if and only if we can
        make X equal to Y after some number of flip operations.

    Write a function that determines whether two binary trees are flip equivalent. 
        The trees are given by root nodes root1 and root2.

     

    Example 1:

    Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.

     

    Note:

    
        Each tree will have at most 100 nodes.
        Each value in each tree will be a unique integer in the range [0, 99].
-----------------

# 1539_Kth_Missing_Positive_Number
# 1539. Kth Missing Positive Number


-----------------

# 1467_Probability_of_a_Two_Boxes_Having_The_Same_Number_of_Distinct_Balls
# 1467. Probability of a Two Boxes Having The Same Number of Distinct Balls


-----------------

# 170_Two_Sum_III_-_Data_structure_design
# 170. Two Sum III - Data structure design

Design and implement a TwoSum class. It should support the following operations:
        add and find.

    add - Add the number to an internal data structure.
        find - Find if there exists any pair of numbers which sum is equal to the
        value.

    Example 1:

    add(1); add(3); add(5);
find(4) -> true
find(7) -> false

    Example 2:

    add(3); add(1); add(2);
find(3) -> true
find(6) -> false
-----------------

# 403_Frog_Jump
# 403. Frog Jump

A frog is crossing a river. The river is divided into x units and at each unit there may or
        may not exist a stone. The frog can jump on a stone, but it must not jump into the
        water.

    Given a list of stones' positions (in units) in sorted ascending order, determine if the frog
        is able to cross the river by landing on the last stone. Initially, the frog is on the first
        stone and assume the first jump must be 1 unit.
    

    If the frog's last jump was k units, then its next jump must be either k - 1,
        k, or k + 1 units. Note that the frog can only jump in the forward direction.
    

    Note:
    
        The number of stones is ≥ 2 and is < 1,100.
        Each stone's position will be a non-negative integer < 231.
        The first stone's position is always 0.
    
    

    Example 1:
    [0,1,3,5,6,8,12,17]

There are a total of 8 stones.
The first stone at the 0th unit, second stone at the 1st unit,
third stone at the 3rd unit, and so on...
The last stone at the 17th unit.

Return true. The frog can jump to the last stone by jumping
1 unit to the 2nd stone, then 2 units to the 3rd stone, then
2 units to the 4th stone, then 3 units to the 6th stone,
4 units to the 7th stone, and 5 units to the 8th stone.

    

    Example 2:
    [0,1,2,3,4,8,9,11]

Return false. There is no way to jump to the last stone as
the gap between the 5th and 6th stone is too large.
-----------------

# 1327_List_the_Products_Ordered_in_a_Period
# 1327. List the Products Ordered in a Period


-----------------

# 1426_Counting_Elements
# 1426. Counting Elements


-----------------

# 425_Word_Squares
# 425. Word Squares

Given a set of words (without duplicates), find all word squares you
        can build from them.

    A sequence of words forms a valid word square if the kth row and column
        read the exact same string, where 0 ≤ k < max(numRows, numColumns).

    For example, the word sequence ["ball","area","lead","lady"] forms a word square
        because each word reads the same both horizontally and vertically.

    b a l l
a r e a
l e a d
l a d y

    Note:
    
        There are at least 1 and at most 1000 words.
        All words will have the exact same length.
        Word length is at least 1 and at most 5.
        Each word contains only lowercase English alphabet a-z.
    
    

    Example 1:
    Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

    

    Example 2:
    Input:
["abat","baba","atan","atal"]

Output:
[
  [ "baba",
    "abat",
    "baba",
    "atan"
  ],
  [ "baba",
    "abat",
    "baba",
    "atal"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
-----------------

# 1224_Maximum_Equal_Frequency
# 1224. Maximum Equal Frequency

Given an array nums of positive integers, return the longest possible
        length of an array prefix of nums, such that it is possible to remove exactly
            one element from this prefix so that every number that has appeared in it will
        have the same number of occurrences.

    If after removing one element there are no remaining elements, it's still considered that
        every appeared number has the same number of ocurrences (0).

     
    Example 1:

    Input: nums = [2,2,1,1,5,3,3,5]
Output: 7
Explanation: For the subarray [2,2,1,1,5,3,3] of length 7, if we remove nums[4]=5, we will get [2,2,1,1,3,3], so that each number will appear exactly twice.

    Example 2:

    Input: nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
Output: 13

    Example 3:

    Input: nums = [1,1,1,2,2,2]
Output: 5

    Example 4:

    Input: nums = [10,2,8,9,3,8,1,5,2,3,7,6]
Output: 8

     
    Constraints:

    
        2 <= nums.length <= 10^5
        1 <= nums[i] <= 10^5
-----------------

# 1545_Find_Kth_Bit_in_Nth_Binary_String
# 1545. Find Kth Bit in Nth Binary String


-----------------

# 1203_Sort_Items_by_Groups_Respecting_Dependencies
# 1203. Sort Items by Groups Respecting Dependencies

There are n items each belonging to zero or one
        of m groups where group[i] is the group that the
        i-th item belongs to and it's equal to -1 if the
        i-th item belongs to no group. The items and the groups are zero indexed. A
        group can have no item belonging to it.

    Return a sorted list of the items such that:

    
        The items that belong to the same group are next to each other in the sorted list.
        There are some relations between these items
            where beforeItems[i] is a list containing all the items that
            should come before the i-th item in the sorted array (to the left of
            the i-th item).
        
    

    Return any solution if there is more than one solution and return an empty
        list if there is no solution.

     
    Example 1:

    

    Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
Output: [6,3,4,1,5,2,0,7]

    Example 2:

    Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
Output: []
Explanation: This is the same as example 1 except that 4 needs to be before 6 in the sorted list.

     
    Constraints:

    
        1 <= m <= n <= 3*10^4
        group.length == beforeItems.length == n
        -1 <= group[i] <= m-1
        0 <= beforeItems[i].length <= n-1
        0 <= beforeItems[i][j] <= n-1
        i != beforeItems[i][j]
        beforeItems[i] does not contain duplicates elements.
-----------------

# 984_String_Without_AAA_or_BBB
# 984. String Without AAA or BBB

Given two integers A and B, return any string
        S such that:

    
        S has length A + B and contains exactly A 'a'
            letters, and exactly B 'b' letters;
        
        The substring 'aaa' does not occur in S;
        
        The substring 'bbb' does not occur in S.
    

     

    Example 1:

    Input: A = 1, B = 2
Output: "abb"
Explanation: "abb", "bab" and "bba" are all correct answers.
-----------------

# 1320_Minimum_Distance_to_Type_a_Word_Using_Two_Fingers
# 1320. Minimum Distance to Type a Word Using Two Fingers


-----------------

# 631_Design_Excel_Sum_Formula
# 631. Design Excel Sum Formula

Your task is to design the basic function of Excel and implement the function of sum formula.
        Specifically, you need to implement the following functions:

    Excel(int H, char W): This is the constructor. The inputs represents the height
        and width of the Excel form. H is a positive integer, range from 1 to 26. It
        represents the height. W is a character range from 'A' to 'Z'. It represents that the
        width is the number of characters from 'A' to W. The Excel form content is
        represented by a height * width 2D integer array C, it should be initialized to
        zero. You should assume that the first row of C starts from 1, and the first
        column of C starts from 'A'.

    

    void Set(int row, char column, int val): Change the value at C(row,
        column) to be val.
    
    int Get(int row, char column): Return the value at C(row, column).
    
    
    int Sum(int row, char column, List of Strings : numbers): This function
        calculate and set the value at C(row, column), where the value should be the
        sum of cells represented by numbers. This function return the sum result at
        C(row, column). This sum formula should exist until this cell is overlapped by
        another value or another sum formula.

    numbers is a list of strings that each string represent a cell or a range of
        cells. If the string represent a single cell, then it has the following format : ColRow.
        For example, "F7" represents the cell at (7, F). 

    If the string represent a range of cells, then it has the following format : ColRow1:ColRow2.
        The range will always be a rectangle, and ColRow1 represent the position of the top-left
        cell, and ColRow2 represents the position of the bottom-right cell. 
    
    Example 1:
    Excel(3,"C");
// construct a 3*3 2D array with all zero.
//   A B C
// 1 0 0 0
// 2 0 0 0
// 3 0 0 0

Set(1, "A", 2);
// set C(1,"A") to be 2.
//   A B C
// 1 2 0 0
// 2 0 0 0
// 3 0 0 0

Sum(3, "C", ["A1", "A1:B2"]);
// set C(3,"C") to be the sum of value at C(1,"A") and the values sum of the rectangle range whose top-left cell is C(1,"A") and bottom-right cell is C(2,"B"). Return 4.
//   A B C
// 1 2 0 0
// 2 0 0 0
// 3 0 0 4

Set(2, "B", 2);
// set C(2,"B") to be 2. Note C(3, "C") should also be changed.
//   A B C
// 1 2 0 0
// 2 0 2 0
// 3 0 0 6

    

    Note:
    
        You could assume that there won't be any circular sum reference. For example, A1 =
            sum(B1) and B1 = sum(A1).
        
         The test cases are using double-quotes to represent a character.
        Please remember to RESET your class variables declared in class Excel, as
            static/class variables are persisted across multiple test cases. Please see here for more details.
-----------------

# 1127_User_Purchase_Platform
# 1127. User Purchase Platform

Table: Spending

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| user_id     | int     |
| spend_date  | date    |
| platform    | enum    |
| amount      | int     |
+-------------+---------+
The table logs the spendings history of users that make purchases from an online shopping website which has a desktop and a mobile application.
(user_id, spend_date, platform) is the primary key of this table.
The platform column is an ENUM type of ('desktop', 'mobile').

    Write an SQL query to find the total number of users and the total amount spent using
        mobile only, desktop only and both mobile
        and desktop together for each date.

    The query result format is in the following example:

    Spending table:
+---------+------------+----------+--------+
| user_id | spend_date | platform | amount |
+---------+------------+----------+--------+
| 1       | 2019-07-01 | mobile   | 100    |
| 1       | 2019-07-01 | desktop  | 100    |
| 2       | 2019-07-01 | mobile   | 100    |
| 2       | 2019-07-02 | mobile   | 100    |
| 3       | 2019-07-01 | desktop  | 100    |
| 3       | 2019-07-02 | desktop  | 100    |
+---------+------------+----------+--------+

Result table:
+------------+----------+--------------+-------------+
| spend_date | platform | total_amount | total_users |
+------------+----------+--------------+-------------+
| 2019-07-01 | desktop  | 100          | 1           |
| 2019-07-01 | mobile   | 100          | 1           |
| 2019-07-01 | both     | 200          | 1           |
| 2019-07-02 | desktop  | 100          | 1           |
| 2019-07-02 | mobile   | 100          | 1           |
| 2019-07-02 | both     | 0            | 0           |
+------------+----------+--------------+-------------+
On 2019-07-01, user 1 purchased using both desktop and mobile, user 2 purchased using mobile only and user 3 purchased using desktop only.
On 2019-07-02, user 2 purchased using mobile only, user 3 purchased using desktop only and no one purchased using both platforms.
-----------------

# 1460_Make_Two_Arrays_Equal_by_Reversing_Sub-arrays
# 1460. Make Two Arrays Equal by Reversing Sub-arrays


-----------------

# 1845_Seat_Reservation_Manager
# 1845. Seat Reservation Manager


-----------------

# 645_Set_Mismatch
# 645. Set Mismatch

The set S originally contains numbers from 1 to n. But
        unfortunately, due to the data error, one of the numbers in the set got duplicated to another
        number in the set, which results in repetition of one number and loss of another number.
    

    
        Given an array nums representing the data status of this set after the error.
        Your task is to firstly find the number occurs twice and then find the number that is
        missing. Return them in the form of an array.
    

    Example 1:
    Input: nums = [1,2,2,4]
Output: [2,3]

    

    Note:
    
        The given array size will in the range [2, 10000].
        The given array's numbers won't have any order.
-----------------

# 226_Invert_Binary_Tree
# 226. Invert Binary Tree

Invert a binary tree.

    Example:

    Input:

         4
   /   \
  2     7
 / \   / \
1   3 6   9

    Output:

         4
   /   \
  7     2
 / \   / \
9   6 3   1

    Trivia:
        This problem was inspired by this original tweet by Max Howell:

    Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t
        invert a binary tree on a whiteboard so f*** off.
-----------------

# 1191_K-Concatenation_Maximum_Sum
# 1191. K-Concatenation Maximum Sum

Given an integer array arr and an integer k, modify the array
        by repeating it k times.

    For example, if arr = [1, 2] and k = 3 then the modified array
        will be [1, 2, 1, 2, 1, 2].

    Return the maximum sub-array sum in the modified array. Note that the length of the sub-array
        can be 0 and its sum in that case is 0.

    As the answer can be very large, return the answer modulo 10^9
        + 7.

     
    Example 1:

    Input: arr = [1,2], k = 3
Output: 9

    Example 2:

    Input: arr = [1,-2,1], k = 5
Output: 2

    Example 3:

    Input: arr = [-1,-2], k = 7
Output: 0

     
    Constraints:

    
        1 <= arr.length <= 10^5
        1 <= k <= 10^5
        -10^4 <= arr[i] <= 10^4
-----------------

# 1513_Number_of_Substrings_With_Only_1s
# 1513. Number of Substrings With Only 1s


-----------------

# 838_Push_Dominoes
# 838. Push Dominoes

There are N dominoes in a line, and we place
        each domino vertically upright.

    In the beginning, we simultaneously push some of the dominoes either to the left or to
        the right.

    

    After each second, each domino that is falling to the left pushes the adjacent domino on the
        left.

    Similarly, the dominoes falling to the right push their adjacent dominoes standing on the
        right.

    When a vertical domino has dominoes falling on it from both sides, it stays still due to the
        balance of the forces.

    For the purposes of this question, we will consider that a falling domino expends no
        additional force to a falling or already fallen domino.

    Given a string "S" representing the initial state. S[i] =
        'L', if the i-th domino has been pushed to the left; S[i] =
        'R', if the i-th domino has been pushed to the right; S[i] = '.', if
        the i-th domino has not been pushed.

    Return a string representing the final state. 

    Example 1:

    Input: ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."

    Example 2:

    Input: "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.

    Note:

    
        0 <= N <= 10^5
        String dominoes contains only 'L', 'R'
            and '.'
-----------------

# 584_Find_Customer_Referee
# 584. Find Customer Referee

Given a table customer holding customers information and the referee.

    +------+------+-----------+
| id   | name | referee_id|
+------+------+-----------+
|    1 | Will |      NULL |
|    2 | Jane |      NULL |
|    3 | Alex |         2 |
|    4 | Bill |      NULL |
|    5 | Zack |         1 |
|    6 | Mark |         2 |
+------+------+-----------+

    Write a query to return the list of customers NOT referred by the person with id '2'.
    

    For the sample data above, the result is:

    +------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
-----------------

# 1128_Number_of_Equivalent_Domino_Pairs
# 1128. Number of Equivalent Domino Pairs

Given a list of dominoes, dominoes[i] = [a, b] is equivalent
        to dominoes[j] = [c, d] if and only if either (a==c and
        b==d), or (a==d and b==c) - that is, one domino can
        be rotated to be equal to another domino.

    Return the number of pairs (i, j) for which 0 <= i < j <
        dominoes.length, and dominoes[i] is equivalent to
        dominoes[j].

     
    Example 1:
    Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1

     
    Constraints:

    
        1 <= dominoes.length <= 40000
        1 <= dominoes[i][j] <= 9
-----------------

# 1683_Invalid_Tweets
# 1683. Invalid Tweets


-----------------

# 1562_Find_Latest_Group_of_Size_M
# 1562. Find Latest Group of Size M


-----------------

# 1456_Maximum_Number_of_Vowels_in_a_Substring_of_Given_Length
# 1456. Maximum Number of Vowels in a Substring of Given Length


-----------------

# 328_Odd_Even_Linked_List
# 328. Odd Even Linked List

Given a singly linked list, group all odd nodes together followed by the even nodes. Please
        note here we are talking about the node number and not the value in the nodes.

    You should try to do it in place. The program should run in O(1) space complexity and
        O(nodes) time complexity.

    Example 1:

    Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

    Example 2:

    Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

    Note:

    
        The relative order inside both the even and odd groups should remain as it was in the
            input.
        
        The first node is considered odd, the second node even and so on ...
-----------------

# 818_Race_Car
# 818. Race Car

Your car starts at position 0 and speed +1 on an infinite number line.  (Your car can go
        into negative positions.)

    Your car drives automatically according to a sequence of instructions A (accelerate) and R
        (reverse).

    When you get an instruction "A", your car does the following: position
        += speed, speed *= 2.

    When you get an instruction "R", your car does the following: if your speed is
        positive then speed = -1 , otherwise speed = 1. 
        (Your position stays the same.)

    For example, after commands "AAR", your car goes to positions 0->1->3->3,
        and your speed goes to 1->2->4->-1.

    Now for some target position, say the length of the shortest sequence of
        instructions to get there.

    Example 1:
Input:
target = 3
Output: 2
Explanation:
The shortest instruction sequence is "AA".
Your position goes from 0->1->3.

    Example 2:
Input:
target = 6
Output: 5
Explanation:
The shortest instruction sequence is "AAARA".
Your position goes from 0->1->3->7->7->6.

     

    Note: 

    
        1 <= target <= 10000.
-----------------

# 450_Delete_Node_in_a_BST
# 450. Delete Node in a BST

Given a root node reference of a BST and a key, delete the node with the given key in the
        BST. Return the root node reference (possibly updated) of the BST.

    Basically, the deletion can be divided into two stages:
    
        Search for a node to remove.
        If the node is found, delete the node.
    
    

    Note: Time complexity should be O(height of tree).

    Example:
    root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
-----------------

# 438_Find_All_Anagrams_in_a_String
# 438. Find All Anagrams in a String

Given a string s and a non-empty string p, find all the start indices of
        p's anagrams in s.

    Strings consists of lowercase English letters only and the length of both strings s
        and p will not be larger than 20,100.

    The order of output does not matter.

    Example 1:
    Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

    

    Example 2:
    Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
-----------------

# 1583_Count_Unhappy_Friends
# 1583. Count Unhappy Friends


-----------------

# 1505_Minimum_Possible_Integer_After_at_Most_K_Adjacent_Swaps_On_Digits
# 1505. Minimum Possible Integer After at Most K Adjacent Swaps On Digits


-----------------

# 266_Palindrome_Permutation
# 266. Palindrome Permutation

Given a string, determine if a permutation of the string could form a palindrome.

    Example 1:

    Input: "code"
Output: false

    Example 2:

    Input: "aab"
Output: true

    Example 3:

    Input: "carerac"
Output: true
-----------------

# 1295_Find_Numbers_with_Even_Number_of_Digits
# 1295. Find Numbers with Even Number of Digits


-----------------

# 1302_Deepest_Leaves_Sum
# 1302. Deepest Leaves Sum


-----------------

# 286_Walls_and_Gates
# 286. Walls and Gates

You are given a m x n 2D grid initialized with these three possible values.

    
        -1 - A wall or an obstacle.
        0 - A gate.
        INF - Infinity means an empty room. We use the value 231 -
            1 = 2147483647 to represent INF as you may assume that the distance
            to a gate is less than 2147483647.
        
    

    Fill each empty room with the distance to its nearest gate. If it is impossible to
        reach a gate, it should be filled with INF.

    Example: 

    Given the 2D grid:

    INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

    After running your function, the 2D grid should be:

      3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
-----------------

# 1374_Generate_a_String_With_Characters_That_Have_Odd_Counts
# 1374. Generate a String With Characters That Have Odd Counts


-----------------

# 1508_Range_Sum_of_Sorted_Subarray_Sums
# 1508. Range Sum of Sorted Subarray Sums


-----------------

# 710_Random_Pick_with_Blacklist
# 710. Random Pick with Blacklist

Given a blacklist B containing unique integers from [0,
        N), write a function to return a uniform random integer from [0, N)
        which is NOT in B.

    Optimize it such that it minimizes the call to system’s Math.random().

    Note:

    
        1 <= N <= 1000000000
        0 <= B.length < min(100000, N)
        [0, N) does NOT include N. See interval
            notation.
        
    

    Example 1:

    Input:
["Solution","pick","pick","pick"]
[[1,[]],[],[],[]]
Output: [null,0,0,0]

    Example 2:

    Input:
["Solution","pick","pick","pick"]
[[2,[]],[],[],[]]
Output: [null,1,1,1]

    Example 3:

    Input:
["Solution","pick","pick","pick"]
[[3,[1]],[],[],[]]
Output: [null,0,0,2]

    Example 4:

    Input:
["Solution","pick","pick","pick"]
[[4,[2]],[],[],[]]
Output: [null,1,3,1]

    Explanation of Input Syntax:

    The input is two lists: the subroutines called and
        their arguments. Solution's constructor has two arguments, N
        and the blacklist B. pick has no arguments. Arguments are always
        wrapped with a list, even if there aren't any.
-----------------

# 745_Prefix_and_Suffix_Search
# 745. Prefix and Suffix Search

Given many words, words[i] has weight i.

    Design a class WordFilter that supports one function, WordFilter.f(String
        prefix, String suffix). It will return the word with given prefix and
        suffix with maximum weight. If no word exists, return -1.

    Examples:

    Input:
WordFilter(["apple"])
WordFilter.f("a", "e") // returns 0
WordFilter.f("b", "") // returns -1

     

    Note:

    
        words has length in range [1, 15000].
        For each test case, up to words.length queries WordFilter.f
            may be made.
        
        words[i] has length in range [1, 10].
        prefix, suffix have lengths in range [0, 10].
        words[i] and prefix, suffix queries consist of lowercase
            letters only.
-----------------

# 1431_Kids_With_the_Greatest_Number_of_Candies
# 1431. Kids With the Greatest Number of Candies


-----------------

# 1396_Design_Underground_System
# 1396. Design Underground System


-----------------

# 1008_Construct_Binary_Search_Tree_from_Preorder_Traversal
# 1008. Construct Binary Search Tree from Preorder Traversal

Return the root node of a binary search tree that matches the given preorder
        traversal.

    (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value
        < node.val, and any descendant of node.right
        has a value > node.val.  Also recall that a preorder
        traversal displays the value of the node first, then traverses node.left,
        then traverses node.right.)

     

    Example 1:

    Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

     

    Note: 

    
        1 <= preorder.length <= 100
        The values of preorder are distinct.
-----------------

# 29_Divide_Two_Integers
# 29. Divide Two Integers

Given two integers dividend and divisor, divide two integers
        without using multiplication, division and mod operator.

    Return the quotient after dividing dividend by divisor.

    The integer division should truncate toward zero.

    Example 1:

    Input: dividend = 10, divisor = 3
Output: 3

    Example 2:

    Input: dividend = 7, divisor = -3
Output: -2

    Note:

    
        Both dividend and divisor will be 32-bit signed integers.
        The divisor will never be 0.
        Assume we are dealing with an environment which could only store integers within the
            32-bit signed integer range: [−231,  231 − 1].
            For the purpose of this problem, assume that your function returns 231
            − 1 when the division result overflows.
-----------------

# 576_Out_of_Boundary_Paths
# 576. Out of Boundary Paths

There is an m by n grid with a ball. Given the start coordinate (i,j) of
        the ball, you can move the ball to adjacent cell or cross the grid boundary in four
        directions (up, down, left, right). However, you can at most move N times.
        Find out the number of paths to move the ball out of grid boundary. The answer may be very
        large, return it after mod 109 + 7.

     

    Example 1:

    Input: m = 2, n = 2, N = 2, i = 0, j = 0
Output: 6
Explanation:

    Example 2:

    Input: m = 1, n = 3, N = 3, i = 0, j = 1
Output: 12
Explanation:

     

    Note:

    
        Once you move the ball out of boundary, you cannot move it back.
        The length and height of the grid is in range [1,50].
        N is in range [0,50].
-----------------

# 1593_Split_a_String_Into_the_Max_Number_of_Unique_Substrings
# 1593. Split a String Into the Max Number of Unique Substrings


-----------------

# 1328_Break_a_Palindrome
# 1328. Break a Palindrome


-----------------

# 194_Transpose_File
# 194. Transpose File

Given a text file file.txt, transpose its content.

    You may assume that each row has the same number of columns and each field is separated by
        the ' ' character.

    Example:

    If file.txt has the following content:

    name age
alice 21
ryan 30

    Output the following:

    name alice ryan
age 21 30
-----------------

# 1856_Maximum_Subarray_Min-Product
# 1856. Maximum Subarray Min-Product


-----------------

# 1820_Maximum_Number_of_Accepted_Invitations
# 1820. Maximum Number of Accepted Invitations


-----------------

# 496_Next_Greater_Element_I
# 496. Next Greater Element I

You are given two arrays (without duplicates) nums1 and
        nums2 where nums1’s elements are subset of nums2.
        Find all the next greater numbers for nums1's elements in the corresponding
        places of nums2.
    

    
        The Next Greater Number of a number x in nums1 is the first greater
        number to its right in nums2. If it does not exist, output -1 for this number.
    

    Example 1:
    Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

    

    Example 2:
    Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

    

    Note:
    
        All elements in nums1 and nums2 are unique.
        The length of both nums1 and nums2 would not exceed 1000.
-----------------

# 108_Convert_Sorted_Array_to_Binary_Search_Tree
# 108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced
        BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the
        depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
-----------------

# 1405_Longest_Happy_String
# 1405. Longest Happy String


-----------------

# 71_Simplify_Path
# 71. Simplify Path

Given an absolute path for a file (Unix-style), simplify it. Or in other
        words, convert it to the canonical path.

    In a UNIX-style file system, a period . refers to the current directory.
        Furthermore, a double period .. moves the directory up a level. For more
        information, see: Absolute path vs relative path in Linux/Unix
    

    Note that the returned canonical path must always begin with a slash /, and
        there must be only a single slash / between two directory names. The
        last directory name (if it exists) must not end with a trailing /.
        Also, the canonical path must be the shortest string representing the
        absolute path.

     

    Example 1:

    Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

    Example 2:

    Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

    Example 3:

    Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

    Example 4:

    Input: "/a/./b/../../c/"
Output: "/c"

    Example 5:

    Input: "/a/../../b/../c//.//"
Output: "/c"

    Example 6:

    Input: "/a//b////c/d//././/.."
Output: "/a/b/c"
-----------------

# 380_Insert_Delete_GetRandom_O(1)
# 380. Insert Delete GetRandom O(1)

Design a data structure that supports all following operations in average O(1)
        time.

    
    
        insert(val): Inserts an item val to the set if not already present.
        remove(val): Removes an item val from the set if present.
        getRandom: Returns a random element from current set of elements. Each
            element must have the same probability of being returned.
        
    
    

    Example:
    // Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
-----------------

# 743_Network_Delay_Time
# 743. Network Delay Time

There are N network nodes, labelled 1 to N.

    Given times, a list of travel times as directed edges times[i] =
        (u, v, w), where u is the source node, v is the target
        node, and w is the time it takes for a signal to travel from source to target.
    

    Now, we send a signal from a certain node K. How long will it take for all nodes
        to receive the signal? If it is impossible, return -1.

     

    Example 1:

    

    Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2

     

    Note:

    
        N will be in the range [1, 100].
        K will be in the range [1, N].
        The length of times will be in the range [1, 6000].
        All edges times[i] = (u, v, w) will have 1 <= u, v <= N
            and 0 <= w <= 100.
-----------------

# 167_Two_Sum_II_-_Input_array_is_sorted
# 167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending
        order, find two numbers such that they add up to a specific target number.

    The function twoSum should return indices of the two numbers such that they add up to the
        target, where index1 must be less than index2.

    Note:

    
        Your returned answers (both index1 and index2) are not zero-based.
        You may assume that each input would have exactly one solution and you may not
            use the same element twice.
        
    

    Example:

    Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
-----------------

# 1496_Path_Crossing
# 1496. Path Crossing


-----------------

# 1056_Confusing_Number
# 1056. Confusing Number

Given a number N, return true if and only if it is a confusing
        number, which satisfies the following condition:

    We can rotate digits by 180 degrees to form new digits. When 0, 1, 6, 8, 9 are rotated 180
        degrees, they become 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5 and 7 are rotated 180
        degrees, they become invalid. A confusing number is a number that when rotated 180
        degrees becomes a different number with each digit valid.

     

    Example 1:

    

    Input: 6
Output: true
Explanation: 
We get 9 after rotating 6, 9 is a valid number and 9!=6.

    Example 2:

    

    Input: 89
Output: true
Explanation: 
We get 68 after rotating 89, 86 is a valid number and 86!=89.

    Example 3:

    

    Input: 11
Output: false
Explanation: 
We get 11 after rotating 11, 11 is a valid number but the value remains the same, thus 11 is not a confusing number.

    Example 4:

    

    Input: 25
Output: false
Explanation: 
We get an invalid number after rotating 25.

     

    Note:

    
        0 <= N <= 10^9
        After the rotation we can ignore leading zeros, for example if after rotation we have
            0008 then this number is considered as just 8.
-----------------

# 688_Knight_Probability_in_Chessboard
# 688. Knight Probability in Chessboard

On an NxN chessboard, a knight starts at the r-th row
        and c-th column and attempts to make exactly K moves. The rows and
        columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right
        square is (N-1, N-1).

    A chess knight has 8 possible moves it can make, as illustrated below. Each move is two
        squares in a cardinal direction, then one square in an orthogonal direction.

     

    
        

     

    Each time the knight is to move, it chooses one of eight possible moves uniformly at random
        (even if the piece would go off the chessboard) and moves there.

    The knight continues moving until it has made exactly K moves or has moved off
        the chessboard. Return the probability that the knight remains on the board after it has
        stopped moving.

     

    Example:

    Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.

     

    Note:

    
        N will be between 1 and 25.
        K will be between 0 and 100.
        The knight always initially starts on the board.
-----------------

# 258_Add_Digits
# 258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result
        has only one digit.

    Example:

    Input: 38
Output: 2
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.

    Follow up:
        Could you do it without any loop/recursion in O(1) runtime?
-----------------

# 1301_Number_of_Paths_with_Max_Score
# 1301. Number of Paths with Max Score


-----------------

# 1089_Duplicate_Zeros
# 1089. Duplicate Zeros

Given a fixed length array arr of integers, duplicate each occurrence of
        zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written.

    Do the above modifications to the input array in place, do not return
        anything from your function.

     

    Example 1:

    Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

    Example 2:

    Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

     

    Note:

    
        1 <= arr.length <= 10000
        0 <= arr[i] <= 9
-----------------

# 463_Island_Perimeter
# 463. Island Perimeter

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0
        represents water.

    Grid cells are connected horizontally/vertically (not diagonally). The grid is completely
        surrounded by water, and there is exactly one island (i.e., one or more connected land
        cells).

    The island doesn't have "lakes" (water inside that isn't connected to the
        water around the island). One cell is a square with side length 1. The grid is rectangular,
        width and height don't exceed 100. Determine the perimeter of the island.

     

    Example:

    Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
-----------------

# 1470_Shuffle_the_Array
# 1470. Shuffle the Array


-----------------

# 989_Add_to_Array-Form_of_Integer
# 989. Add to Array-Form of Integer

For a non-negative integer X, the array-form of X is
        an array of its digits in left to right order.  For example, if X = 1231,
        then the array form is [1,2,3,1].

    Given the array-form A of a non-negative integer X, return the
        array-form of the integer X+K.
-----------------

# 661_Image_Smoother
# 661. Image Smoother

Given a 2D integer matrix M representing the gray scale of an image, you need to design a
        smoother to make the gray scale of each cell becomes the average gray scale (rounding down)
        of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then
        use as many as you can.

    Example 1:
    Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0

    

    Note:
    
        The value in the given matrix is in the range of [0, 255].
        The length and width of the given matrix are in the range of [1, 150].
-----------------

# 1177_Can_Make_Palindrome_from_Substring
# 1177. Can Make Palindrome from Substring

Given a string s, we make queries on substrings of s.

    For each query queries[i] = [left, right, k], we may rearrange the
        substring s[left], ..., s[right], and then choose up to k
        of them to replace with any lowercase English letter. 

    If the substring is possible to be a palindrome string after the operations above,
        the result of the query is true. Otherwise, the result is
        false.

    Return an array answer[], where answer[i] is the result of the
        i-th query queries[i].

    Note that: Each letter is counted individually for replacement so if
        for example s[left..right] = "aaa", and k = 2, we
        can only replace two of the letters.  (Also, note that the initial string
        s is never modified by any query.)

     
    Example :

    Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0] : substring = "d", is palidrome.
queries[1] : substring = "bc", is not palidrome.
queries[2] : substring = "abcd", is not palidrome after replacing only 1 character.
queries[3] : substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4] : substring = "abcda", could be changed to "abcba" which is palidrome.

     
    Constraints:

    
        1 <= s.length, queries.length <= 10^5
        0 <= queries[i][0] <= queries[i][1] < s.length
        0 <= queries[i][2] <= s.length
        s only contains lowercase English letters.
-----------------

# 416_Partition_Equal_Subset_Sum
# 416. Partition Equal Subset Sum

Given a non-empty array containing only positive integers, find if the array
        can be partitioned into two subsets such that the sum of elements in both subsets is equal.
    

    Note:

    
        Each of the array element will not exceed 100.
        The array size will not exceed 200.
    

     

    Example 1:

    Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].

     

    Example 2:

    Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
-----------------

# 839_Similar_String_Groups
# 839. Similar String Groups

Two strings X and Y are similar if we can swap two
        letters (in different positions) of X, so that it equals Y.
    

    For example, "tars" and "rats" are
        similar (swapping at positions 0 and 2), and "rats"
        and "arts" are similar, but "star" is not
        similar to "tars", "rats", or "arts".
    

    Together, these form two connected groups by similarity: {"tars", "rats",
        "arts"} and {"star"}.  Notice that "tars"
        and "arts" are in the same group even though they are not similar. 
        Formally, each group is such that a word is in the group if and only if it is similar to at
        least one other word in the group.

    We are given a list A of strings.  Every string in A is an
        anagram of every other string in A.  How many groups are there?

    Example 1:

    Input: ["tars","rats","arts","star"]
Output: 2

    Note:

    
        A.length <= 2000
        A[i].length <= 1000
        A.length * A[i].length <= 20000
        All words in A consist of lowercase letters only.
        All words in A have the same length and are anagrams of each other.
        The judging time limit has been increased for this question.
-----------------

# 1229_Meeting_Scheduler
# 1229. Meeting Scheduler

Given the availability time slots arrays slots1 and slots2 of
        two people and a meeting duration duration, return the earliest time
            slot that works for both of them and is of duration duration.

    If there is no common time slot that satisfies the requirements, return an empty
        array.

    The format of a time slot is an array of two elements [start, end] representing
        an inclusive time range from start to end.  

    It is guaranteed that no two availability slots of the same person intersect with each other.
        That is, for any two time slots [start1, end1] and [start2,
            end2] of the same person, either start1 > end2 or start2
            > end1.

     
    Example 1:

    Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8
Output: [60,68]

    Example 2:

    Input: slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 12
Output: []

     
    Constraints:

    
        1 <= slots1.length, slots2.length <= 10^4
        slots1[i].length, slots2[i].length == 2
        slots1[i][0] < slots1[i][1]
        slots2[i][0] < slots2[i][1]
        0 <= slots1[i][j], slots2[i][j] <= 10^9
        1 <= duration <= 10^6
-----------------

# 388_Longest_Absolute_File_Path
# 388. Longest Absolute File Path

Suppose we abstract our file system by a string in the following manner:

    The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

    dir
    subdir1
    subdir2
        file.ext

    The directory dir contains an empty sub-directory subdir1 and a
        sub-directory subdir2 containing a file file.ext.

    The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
        represents:

    dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext

    The directory dir contains two sub-directories subdir1 and subdir2.
        subdir1 contains a file file1.ext and an empty second-level
        sub-directory subsubdir1. subdir2 contains a second-level
        sub-directory subsubdir2 containing a file file2.ext.

    We are interested in finding the longest (number of characters) absolute path to a file
        within our file system. For example, in the second example above, the longest absolute path
        is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not
        including the double quotes).

    Given a string representing the file system in the above format, return the length of the
        longest absolute path to file in the abstracted file system. If there is no file in the
        system, return 0.

    Note:
    
        The name of a file contains at least a . and an extension.
        The name of a directory or sub-directory will not contain a ..
    
    

    Time complexity required: O(n) where n is the size of the input
        string.

    Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another
        path aaaaaaaaaaaaaaaaaaaaa/sth.png.
-----------------

# 1186_Maximum_Subarray_Sum_with_One_Deletion
# 1186. Maximum Subarray Sum with One Deletion

Given an array of integers, return the maximum sum for a non-empty subarray
        (contiguous elements) with at most one element deletion. In other words, you want to
        choose a subarray and optionally delete one element from it so that there is still at least
        one element left and the sum of the remaining elements is maximum possible.

    Note that the subarray needs to be non-empty after deleting one element.

     
    Example 1:

    Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.

    Example 2:

    Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.

    Example 3:

    Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.

     
    Constraints:

    
        1 <= arr.length <= 10^5
        -10^4 <= arr[i] <= 10^4
-----------------

# 981_Time_Based_Key-Value_Store
# 981. Time Based Key-Value Store

Create a timebased key-value store class TimeMap, that supports two
        operations.

    1. set(string key, string value, int timestamp)

    
        Stores the key and value, along with the given
            timestamp.
        
    

    2. get(string key, int timestamp)

    
        Returns a value such that set(key, value, timestamp_prev) was called
            previously, with timestamp_prev <= timestamp.
        
        If there are multiple such values, it returns the one with the largest timestamp_prev.
        
        If there are no values, it returns the empty string ("").
-----------------

# 717_1-bit_and_2-bit_Characters
# 717. 1-bit and 2-bit Characters

We have two special characters. The first character can be represented by one bit
        0. The second character can be represented by two bits (10 or
        11). 

    Now given a string represented by several bits. Return whether the last character must be a
        one-bit character or not. The given string will always end with a zero.

    Example 1:
    Input:
bits = [1, 0, 0]
Output: True
Explanation:
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

    

    Example 2:
    Input:
bits = [1, 1, 1, 0]
Output: False
Explanation:
The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.

    

    Note:
    1 <= len(bits) <= 1000.
    bits[i] is always 0 or 1.
-----------------

# 1178_Number_of_Valid_Words_for_Each_Puzzle
# 1178. Number of Valid Words for Each Puzzle

With respect to a given puzzle string, a word is valid if
    both the following conditions are satisfied:
    
        word contains the first letter of puzzle.
        For each letter in word, that letter is in puzzle.
            For example, if the puzzle is "abcdefg", then valid words are "faced",
            "cabbage", and "baggage"; while invalid words are "beefed"
            (doesn't include "a") and "based" (includes "s" which
            isn't in the puzzle).
        
    
    Return an array answer, where answer[i] is the number of words in the
    given word list words that are valid with respect to the puzzle puzzles[i].
     
    Example :

    Input:
words = ["aaaa","asas","able","ability","actt","actor","access"],
puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
Output: [1,1,3,2,4,0]
Explanation:
1 valid word for "aboveyz" : "aaaa"
1 valid word for "abrodyz" : "aaaa"
3 valid words for "abslute" : "aaaa", "asas", "able"
2 valid words for "absoryz" : "aaaa", "asas"
4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.

     
    Constraints:

    
        1 <= words.length <= 10^5
        4 <= words[i].length <= 50
        1 <= puzzles.length <= 10^4
        puzzles[i].length == 7
        words[i][j], puzzles[i][j] are English lowercase letters.
        Each puzzles[i] doesn't contain repeated characters.
-----------------

# 1541_Minimum_Insertions_to_Balance_a_Parentheses_String
# 1541. Minimum Insertions to Balance a Parentheses String


-----------------

# 55_Jump_Game
# 55. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of
        the array.

    Each element in the array represents your maximum jump length at that position.

    Determine if you are able to reach the last index.

    Example 1:

    Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

    Example 2:

    Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
-----------------

# 175_Combine_Two_Tables
# 175. Combine Two Tables

Table: Person

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.

    Table: Address

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.

     

    Write a SQL query for a report that provides the following information for each person in the
        Person table, regardless if there is an address for each of those people:

    FirstName, LastName, City, State
-----------------

# 1626_Best_Team_With_No_Conflicts
# 1626. Best Team With No Conflicts


-----------------

# 1464_Maximum_Product_of_Two_Elements_in_an_Array
# 1464. Maximum Product of Two Elements in an Array


-----------------

# 637_Average_of_Levels_in_Binary_Tree
# 637. Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form
    of an array.

    Example 1:
    Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

    

    Note:
    
        The range of node's value is in the range of 32-bit signed integer.
-----------------

# 1204_Last_Person_to_Fit_in_the_Elevator
# 1204. Last Person to Fit in the Elevator

Table: Queue

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| person_id   | int     |
| person_name | varchar |
| weight      | int     |
| turn        | int     |
+-------------+---------+
person_id is the primary key column for this table.
This table has the information about all people waiting for an elevator.
The person_id and turn columns will contain all numbers from 1 to n, where n is the number of rows in the table.

     

    The maximum weight the elevator can hold is 1000.

    Write an SQL query to find the person_name of the last person who will fit
        in the elevator without exceeding the weight limit. It is guaranteed that the person who is first
        in the queue can fit in the elevator.

    The query result format is in the following example:

    Queue table
+-----------+-------------------+--------+------+
| person_id | person_name       | weight | turn |
+-----------+-------------------+--------+------+
| 5         | George Washington | 250    | 1    |
| 3         | John Adams        | 350    | 2    |
| 6         | Thomas Jefferson  | 400    | 3    |
| 2         | Will Johnliams    | 200    | 4    |
| 4         | Thomas Jefferson  | 175    | 5    |
| 1         | James Elephant    | 500    | 6    |
+-----------+-------------------+--------+------+

Result table
+-------------------+
| person_name       |
+-------------------+
| Thomas Jefferson  |
+-------------------+

Queue table is ordered by turn in the example for simplicity.
In the example George Washington(id 5), John Adams(id 3) and Thomas Jefferson(id 6) will enter the elevator as their weight sum is 250 + 350 + 400 = 1000.
Thomas Jefferson(id 6) is the last person to fit in the elevator because he has the last turn in these three people.
-----------------

# 997_Find_the_Town_Judge
# 997. Find the Town Judge

In a town, there are N people labelled from 1 to
        N.  There is a rumor that one of these people is secretly the town judge.
    

    If the town judge exists, then:

    
        The town judge trusts nobody.
        Everybody (except for the town judge) trusts the town judge.
        There is exactly one person that satisfies properties 1 and 2.
    

    You are given trust, an array of pairs trust[i] = [a, b]
        representing that the person labelled a trusts the person labelled
        b.

    If the town judge exists and can be identified, return the label of the town judge. 
        Otherwise, return -1.

     

    Example 1:

    Input: N = 2, trust = [[1,2]]
Output: 2
-----------------

# 1681_Minimum_Incompatibility
# 1681. Minimum Incompatibility


-----------------

# 397_Integer_Replacement
# 397. Integer Replacement

Given a positive integer n and you can do operations as follow:
    

    
    
        If n is even, replace n with n/2.
        If n is odd, you can replace n with either n + 1 or
            n - 1.
        
    
    

    
        What is the minimum number of replacements needed for n to become 1?
    

    

    Example 1:
    Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1

    

    Example 2:
    Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1
-----------------

# 52_N-Queens_II
# 52. N-Queens II

The n-queens puzzle is the problem of placing n queens on an n×n
        chessboard such that no two queens attack each other.

    
        

    Given an integer n, return the number of distinct solutions to
        the n-queens puzzle.

    Example:

    Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
-----------------

# 669_Trim_a_Binary_Search_Tree
# 669. Trim a Binary Search Tree

Given a binary search tree and the lowest and highest boundaries as L and
        R, trim the tree so that all its elements lies in [L, R] (R >= L).
        You might need to change the root of the tree, so the result should return the new root of
        the trimmed binary search tree.
    

    Example 1:
    Input:
    1
   / \
  0   2

  L = 1
  R = 2

Output:
    1
      \
       2

    

    Example 2:
    Input:
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

Output:
      3
     /
   2
  /
 1
-----------------

# 1169_Invalid_Transactions
# 1169. Invalid Transactions

A transaction is possibly invalid if:

    
        the amount exceeds $1000, or;
        if it occurs within (and including) 60 minutes of another transaction with the same name
            in a different city.
        
    

    Each transaction string transactions[i] consists of comma separated
        values representing the name, time (in minutes), amount, and city of the transaction.
    

    Given a list of transactions, return a list of transactions that are
        possibly invalid.  You may return the answer in any order.

     
    Example 1:

    Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

    Example 2:

    Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]

    Example 3:

    Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]

     
    Constraints:

    
        transactions.length <= 1000
        Each transactions[i] takes the form "{name},{time},{amount},{city}"
        
        Each {name} and {city} consist of lowercase English
            letters, and have lengths between 1 and 10.
        
        Each {time} consist of digits, and represent an integer between 0
            and 1000.
        
        Each {amount} consist of digits, and represent an integer between
            0 and 2000.
-----------------

# 14_Longest_Common_Prefix
# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
Output: "fl"

    Example 2:

    Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

    Note:

    All given inputs are in lowercase letters a-z.
-----------------

# 1627_Graph_Connectivity_With_Threshold
# 1627. Graph Connectivity With Threshold


-----------------

# 193_Valid_Phone_Numbers
# 193. Valid Phone Numbers

Given a text file file.txt that contains list of phone numbers (one per line),
        write a one liner bash script to print all valid phone numbers.

    You may assume that a valid phone number must appear in one of the following two formats:
        (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)

    You may also assume each line in the text file must not contain leading or trailing white
        spaces.

    Example:

    Assume that file.txt has the following content:

    987-123-4567
123 456 7890
(123) 456-7890

    Your script should output the following valid phone numbers:

    987-123-4567
(123) 456-7890
-----------------

# 1092_Shortest_Common_Supersequence
# 1092. Shortest Common Supersequence

Given two strings str1 and str2, return the shortest string
        that has both str1 and str2 as subsequences.  If
        multiple answers exist, you may return any of them.

    (A string S is a subsequence of string T if deleting some number of characters from T
        (possibly 0, and the characters are chosen anywhere from T) results in the string S.)
    

     

    Example 1:

    Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.

     

    Note:

    
        1 <= str1.length, str2.length <= 1000
        str1 and str2 consist of lowercase English letters.
-----------------

# 89_Gray_Code
# 89. Gray Code

The gray code is a binary numeral system where two successive values differ in only one
        bit.

    Given a non-negative integer n representing the total number of bits in the code,
        print the sequence of gray code. A gray code sequence must begin with 0.

    Example 1:

    Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1

    Example 2:

    Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
-----------------

# 426_Convert_Binary_Search_Tree_to_Sorted_Doubly_Linked_List
# 426. Convert Binary Search Tree to Sorted Doubly Linked List

Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right
        pointers as synonymous to the previous and next pointers in a doubly-linked list.

    Let's take the following BST as an example, it may help you understand the problem
        better:
     

    
        
     

    We want to transform this BST into a circular doubly linked list. Each node in a doubly
        linked list has a predecessor and successor. For a circular doubly linked list, the
        predecessor of the first element is the last element, and the successor of the last element
        is the first element.

    The figure below shows the circular doubly linked list for the BST above. The "head"
        symbol means the node it points to is the smallest element of the linked list.
     

    
        
     

    Specifically, we want to do the transformation in place. After the transformation, the left
        pointer of the tree node should point to its predecessor, and the right pointer should point
        to its successor. We should return the pointer to the first element of the linked list.

    The figure below shows the transformed BST. The solid line indicates the successor
        relationship, while the dashed line means the predecessor relationship.
-----------------

# 705_Design_HashSet
# 705. Design HashSet

Design a HashSet without using any built-in hash table libraries.

    To be specific, your design should include these functions:

    
        add(value): Insert a value into the HashSet. 
        contains(value) : Return whether the value exists in the HashSet or not.
        
        remove(value): Remove a value in the HashSet. If the value does not
            exist in the HashSet, do nothing.
        
    

    
        Example:

    MyHashSet hashSet = new MyHashSet();
hashSet.add(1);        
hashSet.add(2);        
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)

    
        Note:

    
        All values will be in the range of [0, 1000000].
        The number of operations will be in the range of [1, 10000].
        Please do not use the built-in HashSet library.
-----------------

# 228_Summary_Ranges
# 228. Summary Ranges

Given a sorted integer array without duplicates, return the summary of its ranges.

    Example 1:

    Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.

    Example 2:

    Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
-----------------

# 106_Construct_Binary_Tree_from_Inorder_and_Postorder_Traversal
# 106. Construct Binary Tree from Inorder and Postorder Traversal

Given inorder and postorder traversal of a tree, construct the binary tree.

    Note:
        You may assume that duplicates do not exist in the tree.

    For example, given

    inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

    Return the following binary tree:

        3
   / \
  9  20
    /  \
   15   7
-----------------

# 1250_Check_If_It_Is_a_Good_Array
# 1250. Check If It Is a Good Array

Given an array nums of positive integers. Your task is to select some
        subset of nums, multiply each element by an integer and add all these numbers. The
        array is said to be good if you can obtain a sum
        of 1 from the array by any possible subset and multiplicand.

    Return True if the array is good otherwise return False.
    

     
    Example 1:

    Input: nums = [12,5,7,23]
Output: true
Explanation: Pick numbers 5 and 7.
5*3 + 7*(-2) = 1

    Example 2:

    Input: nums = [29,6,10]
Output: true
Explanation: Pick numbers 29, 6 and 10.
29*1 + 6*(-3) + 10*(-1) = 1

    Example 3:

    Input: nums = [3,6]
Output: false

     
    Constraints:

    
        1 <= nums.length <= 10^5
        1 <= nums[i] <= 10^9
-----------------

# 62_Unique_Paths
# 62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start'
        in the diagram below).

    The robot can only move either down or right at any point in time. The robot is trying to
        reach the bottom-right corner of the grid (marked 'Finish' in the diagram
        below).

    How many possible unique paths are there?

    
        
        Above is a 7 x 3 grid. How many possible unique paths are there?
    

    Note: m and n will be at most 100.

    Example 1:

    Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

    Example 2:

    Input: m = 7, n = 3
Output: 28
-----------------

# 26_Remove_Duplicates_from_Sorted_Array
# 26. Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once
        and return the new length.

    Do not allocate extra space for another array, you must do this by modifying the
        input array in-place
        with O(1) extra memory.

    Example 1:

    Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

    Example 2:

    Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

    Clarification:

    Confused why the returned value is an integer but your answer is an array?

    Note that the input array is passed in by reference, which means
        modification to the input array will be known to the caller as well.

    Internally you can think of this:

    // nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
-----------------

# 82_Remove_Duplicates_from_Sorted_List_II
# 82. Remove Duplicates from Sorted List II

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct
        numbers from the original list.

    Example 1:

    Input: 1->2->3->3->4->4->5
Output: 1->2->5

    Example 2:

    Input: 1->1->1->2->3
Output: 2->3
-----------------

# 627_Swap_Salary
# 627. Swap Salary

Given a table salary, such as the one below, that has m=male and f=female
        values. Swap all f and m values (i.e., change all f values to m and vice versa) with a
        single update statement and no intermediate temp table.

    Note that you must write a single update statement, DO NOT write any select
        statement for this problem.

     

    Example:

    | id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |

    After running your update statement, the above salary table should have the
    following rows:

    | id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    |
-----------------

# 354_Russian_Doll_Envelopes
# 354. Russian Doll Envelopes

You have a number of envelopes with widths and heights given as a pair of integers (w,
        h). One envelope can fit into another if and only if both the width and height of one
        envelope is greater than the width and height of the other envelope.

    What is the maximum number of envelopes can you Russian doll? (put one inside other)

    Note:
        Rotation is not allowed.

    Example:
-----------------

# 852_Peak_Index_in_a_Mountain_Array
# 852. Peak Index in a Mountain Array

Let's call an array A a mountain if the following properties
        hold:

    
        A.length >= 3
        There exists some 0 < i < A.length - 1 such that A[0] <
            A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
    

    Given an array that is definitely a mountain, return any i such that A[0]
        < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

    Example 1:

    Input: [0,1,0]
Output: 1
-----------------

# 1415_The_k-th_Lexicographical_String_of_All_Happy_Strings_of_Length_n
# 1415. The k-th Lexicographical String of All Happy Strings of Length n


-----------------

# 870_Advantage_Shuffle
# 870. Advantage Shuffle

Given two arrays A and B of equal size, the advantage of A
        with respect to B is the number of indices i for which
        A[i] > B[i].

    Return any permutation of A that maximizes its advantage with
        respect to B.
-----------------

# 643_Maximum_Average_Subarray_I
# 643. Maximum Average Subarray I

Given an array consisting of n integers, find the contiguous subarray of given
        length k that has the maximum average value. And you need to output the maximum
        average value.

    Example 1:

    Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

     

    Note:

    
        1 <= k <= n <= 30,000.
        Elements of the given array will be in the range [-10,000, 10,000].
-----------------

# 1153_String_Transforms_Into_Another_String
# 1153. String Transforms Into Another String

Given two strings str1 and str2 of the same length, determine
        whether you can transform str1 into str2 by doing zero
            or more conversions.

    In one conversion you can convert all occurrences of one character in
        str1 to any other lowercase English character.

    Return true if and only if you can transform str1 into str2.
    

     

    Example 1:

    Input: str1 = "aabcc", str2 = "ccdee"
Output: true
Explanation: Convert 'c' to 'e' then 'b' to 'd' then 'a' to 'c'. Note that the order of conversions matter.

    Example 2:

    Input: str1 = "leetcode", str2 = "codeleet"
Output: false
Explanation: There is no way to transform str1 to str2.

     

    Note:

    
        1 <= str1.length == str2.length <= 10^4
        Both str1 and str2 contain only lowercase English letters.
-----------------

# 204_Count_Primes
# 204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

    Example:

    Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
-----------------

# 396_Rotate_Function
# 396. Rotate Function

Given an array of integers A and let n to be its length.
    

    
        Assume Bk to be an array obtained by rotating the array
        A k positions clock-wise, we define a "rotation function" F
        on A as follow:
    

    
        F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
    

    Calculate the maximum value of F(0), F(1), ..., F(n-1).
    

    Note:
        n is guaranteed to be less than 105.
    

    Example:
    A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
-----------------

# 907_Sum_of_Subarray_Minimums
# 907. Sum of Subarray Minimums

Given an array of integers A, find the sum of min(B), where
        B ranges over every (contiguous) subarray of A.

    Since the answer may be large, return the answer modulo 10^9 +
        7.

     

    Example 1:

    Input: [3,1,2,4]
Output: 17
Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.

     

    Note:

    
        1 <= A.length <= 30000
        1 <= A[i] <= 30000
-----------------

# 1185_Day_of_the_Week
# 1185. Day of the Week

Given a date, return the corresponding day of the week for that date.

    The input is given as three integers representing the day, month
        and year respectively.

    Return the answer as one of the following values {"Sunday", "Monday",
        "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
    

     
    Example 1:

    Input: day = 31, month = 8, year = 2019
Output: "Saturday"

    Example 2:

    Input: day = 18, month = 7, year = 1999
Output: "Sunday"

    Example 3:

    Input: day = 15, month = 8, year = 1993
Output: "Sunday"

     
    Constraints:

    
        The given dates are valid dates between the years 1971 and
            2100.
-----------------

# 168_Excel_Sheet_Column_Title
# 168. Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel
        sheet.

    For example:

        1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...

    Example 1:

    Input: 1
Output: "A"

    Example 2:

    Input: 28
Output: "AB"

    Example 3:

    Input: 701
Output: "ZY"
-----------------

# 754_Reach_a_Number
# 754. Reach a Number

You are standing at position 0 on an infinite number line. There is a goal at
        position target.
    
    
        On each move, you can either go left or right. During the n-th move (starting from
        1), you take n steps.
    
    
        Return the minimum number of steps required to reach the destination.
    

    Example 1:
    Input: target = 3
Output: 2
Explanation:
On the first move we step from 0 to 1.
On the second step we step from 1 to 3.

    

    Example 2:
    Input: target = 2
Output: 3
Explanation:
On the first move we step from 0 to 1.
On the second move we step  from 1 to -1.
On the third move we step from -1 to 2.

    

    Note:
    target will be a non-zero integer in the range [-10^9, 10^9].
-----------------

# 1602_Find_Nearest_Right_Node_in_Binary_Tree
# 1602. Find Nearest Right Node in Binary Tree


-----------------

# 350_Intersection_of_Two_Arrays_II
# 350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

    Example 1:

    Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
-----------------

# 706_Design_HashMap
# 706. Design HashMap

Design a HashMap without using any built-in hash table libraries.

    To be specific, your design should include these functions:

    
        put(key, value) : Insert a (key, value) pair into the HashMap. If the
            value already exists in the HashMap, update the value.
        
        get(key): Returns the value to which the specified key is mapped, or -1 if
            this map contains no mapping for the key.
        
        remove(key) : Remove the mapping for the value key if this map
            contains the mapping for the key.
        
    

    
        Example:

    MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);        
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

    
        Note:

    
        All keys and values will be in the range of [0, 1000000].
        The number of operations will be in the range of [1, 10000].
        Please do not use the built-in HashMap library.
-----------------

# 283_Move_Zeroes
# 283. Move Zeroes

Given an array nums, write a function to move all 0's to the
        end of it while maintaining the relative order of the non-zero elements.

    Example:

    Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

    Note:

    
        You must do this in-place without making a copy of the array.
        Minimize the total number of operations.
-----------------

# 1305_All_Elements_in_Two_Binary_Search_Trees
# 1305. All Elements in Two Binary Search Trees


-----------------

# 115_Distinct_Subsequences
# 115. Distinct Subsequences

Given a string S and a string T, count the number of
        distinct subsequences of S which equals T.

    A subsequence of a string is a new string which is formed from the original string by
        deleting some (can be none) of the characters without disturbing the relative positions of
        the remaining characters. (ie, "ACE" is a subsequence of "ABCDE"
        while "AEC" is not).

    Example 1:

    Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^

    Example 2:

    Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
-----------------

# 1144_Decrease_Elements_To_Make_Array_Zigzag
# 1144. Decrease Elements To Make Array Zigzag

Given an array nums of integers, a move consists of choosing any
        element and decreasing it by 1.

    An array A is a zigzag array if either:

    
        Every even-indexed element is greater than adjacent elements, ie. A[0] >
            A[1] < A[2] > A[3] < A[4] > ...
        OR, every odd-indexed element is greater than adjacent elements, ie. A[0]
            < A[1] > A[2] < A[3] > A[4] < ...
    

    Return the minimum number of moves to transform the given array nums into a
        zigzag array.

     
    Example 1:

    Input: nums = [1,2,3]
Output: 2
Explanation: We can decrease 2 to 0 or 3 to 1.

    Example 2:

    Input: nums = [9,6,1,6,2]
Output: 4

     
    Constraints:

    
        1 <= nums.length <= 1000
        1 <= nums[i] <= 1000
-----------------

# 1777_Product's_Price_for_Each_Store
# 1777. Product's Price for Each Store


-----------------

# 445_Add_Two_Numbers_II
# 445. Add Two Numbers II

You are given two non-empty linked lists representing two non-negative integers. The
        most significant digit comes first and each of their nodes contain a single digit. Add the
        two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0
        itself.

    Follow up:
        What if you cannot modify the input lists? In other words, reversing the lists is not
        allowed.
    

    
        Example:
    Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
-----------------

# 399_Evaluate_Division
# 399. Evaluate Division

Equations are given in the format A / B = k, where A and
        B are variables represented as strings, and k is a real number
        (floating point number). Given some queries, return the answers. If the answer does not
        exist, return -1.0.

    Example:
        Given  a / b = 2.0, b / c = 3.0.
        queries are:  a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
        return  [6.0, 0.5, -1.0, 1.0, -1.0 ].

    The input is:  vector<pair<string, string>> equations, vector<double>&
        values, vector<pair<string, string>> queries , where equations.size()
        == values.size(), and the values are positive. This represents the equations. Return
         vector<double>.

    According to the example above:

    equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 

     

    The input is always valid. You may assume that evaluating the queries will result in no
        division by zero and there is no contradiction.
-----------------

# 1487_Making_File_Names_Unique
# 1487. Making File Names Unique


-----------------

# 564_Find_the_Closest_Palindrome
# 564. Find the Closest Palindrome

Given an integer n, find the closest integer (not including itself), which is a
        palindrome. 

    The 'closest' is defined as absolute difference minimized between two integers.

    Example 1:
    Input: "123"
Output: "121"

    

    Note:
    
        The input n is a positive integer represented by string, whose length will not
            exceed 18.
        
        If there is a tie, return the smaller one as answer.
-----------------

# 1430_Check_If_a_String_Is_a_Valid_Sequence_from_Root_to_Leaves_Path_in_a_Binary_Tree
# 1430. Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree


-----------------

# 1286_Iterator_for_Combination
# 1286. Iterator for Combination


-----------------

# 1292_Maximum_Side_Length_of_a_Square_with_Sum_Less_than_or_Equal_to_Threshold
# 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold


-----------------

# 615_Average_Salary_Departments_VS_Company
# 615. Average Salary: Departments VS Company

Given two tables as below, write a query to display the comparison result (higher/lower/same) of
    the average salary of employees in a department to the company's average salary.
     
    Table: salary

    | id | employee_id | amount | pay_date   |
|----|-------------|--------|------------|
| 1  | 1           | 9000   | 2017-03-31 |
| 2  | 2           | 6000   | 2017-03-31 |
| 3  | 3           | 10000  | 2017-03-31 |
| 4  | 1           | 7000   | 2017-02-28 |
| 5  | 2           | 6000   | 2017-02-28 |
| 6  | 3           | 8000   | 2017-02-28 |

     
    The employee_id column refers to the employee_id in the following table employee.

     

    | employee_id | department_id |
|-------------|---------------|
| 1           | 1             |
| 2           | 2             |
| 3           | 2             |

     
    So for the sample data above, the result is:

     

    | pay_month | department_id | comparison  |
|-----------|---------------|-------------|
| 2017-03   | 1             | higher      |
| 2017-03   | 2             | lower       |
| 2017-02   | 1             | same        |
| 2017-02   | 2             | same        |

     
    Explanation

     
    In March, the company's average salary is (9000+6000+10000)/3 = 8333.33...

     
    The average salary for department '1' is 9000, which is the salary of employee_id
    '1' since there is only one employee in this department. So the comparison result is
    'higher' since 9000 > 8333.33 obviously.

     
    The average salary of department '2' is (6000 + 10000)/2 = 8000, which is the average of
    employee_id '2' and '3'. So the comparison result is 'lower'
    since 8000 < 8333.33.

     
    With he same formula for the average salary comparison in February, the result is 'same'
    since both the department '1' and '2' have the same average salary with the
    company, which is 7000.
-----------------

# 92_Reverse_Linked_List_II
# 92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

    Note: 1 ≤ m ≤ n ≤ length of list.

    Example:

    Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
-----------------

# 1322_1322._Ads_Performance
# 1322. 1322. Ads Performance


-----------------

# 1179_Reformat_Department_Table
# 1179. Reformat Department Table

Table: Department

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| revenue       | int     |
| month         | varchar |
+---------------+---------+
(id, month) is the primary key of this table.
The table has information about the revenue of each department per month.
The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].

     

    Write an SQL query to reformat the table such that there is a department id column and a
        revenue column for each month.

    The query result format is in the following example:

    Department table:
+------+---------+-------+
| id   | revenue | month |
+------+---------+-------+
| 1    | 8000    | Jan   |
| 2    | 9000    | Jan   |
| 3    | 10000   | Feb   |
| 1    | 7000    | Feb   |
| 1    | 6000    | Mar   |
+------+---------+-------+

Result table:
+------+-------------+-------------+-------------+-----+-------------+
| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
+------+-------------+-------------+-------------+-----+-------------+
| 1    | 8000        | 7000        | 6000        | ... | null        |
| 2    | 9000        | null        | null        | ... | null        |
| 3    | null        | 10000       | null        | ... | null        |
+------+-------------+-------------+-------------+-----+-------------+

Note that the result table has 13 columns (1 for the department id + 12 for the months).
-----------------

# 1141_User_Activity_for_the_Past_30_Days_I
# 1141. User Activity for the Past 30 Days I

Table: Activity

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| session_id    | int     |
| activity_date | date    |
| activity_type | enum    |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
The activity_type column is an ENUM of type ('open_session', 'end_session', 'scroll_down', 'send_message').
The table shows the user activities for a social media website.
Note that each session belongs to exactly one user.

     

    Write an SQL query to find the daily active user count for a period of 30 days ending
        2019-07-27 inclusively. A user was active on some day if he/she made
        at least one activity on that day.

    The query result format is in the following example:

    Activity table:
+---------+------------+---------------+---------------+
| user_id | session_id | activity_date | activity_type |
+---------+------------+---------------+---------------+
| 1       | 1          | 2019-07-20    | open_session  |
| 1       | 1          | 2019-07-20    | scroll_down   |
| 1       | 1          | 2019-07-20    | end_session   |
| 2       | 4          | 2019-07-20    | open_session  |
| 2       | 4          | 2019-07-21    | send_message  |
| 2       | 4          | 2019-07-21    | end_session   |
| 3       | 2          | 2019-07-21    | open_session  |
| 3       | 2          | 2019-07-21    | send_message  |
| 3       | 2          | 2019-07-21    | end_session   |
| 4       | 3          | 2019-06-25    | open_session  |
| 4       | 3          | 2019-06-25    | end_session   |
+---------+------------+---------------+---------------+

Result table:
+------------+--------------+
| day        | active_users |
+------------+--------------+
| 2019-07-20 | 2            |
| 2019-07-21 | 2            |
+------------+--------------+
Note that we do not care about days with zero active users.
-----------------

# 1226_The_Dining_Philosophers
# 1226. The Dining Philosophers

Five silent philosophers sit at a round table with bowls of spaghetti. Forks are placed
        between each pair of adjacent philosophers.

    Each philosopher must alternately think and eat. However, a philosopher can only eat
        spaghetti when they have both left and right forks. Each fork can be held by only one
        philosopher and so a philosopher can use the fork only if it is not being used by another
        philosopher. After an individual philosopher finishes eating, they need to put down both
        forks so that the forks become available to others. A philosopher can take the fork on their
        right or the one on their left as they become available, but cannot start eating before
        getting both forks.

    Eating is not limited by the remaining amounts of spaghetti or stomach space; an infinite
        supply and an infinite demand are assumed.

    Design a discipline of behavior (a concurrent algorithm) such that no philosopher will
        starve; i.e., each can forever continue to alternate between eating and
        thinking, assuming that no philosopher can know when others may want to eat or think.

    

    The problem statement and the image above are taken from wikipedia.org
    

     

    The philosophers' ids are numbered from 0 to 4 in a
        clockwise order. Implement the function void
            wantsToEat(philosopher, pickLeftFork, pickRightFork, eat, putLeftFork,
            putRightFork) where:

    
        philosopher is the id of the philosopher who wants to eat.
        pickLeftFork and pickRightFork are functions
            you can call to pick the corresponding forks of that philosopher.
        
        eat is a function you can call to let the philosopher eat once he has
            picked both forks.
        
        putLeftFork and pickRightFork are functions you
            can call to put down the corresponding forks of that philosopher.
        
        The philosophers are assumed to be thinking as long as they are not asking to eat (the
            function is not being called with their number).
        
    

    Five threads, each representing a philosopher, will simultaneously use one object of
        your class to simulate the process. It is possible that the function will be called for the
        same philosopher more than once, even before the last call ends.

     
    Example 1:

    Input: n = 1
Output: [[4,2,1],[4,1,1],[0,1,1],[2,2,1],[2,1,1],[2,0,3],[2,1,2],[2,2,2],[4,0,3],[4,1,2],[0,2,1],[4,2,2],[3,2,1],[3,1,1],[0,0,3],[0,1,2],[0,2,2],[1,2,1],[1,1,1],[3,0,3],[3,1,2],[3,2,2],[1,0,3],[1,1,2],[1,2,2]]
Explanation:
n is the number of times each philosopher will call the function.
The output array describes the calls you made to the functions controlling the forks and the eat function, its format is:
output[i] = [a, b, c] (three integers)
- a is the id of a philosopher.
- b specifies the fork: {1 : left, 2 : right}.
- c specifies the operation: {1 : pick, 2 : put, 3 : eat}.

     
    Constraints:

    
        1 <= n <= 60
-----------------

# 1199_Minimum_Time_to_Build_Blocks
# 1199. Minimum Time to Build Blocks

You are given a list of blocks, where blocks[i] = t means that
        the i-th block needs t units of time to be built. A
        block can only be built by exactly one worker.

    A worker can either split into two workers (number of workers increases by one) or build a
        block then go home. Both decisions cost some time.

    The time cost of spliting one worker into two workers is given as an integer
        split. Note that if two workers split at the same time, they split in parallel
        so the cost would be split.

    Output the minimum time needed to build all blocks.

    Initially, there is only one worker.

     
    Example 1:

    Input: blocks = [1], split = 1
Output: 1
Explanation: We use 1 worker to build 1 block in 1 time unit.

    Example 2:

    Input: blocks = [1,2], split = 5
Output: 7
Explanation: We split the worker into 2 workers in 5 time units then assign each of them to a block so the cost is 5 + max(1, 2) = 7.

    Example 3:

    Input: blocks = [1,2,3], split = 1
Output: 4
Explanation: Split 1 worker into 2, then assign the first worker to the last block and split the second worker into 2.
Then, use the two unassigned workers to build the first two blocks.
The cost is 1 + max(3, 1 + max(1, 2)) = 4.

     
    Constraints:

    
        1 <= blocks.length <= 1000
        1 <= blocks[i] <= 10^5
        1 <= split <= 100
-----------------

# 1710_Maximum_Units_on_a_Truck
# 1710. Maximum Units on a Truck


-----------------

# 1130_Minimum_Cost_Tree_From_Leaf_Values
# 1130. Minimum Cost Tree From Leaf Values

Given an array arr of positive integers, consider all binary trees such that:
    

    
        Each node has either 0 or 2 children;
        The values of arr correspond to the values of
            each leaf in an in-order traversal of the tree.  (Recall
                that a node is a leaf if and only if it has 0 children.)
        The value of each non-leaf node is equal to the product of the largest leaf value
            in its left and right subtree respectively.
        
    

    Among all possible binary trees considered, return the smallest possible sum of the
        values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit
        integer.

     
    Example 1:

    Input: arr = [6,2,4]
Output: 32
Explanation:
There are two possible trees.  The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4

     
    Constraints:

    
        2 <= arr.length <= 40
        1 <= arr[i] <= 15
        It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less
            than 2^31).
-----------------

# 1023_Camelcase_Matching
# 1023. Camelcase Matching

A query word matches a given pattern if we can insert lowercase
        letters to the pattern word so that it equals the query. (We may insert each
        character at any position, and may insert 0 characters.)

    Given a list of queries, and a pattern, return an
        answer list of booleans, where answer[i] is true if and only if
        queries[i] matches the pattern.

     

    Example 1:

    Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
Output: [true,false,true,true,false]
Explanation: 
"FooBar" can be generated like this "F" + "oo" + "B" + "ar".
"FootBall" can be generated like this "F" + "oot" + "B" + "all".
"FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".

    Example 2:

    Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
Output: [true,false,true,false,false]
Explanation: 
"FooBar" can be generated like this "Fo" + "o" + "Ba" + "r".
"FootBall" can be generated like this "Fo" + "ot" + "Ba" + "ll".

    Example 3:

    Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
Output: [false,true,false,false,false]
Explanation: 
"FooBarTest" can be generated like this "Fo" + "o" + "Ba" + "r" + "T" + "est".

     

    Note:

    
        1 <= queries.length <= 100
        1 <= queries[i].length <= 100
        1 <= pattern.length <= 100
        All strings consists only of lower and upper case English letters.
-----------------

# 11_Container_With_Most_Water
# 11. Container With Most Water

Given n non-negative integers a1, a2, ...,
        an , where each represents a point at coordinate (i, ai).
        n vertical lines are drawn such that the two endpoints of line i is at
        (i, ai) and (i, 0). Find two lines, which together with
        x-axis forms a container, such that the container contains the most water.

    Note: You may not slant the container and n is at least 2.

     

    

    
        The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case,
            the max area of water (blue section) the container can contain is 49.
        
    

     

    Example:

    Input: [1,8,6,2,5,4,8,3,7]
Output: 49
-----------------

# 296_Best_Meeting_Point
# 296. Best Meeting Point

A group of two or more people wants to meet and minimize the total travel distance. You are
        given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The
        distance is calculated using Manhattan Distance, where distance(p1,
        p2) = |p2.x - p1.x| + |p2.y - p1.y|.

    Example:

    Input:

1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 6

Explanation: Given three people living at (0,0), (0,4), and (2,2):
             The point (0,2) is an ideal meeting point, as the total travel distance
             of 2+2+2=6 is minimal. So return 6.
-----------------

# 768_Max_Chunks_To_Make_Sorted_II
# 768. Max Chunks To Make Sorted II

This question is the same as "Max Chunks to Make Sorted" except the integers of
        the given array are not necessarily distinct, the input array could be up to length 2000,
        and the elements could be up to 10**8.

    

    Given an array arr of integers (not necessarily distinct), we
        split the array into some number of "chunks" (partitions), and individually sort
        each chunk.  After concatenating them, the result equals the sorted array.

    What is the most number of chunks we could have made?

    Example 1:

    Input: arr = [5,4,3,2,1]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.

    Example 2:

    Input: arr = [2,1,3,4,4]
Output: 4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.

    Note:

    
        arr will have length in range [1, 2000].
        arr[i] will be an integer in range [0, 10**8].
-----------------

# 110_Balanced_Binary_Tree
# 110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

    For this problem, a height-balanced binary tree is defined as:

    
        a binary tree in which the depth of the two subtrees of every node never differ
            by more than 1.
    

    Example 1:

    Given the following tree [3,9,20,null,null,15,7]:

        3
   / \
  9  20
    /  \
   15   7

    Return true.
        
        Example 2:

    Given the following tree [1,2,2,3,3,null,null,4,4]:

           1
      / \
     2   2
    / \
   3   3
  / \
 4   4

    Return false.
-----------------

# 1538_Guess_the_Majority_in_a_Hidden_Array
# 1538. Guess the Majority in a Hidden Array


-----------------

# 1715_Count_Apples_and_Oranges
# 1715. Count Apples and Oranges


-----------------

# 393_UTF-8_Validation
# 393. UTF-8 Validation

A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:
    
    
        For 1-byte character, the first bit is a 0, followed by its unicode code.
        For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1
            bytes with most significant 2 bits being 10.
        
    
    This is how the UTF-8 encoding would work:

       Char. number range  |        UTF-8 octet sequence
      (hexadecimal)    |              (binary)
   --------------------+---------------------------------------------
   0000 0000-0000 007F | 0xxxxxxx
   0000 0080-0000 07FF | 110xxxxx 10xxxxxx
   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

    
        Given an array of integers representing the data, return whether it is a valid utf-8
        encoding.
    
    
        Note:
        The input is an array of integers. Only the least significant 8 bits of each integer
        is used to store the data. This means each integer represents only 1 byte of data.
    

    
        Example 1:
    data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.

Return true.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.

    

    
        Example 2:
    data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.

Return false.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid.
-----------------

# 1814_Count_Nice_Pairs_in_an_Array
# 1814. Count Nice Pairs in an Array


-----------------

# 1517_Find_Users_With_Valid_E-Mails
# 1517. Find Users With Valid E-Mails


-----------------

# 933_Number_of_Recent_Calls
# 933. Number of Recent Calls

Write a class RecentCounter to count recent requests.

    It has only one method: ping(int t), where t represents some time in
        milliseconds.

    Return the number of pings that have been made from 3000 milliseconds ago until
        now.

    Any ping with time in [t - 3000, t] will count, including the current ping.

    It is guaranteed that every call to ping uses a strictly larger value
        of t than before.

     

    Example 1:

    Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]

     

    Note:

    
        Each test case will have at most 10000 calls to ping.
        Each test case will call ping with strictly increasing values of
            t.
        
        Each call to ping will have 1 <= t <= 10^9.
-----------------

# 1085_Sum_of_Digits_in_the_Minimum_Number
# 1085. Sum of Digits in the Minimum Number

Given an array A of positive integers, let S be the sum of the
        digits of the minimal element of A.

    Return 0 if S is odd, otherwise return 1.

     

    Example 1:

    Input: [34,23,1,24,75,33,54,8]
Output: 0
Explanation: 
The minimal element is 1, and the sum of those digits is S = 1 which is odd, so the answer is 0.

    Example 2:

    Input: [99,77,33,66,55]
Output: 1
Explanation: 
The minimal element is 33, and the sum of those digits is S = 3 + 3 = 6 which is even, so the answer is 1.

     

    Note:

    
        1 <= A.length <= 100
        1 <= A[i].length <= 100
-----------------

# 511_Game_Play_Analysis_I
# 511. Game Play Analysis I

Table: Activity

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key of this table.
This table shows the activity of players of some game.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on some day using some device.

     

    Write an SQL query that reports the first login date for each player.
    

    The query result format is in the following example:

    Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+

Result table:
+-----------+-------------+
| player_id | first_login |
+-----------+-------------+
| 1         | 2016-03-01  |
| 2         | 2017-06-25  |
| 3         | 2016-03-02  |
+-----------+-------------+
-----------------

# 325_Maximum_Size_Subarray_Sum_Equals_k
# 325. Maximum Size Subarray Sum Equals k

Given an array nums and a target value k, find the maximum length of a subarray
        that sums to k. If there isn't one, return 0 instead.

    Note:
        The sum of the entire nums array is guaranteed to fit within the 32-bit signed
        integer range.

    Example 1:

    Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.

    Example 2:

    Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.

    Follow Up:
        Can you do it in O(n) time?
-----------------

# 622_Design_Circular_Queue
# 622. Design Circular Queue

Design your implementation of the circular queue. The circular queue is a linear data
        structure in which the operations are performed based on FIFO (First In First Out) principle
        and the last position is connected back to the first position to make a circle. It is also
        called "Ring Buffer".

    One of the benefits of the circular queue is that we can make use of the spaces in front of
        the queue. In a normal queue, once the queue becomes full, we cannot insert the next element
        even if there is a space in front of the queue. But using the circular queue, we can use the
        space to store new values.

    Your implementation should support following operations:

    
        MyCircularQueue(k): Constructor, set the size of the queue to be k.
        Front: Get the front item from the queue. If the queue is empty, return -1.
        
        Rear: Get the last item from the queue. If the queue is empty, return -1.
        
        enQueue(value): Insert an element into the circular queue. Return true if
            the operation is successful.
        
        deQueue(): Delete an element from the circular queue. Return true if the
            operation is successful.
        
        isEmpty(): Checks whether the circular queue is empty or not.
        isFull(): Checks whether the circular queue is full or not.
    

     

    Example:

    MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
circularQueue.enQueue(1);  // return true
circularQueue.enQueue(2);  // return true
circularQueue.enQueue(3);  // return true
circularQueue.enQueue(4);  // return false, the queue is full
circularQueue.Rear();  // return 3
circularQueue.isFull();  // return true
circularQueue.deQueue();  // return true
circularQueue.enQueue(4);  // return true
circularQueue.Rear();  // return 4

     

    Note:

    
        All values will be in the range of [0, 1000].
        The number of operations will be in the range of [1, 1000].
        Please do not use the built-in Queue library.
-----------------

# 1010_Pairs_of_Songs_With_Total_Durations_Divisible_by_60
# 1010. Pairs of Songs With Total Durations Divisible by 60

In a list of songs, the i-th song has a duration
        of time[i] seconds. 

    Return the number of pairs of songs for which their total duration in seconds is
        divisible by 60.  Formally, we want the number of indices i
            < j with (time[i] + time[j]) % 60 == 0.

     

    Example 1:

    Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
-----------------

# 1590_Make_Sum_Divisible_by_P
# 1590. Make Sum Divisible by P


-----------------

# 779_K-th_Symbol_in_Grammar
# 779. K-th Symbol in Grammar

On the first row, we write a 0. Now in every subsequent row, we look at the
        previous row and replace each occurrence of 0 with 01, and each
        occurrence of 1 with 10.

    Given row N and index K, return the K-th indexed
        symbol in row N. (The values of K are 1-indexed.) (1 indexed).

    Examples:
Input: N = 1, K = 1
Output: 0

Input: N = 2, K = 1
Output: 0

Input: N = 2, K = 2
Output: 1

Input: N = 4, K = 5
Output: 1

Explanation:
row 1: 0
row 2: 01
row 3: 0110
row 4: 01101001

    Note:

    
        N will be an integer in the range [1, 30].
        K will be an integer in the range [1, 2^(N-1)].
-----------------

# 1519_Number_of_Nodes_in_the_Sub-Tree_With_the_Same_Label
# 1519. Number of Nodes in the Sub-Tree With the Same Label


-----------------

# 1440_Evaluate_Boolean_Expression
# 1440. Evaluate Boolean Expression


-----------------

# 346_Moving_Average_from_Data_Stream
# 346. Moving Average from Data Stream

Given a stream of integers and a window size, calculate the moving average of all integers in
        the sliding window.

    Example:

    MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
-----------------

# 514_Freedom_Trail
# 514. Freedom Trail

In the video game Fallout 4, the quest "Road to Freedom" requires players to reach
        a metal dial called the "Freedom Trail Ring", and use the dial to spell a specific
        keyword in order to open the door.

    Given a string ring, which represents the code engraved on the outer ring and another
        string key, which represents the keyword needs to be spelled. You need to find the
        minimum number of steps in order to spell all the characters in the keyword.

    Initially, the first character of the ring is aligned at 12:00 direction. You need to
        spell all the characters in the string key one by one by rotating the ring clockwise
        or anticlockwise to make each character of the string key aligned at 12:00 direction
        and then by pressing the center button.

    At the stage of rotating the ring to spell the key character key[i]:

    
        You can rotate the ring clockwise or anticlockwise one place, which counts
            as 1 step. The final purpose of the rotation is to align one of the string
            ring's characters at the 12:00 direction, where this character must equal to
            the character key[i].
        
        If the character key[i] has been aligned at the 12:00 direction, you need to
            press the center button to spell, which also counts as 1 step. After the pressing, you
            could begin to spell the next character in the key (next stage), otherwise, you've
            finished all the spelling.
        
    

    Example:

    
     

    Input: ring = "godding", key = "gd"
Output: 4
Explanation:
For the first key character 'g', since it is already in place, we just need 1 step to spell this character.
For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
Also, we need 1 more step for spelling.
So the final output is 4.

    Note:

    
        Length of both ring and key will be in range 1 to 100.
        There are only lowercase letters in both strings and might be some duplcate characters
            in both strings.
        
        It's guaranteed that string key could always be spelled by rotating the
            string ring.
-----------------

# 1087_Brace_Expansion
# 1087. Brace Expansion

A string S represents a list of words.

    Each letter in the word has 1 or more options.  If there is one option, the letter is
        represented as is.  If there is more than one option, then curly braces delimit the
        options.  For example, "{a,b,c}" represents options ["a",
            "b", "c"].

    For example, "{a,b,c}d{e,f}" represents the list ["ade",
        "adf", "bde", "bdf", "cde", "cdf"].
    

    Return all words that can be formed in this manner, in lexicographical order.

     

    Example 1:

    Input: "{a,b}c{d,e}f"
Output: ["acdf","acef","bcdf","bcef"]

    Example 2:

    Input: "abcd"
Output: ["abcd"]

     

    Note:

    
        1 <= S.length <= 50
        There are no nested curly brackets.
        All characters inside a pair of consecutive opening and ending curly brackets are
            different.
-----------------

# 1501_Countries_You_Can_Safely_Invest_In
# 1501. Countries You Can Safely Invest In


-----------------

# 230_Kth_Smallest_Element_in_a_BST
# 230. Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth
        smallest element in it.

    Note: 
        You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

    Example 1:

    Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

    Example 2:

    Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

    Follow up:
        What if the BST is modified (insert/delete operations) often and you need to find the kth
        smallest frequently? How would you optimize the kthSmallest routine?
-----------------

# 67_Add_Binary
# 67. Add Binary

Given two binary strings, return their sum (also a binary string).

    The input strings are both non-empty and contains only characters
        1 or 0.

    Example 1:

    Input: a = "11", b = "1"
Output: "100"

    Example 2:

    Input: a = "1010", b = "1011"
Output: "10101"
-----------------

# 1603_Design_Parking_System
# 1603. Design Parking System


-----------------

# 1569_Number_of_Ways_to_Reorder_Array_to_Get_Same_BST
# 1569. Number of Ways to Reorder Array to Get Same BST


-----------------

# 1802_Maximum_Value_at_a_Given_Index_in_a_Bounded_Array
# 1802. Maximum Value at a Given Index in a Bounded Array


-----------------

# 1452_People_Whose_List_of_Favorite_Companies_Is_Not_a_Subset_of_Another_List
# 1452. People Whose List of Favorite Companies Is Not a Subset of Another List


-----------------

# 936_Stamping_The_Sequence
# 936. Stamping The Sequence

You want to form a target string of lowercase letters.

    At the beginning, your sequence is target.length '?'
        marks.  You also have a stamp of lowercase letters.

    On each turn, you may place the stamp over the sequence, and replace every letter in the
        sequence with the corresponding letter from the stamp.  You can make up to 10 *
            target.length turns.

    For example, if the initial sequence is "?????", and
        your stamp is "abc",  then you may make "abc??",
            "?abc?", "??abc" in the first turn.  (Note that the
        stamp must be fully contained in the boundaries of the sequence in order to stamp.)

    If the sequence is possible to stamp, then return an array of the index of the left-most
        letter being stamped at each turn.  If the sequence is not possible to stamp, return an
        empty array.

    For example, if the sequence is "ababc", and the
        stamp is "abc", then we could return the answer [0, 2],
        corresponding to the moves "?????" -> "abc??"
            -> "ababc".

    Also, if the sequence is possible to stamp, it is guaranteed it is possible to stamp within
        10 * target.length moves.  Any answers specifying more than this
        number of moves will not be accepted.

     

    Example 1:

    Input: stamp = "abc", target = "ababc"
Output: [0,2]
([1,0,2] would also be accepted as an answer, as well as some other answers.)
-----------------

# 1536_Minimum_Swaps_to_Arrange_a_Binary_Grid
# 1536. Minimum Swaps to Arrange a Binary Grid


-----------------

# 1116_Print_Zero_Even_Odd
# 1116. Print Zero Even Odd

Suppose you are given the following code:

    class ZeroEvenOdd {
  public ZeroEvenOdd(int n) { ... }      // constructor
  public void zero(printNumber) { ... }  // only output 0's
  public void even(printNumber) { ... }  // only output even numbers
  public void odd(printNumber) { ... }   // only output odd numbers
}

    The same instance of ZeroEvenOdd will be passed to three different threads:

    
        Thread A will call zero() which should only output 0's.
        Thread B will call even() which should only ouput even numbers.
        
        Thread C will call odd() which should only output odd numbers.
    

    Each of the threads is given a printNumber method to output an
        integer. Modify the given program to output the series 010203040506...
        where the length of the series must be 2n.

     

    Example 1:

    Input: n = 2
Output: "0102"
Explanation: There are three threads being fired asynchronously. One of them calls zero(), the other calls even(), and the last one calls odd(). "0102" is the correct output.

    Example 2:

    Input: n = 5
Output: "0102030405"
-----------------

# 626_Exchange_Seats
# 626. Exchange Seats

Mary is a teacher in a middle school and she has a table seat storing students'
        names and their corresponding seat ids.
    The column id is continuous increment.

     
    Mary wants to change seats for the adjacent students.

     
    Can you write a SQL query to output the result for Mary?

     

    +---------+---------+
|    id   | student |
+---------+---------+
|    1    | Abbot   |
|    2    | Doris   |
|    3    | Emerson |
|    4    | Green   |
|    5    | Jeames  |
+---------+---------+

    For the sample input, the output is:

     

    +---------+---------+
|    id   | student |
+---------+---------+
|    1    | Doris   |
|    2    | Abbot   |
|    3    | Green   |
|    4    | Emerson |
|    5    | Jeames  |
+---------+---------+

    Note:
        If the number of students is odd, there is no need to change the last one's seat.
-----------------

# 976_Largest_Perimeter_Triangle
# 976. Largest Perimeter Triangle

Given an array A of positive lengths, return the largest perimeter of a triangle
        with non-zero area, formed from 3 of these lengths.

    If it is impossible to form any triangle of non-zero area, return 0.
-----------------

# 359_Logger_Rate_Limiter
# 359. Logger Rate Limiter

Design a logger system that receive stream of messages along with its timestamps, each
        message should be printed if and only if it is not printed in the last 10 seconds.
    

    Given a message and a timestamp (in seconds granularity), return true if the message should
        be printed in the given timestamp, otherwise returns false.

    It is possible that several messages arrive roughly at the same time.

    Example:

    Logger logger = new Logger();

// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); returns true;

// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); returns true;

// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); returns false;

// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); returns false;

// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); returns false;

// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); returns true;
-----------------

# 1423_Maximum_Points_You_Can_Obtain_from_Cards
# 1423. Maximum Points You Can Obtain from Cards


-----------------

# 1478_Allocate_Mailboxes
# 1478. Allocate Mailboxes


-----------------

# 1158_Market_Analysis_I
# 1158. Market Analysis I

Table: Users

    +----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| join_date      | date    |
| favorite_brand | varchar |
+----------------+---------+
user_id is the primary key of this table.
This table has the info of the users of an online shopping website where users can sell and buy items.

    Table: Orders

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| order_date    | date    |
| item_id       | int     |
| buyer_id      | int     |
| seller_id     | int     |
+---------------+---------+
order_id is the primary key of this table.
item_id is a foreign key to the Items table.
buyer_id and seller_id are foreign keys to the Users table.

    Table: Items

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| item_id       | int     |
| item_brand    | varchar |
+---------------+---------+
item_id is the primary key of this table.

     

    Write an SQL query to find for each user, the join date and the number of orders they made as
        a buyer in 2019.

    The query result format is in the following example:

    Users table:
+---------+------------+----------------+
| user_id | join_date  | favorite_brand |
+---------+------------+----------------+
| 1       | 2018-01-01 | Lenovo         |
| 2       | 2018-02-09 | Samsung        |
| 3       | 2018-01-19 | LG             |
| 4       | 2018-05-21 | HP             |
+---------+------------+----------------+

Orders table:
+----------+------------+---------+----------+-----------+
| order_id | order_date | item_id | buyer_id | seller_id |
+----------+------------+---------+----------+-----------+
| 1        | 2019-08-01 | 4       | 1        | 2         |
| 2        | 2018-08-02 | 2       | 1        | 3         |
| 3        | 2019-08-03 | 3       | 2        | 3         |
| 4        | 2018-08-04 | 1       | 4        | 2         |
| 5        | 2018-08-04 | 1       | 3        | 4         |
| 6        | 2019-08-05 | 2       | 2        | 4         |
+----------+------------+---------+----------+-----------+

Items table:
+---------+------------+
| item_id | item_brand |
+---------+------------+
| 1       | Samsung    |
| 2       | Lenovo     |
| 3       | LG         |
| 4       | HP         |
+---------+------------+

Result table:
+-----------+------------+----------------+
| buyer_id  | join_date  | orders_in_2019 |
+-----------+------------+----------------+
| 1         | 2018-01-01 | 1              |
| 2         | 2018-02-09 | 2              |
| 3         | 2018-01-19 | 0              |
| 4         | 2018-05-21 | 0              |
+-----------+------------+----------------+
-----------------

# 1267_Count_Servers_that_Communicate
# 1267. Count Servers that Communicate


-----------------

# 431_Encode_N-ary_Tree_to_Binary_Tree
# 431. Encode N-ary Tree to Binary Tree

Design an algorithm to encode an N-ary tree into a binary tree and decode the binary tree to
        get the original N-ary tree. An N-ary tree is a rooted tree in which each node has no more
        than N children. Similarly, a binary tree is a rooted tree in which each node has no more
        than 2 children. There is no restriction on how your encode/decode algorithm should work.
        You just need to ensure that an N-ary tree can be encoded to a binary tree and this binary
        tree can be decoded to the original N-nary tree structure.

    For example, you may encode the following 3-ary tree to a binary tree in this
        way:

     

    
        

     

    Note that the above is just an example which might or might not work. You do not
        necessarily need to follow this format, so please be creative and come up with different
        approaches yourself.

     

    Note:

    
        N is in the range of  [1, 1000]
        Do not use class member/global/static variables to store states. Your encode and decode
            algorithms should be stateless.
-----------------

# 935_Knight_Dialer
# 935. Knight Dialer

A chess knight can move as indicated in the chess diagram below:

     .         
         

     

    This time, we place our chess knight on any numbered key of a phone pad (indicated above),
        and the knight makes N-1 hops.  Each hop must be from one key to another
        numbered key.

    Each time it lands on a key (including the initial placement of the knight), it presses the
        number of that key, pressing N digits total.

    How many distinct numbers can you dial in this manner?

    Since the answer may be large, output the answer modulo 10^9 +
        7.
-----------------

# 245_Shortest_Word_Distance_III
# 245. Shortest Word Distance III

Given a list of words and two words word1 and word2, return the shortest
        distance between these two words in the list.

    word1 and word2 may be the same and they represent two individual words in
        the list.

    Example:
        Assume that words = ["practice", "makes", "perfect",
            "coding", "makes"].

    Input: word1 = “makes”, word2 = “coding”
Output: 1

    Input: word1 = "makes", word2 = "makes"
Output: 3

    Note:
        You may assume word1 and word2 are both in the list.
-----------------

# 264_Ugly_Number_II
# 264. Ugly Number II

Write a program to find the n-th ugly number.

    Ugly numbers are positive numbers whose prime factors only include 2,
        3, 5. 

    Example:

    Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

    Note:  

    
        1 is typically treated as an ugly number.
        n does not exceed 1690.
-----------------

# 1365_How_Many_Numbers_Are_Smaller_Than_the_Current_Number
# 1365. How Many Numbers Are Smaller Than the Current Number


-----------------

# 519_Random_Flip_Matrix
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
-----------------

# 1659_Maximize_Grid_Happiness
# 1659. Maximize Grid Happiness


-----------------

# 340_Longest_Substring_with_At_Most_K_Distinct_Characters
# 340. Longest Substring with At Most K Distinct Characters

Given a string, find the length of the longest substring T that contains at most k
        distinct characters.

    Example 1:
-----------------

# 1563_Stone_Game_V
# 1563. Stone Game V


-----------------

# 891_Sum_of_Subsequence_Widths
# 891. Sum of Subsequence Widths

Given an array of integers A, consider all non-empty subsequences of
        A.

    For any sequence S, let the width of S be the difference between the
        maximum and minimum element of S.

    Return the sum of the widths of all subsequences of A. 

    As the answer may be very large, return the answer modulo 10^9 + 7.
-----------------

# 1207_Unique_Number_of_Occurrences
# 1207. Unique Number of Occurrences

Given an array of integers arr, write a function that returns
        true if and only if the number of occurrences of each value in the array is
        unique.

     
    Example 1:

    Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

    Example 2:

    Input: arr = [1,2]
Output: false

    Example 3:

    Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

     
    Constraints:

    
        1 <= arr.length <= 1000
        -1000 <= arr[i] <= 1000
-----------------

# 550_Game_Play_Analysis_IV
# 550. Game Play Analysis IV

Table: Activity

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key of this table.
This table shows the activity of players of some game.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on some day using some device.

     

    Write an SQL query that reports the fraction of players that logged in again
        on the day after the day they first logged in, rounded to 2 decimal
            places. In other words, you need to count the number of players that
        logged in for at least two consecutive days starting from their first login date, then
        divide that number by the total number of players.

    The query result format is in the following example:

    Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-03-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+

Result table:
+-----------+
| fraction  |
+-----------+
| 0.33      |
+-----------+
Only the player with id 1 logged back in after the first day he had logged in so the answer is 1/3 = 0.33
-----------------

# 1469_Find_All_the_Lonely_Nodes
# 1469. Find All the Lonely Nodes


-----------------

# 780_Reaching_Points
# 780. Reaching Points

A move consists of taking a point (x, y) and transforming it to either (x,
        x+y) or (x+y, y).

    Given a starting point (sx, sy) and a target point (tx, ty), return
        True if and only if a sequence of moves exists to transform the point (sx,
            sy) to (tx, ty). Otherwise, return False.

    Examples:
Input: sx = 1, sy = 1, tx = 3, ty = 5
Output: True
Explanation:
One series of moves that transforms the starting point to the target is:
(1, 1) -> (1, 2)
(1, 2) -> (3, 2)
(3, 2) -> (3, 5)

Input: sx = 1, sy = 1, tx = 2, ty = 2
Output: False

Input: sx = 1, sy = 1, tx = 1, ty = 1
Output: True

    Note:

    
        sx, sy, tx, ty will all be integers in the range [1, 10^9].
-----------------

# 455_Assign_Cookies
# 455. Assign Cookies

Assume you are an awesome parent and want to give your children some cookies. But, you
        should give each child at most one cookie. Each child i has a greed factor gi,
        which is the minimum size of a cookie that the child will be content with; and each cookie j
        has a size sj. If sj >= gi, we can assign the cookie j to
        the child i, and the child i will be content. Your goal is to maximize the number of your
        content children and output the maximum number.
    

    Note:
        You may assume the greed factor is always positive. 
        You cannot assign more than one cookie to one child.
    

    Example 1:
    Input: [1,2,3], [1,1]

Output: 1

Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

    

    Example 2:
    Input: [1,2], [1,2,3]

Output: 2

Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
You have 3 cookies and their sizes are big enough to gratify all of the children,
You need to output 2.
-----------------

# 978_Longest_Turbulent_Subarray
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
-----------------

# 1736_Latest_Time_by_Replacing_Hidden_Digits
# 1736. Latest Time by Replacing Hidden Digits


-----------------

# 275_H-Index_II
# 275. H-Index II

Given an array of citations sorted in ascending order (each citation is
        a non-negative integer) of a researcher, write a function to compute the researcher's
        h-index.

    According to the definition
        of h-index on Wikipedia: "A scientist has index h if h of
        his/her N papers have at least h citations
        each, and the other N − h papers have no more
            than h citations each."

    Example:

    Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had
             received 0, 1, 3, 5, 6 citations respectively.
             Since the researcher has 3 papers with at least 3 citations each and the remaining
             two with no more than 3 citations each, her h-index is 3.

    Note:

    If there are several possible values for h, the maximum one is taken as the
        h-index.

    Follow up:

    
        This is a follow up problem to H-Index, where citations
            is now guaranteed to be sorted in ascending order.
        
        Could you solve it in logarithmic time complexity?
-----------------

# 1235_Maximum_Profit_in_Job_Scheduling
# 1235. Maximum Profit in Job Scheduling

We have n jobs, where every job is scheduled to be done from startTime[i]
        to endTime[i], obtaining a profit of profit[i].

    You're given the startTime , endTime and
        profit arrays, you need to output the maximum profit you can take
        such that there are no 2 jobs in the subset with overlapping time range.

    If you choose a job that ends at time X you will be able to start
        another job that starts at time X.

     
    Example 1:

    

    Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job.
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

    Example 2:

     

    
Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job.
Profit obtained 150 = 20 + 70 + 60.

    Example 3:

    

    Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6

     
    Constraints:

    
        1 <= startTime.length == endTime.length == profit.length <= 5 *
            10^4
        1 <= startTime[i] < endTime[i] <= 10^9
        1 <= profit[i] <= 10^4
-----------------

# 1404_Number_of_Steps_to_Reduce_a_Number_in_Binary_Representation_to_One
# 1404. Number of Steps to Reduce a Number in Binary Representation to One


-----------------

# 1020_Number_of_Enclaves
# 1020. Number of Enclaves

Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)
    

    A move consists of walking from one land square 4-directionally to another land square, or
        off the boundary of the grid.

    Return the number of land squares in the grid for which we cannot walk off
        the boundary of the grid in any number of moves.

     

    Example 1:

    Input: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: 
There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.

    Example 2:

    Input: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: 
All 1s are either on the boundary or can reach the boundary.

     

    Note:

    
        1 <= A.length <= 500
        1 <= A[i].length <= 500
        0 <= A[i][j] <= 1
        All rows have the same size.
-----------------

# 1303_Find_the_Team_Size
# 1303. Find the Team Size


-----------------

# 459_Repeated_Substring_Pattern
# 459. Repeated Substring Pattern

Given a non-empty string check if it can be constructed by taking a substring of it and
        appending multiple copies of the substring together. You may assume the given string
        consists of lowercase English letters only and its length will not exceed 10000.

     

    Example 1:

    Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

    Example 2:

    Input: "aba"
Output: False

    Example 3:

    Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
-----------------

# 1547_Minimum_Cost_to_Cut_a_Stick
# 1547. Minimum Cost to Cut a Stick


-----------------

# 1341_Movie_Rating
# 1341. Movie Rating


-----------------

# 1042_Flower_Planting_With_No_Adjacent
# 1042. Flower Planting With No Adjacent

You have N gardens, labelled 1 to N.  In each
        garden, you want to plant one of 4 types of flowers.

    paths[i] = [x, y] describes the existence of a bidirectional path from garden
        x to garden y.

    Also, there is no garden that has more than 3 paths coming into or leaving it.

    Your task is to choose a flower type for each garden such that, for any two gardens
        connected by a path, they have different types of flowers.

    Return any such a choice as an array answer, where answer[i]
        is the type of flower planted in the (i+1)-th garden.  The flower
        types are denoted 1, 2,
        3, or 4.  It is guaranteed
        an answer exists.
-----------------

# 87_Scramble_String
# 87. Scramble String

Given a string s1, we may represent it as a binary tree by partitioning it to two
        non-empty substrings recursively.

    Below is one possible representation of s1 = "great":

        great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t

    To scramble the string, we may choose any non-leaf node and swap its two children.

    For example, if we choose the node "gr" and swap its two children, it
        produces a scrambled string "rgeat".

        rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t

    We say that "rgeat" is a scrambled string of
        "great".

    Similarly, if we continue to swap the children of nodes "eat" and
        "at", it produces a scrambled string "rgtae".
    

        rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a

    We say that "rgtae" is a scrambled string of
        "great".

    Given two strings s1 and s2 of the same length, determine if s2 is
        a scrambled string of s1.

    Example 1:

    Input: s1 = "great", s2 = "rgeat"
Output: true

    Example 2:

    Input: s1 = "abcde", s2 = "caebd"
Output: false
-----------------

# 1677_Product's_Worth_Over_Invoices
# 1677. Product's Worth Over Invoices


-----------------

# 969_Pancake_Sorting
# 969. Pancake Sorting

Given an array A, we can perform a pancake flip: We choose
        some positive integer k <= A.length, then reverse the
        order of the first k elements of A.  We want to perform
        zero or more pancake flips (doing them one after another in succession) to sort the array
        A.

    Return the k-values corresponding to a sequence of pancake flips that sort A. 
        Any valid answer that sorts the array within 10 * A.length flips will be
        judged as correct.

     

    Example 1:

    Input: [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: A = [3, 2, 4, 1]
After 1st flip (k=4): A = [1, 4, 2, 3]
After 2nd flip (k=2): A = [4, 1, 2, 3]
After 3rd flip (k=4): A = [3, 2, 1, 4]
After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted.
-----------------

# 998_Maximum_Binary_Tree_II
# 998. Maximum Binary Tree II

We are given the root node of a maximum tree: a tree where every
        node has a value greater than any other value in its subtree.

    Just as in the previous
        problem, the given tree was constructed from an
        list A (root = Construct(A)) recursively with the
        following Construct(A) routine:

    
        If A is empty, return null.
        Otherwise, let A[i] be the largest element of A.  Create
            a root node with value A[i].
        
        The left child of root will be Construct([A[0], A[1], ...,
            A[i-1]])
        The right child of root will be Construct([A[i+1], A[i+2], ...,
            A[A.length - 1]])
        Return root.
    

    Note that we were not given A directly, only a root node root = Construct(A).
    

    Suppose B is a copy of A with the value val appended
        to it.  It is guaranteed that B has unique values.

    Return Construct(B).

     

    Example 1:

    
    

    Input: root = [4,1,3,null,null,2], val = 5
Output: [5,4,null,1,3,null,null,2]
Explanation: A = [1,4,2,3], B = [1,4,2,3,5]
-----------------

# 547_Friend_Circles
# 547. Friend Circles

There are N students in a class. Some of them are friends, while some are not. Their
        friendship is transitive in nature. For example, if A is a direct friend of B, and B
        is a direct friend of C, then A is an indirect friend of C. And we defined a
        friend circle is a group of students who are direct or indirect friends.
    

    
        Given a N*N matrix M representing the friend relationship between students in
        the class. If M[i][j] = 1, then the ith and jth students are
        direct friends with each other, otherwise not. And you have to output the total
        number of friend circles among all the students.
    

    Example 1:
    Input:
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle. The 2nd student himself is in a friend circle. So return 2.

    

    Example 2:
    Input:
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.

    

    Note:
    
        N is in range [1,200].
        M[i][i] = 1 for all students.
        If M[i][j] = 1, then M[j][i] = 1.
-----------------

# 494_Target_Sum
# 494. Target Sum

You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you
        have 2 symbols + and -. For each integer, you should choose one
        from + and - as its new symbol.
    

    Find out how many ways to assign symbols to make sum of integers equal to target S.
    

    Example 1:
    Input: nums is [1, 1, 1, 1, 1], S is 3.
Output: 5
Explanation:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.

    

    Note:
    
        The length of the given array is positive and will not exceed 20.
        The sum of elements in the given array will not exceed 1000.
        Your output answer is guaranteed to be fitted in a 32-bit integer.
-----------------

# 1262_Greatest_Sum_Divisible_by_Three
# 1262. Greatest Sum Divisible by Three


-----------------

# 823_Binary_Trees_With_Factors
# 823. Binary Trees With Factors

Given an array of unique integers, each integer is strictly greater than 1.

    We make a binary tree using these integers and each number may be used for any number of
        times.

    Each non-leaf node's value should be equal to the product of the values of it's
        children.

    How many binary trees can we make?  Return the answer modulo 10 ** 9 +
        7.

    Example 1:

    Input: A = [2, 4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]

    Example 2:

    Input: A = [2, 4, 5, 10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].

     

    Note:

    
        1 <= A.length <= 1000.
        2 <= A[i] <= 10 ^ 9.
-----------------

# 1799_Maximize_Score_After_N_Operations
# 1799. Maximize Score After N Operations


-----------------

# 607_Sales_Person
# 607. Sales Person

Description

    Given three tables: salesperson, company, orders.
        Output all the names in the table salesperson, who didn’t have
        sales to company 'RED'.

    Example
        Input

    Table: salesperson

    +----------+------+--------+-----------------+-----------+
| sales_id | name | salary | commission_rate | hire_date |
+----------+------+--------+-----------------+-----------+
|   1      | John | 100000 |     6           | 4/1/2006  |
|   2      | Amy  | 120000 |     5           | 5/1/2010  |
|   3      | Mark | 65000  |     12          | 12/25/2008|
|   4      | Pam  | 25000  |     25          | 1/1/2005  |
|   5      | Alex | 50000  |     10          | 2/3/2007  |
+----------+------+--------+-----------------+-----------+

    The table salesperson holds the salesperson information. Every salesperson has a
    sales_id and a name.

    Table: company

    +---------+--------+------------+
| com_id  |  name  |    city    |
+---------+--------+------------+
|   1     |  RED   |   Boston   |
|   2     | ORANGE |   New York |
|   3     | YELLOW |   Boston   |
|   4     | GREEN  |   Austin   |
+---------+--------+------------+

    The table company holds the company information. Every company has a com_id
    and a name.

    Table: orders

    +----------+------------+---------+----------+--------+
| order_id | order_date | com_id  | sales_id | amount |
+----------+------------+---------+----------+--------+
| 1        |   1/1/2014 |    3    |    4     | 100000 |
| 2        |   2/1/2014 |    4    |    5     | 5000   |
| 3        |   3/1/2014 |    1    |    1     | 50000  |
| 4        |   4/1/2014 |    1    |    4     | 25000  |
+----------+----------+---------+----------+--------+

    The table orders holds the sales record information, salesperson and customer
    company are represented by sales_id and com_id.

    output

    +------+
| name |
+------+
| Amy  |
| Mark |
| Alex |
+------+

    Explanation

    According to order '3' and '4' in table orders, it is easy to
        tell only salesperson 'John' and 'Alex' have sales to company 'RED',
        so we need to output all the other names in table salesperson.
-----------------

# 227_Basic_Calculator_II
# 227. Basic Calculator II

Implement a basic calculator to evaluate a simple expression string.

    The expression string contains only non-negative integers, +,
        -, *, / operators and empty spaces  .
        The integer division should truncate toward zero.

    Example 1:

    Input: "3+2*2"
Output: 7

    Example 2:

    Input: " 3/2 "
Output: 1

    Example 3:

    Input: " 3+5 / 2 "
Output: 5

    Note:

    
        You may assume that the given expression is always valid.
        Do not use the eval built-in library function.
-----------------

# 1349_Maximum_Students_Taking_Exam
# 1349. Maximum Students Taking Exam


-----------------

# 1371_Find_the_Longest_Substring_Containing_Vowels_in_Even_Counts
# 1371. Find the Longest Substring Containing Vowels in Even Counts


-----------------

# 78_Subsets
# 78. Subsets

Given a set of distinct integers, nums, return all possible subsets
        (the power set).

    Note: The solution set must not contain duplicate subsets.

    Example:

    Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
-----------------

# 577_Employee_Bonus
# 577. Employee Bonus

Select all employee's name and bonus whose bonus is < 1000.

    Table:Employee 

    +-------+--------+-----------+--------+
| empId |  name  | supervisor| salary |
+-------+--------+-----------+--------+
|   1   | John   |  3        | 1000   |
|   2   | Dan    |  3        | 2000   |
|   3   | Brad   |  null     | 4000   |
|   4   | Thomas |  3        | 4000   |
+-------+--------+-----------+--------+
empId is the primary key column for this table.

    Table: Bonus

    +-------+-------+
| empId | bonus |
+-------+-------+
| 2     | 500   |
| 4     | 2000  |
+-------+-------+
empId is the primary key column for this table.

    Example ouput:

    +-------+-------+
| name  | bonus |
+-------+-------+
| John  | null  |
| Dan   | 500   |
| Brad  | null  |
+-------+-------+
-----------------

# 1205_Monthly_Transactions_II
# 1205. Monthly Transactions II

Table: Transactions

    +----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| id             | int     |
| country        | varchar |
| state          | enum    |
| amount         | int     |
| trans_date     | date    |
+----------------+---------+
id is the primary key of this table.
The table has information about incoming transactions.
The state column is an enum of type ["approved", "declined"].

    Table: Chargebacks

    +----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| trans_id       | int     |
| charge_date    | date    |
+----------------+---------+
Chargebacks contains basic information regarding incoming chargebacks from some transactions placed in Transactions table.
trans_id is a foreign key to the id column of Transactions table.
Each chargeback corresponds to a transaction made previously even if they were not approved.

     

    Write an SQL query to find for each month and country, the number of approved transactions
        and their total amount, the number of chargebacks and their total amount.

    Note: In your query, given the month and country, ignore rows with
        all zeros.

    The query result format is in the following example:

    Transactions table:
+------+---------+----------+--------+------------+
| id   | country | state    | amount | trans_date |
+------+---------+----------+--------+------------+
| 101  | US      | approved | 1000   | 2019-05-18 |
| 102  | US      | declined | 2000   | 2019-05-19 |
| 103  | US      | approved | 3000   | 2019-06-10 |
| 104  | US      | approved | 4000   | 2019-06-13 |
| 105  | US      | approved | 5000   | 2019-06-15 |
+------+---------+----------+--------+------------+

Chargebacks table:
+------------+------------+
| trans_id   | trans_date |
+------------+------------+
| 102        | 2019-05-29 |
| 101        | 2019-06-30 |
| 105        | 2019-09-18 |
+------------+------------+

Result table:
+----------+---------+----------------+-----------------+-------------------+--------------------+
| month    | country | approved_count | approved_amount | chargeback_count  | chargeback_amount  |
+----------+---------+----------------+-----------------+-------------------+--------------------+
| 2019-05  | US      | 1              | 1000            | 1                 | 2000               |
| 2019-06  | US      | 3              | 12000           | 1                 | 1000               |
| 2019-09  | US      | 0              | 0               | 1                 | 5000               |
+----------+---------+----------------+-----------------+-------------------+--------------------+
-----------------

# 1318_Minimum_Flips_to_Make_a_OR_b_Equal_to_c
# 1318. Minimum Flips to Make a OR b Equal to c


-----------------

# 1435_Create_a_Session_Bar_Chart
# 1435. Create a Session Bar Chart


-----------------

# 1299_Replace_Elements_with_Greatest_Element_on_Right_Side
# 1299. Replace Elements with Greatest Element on Right Side


-----------------

# 522_Longest_Uncommon_Subsequence_II
# 522. Longest Uncommon Subsequence II

Given a list of strings, you need to find the longest uncommon subsequence among them. The
        longest uncommon subsequence is defined as the longest subsequence of one of these strings
        and this subsequence should not be any subsequence of the other strings.
    

    
        A subsequence is a sequence that can be derived from one sequence by deleting some
        characters without changing the order of the remaining elements. Trivially, any string is a
        subsequence of itself and an empty string is a subsequence of any string.
    

    
        The input will be a list of strings, and the output needs to be the length of the longest
        uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.
    

    Example 1:
    Input: "aba", "cdc", "eae"
Output: 3

    

    Note:
    
        All the given strings' lengths will not exceed 10.
        The length of the given list will be in the range of [2, 50].
-----------------

# 1754_Largest_Merge_Of_Two_Strings
# 1754. Largest Merge Of Two Strings


-----------------

# 1422_Maximum_Score_After_Splitting_a_String
# 1422. Maximum Score After Splitting a String


-----------------

# 899_Orderly_Queue
# 899. Orderly Queue

A string S of lowercase letters is given.  Then, we may make any number of
        moves.

    In each move, we choose one of the first K letters (starting from the
        left), remove it, and place it at the end of the string.

    Return the lexicographically smallest string we could have after any number of moves.
-----------------

# 1307_Verbal_Arithmetic_Puzzle
# 1307. Verbal Arithmetic Puzzle


-----------------

# 1649_Create_Sorted_Array_through_Instructions
# 1649. Create Sorted Array through Instructions


-----------------

# 1664_Ways_to_Make_a_Fair_Array
# 1664. Ways to Make a Fair Array


-----------------

# 1720_Decode_XORed_Array
# 1720. Decode XORed Array


-----------------

# 1482_Minimum_Number_of_Days_to_Make_m_Bouquets
# 1482. Minimum Number of Days to Make m Bouquets


-----------------

# 1646_Get_Maximum_in_Generated_Array
# 1646. Get Maximum in Generated Array


-----------------

# 265_Paint_House_II
# 265. Paint House II

There are a row of n houses, each house can be painted with one of the k
        colors. The cost of painting each house with a certain color is different. You have to paint
        all the houses such that no two adjacent houses have the same color.

    The cost of painting each house with a certain color is represented by a n x k
        cost matrix. For example, costs[0][0] is the cost of painting house 0 with
        color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on...
        Find the minimum cost to paint all houses.

    Note:
        All costs are positive integers.

    Example:

    Input: [[1,5,3],[2,9,4]]
Output: 5
Explanation: Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5;
             Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5.

    Follow up:
        Could you solve it in O(nk) runtime?
-----------------

# 330_Patching_Array
# 330. Patching Array

Given a sorted positive integer array nums and an integer n, add/patch elements
        to the array such that any number in range [1, n] inclusive can be formed by
        the sum of some elements in the array. Return the minimum number of patches required.

    Example 1:

    Input: nums = [1,3], n = 6
Output: 1
Explanation:
Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.

    Example 2:

    Input: nums = [1,5,10], n = 20
Output: 2
Explanation: The two patches can be [2, 4].

    Example 3:

    Input: nums = [1,2,2], n = 5
Output: 0
-----------------

# 1152_Analyze_User_Website_Visit_Pattern
# 1152. Analyze User Website Visit Pattern

We are given some website visits: the user with name username[i] visited
        the website website[i] at time timestamp[i].

    A 3-sequence is a list of websites of length 3 sorted in ascending order by
        the time of their visits.  (The websites in a 3-sequence are not necessarily distinct.)
    

    Find the 3-sequence visited by the largest number of users. If there is more than one
        solution, return the lexicographically smallest such 3-sequence.

     

    Example 1:

    Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
Output: ["home","about","career"]
Explanation: 
The tuples in this example are:
["joe", 1, "home"]
["joe", 2, "about"]
["joe", 3, "career"]
["james", 4, "home"]
["james", 5, "cart"]
["james", 6, "maps"]
["james", 7, "home"]
["mary", 8, "home"]
["mary", 9, "about"]
["mary", 10, "career"]
The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.

     

    Note:

    
        3 <= N = username.length = timestamp.length = website.length <= 50
        
        1 <= username[i].length <= 10
        0 <= timestamp[i] <= 10^9
        1 <= website[i].length <= 10
        Both username[i] and website[i] contain only lowercase
            characters.
        
        It is guaranteed that there is at least one user who visited at least 3 websites.
        No user visits two websites at the same time.
-----------------

# 495_Teemo_Attacking
# 495. Teemo Attacking

In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in
        poisoned condition. Now, given the Teemo's attacking ascending time series
        towards Ashe and the poisoning time duration per Teemo's attacking, you need to output
        the total time that Ashe is in poisoned condition.

    You may assume that Teemo attacks at the very beginning of a specific time point, and makes
        Ashe be in poisoned condition immediately.

    Example 1:

    Input: [1,4], 2
Output: 4
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
This poisoned status will last 2 seconds until the end of time point 2.
And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds.
So you finally need to output 4.

     

    Example 2:

    Input: [1,2], 2
Output: 3
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned.
This poisoned status will last 2 seconds until the end of time point 2.
However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status.
Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3.
So you finally need to output 3.

     

    Note:

    
        You may assume the length of given time series array won't exceed 10000.
        You may assume the numbers in the Teemo's attacking time series and his poisoning
            time duration per attacking are non-negative integers, which won't exceed
            10,000,000.
-----------------

# 492_Construct_the_Rectangle
# 492. Construct the Rectangle

For a web developer, it is very important to know how to design a web page's size. So, given
        a specific rectangular web page’s area, your job by now is to design a rectangular web page,
        whose length L and width W satisfy the following requirements:
    1. The area of the rectangular web page you designed must equal to the given target area.
2. The width W should not be larger than the length L, which means L >= W.
3. The difference between length L and width W should be as small as possible.

    You need to output the length L and the width W of the web page you designed in sequence.
    

    Example:
    Input: 4
Output: [2, 2]
Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

    

    Note:
    
        The given area won't exceed 10,000,000 and is a positive integer
        The web page's width and length you designed must be positive integers.
-----------------

# 1293_Shortest_Path_in_a_Grid_with_Obstacles_Elimination
# 1293. Shortest Path in a Grid with Obstacles Elimination


-----------------

# 1792_Maximum_Average_Pass_Ratio
# 1792. Maximum Average Pass Ratio


-----------------

# 1019_Next_Greater_Node_In_Linked_List
# 1019. Next Greater Node In Linked List

We are given a linked list with head as the first node.  Let's
        number the nodes in the list: node_1, node_2, node_3, ... etc.

    Each node may have a next larger value: for node_i, next_larger(node_i) is
        the node_j.val such that j > i, node_j.val >
            node_i.val, and j is the smallest possible choice.  If such a
        j does not exist, the next larger value is 0.

    Return an array of integers answer, where answer[i] =
        next_larger(node_{i+1}).

    Note that in the example inputs (not outputs) below, arrays such as
        [2,1,5] represent the serialization of a linked list with a head node
        value of 2, second node value of 1, and third node value of 5.
-----------------

# 1201_Ugly_Number_III
# 1201. Ugly Number III

Write a program to find the n-th ugly number.

    Ugly numbers are positive integers which are divisible
        by a or b or
        c.

     
    Example 1:

    Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.

    Example 2:

    Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.

    Example 3:

    Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.

    Example 4:

    Input: n = 1000000000, a = 2, b = 217983653, c = 336916467
Output: 1999999984

     
    Constraints:

    
        1 <= n, a, b, c <= 10^9
        1 <= a * b * c <= 10^18
        It's guaranteed that the result will be in range [1, 2 *
            10^9]
-----------------

# 1269_Number_of_Ways_to_Stay_in_the_Same_Place_After_Some_Steps
# 1269. Number of Ways to Stay in the Same Place After Some Steps


-----------------

# 1515_Best_Position_for_a_Service_Centre
# 1515. Best Position for a Service Centre


-----------------

# 1047_Remove_All_Adjacent_Duplicates_In_String
# 1047. Remove All Adjacent Duplicates In String

Given a string S of lowercase letters, a duplicate removal consists of
        choosing two adjacent and equal letters, and removing them.

    We repeatedly make duplicate removals on S until we no longer can.

    Return the final string after all such duplicate removals have been made.  It is
        guaranteed the answer is unique.

     

    Example 1:

    Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

     

    Note:

    
        1 <= S.length <= 20000
        S consists only of English lowercase letters.
-----------------

# 789_Escape_The_Ghosts
# 789. Escape The Ghosts

You are playing a simplified Pacman game. You start at the point (0, 0),
        and your destination is (target[0], target[1]). There are several ghosts on the
        map, the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).

    Each turn, you and all ghosts simultaneously *may* move in one of 4 cardinal directions:
        north, east, west, or south, going from the previous point to a new point 1 unit of distance
        away.

    You escape if and only if you can reach the target before any ghost reaches you (for any
        given moves the ghosts may take.)  If you reach any square (including the target) at
        the same time as a ghost, it doesn't count as an escape.

    Return True if and only if it is possible to escape.

    Example 1:
Input:
ghosts = [[1, 0], [0, 3]]
target = [0, 1]
Output: true
Explanation:
You can directly reach the destination (0, 1) at time 1, while the ghosts located at (1, 0) or (0, 3) have no way to catch up with you.

    Example 2:
Input:
ghosts = [[1, 0]]
target = [2, 0]
Output: false
Explanation:
You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.

    Example 3:
Input:
ghosts = [[2, 0]]
target = [1, 0]
Output: false
Explanation:
The ghost can reach the target at the same time as you.

    Note:

    
        All points have coordinates with absolute value <= 10000.
        The number of ghosts will not exceed 100.
-----------------

# 962_Maximum_Width_Ramp
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
-----------------

# 327_Count_of_Range_Sum
# 327. Count of Range Sum

Given an integer array nums, return the number of range sums that lie in [lower,
        upper] inclusive.
        Range sum S(i, j) is defined as the sum of the elements in nums
        between indices i and j (i ≤ j),
        inclusive.

    Note:
        A naive algorithm of O(n2) is trivial. You MUST do better than
        that.

    Example:

    Input: nums = [-2,5,-1], lower = -2, upper = 2,
Output: 3
Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.
-----------------

# 1676_Lowest_Common_Ancestor_of_a_Binary_Tree_IV
# 1676. Lowest Common Ancestor of a Binary Tree IV


-----------------

# 1218_Longest_Arithmetic_Subsequence_of_Given_Difference
# 1218. Longest Arithmetic Subsequence of Given Difference

Given an integer array arr and an integer difference,
        return the length of the longest subsequence in arr which
        is an arithmetic sequence such that the difference between adjacent elements in the
        subsequence equals difference.

     
    Example 1:

    Input: arr = [1,2,3,4], difference = 1
Output: 4
Explanation: The longest arithmetic subsequence is [1,2,3,4].

    Example 2:

    Input: arr = [1,3,5,7], difference = 1
Output: 1
Explanation: The longest arithmetic subsequence is any single element.

    Example 3:

    Input: arr = [1,5,7,8,5,3,4,2,1], difference = -2
Output: 4
Explanation: The longest arithmetic subsequence is [7,5,3,1].

     
    Constraints:

    
        1 <= arr.length <= 10^5
        -10^4 <= arr[i], difference <= 10^4
-----------------

# 427_Construct_Quad_Tree
# 427. Construct Quad Tree

We want to use quad trees to store an N x N boolean grid. Each cell in the grid
        can only be true or false. The root node represents the whole grid. For each node, it will
        be subdivided into four children nodes until the values in the region it represents
            are all the same.

    Each node has another two boolean attributes : isLeaf and val.
        isLeaf is true if and only if the node is a leaf node. The val
        attribute for a leaf node contains the value of the region it represents.

    Your task is to use a quad tree to represent a given grid. The following example may help you
        understand the problem better:

    Given the 8 x 8 grid below, we want to construct the corresponding quad tree:
    

    

    It can be divided according to the definition above:

    

     

    The corresponding quad tree should be as following, where each node is represented as a
        (isLeaf, val) pair.

    For the non-leaf nodes, val can be arbitrary, so it is represented as
        *.

    

    Note:

    
        N is less than 1000 and guaranteened to be a power of 2.
        If you want to know more about the quad tree, you can refer to its wiki.
-----------------

# 1695_Maximum_Erasure_Value
# 1695. Maximum Erasure Value


-----------------

# 1035_Uncrossed_Lines
# 1035. Uncrossed Lines

We write the integers of A and B (in the order they are given)
        on two separate horizontal lines.

    Now, we may draw connecting lines: a straight line connecting two numbers
        A[i] and B[j] such that:

    
        A[i] == B[j];
        The line we draw does not intersect any other connecting (non-horizontal) line.
    

    Note that a connecting lines cannot intersect even at the endpoints: each number can
        only belong to one connecting line.

    Return the maximum number of connecting lines we can draw in this way.

     

    Example 1:
    
    Input: A = [1,4,2], B = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.
-----------------

# 1749_Maximum_Absolute_Sum_of_Any_Subarray
# 1749. Maximum Absolute Sum of Any Subarray


-----------------

# 1485_Clone_Binary_Tree_With_Random_Pointer
# 1485. Clone Binary Tree With Random Pointer


-----------------

# 533_Lonely_Pixel_II
# 533. Lonely Pixel II

Given a picture consisting of black and white pixels, and a positive integer N, find the
        number of black pixels located at some specific row R and column C that align
        with all the following rules:

    
         Row R and column C both contain exactly N black pixels.
         For all rows that have a black pixel at column C, they should be exactly the same as
            row R
        
    

    The picture is represented by a 2D char array consisting of 'B' and 'W', which means black
        and white pixels respectively. 

    Example:
    Input:
[['W', 'B', 'W', 'B', 'B', 'W'],
 ['W', 'B', 'W', 'B', 'B', 'W'],
 ['W', 'B', 'W', 'B', 'B', 'W'],
 ['W', 'W', 'B', 'W', 'B', 'W']]

N = 3
Output: 6
Explanation: All the bold 'B' are the black pixels we need (all 'B's at column 1 and 3).
        0    1    2    3    4    5         column index
0    [['W', 'B', 'W', 'B', 'B', 'W'],
1     ['W', 'B', 'W', 'B', 'B', 'W'],
2     ['W', 'B', 'W', 'B', 'B', 'W'],
3     ['W', 'W', 'B', 'W', 'B', 'W']]
row index

Take 'B' at row R = 0 and column C = 1 as an example:
Rule 1, row R = 0 and column C = 1 both have exactly N = 3 black pixels.
Rule 2, the rows have black pixel at column C = 1 are row 0, row 1 and row 2. They are exactly the same as row R = 0.

    

    Note:
    
        The range of width and height of the input 2D array is [1,200].
-----------------

# 121_Best_Time_to_Buy_and_Sell_Stock
# 121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given
        stock on day i.

    If you were only permitted to complete at most one transaction (i.e., buy one and sell one
        share of the stock), design an algorithm to find the maximum profit.

    Note that you cannot sell a stock before you buy one.

    Example 1:

    Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

    Example 2:

    Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
-----------------

# 1800_Maximum_Ascending_Subarray_Sum
# 1800. Maximum Ascending Subarray Sum


-----------------

# 720_Longest_Word_in_Dictionary
# 720. Longest Word in Dictionary

Given a list of strings words representing an English Dictionary, find the
        longest word in words that can be built one character at a time by other words
        in words. If there is more than one possible answer, return the longest word
        with the smallest lexicographical order. If there is no answer, return the empty string.

    Example 1:
    Input:
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation:
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

    

    Example 2:
    Input:
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation:
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

    

    Note:
    All the strings in the input will only contain lowercase letters.
    The length of words will be in the range [1, 1000].
    The length of words[i] will be in the range [1, 30].
-----------------

# 1333_Filter_Restaurants_by_Vegan-Friendly,_Price_and_Distance
# 1333. Filter Restaurants by Vegan-Friendly, Price and Distance


-----------------

# 1610_Maximum_Number_of_Visible_Points
# 1610. Maximum Number of Visible Points


-----------------

# 655_Print_Binary_Tree
# 655. Print Binary Tree

Print a binary tree in an m*n 2D string array following these rules: 

    
        The row number m should be equal to the height of the given binary tree.
        
        The column number n should always be an odd number.
        The root node's value (in string format) should be put in the exactly middle of the
            first row it can be put. The column and the row where the root node belongs will
            separate the rest space into two parts (left-bottom part and right-bottom part).
            You should print the left subtree in the left-bottom part and print the right subtree in
            the right-bottom part. The left-bottom part and the right-bottom part should have the
            same size. Even if one subtree is none while the other is not, you don't need to print
            anything for the none subtree but still need to leave the space as large as that for the
            other subtree. However, if two subtrees are none, then you don't need to leave space for
            both of them.
        
        Each unused space should contain an empty string "".
        Print the subtrees following the same rules.
    

    Example 1:
    Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]

    

    Example 2:
    Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]

    

    Example 3:
    Input:
      1
     / \
    2   5
   /
  3
 /
4
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

    

    Note:
        The height of binary tree is in the range of [1, 10].
-----------------

# 481_Magical_String
# 481. Magical String

A magical string S consists of only '1' and '2' and obeys the following rules:
    
    
        The string S is magical because concatenating the number of contiguous occurrences of
        characters '1' and '2' generates the string S itself.
    

    
        The first few elements of string S is the following:
        S = "1221121221221121122……"
    

    
        If we group the consecutive '1's and '2's in S, it will be:
    
    
        1 22 11 2 1 22 1 22 11 2 11 22 ......
    
    
        and the occurrences of '1's or '2's in each group are:
    
    
        1 2 2 1 1 2 1 2 2 1 2 2 ......
    

    
        You can see that the occurrence sequence above is the S itself.
    

    
        Given an integer N as input, return the number of '1's in the first N number in the magical
        string S.
    

    Note:
        N will not exceed 100,000.
    

    Example 1:
    Input: 6
Output: 3
Explanation: The first 6 elements of magical string S is "12211" and it contains three 1's, so return 3.
-----------------

# 909_Snakes_and_Ladders
# 909. Snakes and Ladders

On an N x N board, the numbers from 1 to N*N are
        written boustrophedonically starting from the bottom left of
            the board, and alternating direction each row.  For example, for a 6 x 6
        board, the numbers are written as follows:

    

    You start on square 1 of the board (which is always in the last row and first
        column).  Each move, starting from square x, consists of the following:
    

    
        You choose a destination square S with number x+1, x+2,
            x+3, x+4, x+5, or x+6, provided this number
            is <= N*N.

            
                (This choice simulates the result of a standard 6-sided die roll: ie., there are
                    always at most 6 destinations, regardless of the size of the
                        board.)
                
            
        
        If S has a snake or ladder, you move to the destination of that snake
            or ladder.  Otherwise, you move to S.
        
    

    A board square on row r and column c has a "snake or
        ladder" if board[r][c] != -1.  The destination of that snake or
        ladder is board[r][c].

    Note that you only take a snake or ladder at most once per move: if the destination to a
        snake or ladder is the start of another snake or ladder, you do not
        continue moving.  (For example, if the board is `[[4,-1],[-1,3]]`, and on the first
        move your destination square is `2`, then you finish your first move at `3`, because
        you do not continue moving to `4`.)

    Return the least number of moves required to reach square N*N. 
        If it is not possible, return -1.

    Example 1:

    Input: [
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,35,-1,-1,13,-1],
[-1,-1,-1,-1,-1,-1],
[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation: 
At the beginning, you start at square 1 [at row 5, column 0].
You decide to move to square 2, and must take the ladder to square 15.
You then decide to move to square 17 (row 3, column 5), and must take the snake to square 13.
You then decide to move to square 14, and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
It can be shown that you need at least 4 moves to reach the N*N-th square, so the answer is 4.

    Note:

    
        2 <= board.length = board[0].length <= 20
        board[i][j] is between 1 and N*N or is equal
            to -1.
        
        The board square with number 1 has no snake or ladder.
        The board square with number N*N has no snake or ladder.
-----------------

# 1457_Pseudo-Palindromic_Paths_in_a_Binary_Tree
# 1457. Pseudo-Palindromic Paths in a Binary Tree


-----------------

# 1241_Number_of_Comments_per_Post
# 1241. Number of Comments per Post

Table: Submissions

    +---------------+----------+
| Column Name   | Type     |
+---------------+----------+
| sub_id        | int      |
| parent_id     | int      |
+---------------+----------+
There is no primary key for this table, it may have duplicate rows.
Each row can be a post or comment on the post.
parent_id is null for posts.
parent_id for comments is sub_id for another post in the table.

     

    Write an SQL query to find number of comments per each post.

    Result table should contain post_id and its corresponding number_of_comments,
        and must be sorted by post_id in ascending order.

    Submissions may contain duplicate comments. You should count the number of
        unique comments per post.

    Submissions may contain duplicate posts. You should treat them as one post.

    The query result format is in the following example:

    Submissions table:
+---------+------------+
| sub_id  | parent_id  |
+---------+------------+
| 1       | Null       |
| 2       | Null       |
| 1       | Null       |
| 12      | Null       |
| 3       | 1          |
| 5       | 2          |
| 3       | 1          |
| 4       | 1          |
| 9       | 1          |
| 10      | 2          |
| 6       | 7          |
+---------+------------+

Result table:
+---------+--------------------+
| post_id | number_of_comments |
+---------+--------------------+
| 1       | 3                  |
| 2       | 2                  |
| 12      | 0                  |
+---------+--------------------+

The post with id 1 has three comments in the table with id 3, 4 and 9. The comment with id 3 is repeated in the table, we counted it only once.
The post with id 2 has two comments in the table with id 5 and 10.
The post with id 12 has no comments in the table.
The comment with id 6 is a comment on a deleted post with id 7 so we ignored it.
-----------------

# 1778_Shortest_Path_in_a_Hidden_Grid
# 1778. Shortest Path in a Hidden Grid


-----------------

# 774_Minimize_Max_Distance_to_Gas_Station
# 774. Minimize Max Distance to Gas Station

On a horizontal number line, we have gas stations at positions stations[0],
        stations[1], ..., stations[N-1], where N = stations.length.

    Now, we add K more gas stations so that D, the maximum distance
        between adjacent gas stations, is minimized.

    Return the smallest possible value of D.

    Example:

    Input: stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], K = 9
Output: 0.500000

    Note:

    
        stations.length will be an integer in range [10, 2000].
        stations[i] will be an integer in range [0, 10^8].
        K will be an integer in range [1, 10^6].
        Answers within 10^-6 of the true value will be accepted as correct.
-----------------

# 896_Monotonic_Array
# 896. Monotonic Array

An array is monotonic if it is either monotone increasing or monotone decreasing.
    

    An array A is monotone increasing if for all i <= j, A[i]
        <= A[j].  An array A is monotone decreasing if for all i
        <= j, A[i] >= A[j].

    Return true if and only if the given array A is monotonic.
-----------------

# 1311_Get_Watched_Videos_by_Your_Friends
# 1311. Get Watched Videos by Your Friends


-----------------

# 1667_Fix_Names_in_a_Table
# 1667. Fix Names in a Table


-----------------

# 802_Find_Eventual_Safe_States
# 802. Find Eventual Safe States

In a directed graph, we start at some node and every turn, walk along a directed edge of the
        graph.  If we reach a node that is terminal (that is, it has no outgoing directed
        edges), we stop.

    Now, say our starting node is eventually safe if and only if we must eventually
        walk to a terminal node.  More specifically, there exists a natural number
        K so that for any choice of where to walk, we must have stopped at a terminal
        node in less than K steps.

    Which nodes are eventually safe?  Return them as an array in sorted order.

    The directed graph has N nodes with labels 0, 1, ..., N-1, where
        N is the length of graph.  The graph is given in the
        following form: graph[i] is a list of labels j such that (i,
            j) is a directed edge of the graph.

    Example:
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Here is a diagram of the above graph.

    

    Note:

    
        graph will have length at most 10000.
        The number of edges in the graph will not exceed 32000.
        Each graph[i] will be a sorted list of different integers, chosen within
            the range [0, graph.length - 1].
-----------------

# 758_Bold_Words_in_String
# 758. Bold Words in String

Given a set of keywords words and a string S, make all appearances
        of all keywords in S bold. Any letters between <b> and
        </b> tags become bold.
    
    
        The returned string should use the least number of tags possible, and of course the tags
        should form a valid combination.
    
    
        For example, given that words = ["ab", "bc"] and S = "aabcd", we
        should return "a<b>abc</b>d". Note that returning "a<b>a<b>b</b>c</b>d"
        would use more tags, so it is incorrect.
    

    Note:
    
        words has length in range [0, 50].
        words[i] has length in range [1, 10].
        S has length in range [0, 500].
        All characters in words[i] and S are lowercase letters.
-----------------

# 1106_Parsing_A_Boolean_Expression
# 1106. Parsing A Boolean Expression

Return the result of evaluating a given boolean expression, represented as a
        string.

    An expression can either be:

    
        "t", evaluating to True;
        "f", evaluating to False;
        "!(expr)", evaluating to the logical NOT of the inner expression
            expr;
        
        "&(expr1,expr2,...)", evaluating to the logical AND of 2 or
            more inner expressions expr1, expr2, ...;
        
        "|(expr1,expr2,...)", evaluating to the logical OR of 2 or more
            inner expressions expr1, expr2, ...
    

     
    Example 1:

    Input: expression = "!(f)"
Output: true

    Example 2:

    Input: expression = "|(f,t)"
Output: true

    Example 3:

    Input: expression = "&(t,f)"
Output: false

    Example 4:

    Input: expression = "|(&(t,f,t),!(t))"
Output: false

     
    Constraints:

    
        1 <= expression.length <= 20000
        expression[i] consists of characters in {'(', ')',
            '&', '|', '!', 't', 'f', ','}.
        
        expression is a valid expression representing a boolean, as given in the
            description.
-----------------

# 714_Best_Time_to_Buy_and_Sell_Stock_with_Transaction_Fee
# 714. Best Time to Buy and Sell Stock with Transaction Fee

Your are given an array of integers prices, for which the i-th
        element is the price of a given stock on day i; and a non-negative integer
        fee representing a transaction fee.
    You may complete as many transactions as you like, but you need to pay the transaction fee
        for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must
        sell the stock share before you buy again.)
    Return the maximum profit you can make.

    Example 1:
    Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
Buying at prices[0] = 1Selling at prices[3] = 8Buying at prices[4] = 4Selling at prices[5] = 9The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

    

    Note:
    0 < prices.length <= 50000.
    0 < prices[i] < 50000.
    0 <= fee < 50000.
-----------------

# 1612_Check_If_Two_Expression_Trees_are_Equivalent
# 1612. Check If Two Expression Trees are Equivalent


-----------------

# 1809_Ad-Free_Sessions
# 1809. Ad-Free Sessions


-----------------

# 1206_Design_Skiplist
# 1206. Design Skiplist

Design a Skiplist without using any built-in libraries.

    A Skiplist is a data structure that takes O(log(n)) time to add,
        erase and search. Comparing with treap and red-black tree which
        has the same function and performance, the code length of Skiplist can be comparatively
        short and the idea behind Skiplists are just simple linked lists.

    For example: we have a Skiplist containing [30,40,50,60,70,90] and we
        want to add 80 and 45 into it. The Skiplist works this
        way:

    
        Artyom Kalinin [CC BY-SA 3.0], via Wikimedia
            Commons
    

    You can see there are many layers in the Skiplist. Each layer is a sorted linked list.
        With the help of the top layers, add , erase and
        search can be faster than O(n). It can be proven that the
        average time complexity for each operation is O(log(n)) and space complexity is O(n).
    

    To be specific, your design should include these functions:

    
        bool search(int target) : Return whether the target
            exists in the Skiplist or not.
        
        void add(int num): Insert a value into the SkipList. 
        bool erase(int num): Remove a value in the Skiplist. If
            num does not exist in the Skiplist, do nothing and return false. If
            there exists multiple num values, removing any one of them is fine.
        
    

    See more about Skiplist : https://en.wikipedia.org/wiki/Skip_list
    

    Note that duplicates may exist in the Skiplist, your code needs to handle this situation.

     

    Example:

    Skiplist skiplist = new Skiplist();

skiplist.add(1);
skiplist.add(2);
skiplist.add(3);
skiplist.search(0);   // return false.
skiplist.add(4);
skiplist.search(1);   // return true.
skiplist.erase(0);    // return false, 0 is not in skiplist.
skiplist.erase(1);    // return true.
skiplist.search(1);   // return false, 1 has already been erased.

     
    Constraints:

    
        0 <= num, target <= 20000
        At most 50000 calls will be made to search,
            add, and erase.
-----------------

# 750_Number_Of_Corner_Rectangles
# 750. Number Of Corner Rectangles

Given a grid where each entry is only 0 or 1, find the number of corner rectangles.

    A corner rectangle is 4 distinct 1s on the grid that form an axis-aligned rectangle.
        Note that only the corners need to have the value 1. Also, all four 1s used must be
        distinct.

     

    Example 1:

    Input: grid =
[[1, 0, 0, 1, 0],
 [0, 0, 1, 0, 1],
 [0, 0, 0, 1, 0],
 [1, 0, 1, 0, 1]]
Output: 1
Explanation: There is only one corner rectangle, with corners grid[1][2], grid[1][4], grid[3][2], grid[3][4].

     

    Example 2:

    Input: grid =
[[1, 1, 1],
 [1, 1, 1],
 [1, 1, 1]]
Output: 9
Explanation: There are four 2x2 rectangles, four 2x3 and 3x2 rectangles, and one 3x3 rectangle.

     

    Example 3:

    Input: grid =
[[1, 1, 1, 1]]
Output: 0
Explanation: Rectangles must have four distinct corners.

     

    Note:

    
        The number of rows and columns of grid will each be in the range [1,
            200].
        
        Each grid[i][j] will be either 0 or 1.
        The number of 1s in the grid will be at most 6000.
-----------------

# 1104_Path_In_Zigzag_Labelled_Binary_Tree
# 1104. Path In Zigzag Labelled Binary Tree

In an infinite binary tree where every node has two children, the nodes are labelled in row
        order.

    In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right,
        while in the even numbered rows (second, fourth, sixth,...), the labelling is right to
        left.

    

    Given the label of a node in this tree, return the labels in the path from the
        root of the tree to the node with that label.

     
    Example 1:

    Input: label = 14
Output: [1,3,4,14]

    Example 2:

    Input: label = 26
Output: [1,2,6,10,26]

     
    Constraints:

    
        1 <= label <= 10^6
-----------------

# 1417_Reformat_The_String
# 1417. Reformat The String


-----------------

# 342_Power_of_Four
# 342. Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

    Example 1:

    Input: 16
Output: true
-----------------

# 509_Fibonacci_Number
# 509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a
        sequence, called the Fibonacci sequence, such that each number is the sum of the
        two preceding ones, starting from 0 and 1. That is,

    F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.

    Given N, calculate F(N).

     

    Example 1:

    Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

    Example 2:

    Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

    Example 3:

    Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

     

    Note:

    0 ≤ N ≤ 30.
-----------------

# 1763_Longest_Nice_Substring
# 1763. Longest Nice Substring


-----------------

# 278_First_Bad_Version
# 278. First Bad Version

You are a product manager and currently leading a team to develop a new product.
        Unfortunately, the latest version of your product fails the quality check. Since each
        version is developed based on the previous version, all the versions after a bad version are
        also bad.

    Suppose you have n versions [1, 2, ..., n] and you want to find out
        the first bad one, which causes all the following ones to be bad.

    You are given an API bool isBadVersion(version) which will return whether version
        is bad. Implement a function to find the first bad version. You should minimize the number
        of calls to the API.

    Example:

    Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
-----------------

# 811_Subdomain_Visit_Count
# 811. Subdomain Visit Count

A website domain like "discuss.leetcode.com" consists of various subdomains. At the
        top level, we have "com", at the next level, we have "leetcode.com", and
        at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com",
        we will also visit the parent domains "leetcode.com" and "com"
        implicitly.

    Now, call a "count-paired domain" to be a count (representing the number of visits
        this domain received), followed by a space, followed by the address. An example of a
        count-paired domain might be "9001 discuss.leetcode.com".

    We are given a list cpdomains of count-paired domains. We would like a list of
        count-paired domains, (in the same format as the input, and in any order), that explicitly
        counts the number of visits to each subdomain.

    Example 1:
Input:
["9001 discuss.leetcode.com"]
Output:
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation:
We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

    Example 2:
Input:
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output:
["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
Explanation:
We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

    Notes: 

    
        The length of cpdomains will not exceed 100. 
        The length of each domain name will not exceed 100.
        Each address will have either 1 or 2 "." characters.
        The input count in any count-paired domain will not exceed 10000.
        The answer output can be returned in any order.
-----------------

# 1070_Product_Sales_Analysis_III
# 1070. Product Sales Analysis III

Table: Sales

    +-------------+-------+
| Column Name | Type  |
+-------------+-------+
| sale_id     | int   |
| product_id  | int   |
| year        | int   |
| quantity    | int   |
| price       | int   |
+-------------+-------+
sale_id is the primary key of this table.
product_id is a foreign key to Product table.
Note that the price is per unit.

    Table: Product

    +--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
+--------------+---------+
product_id is the primary key of this table.

     

    Write an SQL query that selects the product id,
        year, quantity, and price for the
        first year of every product sold.

    The query result format is in the following example:

    Sales table:
+---------+------------+------+----------+-------+
| sale_id | product_id | year | quantity | price |
+---------+------------+------+----------+-------+
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |
+---------+------------+------+----------+-------+

Product table:
+------------+--------------+
| product_id | product_name |
+------------+--------------+
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |
+------------+--------------+

Result table:
+------------+------------+----------+-------+
| product_id | first_year | quantity | price |
+------------+------------+----------+-------+
| 100        | 2008       | 10       | 5000  |
| 200        | 2011       | 15       | 9000  |
+------------+------------+----------+-------+
-----------------

# 41_First_Missing_Positive
# 41. First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

    Example 1:

    Input: [1,2,0]
Output: 3

    Example 2:

    Input: [3,4,-1,1]
Output: 2

    Example 3:

    Input: [7,8,9,11,12]
Output: 1

    Note:

    Your algorithm should run in O(n) time and uses constant extra space.
-----------------

# 1672_Richest_Customer_Wealth
# 1672. Richest Customer Wealth


-----------------

# 1434_Number_of_Ways_to_Wear_Different_Hats_to_Each_Other
# 1434. Number of Ways to Wear Different Hats to Each Other


-----------------

# 217_Contains_Duplicate
# 217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates.

    Your function should return true if any value appears at least twice in the array, and it
        should return false if every element is distinct.

    Example 1:

    Input: [1,2,3,1]
Output: true

    Example 2:

    Input: [1,2,3,4]
Output: false

    Example 3:

    Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
-----------------

# 442_Find_All_Duplicates_in_an_Array
# 442. Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some
        elements appear twice and others appear once.

    Find all the elements that appear twice in this array.

    Could you do it without extra space and in O(n) runtime?
    
    Example:
    Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
-----------------

# 180_Consecutive_Numbers
# 180. Consecutive Numbers

Write a SQL query to find all numbers that appear at least three times consecutively.

    +----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+

    For example, given the above Logs table, 1 is the only number that
        appears consecutively for at least three times.

    +-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
-----------------

# 150_Evaluate_Reverse_Polish_Notation
# 150. Evaluate Reverse Polish Notation

Evaluate the value of an arithmetic expression in Reverse
        Polish Notation.

    Valid operators are +, -, *, /. Each
        operand may be an integer or another expression.

    Note:

    
        Division between two integers should truncate toward zero.
        The given RPN expression is always valid. That means the expression would always
            evaluate to a result and there won't be any divide by zero operation.
        
    

    Example 1:

    Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

    Example 2:

    Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

    Example 3:

    Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
-----------------

# 1021_Remove_Outermost_Parentheses
# 1021. Remove Outermost Parentheses

A valid parentheses string is either empty (""), "(" +
        A + ")", or A + B, where A and B are
        valid parentheses strings, and + represents string concatenation.  For
        example, "", "()",
        "(())()", and "(()(()))" are all valid
        parentheses strings.

    A valid parentheses string S is primitive if it is nonempty,
        and there does not exist a way to split it into S = A+B, with A
        and B nonempty valid parentheses strings.

    Given a valid parentheses string S, consider its primitive decomposition: S
        = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses
        strings.

    Return S after removing the outermost parentheses of every primitive string in
        the primitive decomposition of S.

     

    Example 1:

    Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
-----------------

# 186_Reverse_Words_in_a_String_II
# 186. Reverse Words in a String II

Given an input string , reverse the string word by word. 
    

    Example:

    Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

    Note: 

    
        A word is defined as a sequence of non-space characters.
        The input string does not contain leading or trailing spaces.
        The words are always separated by a single space.
    

    Follow up: Could you do it in-place without allocating extra
        space?
-----------------

