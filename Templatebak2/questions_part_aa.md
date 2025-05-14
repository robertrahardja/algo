# 1455_Check_If_a_Word_Occurs_As_a_Prefix_of_Any_Word_in_a_Sentence
# 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence


-----------------

# 1828_Queries_on_Number_of_Points_Inside_a_Circle
# 1828. Queries on Number of Points Inside a Circle


-----------------

# 367_Valid_Perfect_Square
# 367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a
        perfect square else False.

    Note: Do not use any built-in library function such as sqrt.

    Example 1:
-----------------

# 274_H-Index
# 274. H-Index

Given an array of citations (each citation is a non-negative integer) of a researcher, write
        a function to compute the researcher's h-index.

    According to the definition
        of h-index on Wikipedia: "A scientist has index h if h of his/her N
        papers have at least h citations each, and the other N − h papers
        have no more than h citations each."

    Example:

    Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
             received 3, 0, 6, 1, 5 citations respectively.
             Since the researcher has 3 papers with at least 3 citations each and the remaining
             two with no more than 3 citations each, her h-index is 3.

    Note: If there are several possible values for h, the maximum
        one is taken as the h-index.
-----------------

# 641_Design_Circular_Deque
# 641. Design Circular Deque

Design your implementation of the circular double-ended queue (deque).

    Your implementation should support following operations:

    
        MyCircularDeque(k): Constructor, set the size of the deque to be k.
        insertFront(): Adds an item at the front of Deque. Return true if the
            operation is successful.
        
        insertLast(): Adds an item at the rear of Deque. Return true if the
            operation is successful.
        
        deleteFront(): Deletes an item from the front of Deque. Return true if the
            operation is successful.
        
        deleteLast(): Deletes an item from the rear of Deque. Return true if the
            operation is successful.
        
        getFront(): Gets the front item from the Deque. If the deque is empty,
            return -1.
        
        getRear(): Gets the last item from Deque. If the deque is empty, return -1.
        
        isEmpty(): Checks whether Deque is empty or not. 
        isFull(): Checks whether Deque is full or not.
    

     

    Example:

    MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
circularDeque.insertLast(1);			// return true
circularDeque.insertLast(2);			// return true
circularDeque.insertFront(3);			// return true
circularDeque.insertFront(4);			// return false, the queue is full
circularDeque.getRear();  			// return 2
circularDeque.isFull();				// return true
circularDeque.deleteLast();			// return true
circularDeque.insertFront(4);			// return true
circularDeque.getFront();			// return 4

     

    Note:

    
        All values will be in the range of [0, 1000].
        The number of operations will be in the range of [1, 1000].
        Please do not use the built-in Deque library.
-----------------

# 254_Factor_Combinations
# 254. Factor Combinations

Numbers can be regarded as product of its factors. For example,

    8 = 2 x 2 x 2;
  = 2 x 4.

    Write a function that takes an integer n and return all possible combinations of its
        factors.

    Note:

    
        You may assume that n is always positive.
        Factors should be greater than 1 and less than n.
    

    Example 1: 

    Input: 1
Output: []

    Example 2: 

    Input: 37
Output:[]

    Example 3: 

    Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]

    Example 4: 

    Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
-----------------

# 1670_Design_Front_Middle_Back_Queue
# 1670. Design Front Middle Back Queue


-----------------

# 942_DI_String_Match
# 942. DI String Match

Given a string S that only contains "I" (increase) or
        "D" (decrease), let N = S.length.

    Return any permutation A of [0, 1, ..., N] such
        that for all i = 0, ..., N-1:

    
        If S[i] == "I", then A[i] < A[i+1]
        If S[i] == "D", then A[i] > A[i+1]
    

     

    Example 1:

    Input: "IDID"
Output: [0,4,1,3,2]
-----------------

# 284_Peeking_Iterator
# 284. Peeking Iterator

Given an Iterator class interface with methods: next() and
        hasNext(), design and implement a PeekingIterator that support the
        peek() operation -- it essentially peek() at the element that will be returned
        by the next call to next().

    Example:

    Assume that the iterator is initialized to the beginning of the list: [1,2,3].

Call next() gets you 1, the first element in the list.
Now you call peek() and it returns 2, the next element. Calling next() after that still return 2.
You call next() the final time and it returns 3, the last element.
Calling hasNext() after that should return false.

    Follow up: How would you extend your design to be generic and work with all types, not
        just integer?
-----------------

# 949_Largest_Time_for_Given_Digits
# 949. Largest Time for Given Digits

Given an array of 4 digits, return the largest 24 hour time that can be made.

    The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a
        time is larger if more time has elapsed since midnight.

    Return the answer as a string of length 5.  If no valid time can be made, return an
        empty string.
-----------------

# 1661_Average_Time_of_Process_per_Machine
# 1661. Average Time of Process per Machine


-----------------

# 876_Middle_of_the_Linked_List
# 876. Middle of the Linked List

Given a non-empty, singly linked list with head node head, return a middle
        node of linked list.

    If there are two middle nodes, return the second middle node.
-----------------

# 1674_Minimum_Moves_to_Make_Array_Complementary
# 1674. Minimum Moves to Make Array Complementary


-----------------

# 140_Word_Break_II
# 140. Word Break II

Given a non-empty string s and a dictionary wordDict
        containing a list of non-empty words, add spaces in s to construct
        a sentence where each word is a valid dictionary word. Return all such possible
        sentences.

    Note:

    
        The same word in the dictionary may be reused multiple times in the segmentation.
        You may assume the dictionary does not contain duplicate words.
    

    Example 1:

    Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]

    Example 2:

    Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.

    Example 3:

    Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
-----------------

# 1283_Find_the_Smallest_Divisor_Given_a_Threshold
# 1283. Find the Smallest Divisor Given a Threshold


-----------------

# 333_Largest_BST_Subtree
# 333. Largest BST Subtree

Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), where
        largest means subtree with largest number of nodes in it.

    Note:
        A subtree must include all of its descendants.

    Example:

    Input: [10,5,15,1,8,null,7]

   10
   / \
  5  15
 / \   \
1   8   7

Output: 3
Explanation: The Largest BST Subtree in this case is the highlighted one.
             The return value is the subtree's size, which is 3.

    Follow up:
        Can you figure out ways to solve it with O(n) time complexity?
-----------------

# 1699_Number_of_Calls_Between_Two_Persons
# 1699. Number of Calls Between Two Persons


-----------------

# 793_Preimage_Size_of_Factorial_Zeroes_Function
# 793. Preimage Size of Factorial Zeroes Function

Let f(x) be the number of zeroes at the end of x!. (Recall that
        x! = 1 * 2 * 3 * ... * x, and by convention, 0! = 1.)

    For example, f(3) = 0 because 3! = 6 has no zeroes at the end, while f(11)
        = 2 because 11! = 39916800 has 2 zeroes at the end. Given K, find how
        many non-negative integers x have the property that f(x) = K.

    Example 1:
Input: K = 0
Output: 5
Explanation: 0!, 1!, 2!, 3!, and 4! end with K = 0 zeroes.

Example 2:
Input: K = 5
Output: 0
Explanation: There is no x such that x! ends in K = 5 zeroes.

    Note:

    
        K will be an integer in the range [0, 10^9].
-----------------

# 1449_Form_Largest_Integer_With_Digits_That_Add_up_to_Target
# 1449. Form Largest Integer With Digits That Add up to Target


-----------------

# 198_House_Robber
# 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain
        amount of money stashed, the only constraint stopping you from robbing each of them is that
        adjacent houses have security system connected and it will automatically contact the
            police if two adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money of each house,
        determine the maximum amount of money you can rob tonight without alerting the police.
    

    Example 1:

    Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

    Example 2:

    Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
-----------------

# 1265_Print_Immutable_Linked_List_in_Reverse
# 1265. Print Immutable Linked List in Reverse


-----------------

# 224_Basic_Calculator
# 224. Basic Calculator

Implement a basic calculator to evaluate a simple expression string.

    The expression string may contain open ( and closing parentheses ),
        the plus + or minus sign -, non-negative integers and empty
        spaces  .

    Example 1:

    Input: "1 + 1"
Output: 2

    Example 2:

    Input: " 2-1 + 2 "
Output: 3

    Example 3:

    Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
    Note:

    
        You may assume that the given expression is always valid.
        Do not use the eval built-in library function.
-----------------

# 324_Wiggle_Sort_II
# 324. Wiggle Sort II

Given an unsorted array nums, reorder it such that nums[0] < nums[1]
        > nums[2] < nums[3]....

    Example 1:

    Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].

    Example 2:

    Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].

    Note:
        You may assume all input has valid answer.

    Follow Up:
        Can you do it in O(n) time and/or in-place with O(1) extra space?
-----------------

# 1052_Grumpy_Bookstore_Owner
# 1052. Grumpy Bookstore Owner

Today, the bookstore owner has a store open for customers.length minutes. 
        Every minute, some number of customers (customers[i]) enter the store, and all
        those customers leave after the end of that minute.

    On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the
        i-th minute, grumpy[i] = 1, otherwise grumpy[i] = 0.  When
        the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise
        they are satisfied.

    The bookstore owner knows a secret technique to keep themselves not grumpy for
        X minutes straight, but can only use it once.

    Return the maximum number of customers that can be satisfied throughout the day.

     

    Example 1:

    Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

     

    Note:

    
        1 <= X <= customers.length == grumpy.length <= 20000
        
        0 <= customers[i] <= 1000
        0 <= grumpy[i] <= 1
-----------------

# 12_Integer_to_Roman
# 12. Integer to Roman

Roman numerals are represented by seven different symbols: I,
        V, X, L, C, D and
        M.

    Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

    For example, two is written as II in Roman numeral, just two one's
        added together. Twelve is written as, XII, which is simply X +
        II. The number twenty seven is written as XXVII, which is
        XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the
        numeral for four is not IIII. Instead, the number four is written as
        IV. Because the one is before the five we subtract it making four. The same
        principle applies to the number nine, which is written as IX. There are six
        instances where subtraction is used:

    
        I can be placed before V (5) and X (10) to make 4
            and 9. 
        
        X can be placed before L (50) and C (100) to make
            40 and 90. 
        
        C can be placed before D (500) and M (1000) to
            make 400 and 900.
        
    

    Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range
        from 1 to 3999.

    Example 1:

    Input: 3
Output: "III"

    Example 2:

    Input: 4
Output: "IV"

    Example 3:

    Input: 9
Output: "IX"

    Example 4:

    Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

    Example 5:

    Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
-----------------

# 1059_All_Paths_from_Source_Lead_to_Destination
# 1059. All Paths from Source Lead to Destination

Given the edges of a directed graph, and two nodes source and
        destination of this graph, determine whether or not all paths starting from
        source eventually end at destination, that is:

    
        At least one path exists from the source node to the
            destination node
        
        If a path exists from the source node to a node with no outgoing edges,
            then that node is equal to destination.
        
        The number of possible paths from source to destination is a
            finite number.
        
    

    Return true if and only if all roads from source lead to destination.
    

     

    Example 1:

    

    Input: n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2
Output: false
Explanation: It is possible to reach and get stuck on both node 1 and node 2.

    Example 2:

    

    Input: n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3
Output: false
Explanation: We have two possibilities: to end at node 3, or to loop over node 1 and node 2 indefinitely.

    Example 3:

    

    Input: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
Output: true

    Example 4:

    

    Input: n = 3, edges = [[0,1],[1,1],[1,2]], source = 0, destination = 2
Output: false
Explanation: All paths from the source node end at the destination node, but there are an infinite number of paths, such as 0-1-2, 0-1-1-2, 0-1-1-1-2, 0-1-1-1-1-2, and so on.

    Example 5:

    

    Input: n = 2, edges = [[0,1],[1,1]], source = 0, destination = 1
Output: false
Explanation: There is infinite self-loop at destination node.

     

    Note:

    
        
            The given graph may have self loops and parallel edges.
        
        The number of nodes n in the graph is between 1 and 10000
        
        The number of edges in the graph is between 0 and 10000
        0 <= edges.length <= 10000
        edges[i].length == 2
        0 <= source <= n - 1
        0 <= destination <= n - 1
-----------------

# 609_Find_Duplicate_File_in_System
# 609. Find Duplicate File in System

Given a list of directory info including directory path, and all the files with contents in
        this directory, you need to find out all the groups of duplicate files in the file system in
        terms of their paths.

    A group of duplicate files consists of at least two files that have exactly the same
        content.

    A single directory info string in the input list has the following format:

    "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
    

    It means there are n files (f1.txt, f2.txt ...
        fn.txt with content f1_content, f2_content ... fn_content,
        respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >=
        0. If m = 0, it means the directory is just the root directory.

    The output is a list of group of duplicate file paths. For each group, it contains all
        the file paths of the files that have the same content. A file path is a string that has the
        following format:

    "directory_path/file_name.txt"

    Example 1:

    Input:
["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
Output:
[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

     

    Note:

    
        No order is required for the final output.
        You may assume the directory name, file name and file content only has letters and
            digits, and the length of file content is in the range of [1,50].
        
        The number of files given is in the range of [1,20000].
        You may assume no files or directories share the same name in the same directory.
        You may assume each given directory info represents a unique directory. Directory path
            and file info are separated by a single blank space.
        
    

     
    Follow-up beyond contest:

    
        Imagine you are given a real file system, how will you search files? DFS or BFS?
        If the file content is very large (GB level), how will you modify your solution?
        If you can only read the file by 1kb each time, how will you modify your solution?
        What is the time complexity of your modified solution? What is the most time-consuming
            part and memory consuming part of it? How to optimize?
        
        How to make sure the duplicated files you find are not false positive?
-----------------

# 300_Longest_Increasing_Subsequence
# 300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence.

    Example:

    Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

    Note: 

    
        There may be more than one LIS combination, it is only necessary for you to return the
            length.
        
        Your algorithm should run in O(n2) complexity.
    

    Follow up: Could you improve it to O(n log n) time complexity?
-----------------

# 1350_Students_With_Invalid_Departments
# 1350. Students With Invalid Departments


-----------------

# 375_Guess_Number_Higher_or_Lower_II
# 375. Guess Number Higher or Lower II

We are playing the Guess Game. The game is as follows:

    I pick a number from 1 to n. You have to guess which number
        I picked.

    Every time you guess wrong, I'll tell you whether the number I picked is higher or
        lower.

    However, when you guess a particular number x, and you guess wrong, you pay $x. You
        win the game when you guess the number I picked.

    Example:

    n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.

    Given a particular n ≥ 1, find out how much money you need to have to
        guarantee a win.
-----------------

# 1309_Decrypt_String_from_Alphabet_to_Integer_Mapping
# 1309. Decrypt String from Alphabet to Integer Mapping


-----------------

# 130_Surrounded_Regions
# 130. Surrounded Regions

Given a 2D board containing 'X' and 'O' (the
        letter O), capture all regions surrounded by 'X'.

    A region is captured by flipping all 'O's into 'X's
        in that surrounded region.

    Example:

    X X X X
X O O X
X X O X
X O X X

    After running your function, the board should be:

    X X X X
X X X X
X X X X
X O X X

    Explanation:

    Surrounded regions shouldn’t be on the border, which means that any
        'O' on the border of the board are not flipped to 'X'.
        Any 'O' that is not on the border and it is not connected to an
        'O' on the border will be flipped to 'X'. Two
        cells are connected if they are adjacent cells connected horizontally or vertically.
-----------------

# 1679_Max_Number_of_K-Sum_Pairs
# 1679. Max Number of K-Sum Pairs


-----------------

# 1264_Page_Recommendations
# 1264. Page Recommendations


-----------------

# 921_Minimum_Add_to_Make_Parentheses_Valid
# 921. Minimum Add to Make Parentheses Valid

Given a string S of '(' and ')'
        parentheses, we add the minimum number of parentheses ( '(' or ')',
        and in any positions ) so that the resulting parentheses string is valid.

    Formally, a parentheses string is valid if and only if:

    
        It is the empty string, or
        It can be written as AB (A concatenated with
            B), where A and B are valid strings, or
        
        It can be written as (A), where A is a valid string.
    

    Given a parentheses string, return the minimum number of parentheses we must add to make the
        resulting string valid.

     

    Example 1:

    Input: "())"
Output: 1
-----------------

# 1611_Minimum_One_Bit_Operations_to_Make_Integers_Zero
# 1611. Minimum One Bit Operations to Make Integers Zero


-----------------

# 873_Length_of_Longest_Fibonacci_Subsequence
# 873. Length of Longest Fibonacci Subsequence

A sequence X_1, X_2, ..., X_n is fibonacci-like if:

    
        n >= 3
        X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
    

    Given a strictly increasing array A of positive integers
        forming a sequence, find the length of the longest fibonacci-like
        subsequence of A.  If one does not exist, return 0.

    (Recall that a subsequence is derived from another sequence A by deleting
        any number of elements (including none) from A, without changing the
        order of the remaining elements.  For example, [3, 5, 8] is a subsequence
        of [3, 4, 5, 6, 7, 8].)

     

    
    

    Example 1:

    Input: [1,2,3,4,5,6,7,8]
Output: 5
Explanation:
The longest subsequence that is fibonacci-like: [1,2,3,5,8].

    Example 2:

    Input: [1,3,7,11,12,14,18]
Output: 3
Explanation:
The longest subsequence that is fibonacci-like:
[1,11,12], [3,11,14] or [7,11,18].

     

    Note:

    
        3 <= A.length <= 1000
        1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
        (The time limit has been reduced by 50% for submissions in Java, C, and C++.)
-----------------

# 118_Pascal's_Triangle
# 118. Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of
        Pascal's triangle.

    
        In Pascal's triangle, each number is the sum of the two numbers directly above
            it.
        
    

    Example:

    Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
-----------------

# 1024_Video_Stitching
# 1024. Video Stitching

You are given a series of video clips from a sporting event that lasted T
        seconds.  These video clips can be overlapping with each other and have varied
        lengths.

    Each video clip clips[i] is an interval: it starts at time clips[i][0]
        and ends at time clips[i][1].  We can cut these clips into segments
        freely: for example, a clip [0, 7] can be cut into segments [0, 1] + [1,
            3] + [3, 7].

    Return the minimum number of clips needed so that we can cut the clips into segments that
        cover the entire sporting event ([0, T]).  If the task is impossible,
        return -1.

     

    Example 1:

    Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
Output: 3
Explanation: 
We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].

    Example 2:

    Input: clips = [[0,1],[1,2]], T = 5
Output: -1
Explanation: 
We can't cover [0,5] with only [0,1] and [0,2].

    Example 3:

    Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9
Output: 3
Explanation: 
We can take clips [0,4], [4,7], and [6,9].

    Example 4:

    Input: clips = [[0,4],[2,8]], T = 5
Output: 2
Explanation: 
Notice you can have extra video after the event ends.

     

    Note:

    
        1 <= clips.length <= 100
        0 <= clips[i][0], clips[i][1] <= 100
        0 <= T <= 100
-----------------

# 1765_Map_of_Highest_Peak
# 1765. Map of Highest Peak


-----------------

# 99_Recover_Binary_Search_Tree
# 99. Recover Binary Search Tree

Two elements of a binary search tree (BST) are swapped by mistake.

    Recover the tree without changing its structure.

    Example 1:

    Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2

    Example 2:

    Input: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

Output: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3

    Follow up:

    
        A solution using O(n) space is pretty straight forward.
        Could you devise a constant space solution?
-----------------

# 752_Open_the_Lock
# 752. Open the Lock

You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0',
        '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap
        around: for example we can turn '9' to be '0', or '0'
        to be '9'. Each move consists of turning one wheel one slot.
    
    
        The lock initially starts at '0000', a string representing the state of the 4
        wheels.
    
    
        You are given a list of deadends dead ends, meaning if the lock displays any of
        these codes, the wheels of the lock will stop turning and you will be unable to open it.
    
    
        Given a target representing the value of the wheels that will unlock the lock,
        return the minimum total number of turns required to open the lock, or -1 if it is
        impossible.
    

    Example 1:
    Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

    

    Example 2:
    Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation:
We can turn the last wheel in reverse to move from "0000" -> "0009".

    

    Example 3:
    Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation:
We can't reach the target without getting stuck.

    

    Example 4:
    Input: deadends = ["0000"], target = "8888"
Output: -1

    

    Note:
    
        The length of deadends will be in the range [1, 500].
        target will not be in the list deadends.
        Every string in deadends and the string target will be a
            string of 4 digits from the 10,000 possibilities '0000' to
            '9999'.
-----------------

# 676_Implement_Magic_Dictionary
# 676. Implement Magic Dictionary

Implement a magic directory with buildDict, and search methods.
    

    
        For the method buildDict, you'll be given a list of non-repetitive words to
        build a dictionary.
    

    
        For the method search, you'll be given a word, and judge whether if you modify
        exactly one character into another character in this word, the modified word
        is in the dictionary you just built.
    

    Example 1:
    Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False

    

    Note:
    
        You may assume that all the inputs are consist of lowercase letters a-z.
        
        For contest purpose, the test data is rather small by now. You could think about highly
            efficient algorithm after the contest.
        
        Please remember to RESET your class variables declared in class MagicDictionary,
            as static/class variables are persisted across multiple test cases. Please see here for more details.
-----------------

# 391_Perfect_Rectangle
# 391. Perfect Rectangle

Given N axis-aligned rectangles where N > 0, determine if they all together form an exact
        cover of a rectangular region.

    Each rectangle is represented as a bottom-left point and a top-right point. For example, a
        unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and
        top-right point is (2, 2)).
-----------------

# 1571_Warehouse_Manager
# 1571. Warehouse Manager


-----------------

# 355_Design_Twitter
# 355. Design Twitter

Design a simplified version of Twitter where users can post tweets, follow/unfollow another
        user and is able to see the 10 most recent tweets in the user's news feed. Your design
        should support the following methods:

    
    
        postTweet(userId, tweetId): Compose a new tweet.
        getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news
            feed. Each item in the news feed must be posted by users who the user followed or by the
            user herself. Tweets must be ordered from most recent to least recent.
        
        follow(followerId, followeeId): Follower follows a followee.
        unfollow(followerId, followeeId): Follower unfollows a followee.
    
    

    Example:
    Twitter twitter = new Twitter();

// User 1 posts a new tweet (id = 5).
twitter.postTweet(1, 5);

// User 1's news feed should return a list with 1 tweet id -> [5].
twitter.getNewsFeed(1);

// User 1 follows user 2.
twitter.follow(1, 2);

// User 2 posts a new tweet (id = 6).
twitter.postTweet(2, 6);

// User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.getNewsFeed(1);

// User 1 unfollows user 2.
twitter.unfollow(1, 2);

// User 1's news feed should return a list with 1 tweet id -> [5],
// since user 1 is no longer following user 2.
twitter.getNewsFeed(1);
-----------------

# 489_Robot_Room_Cleaner
# 489. Robot Room Cleaner

Given a robot cleaner in a room modeled as a grid.

    Each cell in the grid can be empty or blocked.

    The robot cleaner with 4 given APIs can move forward, turn left or turn right. Each turn it
        made is 90 degrees.

    When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it
        stays on the current cell.

    Design an algorithm to clean the entire room using only the 4 given APIs shown below.

    interface Robot {
  // returns true if next cell is open and robot moves into the cell.
  // returns false if next cell is obstacle and robot stays on the current cell.
  boolean move();

  // Robot will stay on the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  void turnLeft();
  void turnRight();

  // Clean the current cell.
  void clean();
}

    Example:

    Input:
room = [
  [1,1,1,1,1,0,1,1],
  [1,1,1,1,1,0,1,1],
  [1,0,1,1,1,1,1,1],
  [0,0,0,1,0,0,0,0],
  [1,1,1,1,1,1,1,1]
],
row = 1,
col = 3

Explanation:
All grids in the room are marked by either 0 or 1.
0 means the cell is blocked, while 1 means the cell is accessible.
The robot initially starts at the position of row=1, col=3.
From the top left corner, its position is one row below and three columns right.

    Notes:

    
        The input is only given to initialize the room and the robot's position internally. You
            must solve this problem "blindfolded". In other words, you must control the
            robot using only the mentioned 4 APIs, without knowing the room layout and the initial
            robot's position.
        
        The robot's initial position will always be in an accessible cell.
        The initial direction of the robot will be facing up.
        All accessible cells are connected, which means the all cells marked as 1 will be
            accessible by the robot.
        
        Assume all four edges of the grid are all surrounded by wall.
-----------------

# 1134_Armstrong_Number
# 1134. Armstrong Number

The k-digit number N is an Armstrong number if and only if the k-th power of
        each digit sums to N.

    Given a positive integer N, return true if and only if it is an Armstrong
        number.

     

    Example 1:

    Input: 153
Output: true
Explanation: 
153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.

    Example 2:

    Input: 123
Output: false
Explanation: 
123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.

     

    Note:

    
        1 <= N <= 10^8
-----------------

# 1381_Design_a_Stack_With_Increment_Operation
# 1381. Design a Stack With Increment Operation


-----------------

# 282_Expression_Add_Operators
# 282. Expression Add Operators

Given a string that contains only digits 0-9 and a target value, return all
        possibilities to add binary operators (not unary) +, -, or
        * between the digits so they evaluate to the target value.

    Example 1:

    Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"]

    Example 2:

    Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]

    Example 3:

    Input: num = "105", target = 5
Output: ["1*0+5","10-5"]

    Example 4:

    Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]

    Example 5:

    Input: num = "3456237490", target = 9191
Output: []
-----------------

# 218_The_Skyline_Problem
# 218. The Skyline Problem

A city's skyline is the outer contour of the silhouette formed by all the buildings in
        that city when viewed from a distance. Now suppose you are given the locations and height
            of all the buildings as shown on a cityscape photo (Figure A), write a program to
        output the skyline formed by these buildings collectively (Figure B).
        

    The geometric information of each building is represented by a triplet of integers [Li,
        Ri, Hi], where Li and Ri are the x coordinates of the left
        and right edge of the ith building, respectively, and Hi is its height. It is
        guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX,
        and Ri - Li > 0. You may assume all buildings are perfect rectangles
        grounded on an absolutely flat surface at height 0.

    For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10],
        [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

    The output is a list of "key points" (red dots in Figure B) in the format of
        [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key
            point is the left endpoint of a horizontal line segment. Note that the last key
        point, where the rightmost building ends, is merely used to mark the termination of the
        skyline, and always has zero height. Also, the ground in between any two adjacent buildings
        should be considered part of the skyline contour.

    For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7
        12], [12 0], [15 10], [20 8], [24, 0] ].

    Notes:

    
        The number of buildings in any input list is guaranteed to be in the range [0,
            10000].
        
        The input list is already sorted in ascending order by the left x position
            Li.
        
        The output list must be sorted by the x position.
        There must be no consecutive horizontal lines of equal height in the output skyline. For
            instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable;
            the three lines of height 5 should be merged into one in the final output as such:
            [...[2 3], [4 5], [12 7], ...]
-----------------

# 1585_Check_If_String_Is_Transformable_With_Substring_Sort_Operations
# 1585. Check If String Is Transformable With Substring Sort Operations


-----------------

# 1658_Minimum_Operations_to_Reduce_X_to_Zero
# 1658. Minimum Operations to Reduce X to Zero


-----------------

# 953_Verifying_an_Alien_Dictionary
# 953. Verifying an Alien Dictionary

In an alien language, surprisingly they also use english lowercase letters, but possibly in
        a different order. The order of the alphabet is some
        permutation of lowercase letters.

    Given a sequence of words written in the alien language, and the
        order of the alphabet, return true if and only if the given
        words are sorted lexicographicaly in this alien language.
-----------------

# 538_Convert_BST_to_Greater_Tree
# 538. Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the
        original BST is changed to the original key plus sum of all keys greater than the original
        key in BST.

    
        Example:
    Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
-----------------

# 931_Minimum_Falling_Path_Sum
# 931. Minimum Falling Path Sum

Given a square array of integers A, we want the
        minimum sum of a falling path through A.

    A falling path starts at any element in the first row, and chooses one element from each row. 
        The next row's choice must be in a column that is different from the previous row's
        column by at most one.

     

    Example 1:

    Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: 12
Explanation: 
The possible falling paths are:

    
        [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
        [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
        [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
    

    The falling path with the smallest sum is [1,4,7], so the answer is
        12.

     

    Note:

    
        1 <= A.length == A[0].length <= 100
        -100 <= A[i][j] <= 100
-----------------

# 713_Subarray_Product_Less_Than_K
# 713. Subarray Product Less Than K

Your are given an array of positive integers nums.
    Count and print the number of (contiguous) subarrays where the product of all the elements in
        the subarray is less than k.

    Example 1:
    Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

    

    Note:
    0 < nums.length <= 50000.
    0 < nums[i] < 1000.
    0 <= k < 10^6.
-----------------

# 1815_Maximum_Number_of_Groups_Getting_Fresh_Donuts
# 1815. Maximum Number of Groups Getting Fresh Donuts


-----------------

# 482_License_Key_Formatting
# 482. License Key Formatting

You are given a license key represented as a string S which consists only alphanumeric
        character and dashes. The string is separated into N+1 groups by N dashes.

    Given a number K, we would want to reformat the strings such that each group contains exactly
        K characters, except for the first group which could be shorter than K, but still must
        contain at least one character. Furthermore, there must be a dash inserted between two
        groups and all lowercase letters should be converted to uppercase.

    Given a non-empty string S and a number K, format the string according to the rules described
        above.

    Example 1:
    Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

    

    Example 2:
    Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

    

    Note:
    
        The length of string S will not exceed 12,000, and K is a positive integer.
        String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and
            dashes(-).
        
        String S is non-empty.
-----------------

# 528_Random_Pick_with_Weight
# 528. Random Pick with Weight

Given an array w of positive integers, where w[i] describes the
        weight of index i, write a function pickIndex which
        randomly picks an index in proportion to its weight.

    Note:

    
        1 <= w.length <= 10000
        1 <= w[i] <= 10^5
        pickIndex will be called at most 10000 times.
    

    Example 1:

    Input:
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
-----------------

# 273_Integer_to_English_Words
# 273. Integer to English Words

Convert a non-negative integer to its english words representation. Given input is guaranteed
        to be less than 231 - 1.

    Example 1:

    Input: 123
Output: "One Hundred Twenty Three"

    Example 2:

    Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"

    Example 3:

    Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

    Example 4:

    Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
-----------------

# 549_Binary_Tree_Longest_Consecutive_Sequence_II
# 549. Binary Tree Longest Consecutive Sequence II

Given a binary tree, you need to find the length of Longest Consecutive Path in Binary
        Tree.

    Especially, this path can be either increasing or decreasing. For example, [1,2,3,4] and
        [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid. On the other hand,
        the path can be in the child-Parent-child order, where not necessarily be parent-child
        order.

    Example 1:

    Input:
        1
       / \
      2   3
Output: 2
Explanation: The longest consecutive path is [1, 2] or [2, 1].

     

    Example 2:

    Input:
        2
       / \
      1   3
Output: 3
Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].

     

    Note: All the values of tree nodes are in the range of [-1e7, 1e7].
-----------------

# 1005_Maximize_Sum_Of_Array_After_K_Negations
# 1005. Maximize Sum Of Array After K Negations

Given an array A of integers, we must modify the array in
        the following way: we choose an i and replace A[i] with
        -A[i], and we repeat this process K times in total.  (We may
        choose the same index i multiple times.)

    Return the largest possible sum of the array after modifying it in this way.

     

    Example 1:

    Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].
-----------------

# 1499_Max_Value_of_Equation
# 1499. Max Value of Equation


-----------------

# 332_Reconstruct_Itinerary
# 332. Reconstruct Itinerary

Given a list of airline tickets represented by pairs of departure and arrival airports [from,
        to], reconstruct the itinerary in order. All of the tickets belong to a man who
        departs from JFK. Thus, the itinerary must begin with JFK.

    Note:

    
        If there are multiple valid itineraries, you should return the itinerary that has the
            smallest lexical order when read as a single string. For example, the itinerary ["JFK",
                "LGA"] has a smaller lexical order than ["JFK",
                "LGB"].
        
        All airports are represented by three capital letters (IATA code).
        You may assume all tickets form at least one valid itinerary.
    

    Example 1:

    Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

    Example 2:

    Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
-----------------

# 587_Erect_the_Fence
# 587. Erect the Fence

There are some trees, where each tree is represented by (x,y) coordinate in a two-dimensional
        garden. Your job is to fence the entire garden using the minimum length of rope as it
        is expensive. The garden is well fenced only if all the trees are enclosed. Your task is to
        help find the coordinates of trees which are exactly located on the fence perimeter.

     

    Example 1:

    Input: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [[1,1],[2,0],[4,2],[3,3],[2,4]]
Explanation:

    Example 2:

    Input: [[1,2],[2,2],[4,2]]
Output: [[1,2],[2,2],[4,2]]
Explanation:

Even you only have trees in a line, you need to use rope to enclose them.

     

    Note:

    
        All trees should be enclosed together. You cannot cut the rope to enclose trees that
            will separate them in more than one group.
        
        All input integers will range from 0 to 100.
        The garden has at least one tree.
        All coordinates are distinct.
        Input points have NO order. No order required for output.
        input types have been changed on April 15, 2019. Please reset to default code definition
            to get new method signature.
-----------------

# 1183_Maximum_Number_of_Ones
# 1183. Maximum Number of Ones

Consider a matrix M with dimensions width * height, such that every
        cell has value 0 or 1, and any square sub-matrix
        of M of size sideLength * sideLength has at most maxOnes ones.
    

    Return the maximum possible number of ones that the matrix M can have.

     
    Example 1:

    Input: width = 3, height = 3, sideLength = 2, maxOnes = 1
Output: 4
Explanation:
In a 3*3 matrix, no 2*2 sub-matrix can have more than 1 one.
The best solution that has 4 ones is:
[1,0,1]
[0,0,0]
[1,0,1]

    Example 2:

    Input: width = 3, height = 3, sideLength = 2, maxOnes = 2
Output: 6
Explanation:
[1,0,1]
[1,0,1]
[1,0,1]

     
    Constraints:

    
        1 <= width, height <= 100
        1 <= sideLength <= width, height
        0 <= maxOnes <= sideLength * sideLength
-----------------

# 558_Quad_Tree_Intersection
# 558. Quad Tree Intersection

A quadtree is a tree data in which each internal node has exactly four children: topLeft,
        topRight, bottomLeft and bottomRight. Quad trees are
        often used to partition a two-dimensional space by recursively subdividing it into four
        quadrants or regions.

    We want to store True/False information in our quad tree. The quad tree is used to represent
        a N * N boolean grid. For each node, it will be subdivided into four children
        nodes until the values in the region it represents are all the same. Each
        node has another two boolean attributes : isLeaf and val. isLeaf
        is true if and only if the node is a leaf node. The val attribute for a leaf
        node contains the value of the region it represents.

    For example, below are two quad trees A and B:

    A:
+-------+-------+   T: true
|       |       |   F: false
|   T   |   T   |
|       |       |
+-------+-------+
|       |       |
|   F   |   F   |
|       |       |
+-------+-------+
topLeft: T
topRight: T
bottomLeft: F
bottomRight: F

B:
+-------+---+---+
|       | F | F |
|   T   +---+---+
|       | T | T |
+-------+---+---+
|       |       |
|   T   |   F   |
|       |       |
+-------+-------+
topLeft: T
topRight:
     topLeft: F
     topRight: F
     bottomLeft: T
     bottomRight: T
bottomLeft: T
bottomRight: F

     

    Your task is to implement a function that will take two quadtrees and return a quadtree that
        represents the logical OR (or union) of the two trees.

    A:                 B:                 C (A or B):
+-------+-------+  +-------+---+---+  +-------+-------+
|       |       |  |       | F | F |  |       |       |
|   T   |   T   |  |   T   +---+---+  |   T   |   T   |
|       |       |  |       | T | T |  |       |       |
+-------+-------+  +-------+---+---+  +-------+-------+
|       |       |  |       |       |  |       |       |
|   F   |   F   |  |   T   |   F   |  |   T   |   F   |
|       |       |  |       |       |  |       |       |
+-------+-------+  +-------+-------+  +-------+-------+

    Note:

    
        Both A and B represent grids of size N * N.
        
        N is guaranteed to be a power of 2.
        If you want to know more about the quad tree, you can refer to its wiki.
        
        The logic OR operation is defined as this: "A or B" is true if A is
            true, or if B is true, or if both A and B are true.
-----------------

# 1380_Lucky_Numbers_in_a_Matrix
# 1380. Lucky Numbers in a Matrix


-----------------

# 125_Valid_Palindrome
# 125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and
        ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid
        palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
Output: true

    Example 2:

    Input: "race a car"
Output: false
-----------------

# 295_Find_Median_from_Data_Stream
# 295. Find Median from Data Stream

Median is the middle value in an ordered integer list. If the size of the list is even, there
        is no middle value. So the median is the mean of the two middle value.
    For example,

    [2,3,4], the median is 3

    [2,3], the median is (2 + 3) / 2 = 2.5

    Design a data structure that supports the following two operations:

    
        void addNum(int num) - Add a integer number from the data stream to the data
            structure.
        
        double findMedian() - Return the median of all elements so far.
    

     

    Example:

    addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3)
findMedian() -> 2

     

    Follow up:

    
        If all integer numbers from the stream are between 0 and 100, how would you
            optimize it?
        
        If 99% of all integer numbers from the stream are between 0 and 100, how would you
            optimize it?
-----------------

# 972_Equal_Rational_Numbers
# 972. Equal Rational Numbers

Given two strings S and T, each of which represents a non-negative
        rational number, return True if and only if they represent the same number.
        The strings may use parentheses to denote the repeating part of the rational number.

    In general a rational number can be represented using up to three parts: an integer
        part, a non-repeating part, and a repeating part. The
        number will be represented in one of the following three ways:

    
        <IntegerPart> (e.g. 0, 12, 123)
        <IntegerPart><.><NonRepeatingPart>  (e.g. 0.5, 1.,
            2.12, 2.0001)
        
        <IntegerPart><.><NonRepeatingPart><(><RepeatingPart><)>
            (e.g. 0.1(6), 0.9(9), 0.00(1212))
        
    

    The repeating portion of a decimal expansion is conventionally denoted within a pair of round
        brackets.  For example:

    1 / 6 = 0.16666666... = 0.1(6) = 0.1666(6) = 0.166(66)

    Both 0.1(6) or 0.1666(6) or 0.166(66) are correct representations of 1 / 6.

     

    Example 1:

    Input: S = "0.(52)", T = "0.5(25)"
Output: true
Explanation:
Because "0.(52)" represents 0.52525252..., and "0.5(25)" represents 0.52525252525..... , the strings represent the same number.
-----------------

# 1406_Stone_Game_III
# 1406. Stone Game III


-----------------

# 986_Interval_List_Intersections
# 986. Interval List Intersections

Given two lists of closed intervals, each list of intervals is pairwise
        disjoint and in sorted order.

    Return the intersection of these two interval lists.

    (Formally, a closed interval [a, b] (with a <= b) denotes the
        set of real numbers x with a <= x <= b.  The intersection
        of two closed intervals is a set of real numbers that is either empty, or can be represented
        as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2,
        3].)
-----------------

# 608_Tree_Node
# 608. Tree Node

Given a table tree, id is identifier of the tree node and p_id is
        its parent node's id.

    +----+------+
| id | p_id |
+----+------+
| 1  | null |
| 2  | 1    |
| 3  | 1    |
| 4  | 2    |
| 5  | 2    |
+----+------+

    Each node in the tree can be one of three types:

    
        Leaf: if the node is a leaf node.
        Root: if the node is the root of the tree.
        Inner: If the node is neither a leaf node nor a root node.
    

     
    Write a query to print the node id and the type of the node. Sort your output by the node id.
    The result for the above sample is:

     

    +----+------+
| id | Type |
+----+------+
| 1  | Root |
| 2  | Inner|
| 3  | Leaf |
| 4  | Leaf |
| 5  | Leaf |
+----+------+

     

    Explanation

     

    
        Node '1' is root node, because its parent node is NULL and it has child node
            '2' and '3'.
        
        Node '2' is inner node, because it has parent node '1' and child node
            '4' and '5'.
        
        Node '3', '4' and '5' is Leaf node, because they have parent
            node and they don't have child node.
        
        
        And here is the image of the sample tree as below:
             

            			  1
			/   \
                      2       3
                    /   \
                  4       5

            Note

            If there is only one node on the tree, you only need to output its root
                attributes.
-----------------

# 1812_Determine_Color_of_a_Chessboard_Square
# 1812. Determine Color of a Chessboard Square


-----------------

# 762_Prime_Number_of_Set_Bits_in_Binary_Representation
# 762. Prime Number of Set Bits in Binary Representation

Given two integers L and R, find the count of numbers in the range
        [L, R] (inclusive) having a prime number of set bits in their binary
        representation.
    
    
        (Recall that the number of set bits an integer has is the number of 1s present
        when written in binary. For example, 21 written in binary is 10101
        which has 3 set bits. Also, 1 is not a prime.)
    
    

    Example 1:
    Input: L = 6, R = 10
Output: 4
Explanation:
6 -> 110 (2 set bits, 2 is prime)
7 -> 111 (3 set bits, 3 is prime)
9 -> 1001 (2 set bits , 2 is prime)
10->1010 (2 set bits , 2 is prime)

    

    Example 2:
    Input: L = 10, R = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)

    

    Note:
    
        L, R will be integers L <= R in the range [1,
            10^6].
        
        R - L will be at most 10000.
-----------------

# 1855_Maximum_Distance_Between_a_Pair_of_Values
# 1855. Maximum Distance Between a Pair of Values


-----------------

# 1604_Alert_Using_Same_Key-Card_Three_or_More_Times_in_a_One_Hour_Period
# 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period


-----------------

# 219_Contains_Duplicate_II
# 219. Contains Duplicate II

Given an array of integers and an integer k, find out whether there are two distinct
        indices i and j in the array such that nums[i] = nums[j] and the absolute
        difference between i and j is at most k.
-----------------

# 1306_Jump_Game_III
# 1306. Jump Game III


-----------------

# 599_Minimum_Index_Sum_of_Two_Lists
# 599. Minimum Index Sum of Two Lists

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of
        favorite restaurants represented by strings.
    
    
        You need to help them find out their common interest with the least list index
        sum. If there is a choice tie between answers, output all of them with no order
        requirement. You could assume there always exists an answer.
    

    Example 1:
    Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

    

    Example 2:
    Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

    

    Note:
    
        The length of both lists will be in the range of [1, 1000].
        The length of strings in both lists will be in the range of [1, 30].
        The index is starting from 0 to the list length minus 1.
        No duplicates in both lists.
-----------------

# 1237_Find_Positive_Integer_Solution_for_a_Given_Equation
# 1237. Find Positive Integer Solution for a Given Equation

Given a function  f(x, y) and a value z, return all
        positive integer pairs x and y where f(x,y) == z.
    

    The function is constantly increasing, i.e.:

    
        f(x, y) < f(x + 1, y)
        f(x, y) < f(x, y + 1)
    

    The function interface is defined like this: 

    interface CustomFunction {
public:
  // Returns positive integer f(x, y) for any given positive integer x and y.
  int f(int x, int y);
};

    For custom testing purposes you're given an integer function_id and a target
        z as input, where function_id represent one function from an
        secret internal list, on the examples you'll know only two functions from the list.
         

    You may return the solutions in any order.

     
    Example 1:

    Input: function_id = 1, z = 5
Output: [[1,4],[2,3],[3,2],[4,1]]
Explanation: function_id = 1 means that f(x, y) = x + y

    Example 2:

    Input: function_id = 2, z = 5
Output: [[1,5],[5,1]]
Explanation: function_id = 2 means that f(x, y) = x * y

     
    Constraints:

    
        1 <= function_id <= 9
        1 <= z <= 100
        It's guaranteed that the solutions of f(x, y) == z will be on the range
            1 <= x, y <= 1000
        It's also guaranteed that f(x, y) will fit in 32 bit signed integer if
            1 <= x, y <= 1000
-----------------

# 567_Permutation_in_String
# 567. Permutation in String

Given two strings s1 and s2, write a function to return true if s2
        contains the permutation of s1. In other words, one of the first string's
        permutations is the substring of the second string.

     

    Example 1:

    Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

    Example 2:

    Input:s1= "ab" s2 = "eidboaoo"
Output: False

     

    Note:

    
        The input strings only contain lower case letters.
        The length of both given strings is in range [1, 10,000].
-----------------

# 1157_Online_Majority_Element_In_Subarray
# 1157. Online Majority Element In Subarray

Implementing the class MajorityChecker, which has the following API:

    
        MajorityChecker(int[] arr) constructs an instance of MajorityChecker with
            the given array arr;
        
        int query(int left, int right, int threshold) has arguments such
            that:
            
                0 <= left <= right < arr.length representing a
                    subarray of arr;
                
                2 * threshold > right - left + 1, ie. the threshold is always a
                    strict majority of the length of the subarray
                
            
        
    

    Each query(...) returns the element in arr[left], arr[left+1], ...,
        arr[right] that occurs at least threshold times, or -1 if
        no such element exists.

     

    Example:

    MajorityChecker majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
majorityChecker.query(0,5,4); // returns 1
majorityChecker.query(0,3,3); // returns -1
majorityChecker.query(2,3,2); // returns 2

     
    Constraints:

    
        1 <= arr.length <= 20000
        1 <= arr[i] <= 20000
        For each query, 0 <= left <= right < len(arr)
        For each query, 2 * threshold > right - left + 1
        The number of queries is at most 10000
-----------------

# 1726_Tuple_with_Same_Product
# 1726. Tuple with Same Product


-----------------

# 1556_Thousand_Separator
# 1556. Thousand Separator


-----------------

# 232_Implement_Queue_using_Stacks
# 232. Implement Queue using Stacks

Implement the following operations of a queue using stacks.

    
        push(x) -- Push element x to the back of queue.
        pop() -- Removes the element from in front of queue.
        peek() -- Get the front element.
        empty() -- Return whether the queue is empty.
    

    Example:

    MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false

    Notes:

    
        You must use only standard operations of a stack -- which means only push
            to top, peek/pop from top, size, and is
            empty operations are valid.
        
        Depending on your language, stack may not be supported natively. You may simulate a
            stack by using a list or deque (double-ended queue), as long as you use only standard
            operations of a stack.
        
        You may assume that all operations are valid (for example, no pop or peek operations
            will be called on an empty queue).
-----------------

# 1287_Element_Appearing_More_Than_25%_In_Sorted_Array
# 1287. Element Appearing More Than 25% In Sorted Array


-----------------

# 1507_Reformat_Date
# 1507. Reformat Date


-----------------

# 579_Find_Cumulative_Salary_of_an_Employee
# 579. Find Cumulative Salary of an Employee

The Employee table holds the salary information in a year.

    Write a SQL to get the cumulative sum of an employee's salary over a period of 3 months
        but exclude the most recent month.

    The result should be displayed by 'Id' ascending, and then by 'Month'
        descending.

    Example
        Input

    | Id | Month | Salary |
|----|-------|--------|
| 1  | 1     | 20     |
| 2  | 1     | 20     |
| 1  | 2     | 30     |
| 2  | 2     | 30     |
| 3  | 2     | 40     |
| 1  | 3     | 40     |
| 3  | 3     | 60     |
| 1  | 4     | 60     |
| 3  | 4     | 70     |

    Output

    
| Id | Month | Salary |
|----|-------|--------|
| 1  | 3     | 90     |
| 1  | 2     | 50     |
| 1  | 1     | 20     |
| 2  | 1     | 20     |
| 3  | 3     | 100    |
| 3  | 2     | 40     |

     
    Explanation

    Employee '1' has 3 salary records for the following 3 months except the most recent
        month '4': salary 40 for month '3', 30 for month '2' and 20 for
        month '1'
        So the cumulative sum of salary of this employee over 3 months is 90(40+30+20), 50(30+20)
        and 20 respectively.

    | Id | Month | Salary |
|----|-------|--------|
| 1  | 3     | 90     |
| 1  | 2     | 50     |
| 1  | 1     | 20     |

    Employee '2' only has one salary record (month '1') except its most recent month
    '2'.

    | Id | Month | Salary |
|----|-------|--------|
| 2  | 1     | 20     |

     
    Employ '3' has two salary records except its most recent pay month '4': month
    '3' with 60 and month '2' with 40. So the cumulative salary is as following.

    | Id | Month | Salary |
|----|-------|--------|
| 3  | 3     | 100    |
| 3  | 2     | 40     |
-----------------

# 453_Minimum_Moves_to_Equal_Array_Elements
# 453. Minimum Moves to Equal Array Elements

Given a non-empty integer array of size n, find the minimum number of moves
        required to make all array elements equal, where a move is incrementing n - 1
        elements by 1.

    Example:
    Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
-----------------

# 1671_Minimum_Number_of_Removals_to_Make_Mountain_Array
# 1671. Minimum Number of Removals to Make Mountain Array


-----------------

# 772_Basic_Calculator_III
# 772. Basic Calculator III

Implement a basic calculator to evaluate a simple expression string.

    The expression string may contain open ( and closing parentheses ),
        the plus + or minus sign -, non-negative integers
        and empty spaces  .

    The expression string contains only non-negative integers, +, -,
        *, / operators , open ( and closing parentheses
        ) and empty spaces  . The integer division should truncate toward
        zero.

    You may assume that the given expression is always valid. All intermediate results will be in
        the range of [-2147483648, 2147483647].

    Some examples:

    "1 + 1" = 2
" 6-4 / 2 " = 4
"2*(5+5*2)/3+(6/2+8)" = 21
"(2+6* 3+5- (3*14/7+2)*5)+3"=-12

     

    Note: Do not use the eval built-in library
        function.
-----------------

# 141_Linked_List_Cycle
# 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

    To represent a cycle in the given linked list, we use an integer pos which
        represents the position (0-indexed) in the linked list where tail connects to. If
        pos is -1, then there is no cycle in the linked list.
-----------------

# 131_Palindrome_Partitioning
# 131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is
        a palindrome.

    Return all possible palindrome partitioning of s.

    Example:

    Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
-----------------

# 1251_Average_Selling_Price
# 1251. Average Selling Price

Table: Prices

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| start_date    | date    |
| end_date      | date    |
| price         | int     |
+---------------+---------+
(product_id, start_date, end_date) is the primary key for this table.
Each row of this table indicates the price of the product_id in the period from start_date to end_date.
For each product_id there will be no two overlapping periods. That means there will be no two intersecting periods for the same product_id.

     

    Table: UnitsSold

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| product_id    | int     |
| purchase_date | date    |
| units         | int     |
+---------------+---------+
There is no primary key for this table, it may contain duplicates.
Each row of this table indicates the date, units and product_id of each product sold.

     

    Write an SQL query to find the average selling price for each product.

    average_price should be rounded to 2 decimal places.
    

    The query result format is in the following example:

    Prices table:
+------------+------------+------------+--------+
| product_id | start_date | end_date   | price  |
+------------+------------+------------+--------+
| 1          | 2019-02-17 | 2019-02-28 | 5      |
| 1          | 2019-03-01 | 2019-03-22 | 20     |
| 2          | 2019-02-01 | 2019-02-20 | 15     |
| 2          | 2019-02-21 | 2019-03-31 | 30     |
+------------+------------+------------+--------+

UnitsSold table:
+------------+---------------+-------+
| product_id | purchase_date | units |
+------------+---------------+-------+
| 1          | 2019-02-25    | 100   |
| 1          | 2019-03-01    | 15    |
| 2          | 2019-02-10    | 200   |
| 2          | 2019-03-22    | 30    |
+------------+---------------+-------+

Result table:
+------------+---------------+
| product_id | average_price |
+------------+---------------+
| 1          | 6.96          |
| 2          | 16.96         |
+------------+---------------+
Average selling price = Total Price of Product / Number of products sold.
Average selling price for product 1 = ((100 * 5) + (15 * 20)) / 115 = 6.96
Average selling price for product 2 = ((200 * 15) + (30 * 30)) / 230 = 16.96
-----------------

# 677_Map_Sum_Pairs
# 677. Map Sum Pairs

Implement a MapSum class with insert, and sum methods.
    

    
        For the method insert, you'll be given a pair of (string, integer). The string
        represents the key and the integer represents the value. If the key already existed, then
        the original key-value pair will be overridden to the new one.
    

    
        For the method sum, you'll be given a string representing the prefix, and you
        need to return the sum of all the pairs' value whose key starts with the prefix.
    

    Example 1:
    Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5
-----------------

# 992_Subarrays_with_K_Different_Integers
# 992. Subarrays with K Different Integers

Given an array A of positive integers, call a (contiguous, not necessarily
        distinct) subarray of A good if the number of different integers in
        that subarray is exactly K.

    (For example, [1,2,3,1,2] has 3 different integers: 1,
        2, and 3.)

    Return the number of good subarrays of A.

     

    Example 1:

    Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].

    Example 2:

    Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

     

    Note:

    
        1 <= A.length <= 20000
        1 <= A[i] <= A.length
        1 <= K <= A.length
-----------------

# 702_Search_in_a_Sorted_Array_of_Unknown_Size
# 702. Search in a Sorted Array of Unknown Size

Given an integer array sorted in ascending order, write a function to search target
        in nums.  If target exists, then return its index, otherwise
        return -1. However, the array size is unknown to you. You may
        only access the array using an ArrayReader interface, where ArrayReader.get(k)
        returns the element of the array at index k (0-indexed).

    You may assume all integers in the array are less than 10000, and if you
        access the array out of bounds, ArrayReader.get will return
        2147483647.

     

    Example 1:

    Input: array = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

    Example 2:

    Input: array = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

     

    Note:

    
        You may assume that all elements in the array are unique.
        The value of each element in the array will be in the range [-9999,
            9999].
-----------------

# 40_Combination_Sum_II
# 40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target),
        find all unique combinations in candidates where the candidate numbers
        sums to target.

    Each number in candidates may only be used once in the
        combination.

    Note:

    
        All numbers (including target) will be positive integers.
        The solution set must not contain duplicate combinations.
    

    Example 1:

    Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

    Example 2:

    Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
-----------------

# 156_Binary_Tree_Upside_Down
# 156. Binary Tree Upside Down

Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left
        node that shares the same parent node) or empty, flip it upside down and turn it into a tree
        where the original right nodes turned into left leaf nodes. Return the new root.

    Example:

    Input: [1,2,3,4,5]

    1
   / \
  2   3
 / \
4   5

Output: return the root of the binary tree [4,5,2,#,#,3,1]

   4
  / \
 5   2
    / \
   3   1

    Clarification:

    Confused what [4,5,2,#,#,3,1] means? Read
        more below on how binary tree is serialized on OJ.

    The serialization of a binary tree follows a level order traversal, where '#'
        signifies a path terminator where no node exists below.

    Here's an example:

       1
  / \
 2   3
    /
   4
    \
     5

    The above binary tree is serialized as [1,2,3,#,#,4,#,#,5].
-----------------

# 1425_Constrained_Subset_Sum
# 1425. Constrained Subset Sum


-----------------

# 841_Keys_and_Rooms
# 841. Keys and Rooms

There are N rooms and you start in room 0.  Each room has a
        distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to
        access the next room. 

    Formally, each room i has a list of keys rooms[i], and each
        key rooms[i][j] is an integer in [0, 1, ..., N-1] where N =
            rooms.length.  A key rooms[i][j] = v opens the room with
        number v.

    Initially, all the rooms start locked (except for room 0). 

    You can walk back and forth between rooms freely.

    Return true if and only if you can enter every room.

    
    

    Example 1:

    Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.

    Example 2:

    Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.

    Note:

    
        1 <= rooms.length <= 1000
        0 <= rooms[i].length <= 1000
        The number of keys in all rooms combined is at most 3000.
-----------------

# 1791_Find_Center_of_Star_Graph
# 1791. Find Center of Star Graph


-----------------

# 314_Binary_Tree_Vertical_Order_Traversal
# 314. Binary Tree Vertical Order Traversal

Given a binary tree, return the vertical order traversal of its nodes' values.
        (ie, from top to bottom, column by column).

    If two nodes are in the same row and column, the order should be from left to right.
    

    Examples 1:

    Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]

    Examples 2:

    Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]

    Examples 3:

    Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
-----------------

# 1220_Count_Vowels_Permutation
# 1220. Count Vowels Permutation

Given an integer n, your task is to count how many strings of length
        n can be formed under the following rules:

    
        Each character is a lower case vowel ('a',
            'e', 'i', 'o', 'u')
        
        Each vowel 'a' may only be followed by an
            'e'.
        
        Each vowel 'e' may only be followed by an
            'a' or an 'i'.
        
        Each vowel 'i' may not be followed by another
            'i'.
        
        Each vowel 'o' may only be followed by an
            'i' or a 'u'.
        
        Each vowel 'u' may only be followed by an
            'a'.
    

    Since the answer may be too large, return it modulo 10^9 + 7.

     
    Example 1:

    Input: n = 1
Output: 5
Explanation: All possible strings are: "a", "e", "i" , "o" and "u".

    Example 2:

    Input: n = 2
Output: 10
Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".

    Example 3: 

    Input: n = 5
Output: 68

     
    Constraints:

    
        1 <= n <= 2 * 10^4
-----------------

# 1613_Find_the_Missing_IDs
# 1613. Find the Missing IDs


-----------------

# 154_Find_Minimum_in_Rotated_Sorted_Array_II
# 154. Find Minimum in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you
        beforehand.

    (i.e.,  [0,1,2,4,5,6,7] might become
         [4,5,6,7,0,1,2]).

    Find the minimum element.

    The array may contain duplicates.

    Example 1:

    Input: [1,3,5]
Output: 1

    Example 2:

    Input: [2,2,2,0,1]
Output: 0

    Note:

    
        This is a follow up problem to Find
            Minimum in Rotated Sorted Array.
        
        Would allow duplicates affect the run-time complexity? How and why?
-----------------

# 1535_Find_the_Winner_of_an_Array_Game
# 1535. Find the Winner of an Array Game


-----------------

# 1336_Number_of_Transactions_per_Visit
# 1336. Number of Transactions per Visit


-----------------

# 146_LRU_Cache
# 146. LRU Cache

Design and implement a data structure for Least
        Recently Used (LRU) cache. It should support the following operations: get
        and put.

    get(key) - Get the value (will always be positive) of the key if the key exists
        in the cache, otherwise return -1.
        put(key, value) - Set or insert the value if the key is not already present.
        When the cache reached its capacity, it should invalidate the least recently used item
        before inserting a new item.

    The cache is initialized with a positive capacity.

    Follow up:
        Could you do both operations in O(1) time complexity?

    Example:

    LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
-----------------

# 1722_Minimize_Hamming_Distance_After_Swap_Operations
# 1722. Minimize Hamming Distance After Swap Operations


-----------------

# 1685_Sum_of_Absolute_Differences_in_a_Sorted_Array
# 1685. Sum of Absolute Differences in a Sorted Array


-----------------

# 176_Second_Highest_Salary
# 176. Second Highest Salary

Write a SQL query to get the second highest salary from the Employee table.

    +----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+

    For example, given the above Employee table, the query should return 200 as the
        second highest salary. If there is no second highest salary, then the query should return
        null.

    +---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
-----------------

# 929_Unique_Email_Addresses
# 929. Unique Email Addresses

Every email consists of a local name and a domain name, separated by the @ sign.

    For example, in alice@leetcode.com, alice is the local name,
        and leetcode.com is the domain name.

    Besides lowercase letters, these emails may contain '.'s or '+'s.
    

    If you add periods ('.') between some characters in the local
        name part of an email address, mail sent there will be forwarded to the same
        address without dots in the local name.  For example, "alice.z@leetcode.com"
        and "alicez@leetcode.com" forward to the same email address. 
        (Note that this rule does not apply for domain names.)

    If you add a plus ('+') in the local name, everything
        after the first plus sign will be ignored. This allows certain emails
        to be filtered, for example m.y+name@email.com will be forwarded to my@email.com. 
        (Again, this rule does not apply for domain names.)

    It is possible to use both of these rules at the same time.

    Given a list of emails, we send one email to each address in the list.  How
        many different addresses actually receive mails?
-----------------

# 129_Sum_Root_to_Leaf_Numbers
# 129. Sum Root to Leaf Numbers

Given a binary tree containing digits from 0-9 only, each root-to-leaf path
        could represent a number.

    An example is the root-to-leaf path 1->2->3 which represents the number
        123.

    Find the total sum of all root-to-leaf numbers.

    Note: A leaf is a node with no children.

    Example:

    Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

    Example 2:

    Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
-----------------

# 1558_Minimum_Numbers_of_Function_Calls_to_Make_Target_Array
# 1558. Minimum Numbers of Function Calls to Make Target Array


-----------------

# 639_Decode_Ways_II
# 639. Decode Ways II

A message containing letters from A-Z is being encoded to numbers using the
        following mapping way:
    

    'A' -> 1
'B' -> 2
...
'Z' -> 26

    
        Beyond that, now the encoded string can also contain the character '*', which can be treated
        as one of the numbers from 1 to 9.
    

    
        Given the encoded message containing digits and the character '*', return the total number
        of ways to decode it.
    

    
        Also, since the answer may be very large, you should return the output mod 109 +
        7.
    

    Example 1:
    Input: "*"
Output: 9
Explanation: The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".

    

    Example 2:
    Input: "1*"
Output: 9 + 9 = 18

    

    Note:
    
        The length of the input string will fit in range [1, 105].
        The input string will only contain the character '*' and digits '0' - '9'.
-----------------

# 1773_Count_Items_Matching_a_Rule
# 1773. Count Items Matching a Rule


-----------------

# 433_Minimum_Genetic_Mutation
# 433. Minimum Genetic Mutation

A gene string can be represented by an 8-character long string, with choices from "A",
        "C", "G", "T".

    Suppose we need to investigate about a mutation (mutation from "start" to "end"),
        where ONE mutation is defined as ONE single character changed in the gene string.

    For example, "AACCGGTT" -> "AACCGGTA" is 1
        mutation.

    Also, there is a given gene "bank", which records all the valid gene mutations. A
        gene must be in the bank to make it a valid gene string.

    Now, given 3 things - start, end, bank, your task is to determine what is the minimum number
        of mutations needed to mutate from "start" to "end". If there is no such
        a mutation, return -1.

    Note:

    
        Starting point is assumed to be valid, so it might not be included in the bank.
        If multiple mutations are needed, all mutations during in the sequence must be valid.
        
        You may assume start and end string is not the same.
    

     

    Example 1:

    start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]

return: 1

     

    Example 2:

    start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

return: 2

     

    Example 3:

    start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

return: 3
-----------------

# 581_Shortest_Unsorted_Continuous_Subarray
# 581. Shortest Unsorted Continuous Subarray

Given an integer array, you need to find one continuous subarray that if you only sort
        this subarray in ascending order, then the whole array will be sorted in ascending order,
        too. 

    You need to find the shortest such subarray and output its length.

    Example 1:
    Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

    

    Note:
    
        Then length of the input array is in range [1, 10,000].
        The input array may contain duplicates, so ascending order here means <=.
-----------------

# 34_Find_First_and_Last_Position_of_Element_in_Sorted_Array
# 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and
        ending position of a given target value.

    Your algorithm's runtime complexity must be in the order of O(log n).
    

    If the target is not found in the array, return [-1, -1].

    Example 1:

    Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

    Example 2:

    Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
-----------------

# 794_Valid_Tic-Tac-Toe_State
# 794. Valid Tic-Tac-Toe State

A Tic-Tac-Toe board is given as a string array board. Return True if and only if
        it is possible to reach this board position during the course of a valid tic-tac-toe game.
    

    The board is a 3 x 3 array, and consists of characters "
        ", "X", and "O".  The "
        " character represents an empty square.

    Here are the rules of Tic-Tac-Toe:

    
        Players take turns placing characters into empty squares (" ").
        The first player always places "X" characters, while the second player always
            places "O" characters.
        
        "X" and "O" characters are always placed into empty squares, never
            filled ones.
        
        The game ends when there are 3 of the same (non-empty) character filling any row,
            column, or diagonal.
        
        The game also ends if all squares are non-empty.
        No more moves can be played if the game is over.
    

    Example 1:
Input: board = ["O  ", "   ", "   "]
Output: false
Explanation: The first player always plays "X".

Example 2:
Input: board = ["XOX", " X ", "   "]
Output: false
Explanation: Players take turns making moves.

Example 3:
Input: board = ["XXX", "   ", "OOO"]
Output: false

Example 4:
Input: board = ["XOX", "O O", "XOX"]
Output: true

    Note:

    
        board is a length-3 array of strings, where each string
            board[i] has length 3.
        
        Each board[i][j] is a character in the set {" ", "X",
            "O"}.
-----------------

# 60_Permutation_Sequence
# 60. Permutation Sequence

The set [1,2,3,...,n] contains a total of n! unique
        permutations.

    By listing and labeling all of the permutations in order, we get the following sequence for
        n = 3:

    
        "123"
        "132"
        "213"
        "231"
        "312"
        "321"
    

    Given n and k, return the kth permutation sequence.

    Note:

    
        Given n will be between 1 and 9 inclusive.
        Given k will be between 1 and n! inclusive.
    

    Example 1:

    Input: n = 3, k = 3
Output: "213"

    Example 2:

    Input: n = 4, k = 9
Output: "2314"
-----------------

# 1050_Actors_and_Directors_Who_Cooperated_At_Least_Three_Times
# 1050. Actors and Directors Who Cooperated At Least Three Times

Table: ActorDirector

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| actor_id    | int     |
| director_id | int     |
| timestamp   | int     |
+-------------+---------+
timestamp is the primary key column for this table.

     

    Write a SQL query for a report that provides the pairs (actor_id, director_id)
        where the actor have cooperated with the director at least 3 times.

    Example:

    ActorDirector table:
+-------------+-------------+-------------+
| actor_id    | director_id | timestamp   |
+-------------+-------------+-------------+
| 1           | 1           | 0           |
| 1           | 1           | 1           |
| 1           | 1           | 2           |
| 1           | 2           | 3           |
| 1           | 2           | 4           |
| 2           | 1           | 5           |
| 2           | 1           | 6           |
+-------------+-------------+-------------+

Result table:
+-------------+-------------+
| actor_id    | director_id |
+-------------+-------------+
| 1           | 1           |
+-------------+-------------+
The only pair is (1, 1) where they cooperated exactly 3 times.
-----------------

# 410_Split_Array_Largest_Sum
# 410. Split Array Largest Sum

Given an array which consists of non-negative integers and an integer m, you can split
        the array into m non-empty continuous subarrays. Write an algorithm to minimize the
        largest sum among these m subarrays.
    

    Note:
        If n is the length of array, assume the following constraints are satisfied:
    
        1 ≤ n ≤ 1000
        1 ≤ m ≤ min(50, n)
    
    

    Examples: 
    Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
-----------------

# 383_Ransom_Note
# 383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the
        magazines, write a function that will return true if the ransom
        note can be constructed from the magazines ; otherwise, it will return false.
    
    
        Each letter in the magazine string can only be used once in your ransom note.
    

    Note:
        You may assume that both strings contain only lowercase letters.
    

    canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
-----------------

# 267_Palindrome_Permutation_II
# 267. Palindrome Permutation II

Given a string s, return all the palindromic permutations (without duplicates)
        of it. Return an empty list if no palindromic permutation could be form.

    Example 1:

    Input: "aabb"
Output: ["abba", "baab"]

    Example 2:

    Input: "abc"
Output: []
-----------------

# 270_Closest_Binary_Search_Tree_Value
# 270. Closest Binary Search Tree Value

Given a non-empty binary search tree and a target value, find the value in the BST that is
        closest to the target.

    Note:

    
        Given target value is a floating point.
        You are guaranteed to have only one unique value in the BST that is closest to the
            target.
        
    

    Example:

    Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
-----------------

# 700_Search_in_a_Binary_Search_Tree
# 700. Search in a Binary Search Tree

Given the root node of a binary search tree (BST) and a value. You need to find the node in
        the BST that the node's value equals the given value. Return the subtree rooted with
        that node. If such node doesn't exist, you should return NULL.

    For example, 

    Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2

    You should return this subtree:

          2
     / \
    1   3

    In the example above, if we want to search the value 5, since there is no node
        with value 5, we should return NULL.

    Note that an empty tree is represented by NULL, therefore you would see the
        expected output (serialized tree format) as [], not null.
-----------------

# 959_Regions_Cut_By_Slashes
# 959. Regions Cut By Slashes

In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a
        /, \, or blank space.  These characters divide the square
        into contiguous regions.

    (Note that backslash characters are escaped, so a \ is represented as
        "\\".)

    Return the number of regions.
-----------------

# 796_Rotate_String
# 796. Rotate String

We are given two strings, A and B.

    A shift on A consists of taking string A and moving the
        leftmost character to the rightmost position. For example, if A =
            'abcde', then it will be 'bcdea' after one shift on
        A. Return True if and only if A can become
        B after some number of shifts on A.

    Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false

    Note:

    
        A and B will have length at most 100.
-----------------

# 1246_Palindrome_Removal
# 1246. Palindrome Removal

Given an integer array arr, in one move you can select a palindromic subarray
        arr[i], arr[i+1], ..., arr[j] where i <= j, and remove
        that subarray from the given array. Note that after removing a subarray, the elements on the
        left and on the right of that subarray move to fill the gap left by the removal.

    Return the minimum number of moves needed to remove all numbers from the array.

     
    Example 1:

    Input: arr = [1,2]
Output: 2

    Example 2:

    Input: arr = [1,3,4,1,5]
Output: 3
Explanation: Remove [4] then remove [1,3,1] then remove [5].

     
    Constraints:

    
        1 <= arr.length <= 100
        1 <= arr[i] <= 20
-----------------

# 255_Verify_Preorder_Sequence_in_Binary_Search_Tree
# 255. Verify Preorder Sequence in Binary Search Tree

Given an array of numbers, verify whether it is the correct preorder traversal sequence of a
        binary search tree.

    You may assume each number in the sequence is unique.

    Consider the following binary search tree: 

         5
    / \
   2   6
  / \
 1   3

    Example 1:

    Input: [5,2,6,1,3]
Output: false

    Example 2:

    Input: [5,2,1,3,6]
Output: true

    Follow up:
        Could you do it using only constant space complexity?
-----------------

# 1011_Capacity_To_Ship_Packages_Within_D_Days
# 1011. Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within
        D days.

    The i-th package on the conveyor belt has a weight of weights[i]. 
        Each day, we load the ship with packages on the conveyor belt (in the order given by weights).
        We may not load more weight than the maximum weight capacity of the ship.

    Return the least weight capacity of the ship that will result in all the packages on the
        conveyor belt being shipped within D days.

     

    Example 1:

    Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation: 
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.

    Example 2:

    Input: weights = [3,2,2,4,1,4], D = 3
Output: 6
Explanation: 
A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4

    Example 3:

    Input: weights = [1,2,3,1,1], D = 4
Output: 3
Explanation: 
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1

     

    Note:

    
        1 <= D <= weights.length <= 50000
        1 <= weights[i] <= 500
-----------------

# 1000_Minimum_Cost_to_Merge_Stones
# 1000. Minimum Cost to Merge Stones

There are N piles of stones arranged in a row.  The i-th pile
        has stones[i] stones.

    A move consists of merging
        exactly K consecutive piles into one pile, and the
        cost of this move is equal to the total number of stones in these K piles.

    Find the minimum cost to merge all piles of stones into one pile.  If it is impossible,
        return -1.
-----------------

# 1124_Longest_Well-Performing_Interval
# 1124. Longest Well-Performing Interval

We are given hours, a list of the number of hours worked per day for a
        given employee.

    A day is considered to be a tiring day if and only if the number of hours worked is
        (strictly) greater than 8.

    A well-performing interval is an interval of days for which the number of tiring
        days is strictly larger than the number of non-tiring days.

    Return the length of the longest well-performing interval.

     
    Example 1:

    Input: hours = [9,9,6,0,6,6,9]
Output: 3
Explanation: The longest well-performing interval is [9,9,6].

     
    Constraints:

    
        1 <= hours.length <= 10000
        0 <= hours[i] <= 16
-----------------

# 1001_Grid_Illumination
# 1001. Grid Illumination

On a N x N grid of cells, each cell (x, y) with 0 <= x
        < N and 0 <= y < N has a lamp.

    Initially, some number of lamps are on.  lamps[i] tells us the location of
        the i-th lamp that is on.  Each lamp that is on illuminates every square
        on its x-axis, y-axis, and both diagonals (similar to a Queen in chess).

    For the i-th query queries[i] = (x, y), the answer to the query is 1 if the
        cell (x, y) is illuminated, else 0.

    After each query (x, y) [in the order given by queries], we turn
        off any lamps that are at cell (x, y) or are adjacent 8-directionally
        (ie., share a corner or edge with cell (x, y).)

    Return an array of answers.  Each value answer[i] should be equal to
        the answer of the i-th query queries[i].

     

    Example 1:

    Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
Output: [1,0]
Explanation: 
Before performing the first query we have both lamps [0,0] and [4,4] on.
The grid representing which cells are lit looks like this, where [0,0] is the top left corner, and [4,4] is the bottom right corner:
1 1 1 1 1
1 1 0 0 1
1 0 1 0 1
1 0 0 1 1
1 1 1 1 1
Then the query at [1, 1] returns 1 because the cell is lit.  After this query, the lamp at [0, 0] turns off, and the grid now looks like this:
1 0 0 0 1
0 1 0 0 1
0 0 1 0 1
0 0 0 1 1
1 1 1 1 1
Before performing the second query we have only the lamp [4,4] on.  Now the query at [1,0] returns 0, because the cell is no longer lit.

     

    Note:

    
        1 <= N <= 10^9
        0 <= lamps.length <= 20000
        0 <= queries.length <= 20000
        lamps[i].length == queries[i].length == 2
-----------------

# 1601_Maximum_Number_of_Achievable_Transfer_Requests
# 1601. Maximum Number of Achievable Transfer Requests


-----------------

# 1356_Sort_Integers_by_The_Number_of_1_Bits
# 1356. Sort Integers by The Number of 1 Bits


-----------------

# 877_Stone_Game
# 877. Stone Game

Alex and Lee play a game with piles of stones.  There are an even number of piles
        arranged in a row, and each pile has a positive integer number of stones
        piles[i].

    The objective of the game is to end with the most stones.  The total number of
        stones is odd, so there are no ties.

    Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the
        entire pile of stones from either the beginning or the end of the row.  This continues
        until there are no more piles left, at which point the person with the most stones wins.

    Assuming Alex and Lee play optimally, return True if and only if Alex wins
        the game.

     

    Example 1:

    Input: [5,3,4,5]
Output: true
Explanation: 
Alex starts first, and can only take the first 5 or the last 5.
Say he takes the first 5, so that the row becomes [3, 4, 5].
If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alex, so we return true.

     

    Note:

    
        2 <= piles.length <= 500
        piles.length is even.
        1 <= piles[i] <= 500
        sum(piles) is odd.
-----------------

# 983_Minimum_Cost_For_Tickets
# 983. Minimum Cost For Tickets

In a country popular for train travel, you have planned some train travelling one year
        in advance.  The days of the year that you will travel is given as an array
        days.  Each day is an integer from 1 to 365.

    Train tickets are sold in 3 different ways:

    
        a 1-day pass is sold for costs[0] dollars;
        a 7-day pass is sold for costs[1] dollars;
        a 30-day pass is sold for costs[2] dollars.
    

    The passes allow that many days of consecutive travel.  For example, if we get a 7-day
        pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

    Return the minimum number of dollars you need to travel every day in the given list of days.
    

     

    Example 1:

    Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation: 
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.
-----------------

# 926_Flip_String_to_Monotone_Increasing
# 926. Flip String to Monotone Increasing

A string of '0's and '1's is monotone
        increasing if it consists of some number of '0's (possibly 0),
        followed by some number of '1's (also possibly 0.)

    We are given a string S of '0's and
        '1's, and we may flip any '0' to a '1'
        or a '1' to a '0'.

    Return the minimum number of flips to make S monotone increasing.
-----------------

# 975_Odd_Even_Jump
# 975. Odd Even Jump

You are given an integer array A.  From some starting index, you can
        make a series of jumps.  The (1st, 3rd, 5th, ...) jumps in the series are called
        odd numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called
        even numbered jumps.

    You may from index i jump forward to index j (with i < j) in the following
        way:

    
        During odd numbered jumps (ie. jumps 1, 3, 5, ...), you jump to the index j such that A[i] <= A[j] and
            A[j] is the smallest possible value.  If there are multiple such
            indexes j, you can only jump to the smallest
            such index j.
        
        During even numbered jumps (ie. jumps 2, 4, 6, ...), you jump to the index j such that A[i] >= A[j] and
            A[j] is the largest possible value.  If there are multiple such
            indexes j, you can only jump to the smallest
            such index j.
        
        (It may be the case that for some index i,
            there are no legal jumps.)
        
    

    A starting index is good if, starting from that index, you can reach the end of the
        array (index A.length - 1) by jumping some number of times (possibly 0 or more
        than once.)

    Return the number of good starting indexes.

     

    Example 1:

    Input: [10,13,12,14,15]
Output: 2
Explanation: 
From starting index i = 0, we can jump to i = 2 (since A[2] is the smallest among A[1], A[2], A[3], A[4] that is greater or equal to A[0]), then we can't jump any more.
From starting index i = 1 and i = 2, we can jump to i = 3, then we can't jump any more.
From starting index i = 3, we can jump to i = 4, so we've reached the end.
From starting index i = 4, we've reached the end already.
In total, there are 2 different starting indexes (i = 3, i = 4) where we can reach the end with some number of jumps.
-----------------

# 184_Department_Highest_Salary
# 184. Department Highest Salary

The Employee table holds all employees. Every employee has an Id, a salary, and
        there is also a column for the department Id.

    +----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Jim   | 90000  | 1            |
| 3  | Henry | 80000  | 2            |
| 4  | Sam   | 60000  | 2            |
| 5  | Max   | 90000  | 1            |
+----+-------+--------+--------------+

    The Department table holds all departments of the company.

    +----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+

    Write a SQL query to find employees who have the highest salary in each of the departments. For
        the above tables, your SQL query should return the following rows (order of rows does not
        matter).

    +------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Jim      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+

    Explanation:

    Max and Jim both have the highest salary in the IT department and Henry has the highest
        salary in the Sales department.
-----------------

# 1432_Max_Difference_You_Can_Get_From_Changing_an_Integer
# 1432. Max Difference You Can Get From Changing an Integer


-----------------

# 836_Rectangle_Overlap
# 836. Rectangle Overlap

A rectangle is represented as a list [x1, y1, x2, y2],
        where (x1, y1) are the coordinates of its bottom-left corner, and
        (x2, y2) are the coordinates of its top-right corner.

    Two rectangles overlap if the area of their intersection is positive.  To be clear, two
        rectangles that only touch at the corner or edges do not overlap.

    Given two (axis-aligned) rectangles, return whether they overlap.

    Example 1:

    Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true

    Example 2:

    Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false

    Notes:

    
        Both rectangles rec1 and rec2 are lists of 4 integers.
        All coordinates in rectangles will be between -10^9 and
            10^9.
-----------------

# 429_N-ary_Tree_Level_Order_Traversal
# 429. N-ary Tree Level Order Traversal

Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from
        left to right, level by level).

    For example, given a 3-ary tree:

     

    
        

     

    We should return its level order traversal:

    [
     [1],
     [3,2,4],
     [5,6]
]

     

    Note:

    
        The depth of the tree is at most 1000.
        The total number of nodes is at most 5000.
-----------------

# 1797_Design_Authentication_Manager
# 1797. Design Authentication Manager


-----------------

# 1112_Highest_Grade_For_Each_Student
# 1112. Highest Grade For Each Student

Table: Enrollments

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| student_id    | int     |
| course_id     | int     |
| grade         | int     |
+---------------+---------+
(student_id, course_id) is the primary key of this table.

    Write a SQL query to find the highest grade with its corresponding course for each student.
        In case of a tie, you should find the course with the smallest course_id.
        The output must be sorted by increasing student_id.

    The query result format is in the following example:

    Enrollments table:
+------------+-------------------+
| student_id | course_id | grade |
+------------+-----------+-------+
| 2          | 2         | 95    |
| 2          | 3         | 95    |
| 1          | 1         | 90    |
| 1          | 2         | 99    |
| 3          | 1         | 80    |
| 3          | 2         | 75    |
| 3          | 3         | 82    |
+------------+-----------+-------+

Result table:
+------------+-------------------+
| student_id | course_id | grade |
+------------+-----------+-------+
| 1          | 2         | 99    |
| 2          | 2         | 95    |
| 3          | 3         | 82    |
+------------+-----------+-------+
-----------------

# 461_Hamming_Distance
# 461. Hamming Distance

The Hamming
        distance between two integers is the number of positions at which the corresponding bits
        are different.

    Given two integers x and y, calculate the Hamming distance.

    Note:
        0 ≤ x, y < 231.
    

    Example:
    Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
-----------------

# 155_Min_Stack
# 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant
        time.

    
        push(x) -- Push element x onto stack.
        pop() -- Removes the element on top of the stack.
        top() -- Get the top element.
        getMin() -- Retrieve the minimum element in the stack.
    

     

    Example:

    MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
-----------------

# 634_Find_the_Derangement_of_An_Array
# 634. Find the Derangement of An Array

In combinatorial mathematics, a derangement is a permutation of the elements of a set, such
        that no element appears in its original position.
    

    
        There's originally an array consisting of n integers from 1 to n
        in ascending order, you need to find the number of derangement it can generate.
    

    
        Also, since the answer may be very large, you should return the output mod 109 +
        7.
    

    Example 1:
    Input: 3
Output: 2
Explanation: The original array is [1,2,3]. The two derangements are [2,3,1] and [3,1,2].

    

    Note:
        n is in the range of [1, 106].
-----------------

# 1526_Minimum_Number_of_Increments_on_Subarrays_to_Form_a_Target_Array
# 1526. Minimum Number of Increments on Subarrays to Form a Target Array


-----------------

# 139_Word_Break
# 139. Word Break

Given a non-empty string s and a dictionary wordDict
        containing a list of non-empty words, determine if s can be
        segmented into a space-separated sequence of one or more dictionary words.

    Note:

    
        The same word in the dictionary may be reused multiple times in the segmentation.
        You may assume the dictionary does not contain duplicate words.
    

    Example 1:

    Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

    Example 2:

    Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

    Example 3:

    Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
-----------------

# 1279_Traffic_Light_Controlled_Intersection
# 1279. Traffic Light Controlled Intersection


-----------------

# 855_Exam_Room
# 855. Exam Room

In an exam room, there are N seats in a single row, numbered 0, 1, 2, ...,
        N-1.

    When a student enters the room, they must sit in the seat that maximizes the distance to the
        closest person.  If there are multiple such seats, they sit in the seat with the lowest
        number.  (Also, if no one is in the room, then the student sits at seat number 0.)

    Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning
        an int representing what seat the student sat in, and ExamRoom.leave(int
            p) representing that the student in seat number p now
        leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p)
        have a student sitting in seat p.

     

    Example 1:

    Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
Output: [null,0,9,4,2,null,5]
Explanation:
ExamRoom(10) -> null
seat() -> 0, no one is in the room, then the student sits at seat number 0.
seat() -> 9, the student sits at the last seat number 9.
seat() -> 4, the student sits at the last seat number 4.
seat() -> 2, the student sits at the last seat number 2.
leave(4) -> null
seat() -> 5, the student sits at the last seat number 5.

    ​​​​​​​

    Note:

    
        1 <= N <= 10^9
        ExamRoom.seat() and ExamRoom.leave() will be called at most
            10^4 times across all test cases.
        
        Calls to ExamRoom.leave(p) are guaranteed to have a student currently
            sitting in seat number p.
-----------------

# 557_Reverse_Words_in_a_String_III
# 557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence
        while still preserving whitespace and initial word order.

    Example 1:
    Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

    

    Note:
        In the string, each word is separated by single space and there will not be any extra space
        in the string.
-----------------

# 430_Flatten_a_Multilevel_Doubly_Linked_List
# 430. Flatten a Multilevel Doubly Linked List

You are given a doubly linked list which in addition to the next and previous pointers, it
        could have a child pointer, which may or may not point to a separate doubly linked list.
        These child lists may have one or more children of their own, and so on, to produce a
        multilevel data structure, as shown in the example below.

    Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are
        given the head of the first level of the list.

     

    Example:

    Input:
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

Output:
1-2-3-7-8-11-12-9-10-4-5-6-NULL

     

    Explanation for the above example:

    Given the following multilevel doubly linked list:

    

     

    We should return the following flattened doubly linked list:
-----------------

# 1566_Detect_Pattern_of_Length_M_Repeated_K_or_More_Times
# 1566. Detect Pattern of Length M Repeated K or More Times


-----------------

# 216_Combination_Sum_III
# 216. Combination Sum III


-----------------

# 148_Sort_List
# 148. Sort List

Sort a linked list in O(n log n) time using constant space
        complexity.

    Example 1:

    Input: 4->2->1->3
Output: 1->2->3->4

    Example 2:

    Input: -1->5->3->4->0
Output: -1->0->3->4->5
-----------------

# 874_Walking_Robot_Simulation
# 874. Walking Robot Simulation

A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can
        receive one of three possible types of commands:

    
        -2: turn left 90 degrees
        -1: turn right 90 degrees
        1 <= x <= 9: move forward x units
    

    Some of the grid squares are obstacles. 

    The i-th obstacle is at grid point (obstacles[i][0],
        obstacles[i][1])

    If the robot would try to move onto them, the robot stays on the previous grid square instead
        (but still continues following the rest of the route.)

    Return the square of the maximum Euclidean distance that the robot will be
        from the origin.

     

    Example 1:

    Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: robot will go to (3, 4)
-----------------

# 1041_Robot_Bounded_In_Circle
# 1041. Robot Bounded In Circle

On an infinite plane, a robot initially stands at (0, 0) and faces north.  The
        robot can receive one of three instructions:

    
        "G": go straight 1 unit;
        "L": turn 90 degrees to the left;
        "R": turn 90 degress to the right.
    

    The robot performs the instructions given in order, and repeats them forever.
    

    Return true if and only if there exists a circle in the plane such that the
        robot never leaves the circle.

     

    Example 1:

    Input: "GGLLGG"
Output: true
Explanation: 
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

    Example 2:

    Input: "GG"
Output: false
Explanation: 
The robot moves north indefinitely.

    Example 3:

    Input: "GL"
Output: true
Explanation: 
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

     

    Note:

    
        1 <= instructions.length <= 100
        instructions[i] is in {'G', 'L', 'R'}
-----------------

# 651_4_Keys_Keyboard
# 651. 4 Keys Keyboard

Imagine you have a special keyboard with the following keys: 
    Key 1: (A): Print one 'A' on screen.
    Key 2: (Ctrl-A): Select the whole screen.
    Key 3: (Ctrl-C): Copy selection to buffer.
    Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been
        printed. 

    Now, you can only press the keyboard for N times (with the above four keys), find out
        the maximum numbers of 'A' you can print on screen.

    Example 1:
    Input: N = 3
Output: 3
Explanation:
We can at most get 3 A's on screen by pressing following key sequence:
A, A, A

    

    Example 2:
    Input: N = 7
Output: 9
Explanation:
We can at most get 9 A's on screen by pressing following key sequence:
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V

    

    Note:
    
        1 <= N <= 50
        Answers will be in the range of 32-bit signed integer.
-----------------

# 1348_Tweet_Counts_Per_Frequency
# 1348. Tweet Counts Per Frequency


-----------------

# 485_Max_Consecutive_Ones
# 485. Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

    Example 1:
    Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

    

    Note:
    
        The input array will only contain 0 and 1.
        The length of input array is a positive integer and will not exceed 10,000
-----------------

# 1730_Shortest_Path_to_Get_Food
# 1730. Shortest Path to Get Food


-----------------

# 875_Koko_Eating_Bananas
# 875. Koko Eating Bananas

Koko loves to eat bananas.  There are N piles of bananas, the
        i-th pile has piles[i] bananas.  The guards have gone
        and will come back in H hours.

    Koko can decide her bananas-per-hour eating speed of K.  Each hour, she
        chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less
        than K bananas, she eats all of them instead, and won't eat any more
        bananas during this hour.

    Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards
        come back.

    Return the minimum integer K such that she can eat all the bananas within H
        hours.
-----------------

# 629_K_Inverse_Pairs_Array
# 629. K Inverse Pairs Array

Given two integers n and k, find how many different arrays consist
        of numbers from 1 to n such that there are exactly k
        inverse pairs.

    We define an inverse pair as following: For ith and
        jth element in the array, if i < j and
        a[i] > a[j] then it's an inverse pair; Otherwise, it's
        not.

    Since the answer may be very large, the answer should be modulo 109 + 7.

    Example 1:

    Input: n = 3, k = 0
Output: 1
Explanation:
Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pair.

     

    Example 2:

    Input: n = 3, k = 1
Output: 2
Explanation:
The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.

     

    Note:

    
        The integer n is in the range [1, 1000] and k is in the range
            [0, 1000].
-----------------

# 240_Search_a_2D_Matrix_II
# 240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This
        matrix has the following properties:

    
        Integers in each row are sorted in ascending from left to right.
        Integers in each column are sorted in ascending from top to bottom.
    

    Example:

    Consider the following matrix:

    [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

    Given target = 5, return true.

    Given target = 20, return false.
-----------------

# 1312_Minimum_Insertion_Steps_to_Make_a_String_Palindrome
# 1312. Minimum Insertion Steps to Make a String Palindrome


-----------------

# 742_Closest_Leaf_in_a_Binary_Tree
# 742. Closest Leaf in a Binary Tree

Given a binary tree where every node has a unique value, and a target key
        k, find the value of the nearest leaf node to target k in the
        tree.
    
    
        Here, nearest to a leaf means the least number of edges travelled on the binary tree
        to reach any leaf of the tree. Also, a node is called a leaf if it has no children.
    
    
        In the following examples, the input tree is represented in flattened form row by row.
        The actual root tree given will be a TreeNode object.
    
    
        Example 1:
    Input:
root = [1, 3, 2], k = 1
Diagram of binary tree:
          1
         / \
        3   2

Output: 2 (or 3)

Explanation: Either 2 or 3 is the nearest leaf node to the target of 1.

    
    Example 2:
    Input:
root = [1], k = 1
Output: 1

Explanation: The nearest leaf node is the root node itself.

    

    
        Example 3:
    Input:
root = [1,2,3,4,null,null,null,5,null,6], k = 2
Diagram of binary tree:
             1
            / \
           2   3
          /
         4
        /
       5
      /
     6

Output: 3
Explanation: The leaf node with value 3 (and not the leaf node with value 6) is nearest to the node with value 2.

    

    Note:
    
        root represents a binary tree with at least 1 node and at most
            1000 nodes.
        
        Every node has a unique node.val in range [1, 1000].
        There exists some node in the given binary tree for which node.val == k.
-----------------

# 46_Permutations
# 46. Permutations

Given a collection of distinct integers, return all possible permutations.
    

    Example:

    Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
-----------------

# 309_Best_Time_to_Buy_and_Sell_Stock_with_Cooldown
# 309. Best Time to Buy and Sell Stock with Cooldown

Say you have an array for which the ith element is the price of a given
        stock on day i.

    Design an algorithm to find the maximum profit. You may complete as many transactions as you
        like (ie, buy one and sell one share of the stock multiple times) with the following
        restrictions:

    
        You may not engage in multiple transactions at the same time (ie, you must sell the
            stock before you buy again).
        
        After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
    

    Example:

    Input: [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
-----------------

# 374_Guess_Number_Higher_or_Lower
# 374. Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:

    I pick a number from 1 to n. You have to guess which number I picked.
    

    Every time you guess wrong, I'll tell you whether the number is higher or lower.

    You call a pre-defined API guess(int num) which returns 3 possible results
        (-1, 1, or 0):

    -1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!

    Example :
-----------------

# 179_Largest_Number
# 179. Largest Number

Given a list of non negative integers, arrange them such that they form the largest
        number.

    Example 1:

    Input: [10,2]
Output: "210"

    Example 2:

    Input: [3,30,34,5,9]
Output: "9534330"

    Note: The result may be very large, so you need to return a string instead
        of an integer.
-----------------

# 848_Shifting_Letters
# 848. Shifting Letters

We have a string S of lowercase letters, and an integer array
        shifts.

    Call the shift of a letter, the next letter in the alphabet, (wrapping around so
        that 'z' becomes 'a'). 

    For example, shift('a') = 'b', shift('t') = 'u',
        and shift('z') = 'a'.

    Now for each shifts[i] = x, we want to shift the first i+1 letters
        of S, x times.

    Return the final string after all such shifts to S are applied.

    Example 1:

    Input: S = "abc", shifts = [3,5,9]
Output: "rpl"
Explanation: 
We start with "abc".
After shifting the first 1 letters of S by 3, we have "dbc".
After shifting the first 2 letters of S by 5, we have "igc".
After shifting the first 3 letters of S by 9, we have "rpl", the answer.

    Note:

    
        1 <= S.length = shifts.length <= 20000
        0 <= shifts[i] <= 10 ^ 9
-----------------

# 444_Sequence_Reconstruction
# 444. Sequence Reconstruction

Check whether the original sequence org can be uniquely reconstructed from the
        sequences in seqs. The org sequence is a permutation of the
        integers from 1 to n, with 1 ≤ n ≤ 104. Reconstruction means building a
        shortest common supersequence of the sequences in seqs (i.e., a shortest
        sequence so that all sequences in seqs are subsequences of it). Determine
        whether there is only one sequence that can be reconstructed from seqs and it
        is the org sequence.

    Example 1:
    Input:
org: [1,2,3], seqs: [[1,2],[1,3]]

Output:
false

Explanation:
[1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid sequence that can be reconstructed.

    

    Example 2:
    Input:
org: [1,2,3], seqs: [[1,2]]

Output:
false

Explanation:
The reconstructed sequence can only be [1,2].

    

    Example 3:
    Input:
org: [1,2,3], seqs: [[1,2],[1,3],[2,3]]

Output:
true

Explanation:
The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].

    

    Example 4:
    Input:
org: [4,1,5,2,6,3], seqs: [[5,2,6,3],[4,1,5,2]]

Output:
true

    

    
        UPDATE (2017/1/8):
        The seqs parameter had been changed to a list of list of strings (instead of a 2d
        array of strings). Please reload the code definition to get the latest changes.
-----------------

# 513_Find_Bottom_Left_Tree_Value
# 513. Find Bottom Left Tree Value

Given a binary tree, find the leftmost value in the last row of the tree.
    

    Example 1:
    Input:

    2
   / \
  1   3

Output:
1

    

     Example 2: 
    Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7

    

    Note:
        You may assume the tree (i.e., the given root node) is not NULL.
-----------------

# 777_Swap_Adjacent_in_LR_String
# 777. Swap Adjacent in LR String

In a string composed of 'L', 'R', and 'X'
        characters, like "RXXLRXRXL", a move consists of either replacing one
        occurrence of "XL" with "LX", or replacing one
        occurrence of "RX" with "XR". Given the
        starting string start and the ending string end, return
        True if and only if there exists a sequence of moves to transform one string to
        the other.

    Example:

    Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
Output: True
Explanation:
We can transform start to end following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX

    Note:

    
        1 <= len(start) = len(end) <= 10000.
        Both start and end will only consist of characters in {'L', 'R',
            'X'}.
-----------------

# 1498_Number_of_Subsequences_That_Satisfy_the_Given_Sum_Condition
# 1498. Number of Subsequences That Satisfy the Given Sum Condition


-----------------

# 395_Longest_Substring_with_At_Least_K_Repeating_Characters
# 395. Longest Substring with At Least K Repeating Characters

Find the length of the longest substring T of a given string (consists of
        lowercase letters only) such that every character in T appears no less than
        k times.
    

    Example 1:
    Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.

    

    Example 2:
    Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
-----------------

# 1063_Number_of_Valid_Subarrays
# 1063. Number of Valid Subarrays

Given an array A of integers, return the number of non-empty continuous
        subarrays that satisfy the following condition:

    The leftmost element of the subarray is not larger than other elements in the subarray.

     

    Example 1:

    Input: [1,4,2,5,3]
Output: 11
Explanation: There are 11 valid subarrays: [1],[4],[2],[5],[3],[1,4],[2,5],[1,4,2],[2,5,3],[1,4,2,5],[1,4,2,5,3].

    Example 2:

    Input: [3,2,1]
Output: 3
Explanation: The 3 valid subarrays are: [3],[2],[1].

    Example 3:

    Input: [2,2,2]
Output: 6
Explanation: There are 6 valid subarrays: [2],[2],[2],[2,2],[2,2],[2,2,2].

     

    Note:

    
        1 <= A.length <= 50000
        0 <= A[i] <= 100000
-----------------

# 458_Poor_Pigs
# 458. Poor Pigs

There are 1000 buckets, one and only one of them is poisonous, while the rest are filled with
        water. They all look identical. If a pig drinks the poison it will die within 15 minutes.
        What is the minimum amount of pigs you need to figure out which bucket is poisonous within
        one hour?

    Answer this question, and write an algorithm for the general case.

     

    General case: 

    If there are n buckets and a pig drinking poison will die within m
        minutes, how many pigs (x) you need to figure out the
        poisonous bucket within p minutes? There is exactly one
        bucket with poison.

     

    Note:

    
        A pig can be allowed to drink simultaneously on as many buckets as one would like, and
            the feeding takes no time.
        
        After a pig has instantly finished drinking buckets, there has to be a cool down
            time of m minutes. During this time, only observation is allowed
            and no feedings at all.
        
        Any given bucket can be sampled an infinite number of times (by an unlimited number of
            pigs).
-----------------

# 1529_Bulb_Switcher_IV
# 1529. Bulb Switcher IV


-----------------

# 583_Delete_Operation_for_Two_Strings
# 583. Delete Operation for Two Strings

Given two words word1 and word2, find the minimum number of steps required to
        make word1 and word2 the same, where in each step you can delete one character
        in either string.
    

    Example 1:
    Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

    

    Note:
    
        The length of given words won't exceed 500.
        Characters in given words can only be lower-case letters.
-----------------

# 695_Max_Area_of_Island
# 695. Max Area of Island

Given a non-empty 2D array grid of 0's and 1's, an island is a
        group of 1's (representing land) connected 4-directionally (horizontal or
        vertical.) You may assume all four edges of the grid are surrounded by water.

    Find the maximum area of an island in the given 2D array. (If there is no island, the maximum
        area is 0.)

    Example 1:

    [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

    Given the above grid, return 6. Note the answer is not 11, because the island must
    be connected 4-directionally.

    Example 2:

    [[0,0,0,0,0,0,0,0]]
    Given the above grid, return 0.

    Note: The length of each dimension in the given grid does not exceed 50.
-----------------

# 1624_Largest_Substring_Between_Two_Equal_Characters
# 1624. Largest Substring Between Two Equal Characters


-----------------

# 556_Next_Greater_Element_III
# 556. Next Greater Element III

Given a positive 32-bit integer n, you need to find the
        smallest 32-bit integer which has exactly the same digits existing in the
        integer n and is greater in value than n. If no such positive 32-bit
        integer exists, you need to return -1.

    Example 1:

    Input: 12
Output: 21

     

    Example 2:

    Input: 21
Output: -1
-----------------

# 1221_Split_a_String_in_Balanced_Strings
# 1221. Split a String in Balanced Strings

Balanced strings are those who have equal quantity
        of 'L' and 'R' characters.

    Given a balanced string s split it in the
        maximum amount of balanced strings.

    Return the maximum amount of splitted balanced strings.

     
    Example 1:

    Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

    Example 2:

    Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

    Example 3:

    Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

     
    Constraints:

    
        1 <= s.length <= 1000
        s[i] = 'L' or 'R'
-----------------

# 1520_Maximum_Number_of_Non-Overlapping_Substrings
# 1520. Maximum Number of Non-Overlapping Substrings


-----------------

# 1734_Decode_XORed_Permutation
# 1734. Decode XORed Permutation


-----------------

# 1236_Web_Crawler
# 1236. Web Crawler

Given a url startUrl and an interface HtmlParser, implement a web crawler
        to crawl all links that are under the same hostname as startUrl. 
    

    Returns all urls obtained by your web crawler in any order.

    Your crawler should:

    
        Start from the page: startUrl
        Call HtmlParser.getUrls(url) to get all urls from a webpage of given url.
        
        Do not crawl the same link twice.
        Only the links that are under the same hostname as startUrl should
            be explored by the crawler
        
    

    

    As shown in the example url above, the hostname is example.org. For simplicity
        sake, you may assume all urls use http protocol without
        any port specified.

    The function interface is defined like this: 

    interface HtmlParser {
        public:
          // Returns a list of urls contained in url .
          public List<String> getUrls(String url);
        }

    Below there are two examples explaining the functionality of the problem, for custom testing
        purposes you'll have 3 variables urls, edges and startUrl. Notice that you will only have access to startUrl, while urls and edges are secret to you on the rest of the
        testcases.

     
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
            only the ASCII letters from 'a' to 'z', digits  from '0'
            to '9' and the hyphen-minus character ('-').
        
        The hostname may not start or end with the hyphen-minus character ('-'). 
        See:  https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_hostnames
        
        You may assume there're no duplicates in url library.
-----------------

# 1680_Concatenation_of_Consecutive_Binary_Numbers
# 1680. Concatenation of Consecutive Binary Numbers


-----------------

# 358_Rearrange_String_k_Distance_Apart
# 358. Rearrange String k Distance Apart

Given a non-empty string s and an integer k, rearrange the string such that the
        same characters are at least distance k from each other.

    All input strings are given in lowercase letters. If it is not possible to rearrange the
        string, return an empty string "".

    Example 1:
-----------------

# 414_Third_Maximum_Number
# 414. Third Maximum Number

Given a non-empty array of integers, return the third maximum number in this
        array. If it does not exist, return the maximum number. The time complexity must be in O(n).
    

    Example 1:
    Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.

    

    Example 2:
    Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

    

    Example 3:
    Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
-----------------

# 534_Game_Play_Analysis_III
# 534. Game Play Analysis III

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

     

    Write an SQL query that reports for each player and date, how many games played so
        far by the player. That is, the total number of games played by the player
        until that date. Check the example for clarity.

    The query result format is in the following example:

    Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 1         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+

Result table:
+-----------+------------+---------------------+
| player_id | event_date | games_played_so_far |
+-----------+------------+---------------------+
| 1         | 2016-03-01 | 5                   |
| 1         | 2016-05-02 | 11                  |
| 1         | 2017-06-25 | 12                  |
| 3         | 2016-03-02 | 0                   |
| 3         | 2018-07-03 | 5                   |
+-----------+------------+---------------------+
For the player with id 1, 5 + 6 = 11 games played by 2016-05-02, and 5 + 6 + 1 = 12 games played by 2017-06-25.
For the player with id 3, 0 + 5 = 5 games played by 2018-07-03.
Note that for each player we only care about the days when the player logged in.
-----------------

# 1034_Coloring_A_Border
# 1034. Coloring A Border

Given a 2-dimensional grid of integers, each value in the grid represents
        the color of the grid square at that location.

    Two squares belong to the same connected component if and only if they have the same
        color and are next to each other in any of the 4 directions.

    The border of a connected component is all the squares in the connected
        component that are either 4-directionally adjacent to a square not in the
        component, or on the boundary of the grid (the first or last row or column).

    Given a square at location (r0, c0) in the grid and a
        color, color the border of the connected component of that square with the
        given color, and return the final grid.

     

    Example 1:

    Input: grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3
Output: [[3, 3], [3, 2]]
-----------------

# 798_Smallest_Rotation_with_Highest_Score
# 798. Smallest Rotation with Highest Score

Given an array A, we may rotate it by a non-negative integer
        K so that the array becomes A[K], A[K+1], A{K+2], ... A[A.length - 1],
            A[0], A[1], ..., A[K-1].  Afterward, any entries that are less than or equal
        to their index are worth 1 point. 

    For example, if we have [2, 4, 1, 3, 0], and we rotate by K = 2, it
        becomes [1, 3, 0, 2, 4].  This is worth 3 points because 1 > 0 [no
        points], 3 > 1 [no points], 0 <= 2 [one point], 2 <= 3 [one point], 4 <= 4 [one
        point].

    Over all possible rotations, return the rotation index K that corresponds to the highest
        score we could receive.  If there are multiple answers, return the smallest such index
        K.

    Example 1:
Input: [2, 3, 1, 4, 0]
Output: 3
Explanation: 
Scores for each K are listed below:
K = 0,  A = [2,3,1,4,0],    score 2
K = 1,  A = [3,1,4,0,2],    score 3
K = 2,  A = [1,4,0,2,3],    score 3
K = 3,  A = [4,0,2,3,1],    score 4
K = 4,  A = [0,2,3,1,4],    score 3

    So we should choose K = 3, which has the highest score.

     

    Example 2:
Input: [1, 3, 0, 2, 4]
Output: 0
Explanation:  A will always have 3 points no matter how it shifts.
So we will choose the smallest K, which is 0.

    Note:

    
        A will have length at most 20000.
        A[i] will be in the range [0, A.length].
-----------------

# 1411_Number_of_Ways_to_Paint_N_×_3_Grid
# 1411. Number of Ways to Paint N × 3 Grid


-----------------

# 1714_Sum_Of_Special_Evenly-Spaced_Elements_In_Array
# 1714. Sum Of Special Evenly-Spaced Elements In Array


-----------------

# 122_Best_Time_to_Buy_and_Sell_Stock_II
# 122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given
        stock on day i.

    Design an algorithm to find the maximum profit. You may complete as many transactions as you
        like (i.e., buy one and sell one share of the stock multiple times).

    Note: You may not engage in multiple transactions at the same time (i.e.,
        you must sell the stock before you buy again).

    Example 1:

    Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

    Example 2:

    Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

    Example 3:

    Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
-----------------

# 535_Encode_and_Decode_TinyURL
# 535. Encode and Decode TinyURL

Note: This is a companion problem to the System
        Design problem: Design TinyURL.
    

    TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl
        and it returns a short URL such as http://tinyurl.com/4e9iAk.

    Design the encode and decode methods for the TinyURL service. There
        is no restriction on how your encode/decode algorithm should work. You just need to ensure
        that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
-----------------

# 1524_Number_of_Sub-arrays_With_Odd_Sum
# 1524. Number of Sub-arrays With Odd Sum


-----------------

# 913_Cat_and_Mouse
# 913. Cat and Mouse

A game on an undirected graph is played by two players, Mouse and Cat, who
        alternate turns.

    The graph is given as follows: graph[a] is a list of all nodes b
        such that ab is an edge of the graph.

    Mouse starts at node 1 and goes first, Cat starts at node 2 and goes second, and there is a
        Hole at node 0.

    During each player's turn, they must travel along one edge of the
        graph that meets where they are.  For example, if the Mouse is at node 1,
        it must travel to any node in graph[1].

    Additionally, it is not allowed for the Cat to travel to the Hole (node 0.)

    Then, the game can end in 3 ways:

    
        If ever the Cat occupies the same node as the Mouse, the Cat wins.
        If ever the Mouse reaches the Hole, the Mouse wins.
        If ever a position is repeated (ie. the players are in the same position as a
            previous turn, and it is the same player's turn to move), the game is a draw.
        
    

    Given a graph, and assuming both players play optimally, return 1 if
        the game is won by Mouse, 2 if the game is won by Cat, and 0 if
        the game is a draw.
-----------------

# 1398_Customers_Who_Bought_Products_A_and_B_but_Not_C
# 1398. Customers Who Bought Products A and B but Not C


-----------------

# 516_Longest_Palindromic_Subsequence
# 516. Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s. You may assume
        that the maximum length of s is 1000.
    

    Example 1:
        Input:
    "bbbab"

    Output:
    4

    One possible longest palindromic subsequence is "bbbb".
    

    Example 2:
        Input:
    "cbbd"

    Output:
    2

    One possible longest palindromic subsequence is "bb".
-----------------

# 927_Three_Equal_Parts
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
-----------------

# 373_Find_K_Pairs_with_Smallest_Sums
# 373. Find K Pairs with Smallest Sums

You are given two integer arrays nums1 and nums2 sorted in ascending order and
        an integer k.

    Define a pair (u,v) which consists of one element from the first array and one element
        from the second array.

    Find the k pairs (u1,v1),(u2,v2)
        ...(uk,vk) with the smallest sums.

    Example 1:

    Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence:
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

    Example 2:

    Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [1,1],[1,1]
Explanation: The first 2 pairs are returned from the sequence:
             [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

    Example 3:

    Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [1,3],[2,3]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
-----------------

# 423_Reconstruct_Original_Digits_from_English
# 423. Reconstruct Original Digits from English

Given a non-empty string containing an out-of-order English representation of digits
        0-9, output the digits in ascending order.

    Note:
    
        Input contains only lowercase English letters.
        Input is guaranteed to be valid and can be transformed to its original digits. That
            means invalid inputs such as "abc" or "zerone" are not permitted.
        
        Input length is less than 50,000.
    
    

    Example 1:
    Input: "owoztneoer"

Output: "012"

    

    Example 2:
    Input: "fviefuro"

Output: "45"
-----------------

# 1708_Largest_Subarray_Length_K
# 1708. Largest Subarray Length K


-----------------

# 1065_Index_Pairs_of_a_String
# 1065. Index Pairs of a String

Given a text string and words (a list of strings), return all
        index pairs [i, j] so that the substring text[i]...text[j] is
        in the list of words.

     

    Example 1:

    Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
Output: [[3,7],[9,13],[10,17]]

    Example 2:

    Input: text = "ababa", words = ["aba","ab"]
Output: [[0,1],[0,2],[2,3],[2,4]]
Explanation: 
Notice that matches can overlap, see "aba" is found in [0,2] and [2,4].

     

    Note:

    
        All strings contains only lowercase English letters.
        It's guaranteed that all strings in words are different.
        1 <= text.length <= 100
        1 <= words.length <= 20
        1 <= words[i].length <= 50
        Return the pairs [i,j] in sorted order (i.e. sort them by their first
            coordinate in case of ties sort them by their second coordinate).
-----------------

# 1702_Maximum_Binary_String_After_Change
# 1702. Maximum Binary String After Change


-----------------

# 1270_All_People_Report_to_the_Given_Manager
# 1270. All People Report to the Given Manager


-----------------

# 1198_Find_Smallest_Common_Element_in_All_Rows
# 1198. Find Smallest Common Element in All Rows

Given a matrix mat where every row is sorted in increasing
        order, return the smallest common element in all rows.

    If there is no common element, return -1.

     
    Example 1:
    Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
Output: 5

     
    Constraints:

    
        1 <= mat.length, mat[i].length <= 500
        1 <= mat[i][j] <= 10^4
        mat[i] is sorted in increasing order.
-----------------

# 791_Custom_Sort_String
# 791. Custom Sort String

S and T are strings composed of lowercase letters. In
        S, no letter occurs more than once.

    S was sorted in some custom order previously. We want to permute the characters
        of T so that they match the order that S was sorted. More
        specifically, if x occurs before y in S, then
        x should occur before y in the returned string.

    Return any permutation of T (as a string) that satisfies this property.

    Example :
Input:
S = "cba"
T = "abcd"
Output: "cbad"
Explanation:
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.

     

    Note:

    
        S has length at most 26, and no character is repeated in
            S.
        
        T has length at most 200.
        S and T consist of lowercase letters only.
-----------------

# 952_Largest_Component_Size_by_Common_Factor
# 952. Largest Component Size by Common Factor

Given a non-empty array of unique positive integers A, consider the
        following graph:

    
        There are A.length nodes, labelled A[0] to A[A.length -
            1];
        There is an edge between A[i] and A[j] if and only if A[i]
            and A[j] share a common factor greater than 1.
        
    

    Return the size of the largest connected component in the graph.
-----------------

# 1364_Number_of_Trusted_Contacts_of_a_Customer
# 1364. Number of Trusted Contacts of a Customer


-----------------

# 1574_Shortest_Subarray_to_be_Removed_to_Make_Array_Sorted
# 1574. Shortest Subarray to be Removed to Make Array Sorted


-----------------

# 1147_Longest_Chunked_Palindrome_Decomposition
# 1147. Longest Chunked Palindrome Decomposition

Return the largest possible k such that there exists a_1, a_2,
        ..., a_k such that:

    
        Each a_i is a non-empty string;
        Their concatenation a_1 + a_2 + ... + a_k is equal to text;
        
        For all 1 <= i <= k,  a_i = a_{k+1 - i}.
    

     
    Example 1:

    Input: text = "ghiabcdefhelloadamhelloabcdefghi"
Output: 7
Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".

    Example 2:

    Input: text = "merchant"
Output: 1
Explanation: We can split the string on "(merchant)".

    Example 3:

    Input: text = "antaprezatepzapreanta"
Output: 11
Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".

    Example 4:

    Input: text = "aaa"
Output: 3
Explanation: We can split the string on "(a)(a)(a)".

     
    Constraints:

    
        text consists only of lowercase English characters.
        1 <= text.length <= 1000
-----------------

# 906_Super_Palindromes
# 906. Super Palindromes

Let's say a positive integer is a superpalindrome if it is a
        palindrome, and it is also the square of a palindrome.

    Now, given two positive integers L and R (represented as
        strings), return the number of superpalindromes in the inclusive range [L, R].
    

     

    Example 1:

    Input: L = "4", R = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.

     

    Note:

    
        1 <= len(L) <= 18
        1 <= len(R) <= 18
        L and R are strings representing integers in the range [1,
            10^18).
        
        int(L) <= int(R)
-----------------

# 1331_Rank_Transform_of_an_Array
# 1331. Rank Transform of an Array


-----------------

# 1691_Maximum_Height_by_Stacking_Cuboids
# 1691. Maximum Height by Stacking Cuboids


-----------------

# 1694_Reformat_Phone_Number
# 1694. Reformat Phone Number


-----------------

# 1117_Building_H2O
# 1117. Building H2O

There are two kinds of threads, oxygen and hydrogen. Your goal is
        to group these threads to form water molecules. There is a barrier where each thread
        has to wait until a complete molecule can be formed. Hydrogen and oxygen threads will
        be given releaseHydrogen and releaseOxygen methods
        respectively, which will allow them to pass the barrier. These threads should pass the
        barrier in groups of three, and they must be able to immediately bond with each other to
        form a water molecule. You must guarantee that all the threads from one molecule bond
        before any other threads from the next molecule do.

    In other words:

    
        If an oxygen thread arrives at the barrier when no hydrogen threads are present, it has
            to wait for two hydrogen threads.
        
        If a hydrogen thread arrives at the barrier when no other threads are present, it has to
            wait for an oxygen thread and another hydrogen thread.
        
    

    We don’t have to worry about matching the threads up explicitly; that is, the threads
        do not necessarily know which other threads they are paired up with. The key is just that
        threads pass the barrier in complete sets; thus, if we examine the sequence of threads that
        bond and divide them into groups of three, each group should contain one oxygen and two
        hydrogen threads.

    Write synchronization code for oxygen and hydrogen molecules that enforces these
        constraints.
-----------------

# 1653_Minimum_Deletions_to_Make_String_Balanced
# 1653. Minimum Deletions to Make String Balanced


-----------------

# 1684_Count_the_Number_of_Consistent_Strings
# 1684. Count the Number of Consistent Strings


-----------------

# 1373_Maximum_Sum_BST_in_Binary_Tree
# 1373. Maximum Sum BST in Binary Tree


-----------------

# 1578_Minimum_Deletion_Cost_to_Avoid_Repeating_Letters
# 1578. Minimum Deletion Cost to Avoid Repeating Letters


-----------------

# 795_Number_of_Subarrays_with_Bounded_Maximum
# 795. Number of Subarrays with Bounded Maximum

We are given an array A of positive integers, and two positive integers
        L and R (L <= R).

    Return the number of (contiguous, non-empty) subarrays such that the value of the maximum
        array element in that subarray is at least L and at most R.

    Example :
Input:
A = [2, 1, 4, 3]
L = 2
R = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].

    Note:

    
        L, R  and A[i] will be an integer in the range [0, 10^9].
        
        The length of A will be in the range of [1, 50000].
-----------------

# 647_Palindromic_Substrings
# 647. Palindromic Substrings

Given a string, your task is to count how many palindromic substrings in this string.

    The substrings with different start indexes or end indexes are counted as different
        substrings even they consist of same characters.

    Example 1:

    Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

     

    Example 2:

    Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

     

    Note:

    
        The input string length won't exceed 1000.
-----------------

# 980_Unique_Paths_III
# 980. Unique Paths III

On a 2-dimensional grid, there are 4 types of squares:

    
        1 represents the starting square.  There is exactly one starting
            square.
        
        2 represents the ending square.  There is exactly one ending square.
        
        0 represents empty squares we can walk over.
        -1 represents obstacles that we cannot walk over.
    

    Return the number of 4-directional walks from the starting square to the ending square,
        that walk over every non-obstacle square exactly once.
-----------------

# 1584_Min_Cost_to_Connect_All_Points
# 1584. Min Cost to Connect All Points


-----------------

# 1492_The_kth_Factor_of_n
# 1492. The kth Factor of n


-----------------

# 1588_Sum_of_All_Odd_Length_Subarrays
# 1588. Sum of All Odd Length Subarrays


-----------------

# 81_Search_in_Rotated_Sorted_Array_II
# 81. Search in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you
        beforehand.

    (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

    You are given a target value to search. If found in the array return true,
        otherwise return false.

    Example 1:

    Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

    Example 2:

    Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false

    Follow up:

    
        This is a follow up problem to Search
            in Rotated Sorted Array, where nums may contain duplicates.
        
        Would this affect the run-time complexity? How and why?
-----------------

# 368_Largest_Divisible_Subset
# 368. Largest Divisible Subset

Given a set of distinct positive integers, find the largest subset such that every
        pair (Si, Sj) of elements in this subset satisfies:

    Si % Sj = 0 or Sj % Si = 0.

    If there are multiple solutions, return any subset is fine.

    Example 1:
-----------------

# 1833_Maximum_Ice_Cream_Bars
# 1833. Maximum Ice Cream Bars


-----------------

# 1043_Partition_Array_for_Maximum_Sum
# 1043. Partition Array for Maximum Sum

Given an integer array A, you partition the array into (contiguous) subarrays of
        length at most K.  After partitioning, each subarray has their values
        changed to become the maximum value of that subarray.

    Return the largest sum of the given array after partitioning.

     

    Example 1:

    Input: A = [1,15,7,9,2,5,10], K = 3
Output: 84
Explanation: A becomes [15,15,15,9,10,10,10]

     

    Note:

    
        1 <= K <= A.length <= 500
        0 <= A[i] <= 10^6
-----------------

# 843_Guess_the_Word
# 843. Guess the Word

This problem is an interactive problem new to the
        LeetCode platform.

    We are given a word list of unique words, each word is 6 letters long, and one word in this
        list is chosen as secret.

    You may call master.guess(word) to guess a word.  The guessed word
        should have type string and must be from the original list with
        6 lowercase letters.

    This function returns an integer type, representing the number of
        exact matches (value and position) of your guess to the secret word. 
        Also, if your guess is not in the given wordlist, it will return -1 instead.
    

    For each test case, you have 10 guesses to guess the word. At the end of any number of calls,
        if you have made 10 or less calls to master.guess and at least one of
        these guesses was the secret, you pass the testcase.

    Besides the example test case below, there will be 5 additional test cases, each with
        100 words in the word list.  The letters of each word in those testcases were chosen independently
        at random from 'a' to 'z', such that every word in
        the given word lists is unique.

    Example 1:
Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"]

Explanation:

master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
master.guess("abcczz") returns 4, because "abcczz" has 4 matches.

We made 5 calls to master.guess and one of them was the secret, so we pass the test case.

    Note:  Any solutions that attempt to circumvent the judge will
        result in disqualification.
-----------------

# 1836_Remove_Duplicates_From_an_Unsorted_Linked_List
# 1836. Remove Duplicates From an Unsorted Linked List


-----------------

# 1587_Bank_Account_Summary_II
# 1587. Bank Account Summary II


-----------------

# 1413_Minimum_Value_to_Get_Positive_Step_by_Step_Sum
# 1413. Minimum Value to Get Positive Step by Step Sum


-----------------

# 20_Valid_Parentheses
# 20. Valid Parentheses

Given a string containing just the characters '(',
        ')', '{', '}', '['
        and ']', determine if the input string is valid.

    An input string is valid if:

    
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
    

    Note that an empty string is also considered valid.

    Example 1:

    Input: "()"
Output: true

    Example 2:

    Input: "()[]{}"
Output: true

    Example 3:

    Input: "(]"
Output: false

    Example 4:

    Input: "([)]"
Output: false

    Example 5:

    Input: "{[]}"
Output: true
-----------------

# 922_Sort_Array_By_Parity_II
# 922. Sort Array By Parity II

Given an array A of non-negative integers, half of the integers in A are
        odd, and half of the integers are even.

    Sort the array so that whenever A[i] is odd, i is odd; and whenever
        A[i] is even, i is even.

    You may return any answer array that satisfies this condition.

     

    Example 1:

    Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

     

    Note:

    
        2 <= A.length <= 20000
        A.length % 2 == 0
        0 <= A[i] <= 1000
-----------------

# 659_Split_Array_into_Consecutive_Subsequences
# 659. Split Array into Consecutive Subsequences

Given an array nums sorted in ascending order, return true if
        and only if you can split it into 1 or more subsequences such that each subsequence consists
        of consecutive integers and has length at least 3.

     

    Example 1:

    Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences :
1, 2, 3
3, 4, 5

    Example 2:

    Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences :
1, 2, 3, 4, 5
3, 4, 5

    Example 3:

    Input: [1,2,3,4,4,5]
Output: False

     

    Constraints:

    
        1 <= nums.length <= 10000
-----------------

# 90_Subsets_II
# 90. Subsets II

Given a collection of integers that might contain duplicates, nums,
        return all possible subsets (the power set).

    Note: The solution set must not contain duplicate subsets.

    Example:

    Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
-----------------

# 602_Friend_Requests_II_Who_Has_the_Most_Friends
# 602. Friend Requests II: Who Has the Most Friends

In social network like Facebook or Twitter, people send friend requests and accept others'
    requests as well.
     
    Table request_accepted holds the data of friend acceptance, while
    requester_id and accepter_id both are the id of a person.

     

    | requester_id | accepter_id | accept_date|
|--------------|-------------|------------|
| 1            | 2           | 2016_06-03 |
| 1            | 3           | 2016-06-08 |
| 2            | 3           | 2016-06-08 |
| 3            | 4           | 2016-06-09 |

    Write a query to find the the people who has most friends and the most friends number. For the
    sample data above, the result is:

    | id | num |
|----|-----|
| 3  | 3   |

    Note:

    
        It is guaranteed there is only 1 people having the most friends.
        The friend request could only been accepted once, which mean there is no multiple
            records with the same requester_id and accepter_id value.
             
            Explanation:
            The person with id '3' is a friend of people '1', '2' and '4',
            so he has 3 friends in total, which is the most number than any others.
             
            Follow-up:
            In the real world, multiple people could have the same most number of friends, can you
            find all these people in this case?
-----------------

# 1824_Minimum_Sideway_Jumps
# 1824. Minimum Sideway Jumps


-----------------

# 162_Find_Peak_Element
# 162. Find Peak Element

A peak element is an element that is greater than its neighbors.

    Given an input array nums, where nums[i] ≠ nums[i+1], find a
        peak element and return its index.

    The array may contain multiple peaks, in that case return the index to any one of the peaks
        is fine.

    You may imagine that nums[-1] = nums[n] = -∞.

    Example 1:

    Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

    Example 2:

    Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5
Explanation: Your function can return either index number 1 where the peak element is 2,
             or index number 5 where the peak element is 6.

    Note:

    Your solution should be in logarithmic complexity.
-----------------

# 1651_Hopper_Company_Queries_III
# 1651. Hopper Company Queries III


-----------------

# 280_Wiggle_Sort
# 280. Wiggle Sort

Given an unsorted array nums, reorder it in-place such that nums[0]
        <= nums[1] >= nums[2] <= nums[3]....

    Example:

    Input: nums = [3,5,2,1,6,4]
Output: One possible answer is [3,5,1,6,2,4]
-----------------

# 1614_Maximum_Nesting_Depth_of_the_Parentheses
# 1614. Maximum Nesting Depth of the Parentheses


-----------------

# 854_K-Similar_Strings
# 854. K-Similar Strings

Strings A and B are K-similar (for some
        non-negative integer K) if we can swap the positions of two letters in
        A exactly K times so that the resulting string equals
        B.

    Given two anagrams A and B, return the smallest K for
        which A and B are K-similar.

    Example 1:

    Input: A = "ab", B = "ba"
Output: 1
-----------------

# 1073_Adding_Two_Negabinary_Numbers
# 1073. Adding Two Negabinary Numbers

Given two numbers arr1 and arr2 in base -2, return
        the result of adding them together.

    Each number is given in array format:  as an array of 0s and 1s, from most
        significant bit to least significant bit.  For example, arr = [1,1,0,1]
        represents the number (-2)^3 + (-2)^2 + (-2)^0 = -3.  A number arr
        in array format is also guaranteed to have no leading zeros: either arr
            == [0] or arr[0] == 1.

    Return the result of adding arr1 and arr2 in the same format: as an
        array of 0s and 1s with no leading zeros.

     

    Example 1:

    Input: arr1 = [1,1,1,1,1], arr2 = [1,0,1]
Output: [1,0,0,0,0]
Explanation: arr1 represents 11, arr2 represents 5, the output represents 16.

     

    Note:

    
        1 <= arr1.length <= 1000
        1 <= arr2.length <= 1000
        arr1 and arr2 have no leading zeros
        arr1[i] is 0 or 1
        arr2[i] is 0 or 1
-----------------

# 192_Word_Frequency
# 192. Word Frequency

Write a bash script to calculate the frequency of each word in a text file
        words.txt.

    For simplicity sake, you may assume:

    
        words.txt contains only lowercase characters and space '
            ' characters.
        
        Each word must consist of lowercase characters only.
        Words are separated by one or more whitespace characters.
    

    Example:

    Assume that words.txt has the following content:

    the day is sunny the the
the sunny is is

    Your script should output the following, sorted by descending frequency:

    the 4
is 3
sunny 2
day 1

    Note:

    
        Don't worry about handling ties, it is guaranteed that each word's frequency
            count is unique.
        
        Could you write it in one-line using Unix pipes?
-----------------

# 1466_Reorder_Routes_to_Make_All_Paths_Lead_to_the_City_Zero
# 1466. Reorder Routes to Make All Paths Lead to the City Zero


-----------------

# 1758_Minimum_Changes_To_Make_Alternating_Binary_String
# 1758. Minimum Changes To Make Alternating Binary String


-----------------

# 236_Lowest_Common_Ancestor_of_a_Binary_Tree
# 236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the
        tree.

    According to the definition of LCA on Wikipedia: “The lowest
        common ancestor is defined between two nodes p and q as the lowest node in T that
        has both p and q as descendants (where we allow a node to be a descendant of
            itself).”

    Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
    
     

    Example 1:

    Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

    Example 2:

    Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

     

    Note:

    
        All of the nodes' values will be unique.
        p and q are different and both values will exist in the binary tree.
-----------------

# 784_Letter_Case_Permutation
# 784. Letter Case Permutation

Given a string S, we can transform every letter individually to be lowercase or
        uppercase to create another string.  Return a list of all possible strings we could
        create.

    Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]

    Note:

    
        S will be a string with length between 1 and 12.
        
        S will consist only of letters or digits.
-----------------

# 1818_Minimum_Absolute_Sum_Difference
# 1818. Minimum Absolute Sum Difference


-----------------

# 625_Minimum_Factorization
# 625. Minimum Factorization

Given a positive integer a, find the smallest positive integer b
        whose multiplication of each digit equals to a. 

    
        If there is no answer or the answer is not fit in 32-bit signed integer, then return 0.

    
        Example 1
        Input:
    48 
    Output:
    68
    

    
        Example 2
        Input:
    15

    Output:
    35
-----------------

# 1078_Occurrences_After_Bigram
# 1078. Occurrences After Bigram

Given words first and second, consider occurrences in
        some text of the form "first second third", where
        second comes immediately after first, and third comes
        immediately after second.

    For each such occurrence, add "third" to the answer, and return the
        answer.

     

    Example 1:

    Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
-----------------

# 649_Dota2_Senate
# 649. Dota2 Senate

In the world of Dota2, there are two parties: the Radiant and the
        Dire.

    The Dota2 senate consists of senators coming from two parties. Now the senate wants to make a
        decision about a change in the Dota2 game. The voting for this change is a round-based
        procedure. In each round, each senator can exercise one of the two rights:

    
        Ban one senator's right:
            A senator can make another senator lose all his rights in this and all the
            following rounds.
        
        Announce the victory:
            If this senator found the senators who still have rights to vote are all from the
                same party, he can announce the victory and make the decision about the change
            in the game.
        
    

     

    Given a string representing each senator's party belonging. The character 'R' and
        'D' represent the Radiant party and the Dire party
        respectively. Then if there are n senators, the size of the given string will
        be n.

    The round-based procedure starts from the first senator to the last senator in the given
        order. This procedure will last until the end of voting. All the senators who have lost
        their rights will be skipped during the procedure.

    Suppose every senator is smart enough and will play the best strategy for his own party, you
        need to predict which party will finally announce the victory and make the change in the
        Dota2 game. The output should be Radiant or Dire.

    Example 1:

    Input: "RD"
Output: "Radiant"
Explanation: The first senator comes from Radiant and he can just ban the next senator's right in the round 1.
And the second senator can't exercise any rights any more since his right has been banned.
And in the round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

     

    Example 2:

    Input: "RDD"
Output: "Dire"
Explanation:
The first senator comes from Radiant and he can just ban the next senator's right in the round 1.
And the second senator can't exercise any rights anymore since his right has been banned.
And the third senator comes from Dire and he can ban the first senator's right in the round 1.
And in the round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

     

    Note:

    
        The length of the given string will in the range [1, 10,000].
-----------------

# 1165_Single-Row_Keyboard
# 1165. Single-Row Keyboard

There is a special keyboard with all keys in a single row.

    Given a string keyboard of length 26 indicating the layout of the keyboard
        (indexed from 0 to 25), initially your finger is at index 0. To type a character, you
        have to move your finger to the index of the desired character. The time taken to move your
        finger from index i to index j is |i - j|.

    You want to type a string word. Write a function to calculate how much time it
        takes to type it with one finger.

     
    Example 1:

    Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4.

    Example 2:

    Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73

     
    Constraints:

    
        keyboard.length == 26
        keyboard contains each English lowercase
            letter exactly once in some order.
        
        1 <= word.length <= 10^4
        word[i] is an English lowercase letter.
-----------------

# 387_First_Unique_Character_in_a_String
# 387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it
        doesn't exist, return -1.
    
    Examples:
    s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

    

    
        Note: You may assume the string contain only lowercase letters.
-----------------

# 755_Pour_Water
# 755. Pour Water

We are given an elevation map, heights[i] representing the height of the
        terrain at that index. The width at each index is 1. After V units of water
        fall at index K, how much water is at each index?
    
    
        Water first drops at index K and rests on top of the highest terrain or water
        at that index. Then, it flows according to the following rules:
    If the droplet would eventually fall by moving left, then move left.
    Otherwise, if the droplet would eventually fall by moving right, then move right.
    Otherwise, rise at it's current position.
    Here, "eventually fall" means that the droplet will eventually be at a lower level if it moves
    in that direction.
    Also, "level" means the height of the terrain plus any water in that column.
    
    We can assume there's infinitely high terrain on the two sides out of bounds of the array. Also,
    there could not be partial water being spread out evenly on more than 1 grid block - each unit
    of water has to be in exactly one block.
    

    Example 1:
    Input: heights = [2,1,1,2,1,2,2], V = 4, K = 3
Output: [2,2,2,3,2,2,2]
Explanation:
#       #
#       #
##  # ###
#########
 0123456    <- index

The first drop of water lands at index K = 3:

#       #
#   w   #
##  # ###
#########
 0123456

When moving left or right, the water can only move to the same level or a lower level.
(By level, we mean the total height of the terrain plus any water in that column.)
Since moving left will eventually make it fall, it moves left.
(A droplet "made to fall" means go to a lower height than it was at previously.)

#       #
#       #
## w# ###
#########
 0123456

Since moving left will not make it fall, it stays in place.  The next droplet falls:

#       #
#   w   #
## w# ###
#########
 0123456

Since the new droplet moving left will eventually make it fall, it moves left.
Notice that the droplet still preferred to move left,
even though it could move right (and moving right makes it fall quicker.)

#       #
#  w    #
## w# ###
#########
 0123456

#       #
#       #
##ww# ###
#########
 0123456

After those steps, the third droplet falls.
Since moving left would not eventually make it fall, it tries to move right.
Since moving right would eventually make it fall, it moves right.

#       #
#   w   #
##ww# ###
#########
 0123456

#       #
#       #
##ww#w###
#########
 0123456

Finally, the fourth droplet falls.
Since moving left would not eventually make it fall, it tries to move right.
Since moving right would not eventually make it fall, it stays in place:

#       #
#   w   #
##ww#w###
#########
 0123456

The final answer is [2,2,2,3,2,2,2]:

    #
 #######
 #######
 0123456

    

    Example 2:
    Input: heights = [1,2,3,4], V = 2, K = 2
Output: [2,3,3,4]
Explanation:
The last droplet settles at index 1, since moving further left would not cause it to eventually fall to a lower height.

    

    Example 3:
    Input: heights = [3,1,3], V = 5, K = 1
Output: [4,4,4]

    

    Note:
    
        heights will have length in [1, 100] and contain integers in
            [0, 99].
        
        V will be in range [0, 2000].
        K will be in range [0, heights.length - 1].
-----------------

# 749_Contain_Virus
# 749. Contain Virus

A virus is spreading rapidly, and your task is to quarantine the infected area by installing
        walls.
    
    
        The world is modeled as a 2-D array of cells, where 0 represents uninfected
        cells, and 1 represents cells contaminated with the virus. A wall (and only one
        wall) can be installed between any two 4-directionally adjacent cells, on the shared
        boundary.
    
    
        Every night, the virus spreads to all neighboring cells in all four directions unless
        blocked by a wall.
        Resources are limited. Each day, you can install walls around only one region -- the
        affected area (continuous block of infected cells) that threatens the most uninfected cells
        the following night. There will never be a tie.
    
    
        Can you save the day? If so, what is the number of walls required? If not, and the world
        becomes fully infected, return the number of walls used.
    
    

    Example 1:
    Input: grid =
[[0,1,0,0,0,0,0,1],
 [0,1,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0]]
Output: 10
Explanation:
There are 2 contaminated regions.
On the first day, add 5 walls to quarantine the viral region on the left. The board after the virus spreads is:

[[0,1,0,0,0,0,1,1],
 [0,1,0,0,0,0,1,1],
 [0,0,0,0,0,0,1,1],
 [0,0,0,0,0,0,0,1]]

On the second day, add 5 walls to quarantine the viral region on the right. The virus is fully contained.

    

    Example 2:
    Input: grid =
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output: 4
Explanation: Even though there is only one cell saved, there are 4 walls built.
Notice that walls are only built on the shared boundary of two different cells.

    

    Example 3:
    Input: grid =
[[1,1,1,0,0,0,0,0,0],
 [1,0,1,0,1,1,1,1,1],
 [1,1,1,0,0,0,0,0,0]]
Output: 13
Explanation: The region on the left only builds two new walls.

    

    Note:
    
        The number of rows and columns of grid will each be in the range [1,
            50].
        
        Each grid[i][j] will be either 0 or 1.
        Throughout the described process, there is always a contiguous viral region that will
            infect strictly more uncontaminated squares in the next round.
-----------------

# 1399_Count_Largest_Group
# 1399. Count Largest Group


-----------------

# 1522_Diameter_of_N-Ary_Tree
# 1522. Diameter of N-Ary Tree


-----------------

# 303_Range_Sum_Query_-_Immutable
# 303. Range Sum Query - Immutable

Given an integer array nums, find the sum of the elements between indices i and
        j (i ≤ j), inclusive.

    Example:
    Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

    

    Note:
    
        You may assume that the array does not change.
        There are many calls to sumRange function.
-----------------

# 1182_Shortest_Distance_to_Target_Color
# 1182. Shortest Distance to Target Color

You are given an array colors, in which there are three colors: 1,
        2 and 3.

    You are also given some queries. Each query consists of two integers i and
        c, return the shortest distance between the given
        index i and the target color c. If there is no solution
        return -1.

     
    Example 1:

    Input: colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
Output: [3,0,3]
Explanation: 
The nearest 3 from index 1 is at index 4 (3 steps away).
The nearest 2 from index 2 is at index 2 itself (0 steps away).
The nearest 1 from index 6 is at index 3 (3 steps away).

    Example 2:

    Input: colors = [1,2], queries = [[0,3]]
Output: [-1]
Explanation: There is no 3 in the array.

     
    Constraints:

    
        1 <= colors.length <= 5*10^4
        1 <= colors[i] <= 3
        1 <= queries.length <= 5*10^4
        queries[i].length == 2
        0 <= queries[i][0] < colors.length
        1 <= queries[i][1] <= 3
-----------------

# 563_Binary_Tree_Tilt
# 563. Binary Tree Tilt

Given a binary tree, return the tilt of the whole tree.

    The tilt of a tree node is defined as the absolute difference between the sum
        of all left subtree node values and the sum of all right subtree node values. Null node has
        tilt 0.

    The tilt of the whole tree is defined as the sum of all nodes' tilt.

    Example:
    Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1

    

    Note:
    
        The sum of node values in any subtree won't exceed the range of 32-bit integer.
        All the tilt values won't exceed the range of 32-bit integer.
-----------------

# 646_Maximum_Length_of_Pair_Chain
# 646. Maximum Length of Pair Chain

You are given n pairs of numbers. In every pair, the first number is always
        smaller than the second number.
    

    
        Now, we define a pair (c, d) can follow another pair (a, b) if and
        only if b < c. Chain of pairs can be formed in this fashion.
    

    
        Given a set of pairs, find the length longest chain which can be formed. You needn't use up
        all the given pairs. You can select pairs in any order.
    

    Example 1:
    Input: [[1,2], [2,3], [3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4]

    

    Note:
    
        The number of given pairs will be in the range [1, 1000].
-----------------

# 1655_Distribute_Repeating_Integers
# 1655. Distribute Repeating Integers


-----------------

# 974_Subarray_Sums_Divisible_by_K
# 974. Subarray Sums Divisible by K

Given an array A of integers, return the number of (contiguous, non-empty)
        subarrays that have a sum divisible by K.
-----------------

# 964_Least_Operators_to_Express_Number
# 964. Least Operators to Express Number

Given a single positive integer x, we will write an expression of the form
        x (op1) x (op2) x (op3) x ... where each operator op1, op2,
        etc. is either addition, subtraction, multiplication, or division (+,
        -, *, or /).  For example, with x =
            3, we might write 3 * 3 / 3 + 3 - 3 which is a value of 3.

    When writing such an expression, we adhere to the following conventions:

    
        The division operator (/) returns rational numbers.
        There are no parentheses placed anywhere.
        We use the usual order of operations: multiplication and division happens before
            addition and subtraction.
        
        It's not allowed to use the unary negation operator (-).  For
            example, "x - x" is a valid expression as it only uses
            subtraction, but "-x + x" is not because it uses negation.
        
    

    We would like to write an expression with the least number of operators such that the
        expression equals the given target.  Return the least number of operators
        used.
-----------------

# 1518_Water_Bottles
# 1518. Water Bottles


-----------------

# 967_Numbers_With_Same_Consecutive_Differences
# 967. Numbers With Same Consecutive Differences

Return all non-negative integers of length N such that the
        absolute difference between every two consecutive digits is K.

    Note that every number in the answer must not have leading
        zeros except for the number 0 itself. For example,
        01 has one leading zero and is invalid, but 0 is valid.

    You may return the answer in any order.

     

    Example 1:

    Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
-----------------

# 632_Smallest_Range_Covering_Elements_from_K_Lists
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
-----------------

# 957_Prison_Cells_After_N_Days
# 957. Prison Cells After N Days

There are 8 prison cells in a row, and each cell is either occupied or vacant.

    Each day, whether the cell is occupied or vacant changes according to the following
        rules:

    
        If a cell has two adjacent neighbors that are both occupied or both vacant, then
            the cell becomes occupied.
        
        Otherwise, it becomes vacant.
    

    (Note that because the prison is a row, the first and the last cells in the row can't
        have two adjacent neighbors.)

    We describe the current state of the prison in the following way: cells[i] ==
        1 if the i-th cell is occupied, else cells[i] == 0.

    Given the initial state of the prison, return the state of the prison after N
        days (and N such changes described above.)
-----------------

# 1071_Greatest_Common_Divisor_of_Strings
# 1071. Greatest Common Divisor of Strings

For strings S and T, we say "T divides
        S" if and only if S = T + ... + T  (T
        concatenated with itself 1 or more times)

    Return the largest string X such that X divides str1 and X divides str2.

     

    Example 1:

    Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

    Example 2:

    Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

    Example 3:

    Input: str1 = "LEET", str2 = "CODE"
Output: ""

     

    Note:

    
        1 <= str1.length <= 1000
        1 <= str2.length <= 1000
        str1[i] and str2[i] are English uppercase letters.
-----------------

# 814_Binary_Tree_Pruning
# 814. Binary Tree Pruning

We are given the head node root of a binary tree, where additionally every
        node's value is either a 0 or a 1.

    Return the same tree where every subtree (of the given tree) not containing a 1 has been
        removed.

    (Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

    Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]

Explanation:
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.

    Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]

    Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]

    Note: 

    
        The binary tree will have at most 100 nodes.
        The value of each node will only be 0 or 1.
-----------------

# 1782_Count_Pairs_Of_Nodes
# 1782. Count Pairs Of Nodes


-----------------

# 697_Degree_of_an_Array
# 697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this
        array is defined as the maximum frequency of any one of its elements.
    Your task is to find the smallest possible length of a (contiguous) subarray of
        nums, that has the same degree as nums.

    Example 1:
    Input: [1, 2, 2, 3, 1]
Output: 2
Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

    

    Example 2:
    Input: [1,2,2,3,1,4,2]
Output: 6

    

    Note:
    nums.length will be between 1 and 50,000.
    nums[i] will be an integer between 0 and 49,999.
-----------------

# 771_Jewels_and_Stones
# 771. Jewels and Stones

You're given strings J representing the types of stones that are jewels, and
        S representing the stones you have.  Each character in S is a
        type of stone you have.  You want to know how many of the stones you have are also
        jewels.

    The letters in J are guaranteed distinct, and all characters in J
        and S are letters. Letters are case sensitive, so "a" is
        considered a different type of stone from "A".

    Example 1:

    Input: J = "aA", S = "aAAbbbb"
Output: 3

    Example 2:

    Input: J = "z", S = "ZZ"
Output: 0

    Note:

    
        S and J will consist of letters and have length at most 50.
        
        The characters in J are distinct.
-----------------

# 934_Shortest_Bridge
# 934. Shortest Bridge

In a given 2D binary array A, there are two islands.  (An island is a
        4-directionally connected group of 1s not connected to any other 1s.)

    Now, we may change 0s to 1s so as to connect the two islands
        together to form 1 island.

    Return the smallest number of 0s that must be flipped.  (It is guaranteed
        that the answer is at least 1.)

     

    Example 1:

    Input: [[0,1],[1,0]]
Output: 1
-----------------

# 872_Leaf-Similar_Trees
# 872. Leaf-Similar Trees

Consider all the leaves of a binary tree.  From left to right order, the values of
        those leaves form a leaf value sequence.

    

    For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
    

    Two binary trees are considered leaf-similar if their leaf value sequence is
        the same.

    Return true if and only if the two given trees with head nodes
        root1 and root2 are leaf-similar.

     

    Note:

    
        Both of the given trees will have between 1 and 100 nodes.
-----------------

# 1245_Tree_Diameter
# 1245. Tree Diameter

Given an undirected tree, return its diameter: the number of edges in a
        longest path in that tree.

    The tree is given as an array of edges where edges[i] = [u,
        v] is a bidirectional edge between nodes u and v. 
        Each node has labels in the set {0, 1, ..., edges.length}.

     
    Example 1:

    

    Input: edges = [[0,1],[0,2]]
Output: 2
Explanation: 
A longest path of the tree is the path 1 - 0 - 2.

    Example 2:

    

    Input: edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
Output: 4
Explanation: 
A longest path of the tree is the path 3 - 2 - 1 - 4 - 5.

     
    Constraints:

    
        0 <= edges.length < 10^4
        edges[i][0] != edges[i][1]
        0 <= edges[i][j] <= edges.length
        The given edges form an undirected tree.
-----------------

# 887_Super_Egg_Drop
# 887. Super Egg Drop

You are given K eggs, and you have access to a building with N
        floors from 1 to N. 

    Each egg is identical in function, and if an egg breaks, you cannot drop it again.

    You know that there exists a floor F with 0 <= F <= N such
        that any egg dropped at a floor higher than F will break, and any egg dropped
        at or below floor F will not break.

    Each move, you may take an egg (if you have an unbroken one) and drop it from any
        floor X (with 1 <= X <= N). 

    Your goal is to know with certainty what the value of
        F is.

    What is the minimum number of moves that you need to know with certainty what
        F is, regardless of the initial value of F?
-----------------

# 1139_Largest_1-Bordered_Square
# 1139. Largest 1-Bordered Square

Given a 2D grid of 0s and 1s, return the number of
        elements in the largest square subgrid that has all
        1s on its border, or 0 if such a subgrid doesn't
        exist in the grid.

     
    Example 1:

    Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 9

    Example 2:

    Input: grid = [[1,1,0,0]]
Output: 1

     
    Constraints:

    
        1 <= grid.length <= 100
        1 <= grid[0].length <= 100
        grid[i][j] is 0 or 1
-----------------

# 638_Shopping_Offers
# 638. Shopping Offers

In LeetCode Store, there are some kinds of items to sell. Each item has a price.
    

    
        However, there are some special offers, and a special offer consists of one or more
        different kinds of items with a sale price.
    

    
        You are given the each item's price, a set of special offers, and the number we need to buy
        for each item.
        The job is to output the lowest price you have to pay for exactly certain items as
        given, where you could make optimal use of the special offers.
    

    
        Each special offer is represented in the form of an array, the last number represents the
        price you need to pay for this special offer, other numbers represents how many specific
        items you could get if you buy this offer.
    

    You could use any of special offers as many times as you want.

    Example 1:
    Input: [2,5], [[3,0,5],[1,2,10]], [3,2]
Output: 14
Explanation:
There are two kinds of items, A and B. Their prices are $2 and $5 respectively.
In special offer 1, you can pay $5 for 3A and 0B
In special offer 2, you can pay $10 for 1A and 2B.
You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.

    

    Example 2:
    Input: [2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]
Output: 11
Explanation:
The price of A is $2, and $3 for B, $4 for C.
You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C.
You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C.
You cannot add more items, though only $9 for 2A ,2B and 1C.

    

    Note:
    
        There are at most 6 kinds of items, 100 special offers.
        For each item, you need to buy at most 6 of them.
        You are not allowed to buy more items than you want, even if that would lower the
            overall price.
-----------------

# 398_Random_Pick_Index
# 398. Random Pick Index

Given an array of integers with possible duplicates, randomly output the index of a given
        target number. You can assume that the given target number must exist in the array.

    Note:
        The array size can be very large. Solution that uses too much extra space will not pass the
        judge.

    Example:

    int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
solution.pick(1);
-----------------

# 246_Strobogrammatic_Number
# 246. Strobogrammatic Number

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at
        upside down).

    Write a function to determine if a number is strobogrammatic. The number is represented as a
        string.

    Example 1:

    Input:  "69"
Output: true

    Example 2:

    Input:  "88"
Output: true

    Example 3:

    Input:  "962"
Output: false
-----------------

# 1387_Sort_Integers_by_The_Power_Value
# 1387. Sort Integers by The Power Value


-----------------

# 404_Sum_of_Left_Leaves
# 404. Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

    Example:
        3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
-----------------

# 1150_Check_If_a_Number_Is_Majority_Element_in_a_Sorted_Array
# 1150. Check If a Number Is Majority Element in a Sorted Array

Given an array nums sorted in non-decreasing order, and a
        number target, return True if and only if target is a
        majority element.

    A majority element is an element that appears more than
        N/2 times in an array of length N.

     

    Example 1:

    Input: nums = [2,4,5,5,5,5,5,6,6], target = 5
Output: true
Explanation: 
The value 5 appears 5 times and the length of the array is 9.
Thus, 5 is a majority element because 5 > 9/2 is true.

    Example 2:

    Input: nums = [10,100,101,101], target = 101
Output: false
Explanation: 
The value 101 appears 2 times and the length of the array is 4.
Thus, 101 is not a majority element because 2 > 4/2 is false.

     

    Note:

    
        1 <= nums.length <= 1000
        1 <= nums[i] <= 10^9
        1 <= target <= 10^9
-----------------

# 1644_Lowest_Common_Ancestor_of_a_Binary_Tree_II
# 1644. Lowest Common Ancestor of a Binary Tree II


-----------------

# 1171_Remove_Zero_Sum_Consecutive_Nodes_from_Linked_List
# 1171. Remove Zero Sum Consecutive Nodes from Linked List

Given the head of a linked list, we repeatedly delete consecutive sequences of
        nodes that sum to 0 until there are no such sequences.

    After doing so, return the head of the final linked list.  You may return any such
        answer.

     
    (Note that in the examples below, all sequences are serializations of ListNode
        objects.)

    Example 1:

    Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

    Example 2:

    Input: head = [1,2,3,-3,4]
Output: [1,2,4]

    Example 3:

    Input: head = [1,2,3,-3,-2]
Output: [1]

     
    Constraints:

    
        The given linked list will contain between 1 and 1000 nodes.
        
        Each node in the linked list has -1000 <= node.val <= 1000.
-----------------

# 574_Winning_Candidate
# 574. Winning Candidate

Table: Candidate

    +-----+---------+
| id  | Name    |
+-----+---------+
| 1   | A       |
| 2   | B       |
| 3   | C       |
| 4   | D       |
| 5   | E       |
+-----+---------+

    Table: Vote

    +-----+--------------+
| id  | CandidateId  |
+-----+--------------+
| 1   |     2        |
| 2   |     4        |
| 3   |     3        |
| 4   |     2        |
| 5   |     5        |
+-----+--------------+
id is the auto-increment primary key,
CandidateId is the id appeared in Candidate table.

    Write a sql to find the name of the winning candidate, the above example will return the
        winner B.

    +------+
| Name |
+------+
| B    |
+------+

    Notes:

    
        You may assume there is no tie, in other words there will be at most one
            winning candidate.
-----------------

# 1115_Print_FooBar_Alternately
# 1115. Print FooBar Alternately

Suppose you are given the following code:

    class FooBar {
  public void foo() {
    for (int i = 0; i < n; i++) {
      print("foo");
    }
  }

  public void bar() {
    for (int i = 0; i < n; i++) {
      print("bar");
    }
  }
}

    The same instance of FooBar will be passed to two different threads. Thread A
        will call foo() while thread B will call bar(). Modify
        the given program to output "foobar" n times.

     

    Example 1:

    Input: n = 1
Output: "foobar"
Explanation: There are two threads being fired asynchronously. One of them calls foo(), while the other calls bar(). "foobar" is being output 1 time.

    Example 2:

    Input: n = 2
Output: "foobarfoobar"
Explanation: "foobar" is being output 2 times.
-----------------

# 1441_Build_an_Array_With_Stack_Operations
# 1441. Build an Array With Stack Operations


-----------------

# 1062_Longest_Repeating_Substring
# 1062. Longest Repeating Substring

Given a string S, find out the length of the longest repeating substring(s).
        Return 0 if no repeating substring exists.

     

    Example 1:

    Input: "abcd"
Output: 0
Explanation: There is no repeating substring.

    Example 2:

    Input: "abbaba"
Output: 2
Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.

    Example 3:

    Input: "aabcaabdaab"
Output: 3
Explanation: The longest repeating substring is "aab", which occurs 3 times.

    Example 4:

    Input: "aaaaa"
Output: 4
Explanation: The longest repeating substring is "aaaa", which occurs twice.

     

    Note:

    
        The string S consists of only lowercase English letters from 'a'
            - 'z'.
        
        1 <= S.length <= 1500
-----------------

# 1022_Sum_of_Root_To_Leaf_Binary_Numbers
# 1022. Sum of Root To Leaf Binary Numbers

Given a binary tree, each node has value 0 or 1.  Each
        root-to-leaf path represents a binary number starting with the most significant bit. 
        For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could
        represent 01101 in binary, which is 13.

    For all leaves in the tree, consider the numbers represented by the path from the root
        to that leaf.

    Return the sum of these numbers.

     

    Example 1:

    

    Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

     

    Note:

    
        The number of nodes in the tree is between 1 and 1000.
        node.val is 0 or 1.
        The answer will not exceed 2^31 - 1.
-----------------

# 1550_Three_Consecutive_Odds
# 1550. Three Consecutive Odds


-----------------

# 562_Longest_Line_of_Consecutive_One_in_Matrix
# 562. Longest Line of Consecutive One in Matrix

Given a 01 matrix M, find the longest line of consecutive one in the matrix. The line
    could be horizontal, vertical, diagonal or anti-diagonal.

    Example:
    Input:
[[0,1,1,0],
 [0,1,1,0],
 [0,0,0,1]]
Output: 3

    

    
        Hint:
        The number of elements in the given matrix will not exceed 10,000.
-----------------

# 566_Reshape_the_Matrix
# 566. Reshape the Matrix

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into
        a new one with different size but keep its original data.
    

    
        You're given a matrix represented by a two-dimensional array, and two positive
        integers r and c representing the row number and column number
        of the wanted reshaped matrix, respectively.

    The reshaped matrix need to be filled with all the elements of the original matrix in the
        same row-traversing order as they were.
    

    
        If the 'reshape' operation with given parameters is possible and legal, output the new
        reshaped matrix; Otherwise, output the original matrix.
    

    Example 1:
    Input:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
Output:
[[1,2,3,4]]
Explanation:The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

    

    Example 2:
    Input:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4
Output:
[[1,2],
 [3,4]]
Explanation:There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

    

    Note:
    
        The height and width of the given matrix is in range [1, 100].
        The given r and c are all positive.
-----------------

# 1173_Immediate_Food_Delivery_I
# 1173. Immediate Food Delivery I

Table: Delivery

    +-----------------------------+---------+
| Column Name                 | Type    |
+-----------------------------+---------+
| delivery_id                 | int     |
| customer_id                 | int     |
| order_date                  | date    |
| customer_pref_delivery_date | date    |
+-----------------------------+---------+
delivery_id is the primary key of this table.
The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).

     

    If the preferred delivery date of the customer is the same as the order date then
        the order is called immediate otherwise it's called scheduled.
    

    Write an SQL query to find the percentage of immediate orders in the
        table, rounded to 2 decimal places.

    The query result format is in the following example:

    Delivery table:
+-------------+-------------+------------+-----------------------------+
| delivery_id | customer_id | order_date | customer_pref_delivery_date |
+-------------+-------------+------------+-----------------------------+
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 5           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-11                  |
| 4           | 3           | 2019-08-24 | 2019-08-26                  |
| 5           | 4           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |
+-------------+-------------+------------+-----------------------------+

Result table:
+----------------------+
| immediate_percentage |
+----------------------+
| 33.33                |
+----------------------+
The orders with delivery id 2 and 3 are immediate while the others are scheduled.
-----------------

# 279_Perfect_Squares
# 279. Perfect Squares

Given a positive integer n, find the least number of perfect square numbers (for
        example, 1, 4, 9, 16, ...) which sum to n.

    Example 1:

    Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

    Example 2:

    Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
-----------------

# 821_Shortest_Distance_to_a_Character
# 821. Shortest Distance to a Character

Given a string S and a character C, return an array of
        integers representing the shortest distance from the character C in the string.
    

    Example 1:

    Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

     

    Note:

    
        S string length is in [1, 10000].
        C is a single character, and guaranteed to be in string S.
        
        All letters in S and C are lowercase.
-----------------

# 1450_Number_of_Students_Doing_Homework_at_a_Given_Time
# 1450. Number of Students Doing Homework at a Given Time


-----------------

# 1743_Restore_the_Array_From_Adjacent_Pairs
# 1743. Restore the Array From Adjacent Pairs


-----------------

# 1249_Minimum_Remove_to_Make_Valid_Parentheses
# 1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and
        lowercase English characters. 

    Your task is to remove the minimum number of parentheses ( '(' or ')', in
        any positions ) so that the resulting parentheses string is valid and return
        any valid string.

    Formally, a parentheses string is valid if and only if:

    
        It is the empty string, contains only lowercase characters, or
        It can be written as AB (A concatenated with B),
            where A and B are valid strings, or
        
        It can be written as (A), where A is a valid
            string.
        
    

     
    Example 1:

    Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

    Example 2:

    Input: s = "a)b(c)d"
Output: "ab(c)d"

    Example 3:

    Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

    Example 4:

    Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"

     
    Constraints:

    
        1 <= s.length <= 10^5
        s[i] is one of  '(' , ')'
            and lowercase English letters.
-----------------

# 920_Number_of_Music_Playlists
# 920. Number of Music Playlists

Your music player contains N different songs and she wants to listen to
        L (not necessarily different) songs during your trip.  You create a
        playlist so that:

    
        Every song is played at least once
        A song can only be played again only if K other songs have been
            played
        
    

    Return the number of possible playlists.  As the answer can be very large,
        return it modulo 10^9 + 7.
-----------------

# 1442_Count_Triplets_That_Can_Form_Two_Arrays_of_Equal_XOR
# 1442. Count Triplets That Can Form Two Arrays of Equal XOR


-----------------

# 666_Path_Sum_IV
# 666. Path Sum IV

If the depth of a tree is smaller than 5, then this tree can be represented by a
        list of three-digits integers.

    For each integer in this list:

    
        The hundreds digit represents the depth D of this node, 1 <= D
            <= 4.
        The tens digit represents the position P of this node in the level it
            belongs to, 1 <= P <= 8. The position is the same as that in a full
            binary tree.
        
        The units digit represents the value V of this node, 0 <= V <=
            9.
    

     

    Given a list of ascending three-digits integers representing a binary tree with
        the depth smaller than 5, you need to return the sum of all paths from the root towards the
        leaves.

    Example 1:

    Input: [113, 215, 221]
Output: 12
Explanation:
The tree that the list represents is:
    3
   / \
  5   1

The path sum is (3 + 5) + (3 + 1) = 12.

     

    Example 2:

    Input: [113, 221]
Output: 4
Explanation:
The tree that the list represents is:
    3
     \
      1

The path sum is (3 + 1) = 4.
-----------------

# 501_Find_Mode_in_Binary_Search_Tree
# 501. Find Mode in Binary Search Tree

Given a binary search tree (BST) with duplicates, find all the mode(s) (the
        most frequently occurred element) in the given BST.

    Assume a BST is defined as follows:

    
        The left subtree of a node contains only nodes with keys less than or equal to
            the node's key.
        
        The right subtree of a node contains only nodes with keys greater than or equal
            to the node's key.
        
        Both the left and right subtrees must also be binary search trees.
    

     

    For example:
        Given BST [1,null,2,2],

       1
    \
     2
    /
   2

     

    return [2].

    Note: If a tree has more than one mode, you can return them in any order.

    Follow up: Could you do that without using any extra space? (Assume that the implicit
        stack space incurred due to recursion does not count).
-----------------

# 1397_Find_All_Good_Strings
# 1397. Find All Good Strings


-----------------

# 1451_Rearrange_Words_in_a_Sentence
# 1451. Rearrange Words in a Sentence


-----------------

# 382_Linked_List_Random_Node
# 382. Linked List Random Node

Given a singly linked list, return a random node's value from the linked list. Each node must
        have the same probability of being chosen.

    Follow up:
        What if the linked list is extremely large and its length is unknown to you? Could you solve
        this efficiently without using extra space?
    

    Example:
    // Init a singly linked list [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
solution.getRandom();
-----------------

# 1609_Even_Odd_Tree
# 1609. Even Odd Tree


-----------------

# 598_Range_Addition_II
# 598. Range Addition II

Given an m * n matrix M initialized with all 0's and several update operations.
    
    Operations are represented by a 2D array, and each operation is represented by an array with
        two positive integers a and b, which means M[i][j] should be added
            by one for all 0 <= i < a and 0 <= j < b. 
    You need to count and return the number of maximum integers in the matrix after performing
        all the operations.

    Example 1:
    Input:
m = 3, n = 3
operations = [[2,2],[3,3]]
Output: 4
Explanation:
Initially, M =
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]

After performing [2,2], M =
[[1, 1, 0],
 [1, 1, 0],
 [0, 0, 0]]

After performing [3,3], M =
[[2, 2, 1],
 [2, 2, 1],
 [1, 1, 1]]

So the maximum integer in M is 2, and there are four of it in M. So return 4.

    

    Note:
    
        The range of m and n is [1,40000].
        The range of a is [1,m], and the range of b is [1,n].
        The range of operations size won't exceed 10,000.
-----------------

# 64_Minimum_Path_Sum
# 64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top
        left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

    Example:

    Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
-----------------

# 1197_Minimum_Knight_Moves
# 1197. Minimum Knight Moves

In an infinite chess board with coordinates from -infinity to
        +infinity, you have a knight at square [0,
            0].

    A knight has 8 possible moves it can make, as illustrated below. Each move is two
        squares in a cardinal direction, then one square in an orthogonal direction.

    
        

    Return the minimum number of steps needed to move the knight to the square [x,
        y].  It is guaranteed the answer exists.

     
    Example 1:

    Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]

    Example 2:

    Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]

     
    Constraints:

    
        |x| + |y| <= 300
-----------------

# 955_Delete_Columns_to_Make_Sorted_II
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
-----------------

# 830_Positions_of_Large_Groups
# 830. Positions of Large Groups

In a string S of lowercase letters, these letters form consecutive
        groups of the same character.

    For example, a string like S = "abbxxxxzyy" has the groups "a",
        "bb", "xxxx", "z" and "yy".
    

    Call a group large if it has 3 or more characters.  We would like the starting
        and ending positions of every large group.

    The final answer should be in lexicographic order.

     

    Example 1:

    Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.

    Example 2:

    Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.

    Example 3:

    Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]

     

    Note:  1 <= S.length <= 1000
-----------------

# 1290_Convert_Binary_Number_in_a_Linked_List_to_Integer
# 1290. Convert Binary Number in a Linked List to Integer


-----------------

# 960_Delete_Columns_to_Make_Sorted_III
# 960. Delete Columns to Make Sorted III

We are given an array A of N lowercase letter strings, all of
        the same length.

    Now, we may choose any set of deletion indices, and for each string, we delete all the
        characters in those indices.

    For example, if we have an array A = ["babca","bbazb"] and
        deletion indices {0, 1, 4}, then the final array after deletions is ["bc","az"].
    

    Suppose we chose a set of deletion indices D such that after deletions, the
        final array has every element (row) in lexicographic order.

    For clarity, A[0] is in lexicographic order (ie. A[0][0] <= A[0][1]
        <= ... <= A[0][A[0].length - 1]), A[1] is in lexicographic order
        (ie. A[1][0] <= A[1][1] <= ... <= A[1][A[1].length - 1]), and so on.
    

    Return the minimum possible value of D.length.
-----------------

# 199_Binary_Tree_Right_Side_View
# 199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the
        values of the nodes you can see ordered from top to bottom.

    Example:

    Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
-----------------

# 1647_Minimum_Deletions_to_Make_Character_Frequencies_Unique
# 1647. Minimum Deletions to Make Character Frequencies Unique


-----------------

# 800_Similar_RGB_Color
# 800. Similar RGB Color

In the following, every capital letter represents some hexadecimal digit from 0
        to f.

    The red-green-blue color "#AABBCC" can be
        written as "#ABC" in shorthand.  For example,
        "#15c" is shorthand for the color "#1155cc".
    

    Now, say the similarity between two colors "#ABCDEF" and "#UVWXYZ"
        is -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2.

    Given the color "#ABCDEF", return a 7 character color that is
        most similar to #ABCDEF, and has a shorthand (that is, it can be represented as
        some "#XYZ"

    Example 1:
Input: color = "#09f166"
Output: "#11ee66"
Explanation: 
The similarity is -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73.
This is the highest among any shorthand color.

    Note:

    
        color is a string of length 7.
        color is a valid RGB color: for i > 0,
            color[i] is a hexadecimal digit from 0 to f
        Any answer which has the same (highest) similarity as the best answer will be
            accepted.
        
        All inputs and outputs should use lowercase letters, and the output is 7 characters.
-----------------

# 1113_Reported_Posts
# 1113. Reported Posts

Table: Actions

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| post_id       | int     |
| action_date   | date    |
| action        | enum    |
| extra         | varchar |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
The action column is an ENUM type of ('view', 'like', 'reaction', 'comment', 'report', 'share').
The extra column has optional information about the action such as a reason for report or a type of reaction. 

     

    Write an SQL query that reports the number of posts reported yesterday for each report
        reason. Assume today is 2019-07-05.

    The query result format is in the following example:

    Actions table:
+---------+---------+-------------+--------+--------+
| user_id | post_id | action_date | action | extra  |
+---------+---------+-------------+--------+--------+
| 1       | 1       | 2019-07-01  | view   | null   |
| 1       | 1       | 2019-07-01  | like   | null   |
| 1       | 1       | 2019-07-01  | share  | null   |
| 2       | 4       | 2019-07-04  | view   | null   |
| 2       | 4       | 2019-07-04  | report | spam   |
| 3       | 4       | 2019-07-04  | view   | null   |
| 3       | 4       | 2019-07-04  | report | spam   |
| 4       | 3       | 2019-07-02  | view   | null   |
| 4       | 3       | 2019-07-02  | report | spam   |
| 5       | 2       | 2019-07-04  | view   | null   |
| 5       | 2       | 2019-07-04  | report | racism |
| 5       | 5       | 2019-07-04  | view   | null   |
| 5       | 5       | 2019-07-04  | report | racism |
+---------+---------+-------------+--------+--------+

Result table:
+---------------+--------------+
| report_reason | report_count |
+---------------+--------------+
| spam          | 1            |
| racism        | 2            |
+---------------+--------------+
Note that we only care about report reasons with non zero number of reports.
-----------------

# 808_Soup_Servings
# 808. Soup Servings

There are two types of soup: type A and type B. Initially we have N ml of each
        type of soup. There are four kinds of operations:

    
        Serve 100 ml of soup A and 0 ml of soup B
        Serve 75 ml of soup A and 25 ml of soup B
        Serve 50 ml of soup A and 50 ml of soup B
        Serve 25 ml of soup A and 75 ml of soup B
    

    When we serve some soup, we give it to someone and we no longer have it.  Each turn, we
        will choose from the four operations with equal probability 0.25. If the remaining volume of
        soup is not enough to complete the operation, we will serve as much as we can.  We
        stop once we no longer have some quantity of both types of soup.

    Note that we do not have the operation where all 100 ml's of soup B are used first.  

    Return the probability that soup A will be empty first, plus half the probability that A
        and B become empty at the same time.

     

    Example:
Input: N = 50
Output: 0.625
Explanation:
If we choose the first two operations, A will become empty first. For the third operation, A and B will become empty at the same time. For the fourth operation, B will become empty first. So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.

    Notes: 

    
        0 <= N <= 10^9. 
        Answers within 10^-6 of the true value will be accepted as
            correct.
-----------------

# 317_Shortest_Distance_from_All_Buildings
# 317. Shortest Distance from All Buildings

You want to build a house on an empty land which reaches all buildings in the shortest
        amount of distance. You can only move up, down, left and right. You are given a 2D grid of
        values 0, 1 or 2, where:

    
        Each 0 marks an empty land which you can pass by freely.
        Each 1 marks a building which you cannot pass through.
        Each 2 marks an obstacle which you cannot pass through.
    

    Example:

    Input: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]

1 - 0 - 2 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 7

Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2),
             the point (1,2) is an ideal empty land to build a house, as the total
             travel distance of 3+3+1=7 is minimal. So return 7.

    Note:
        There will be at least one building. If it is not possible to build such house according to
        the above rules, return -1.
-----------------

# 1713_Minimum_Operations_to_Make_a_Subsequence
# 1713. Minimum Operations to Make a Subsequence


-----------------

# 1557_Minimum_Number_of_Vertices_to_Reach_All_Nodes
# 1557. Minimum Number of Vertices to Reach All Nodes


-----------------

# 173_Binary_Search_Tree_Iterator
# 173. Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with
        the root node of a BST.

    Calling next() will return the next smallest number in the BST.

     

    
    

    Example:

    

    BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false

     

    Note:

    
        next() and hasNext() should run in average O(1) time and uses
            O(h) memory, where h is the height of the tree.
        
        You may assume that next() call will always be valid, that
            is, there will be at least a next smallest number in the BST when next() is
            called.
-----------------

# 787_Cheapest_Flights_Within_K_Stops
# 787. Cheapest Flights Within K Stops

There are n cities connected by m flights. Each fight starts
        from city u and arrives at v with a price w.
    

    Now given all the cities and flights, together with starting city src and the
        destination dst, your task is to find the cheapest price from
        src to dst with up to k stops. If there is no such
        route, output -1.

    Example 1:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph looks like this:

The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.

    Example 2:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph looks like this:

The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.

    Note:

    
        The number of nodes n will be in range [1, 100],
            with nodes labeled from 0 to n - 1.
        
        The size of flights will be in range [0, n * (n - 1) /
            2].
        
        The format of each flight will be (src, dst,
            price).
        
        The price of each flight will be in the range [1, 10000].
        k is in the range of [0, n - 1].
        There will not be any duplicated flights or self cycles.
-----------------

# 1540_Can_Convert_String_in_K_Moves
# 1540. Can Convert String in K Moves


-----------------

# 731_My_Calendar_II
# 731. My Calendar II

Implement a MyCalendarTwo class to store your events. A new event can be added
        if adding the event will not cause a triple booking.

    Your class will have one method, book(int start, int end). Formally, this
        represents a booking on the half open interval [start, end), the range of real
        numbers x such that start <= x < end.

    A triple booking happens when three events have some non-empty intersection
        (ie., there is some time that is common to all 3 events.)

    For each call to the method MyCalendar.book, return true if the
        event can be added to the calendar successfully without causing a triple booking.
        Otherwise, return false and do not add the event to the calendar.
    Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start,
    end)

    Example 1:

    MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(50, 60); // returns true
MyCalendar.book(10, 40); // returns true
MyCalendar.book(5, 15); // returns false
MyCalendar.book(5, 10); // returns true
MyCalendar.book(25, 55); // returns true
Explanation:
The first two events can be booked.  The third event can be double booked.
The fourth event (5, 15) can't be booked, because it would result in a triple booking.
The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.

     

    Note:

    
        The number of calls to MyCalendar.book per test case will be at most 1000.
        
        In calls to MyCalendar.book(start, end), start and
            end are integers in the range [0, 10^9].
-----------------

# 1711_Count_Good_Meals
# 1711. Count Good Meals


-----------------

# 674_Longest_Continuous_Increasing_Subsequence
# 674. Longest Continuous Increasing Subsequence

Given an unsorted array of integers, find the length of longest continuous
        increasing subsequence (subarray).
    

    Example 1:
    Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.

    

    Example 2:
    Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1.

    

    Note:
        Length of the array will not exceed 10,000.
-----------------

# 767_Reorganize_String
# 767. Reorganize String

Given a string S, check if the letters can be rearranged so that two characters
        that are adjacent to each other are not the same.

    If possible, output any possible result.  If not possible, return the empty string.

    Example 1:

    Input: S = "aab"
Output: "aba"

    Example 2:

    Input: S = "aaab"
Output: ""

    Note:

    
        S will consist of lowercase letters and have length in range [1,
            500].
-----------------

# 1718_Construct_the_Lexicographically_Largest_Valid_Sequence
# 1718. Construct the Lexicographically Largest Valid Sequence


-----------------

# 1724_Checking_Existence_of_Edge_Length_Limited_Paths_II
# 1724. Checking Existence of Edge Length Limited Paths II


-----------------

# 1510_Stone_Game_IV
# 1510. Stone Game IV


-----------------

# 1795_Rearrange_Products_Table
# 1795. Rearrange Products Table


-----------------

# 580_Count_Student_Number_in_Departments
# 580. Count Student Number in Departments

A university uses 2 data tables, student and department, to store
        data about its students and the departments associated with each major.

    Write a query to print the respective department name and number of students majoring in each
        department for all departments in the department table (even ones with no
        current students).

    Sort your results by descending number of students; if two or more departments have the same
        number of students, then sort those departments alphabetically by department name.

    The student is described as follow:

    | Column Name  | Type      |
|--------------|-----------|
| student_id   | Integer   |
| student_name | String    |
| gender       | Character |
| dept_id      | Integer   |

    where student_id is the student's ID number, student_name is the student's name,
        gender is their gender, and dept_id is the department ID associated with their declared
        major.

    And the department table is described as below:

    | Column Name | Type    |
|-------------|---------|
| dept_id     | Integer |
| dept_name   | String  |

    where dept_id is the department's ID number and dept_name is the department name.

    Here is an example input:
        student table:

    | student_id | student_name | gender | dept_id |
|------------|--------------|--------|---------|
| 1          | Jack         | M      | 1       |
| 2          | Jane         | F      | 1       |
| 3          | Mark         | M      | 2       |

    department table:

    | dept_id | dept_name   |
|---------|-------------|
| 1       | Engineering |
| 2       | Science     |
| 3       | Law         |

    The Output should be:

    | dept_name   | student_number |
|-------------|----------------|
| Engineering | 2              |
| Science     | 1              |
| Law         | 0              |
-----------------

# 915_Partition_Array_into_Disjoint_Intervals
# 915. Partition Array into Disjoint Intervals

Given an array A, partition it into two (contiguous) subarrays left and
        right so that:

    
        Every element in left is less than or equal to every element in right.
        
        left and right are non-empty.
        left has the smallest possible size.
    

    Return the length of left after such a partitioning.  It
        is guaranteed that such a partitioning exists.

     

    Example 1:

    Input: [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
-----------------

# 1816_Truncate_Sentence
# 1816. Truncate Sentence


-----------------

# 448_Find_All_Numbers_Disappeared_in_an_Array
# 448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some
        elements appear twice and others appear once.

    Find all the elements of [1, n] inclusive that do not appear in this array.

    Could you do it without extra space and in O(n) runtime? You may assume the returned
        list does not count as extra space.

    Example:
    Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
-----------------

# 692_Top_K_Frequent_Words
# 692. Top K Frequent Words

Given a non-empty list of words, return the k most frequent elements.
    Your answer should be sorted by frequency from highest to lowest. If two words have the same
        frequency, then the word with the lower alphabetical order comes first.

    Example 1:
    Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

    

    Example 2:
    Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

    

    Note:
    
        You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
        
        Input words contain only lowercase letters.
    
    

    Follow up:
    
        Try to solve it in O(n log k) time and O(n) extra
            space.
-----------------

# 35_Search_Insert_Position
# 35. Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not,
        return the index where it would be if it were inserted in order.

    You may assume no duplicates in the array.

    Example 1:

    Input: [1,3,5,6], 5
Output: 2

    Example 2:

    Input: [1,3,5,6], 2
Output: 1

    Example 3:

    Input: [1,3,5,6], 7
Output: 4

    Example 4:

    Input: [1,3,5,6], 0
Output: 0
-----------------

# 1402_Reducing_Dishes
# 1402. Reducing Dishes


-----------------

# 1537_Get_the_Maximum_Score
# 1537. Get the Maximum Score


-----------------

# 1660_Correct_a_Binary_Tree
# 1660. Correct a Binary Tree


-----------------

# 1465_Maximum_Area_of_a_Piece_of_Cake_After_Horizontal_and_Vertical_Cuts
# 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts


-----------------

# 1076_Project_Employees_II
# 1076. Project Employees II

Table: Project

    +-------------+---------+
| Column Name | Type    |
+-------------+---------+
| project_id  | int     |
| employee_id | int     |
+-------------+---------+
(project_id, employee_id) is the primary key of this table.
employee_id is a foreign key to Employee table.

    Table: Employee

    +------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| employee_id      | int     |
| name             | varchar |
| experience_years | int     |
+------------------+---------+
employee_id is the primary key of this table.

     

    Write an SQL query that reports all the projects that have the most
        employees.

    The query result format is in the following example:

    Project table:
+-------------+-------------+
| project_id  | employee_id |
+-------------+-------------+
| 1           | 1           |
| 1           | 2           |
| 1           | 3           |
| 2           | 1           |
| 2           | 4           |
+-------------+-------------+

Employee table:
+-------------+--------+------------------+
| employee_id | name   | experience_years |
+-------------+--------+------------------+
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 1                |
| 4           | Doe    | 2                |
+-------------+--------+------------------+

Result table:
+-------------+
| project_id  |
+-------------+
| 1           |
+-------------+
The first project has 3 employees while the second one has 2.
-----------------

# 476_Number_Complement
# 476. Number Complement

Given a positive integer, output its complement number. The complement strategy is to flip
        the bits of its binary representation.

    Note:
    
        The given integer is guaranteed to fit within the range of a 32-bit signed integer.
        You could assume no leading zero bit in the integer’s binary representation.
    
    

    Example 1:
    Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

    

    Example 2:
    Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
-----------------

# 372_Super_Pow
# 372. Super Pow

Your task is to calculate ab mod 1337 where a is a positive
        integer and b is an extremely large positive integer given in the form of an array.
    

    Example 1:
-----------------

# 1805_Number_of_Different_Integers_in_a_String
# 1805. Number of Different Integers in a String


-----------------

# 759_Employee_Free_Time
# 759. Employee Free Time

We are given a list schedule of employees, which represents the working time for
        each employee.

    Each employee has a list of non-overlapping Intervals, and these intervals are
        in sorted order.

    Return the list of finite intervals representing common, positive-length free time for
        all employees, also in sorted order.

    Example 1:

    Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
Output: [[3,4]]
Explanation:
There are a total of three employees, and all common
free time intervals would be [-inf, 1], [3, 4], [10, inf].
We discard any intervals that contain inf as they aren't finite.

     

    Example 2:

    Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
Output: [[5,6],[7,9]]

     

    (Even though we are representing Intervals in the form [x, y], the
        objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start
            = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined.)
    

    Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero
        length.

    Note:

    
        schedule and schedule[i] are lists with lengths in range
            [1, 50].
        
        0 <= schedule[i].start < schedule[i].end <= 10^8.
    

    NOTE: input types have been changed on June 17, 2019. Please reset to
        default code definition to get new method signature.
-----------------

# 1376_Time_Needed_to_Inform_All_Employees
# 1376. Time Needed to Inform All Employees


-----------------

# 760_Find_Anagram_Mappings
# 760. Find Anagram Mappings

Given two lists Aand B, and B is an anagram of A.
        B is an anagram of A means B is made by randomizing
        the order of the elements in A.
    
    
        We want to find an index mapping P, from A to
        B. A mapping P[i] = j means the ith element in A
        appears in B at index j.
    
    
        These lists A and B may contain duplicates. If there are multiple
        answers, output any of them.
    

    
        For example, given
    A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]

    
    We should return
    [1, 4, 3, 2, 0]

    as P[0] = 1 because the 0th element of A appears at
    B[1],
    and P[1] = 4 because the 1st element of A appears at
    B[4],
    and so on.
    

    Note:
    
        A, B have equal lengths in range [1, 100].
        A[i], B[i] are integers in range [0, 10^5].
-----------------

# 778_Swim_in_Rising_Water
# 778. Swim in Rising Water

On an N x N grid, each square grid[i][j] represents the elevation
        at that point (i,j).

    Now rain starts to fall. At time t, the depth of the water everywhere is
        t. You can swim from a square to another 4-directionally adjacent square if and
        only if the elevation of both squares individually are at most t. You
        can swim infinite distance in zero time. Of course, you must stay within the boundaries of
        the grid during your swim.

    You start at the top left square (0, 0). What is the least time until you can
        reach the bottom right square (N-1, N-1)?

    Example 1:

    Input: [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.

You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.

    Example 2:

    Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation:
 0  1  2  3  4
24 23 22 21  5
12 13 14 15 16
11 17 18 19 20
10  9  8  7  6

The final route is marked in bold.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

    Note:

    
        2 <= N <= 50.
        grid[i][j] is a permutation of [0, ..., N*N - 1].
-----------------

# 337_House_Robber_III
# 337. House Robber III

The thief has found himself a new place for his thievery again. There is only one entrance to
        this area, called the "root." Besides the root, each house has one and only one
        parent house. After a tour, the smart thief realized that "all houses in this place
        forms a binary tree". It will automatically contact the police if two directly-linked
        houses were broken into on the same night.

    Determine the maximum amount of money the thief can rob tonight without alerting the
        police.

    Example 1:

    Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \
     3   1

Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

    Example 2:

    Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
-----------------

# 1532_The_Most_Recent_Three_Orders
# 1532. The Most Recent Three Orders


-----------------

# 1766_Tree_of_Coprimes
# 1766. Tree of Coprimes


-----------------

# 1105_Filling_Bookcase_Shelves
# 1105. Filling Bookcase Shelves

We have a sequence of books: the i-th book has thickness books[i][0]
        and height books[i][1].

    We want to place these books in order onto bookcase shelves that have
        total width shelf_width.

    We choose some of the books to place on this shelf (such that the sum of their thickness
        is <= shelf_width), then build another level of shelf of the bookcase so
        that the total height of the bookcase has increased by the maximum height of the books we
        just put down.  We repeat this process until there are no more books to place.

    Note again that at each step of the above process, the order of the books we place is
        the same order as the given sequence of books.  For example, if we have an ordered
        list of 5 books, we might place the first and second book onto the first shelf, the
        third book on the second shelf, and the fourth and fifth book on the last shelf.

    Return the minimum possible height that the total bookshelf can be after placing shelves in
        this manner.

     
    Example 1:
    
    Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelf_width = 4
Output: 6
Explanation:
The sum of the heights of the 3 shelves are 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.

     
    Constraints:

    
        1 <= books.length <= 1000
        1 <= books[i][0] <= shelf_width <= 1000
        1 <= books[i][1] <= 1000
-----------------

# 747_Largest_Number_At_Least_Twice_of_Others
# 747. Largest Number At Least Twice of Others

In a given integer array nums, there is always exactly one largest element.

    Find whether the largest element in the array is at least twice as much as every other number
        in the array.

    If it is, return the index of the largest element, otherwise return -1.

    Example 1:

    Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.

     

    Example 2:

    Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.

     

    Note:

    
        nums will have a length in the range [1, 50].
        Every nums[i] will be an integer in the range [0, 99].
-----------------

# 1803_Count_Pairs_With_XOR_in_a_Range
# 1803. Count Pairs With XOR in a Range


-----------------

# 1394_Find_Lucky_Integer_in_an_Array
# 1394. Find Lucky Integer in an Array


-----------------

# 292_Nim_Game
# 292. Nim Game

You are playing the following Nim Game with your friend: There is a heap of stones on the
        table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last
        stone will be the winner. You will take the first turn to remove the stones.

    Both of you are very clever and have optimal strategies for the game. Write a function to
        determine whether you can win the game given the number of stones in the heap.

    Example:

    Input: 4
Output: false
Explanation: If there are 4 stones in the heap, then you will never win the game;
             No matter 1, 2, or 3 stones you remove, the last stone will always be
             removed by your friend.
-----------------

# 310_Minimum_Height_Trees
# 310. Minimum Height Trees

For an undirected graph with tree characteristics, we can choose any node as the root. The
        result graph is then a rooted tree. Among all possible rooted trees, those with minimum
        height are called minimum height trees (MHTs). Given such a graph, write a function to find
        all the MHTs and return a list of their root labels.

    Format
        The graph contains n nodes which are labeled from 0 to n -
            1. You will be given the number n and a list of undirected edges
        (each edge is a pair of labels).

    You can assume that no duplicate edges will appear in edges. Since all edges are
        undirected, [0, 1] is the same as [1, 0] and thus will not appear
        together in edges.

    Example 1 :

    Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3

Output: [1]

    Example 2 :

    Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5

Output: [3, 4]

    Note:

    
        According to the definition of tree on Wikipedia: “a tree
            is an undirected graph in which any two vertices are connected by exactly one
            path. In other words, any connected graph without simple cycles is a tree.”
        
        The height of a rooted tree is the number of edges on the longest downward path between
            the root and a leaf.
-----------------

# 614_Second_Degree_Follower
# 614. Second Degree Follower

In facebook, there is a follow table with two columns: followee, follower.
    

    Please write a sql query to get the amount of each follower’s follower if he/she has
        one.

    For example:

    +-------------+------------+
| followee    | follower   |
+-------------+------------+
|     A       |     B      |
|     B       |     C      |
|     B       |     D      |
|     D       |     E      |
+-------------+------------+

    should output:

    +-------------+------------+
| follower    | num        |
+-------------+------------+
|     B       |  2         |
|     D       |  1         |
+-------------+------------+

    Explaination:
    Both B and D exist in the follower list, when as a followee, B's follower is C and D, and D's
    follower is E. A does not exist in follower list.
     

     
    Note:
    Followee would not follow himself/herself in all cases.
    Please display the result in follower's alphabet order.
-----------------

# 925_Long_Pressed_Name
# 925. Long Pressed Name

Your friend is typing his name into a keyboard.  Sometimes, when
        typing a character c, the key might get long pressed, and the
        character will be typed 1 or more times.

    You examine the typed characters of the keyboard.  Return
        True if it is possible that it was your friends name, with some characters
        (possibly none) being long pressed.

     

    Example 1:

    Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
-----------------

# 544_Output_Contest_Matches
# 544. Output Contest Matches

During the NBA playoffs, we always arrange the rather strong team to play with the rather
        weak team, like make the rank 1 team play with the rank nth team, which is a good
        strategy to make the contest more interesting. Now, you're given n teams, you need to
        output their final contest matches in the form of a string.
    

    The n teams are given in the form of positive integers from 1 to n, which represents
        their initial rank. (Rank 1 is the strongest team and Rank n is the weakest team.) We'll use
        parentheses('(', ')') and commas(',') to represent the contest team pairing -
        parentheses('(' , ')') for pairing and commas(',') for partition. During the pairing process
        in each round, you always need to follow the strategy of making the rather strong one pair
        with the rather weak one.

    Example 1:
    Input: 2
Output: (1,2)
Explanation:
Initially, we have the team 1 and the team 2, placed like: 1,2.
Then we pair the team (1,2) together with '(', ')' and ',', which is the final answer.

    

    Example 2:
    Input: 4
Output: ((1,4),(2,3))
Explanation:
In the first round, we pair the team 1 and 4, the team 2 and 3 together, as we need to make the strong team and weak team together.
And we got (1,4),(2,3).
In the second round, the winners of (1,4) and (2,3) need to play again to generate the final winner, so you need to add the paratheses outside them.
And we got the final answer ((1,4),(2,3)).

    

    Example 3:
    Input: 8
Output: (((1,8),(4,5)),((2,7),(3,6)))
Explanation:
First round: (1,8),(2,7),(3,6),(4,5)
Second round: ((1,8),(4,5)),((2,7),(3,6))
Third round: (((1,8),(4,5)),((2,7),(3,6)))
Since the third round will generate the final winner, you need to output the answer (((1,8),(4,5)),((2,7),(3,6))).

    

    Note:
    
        The n is in range [2, 212].
        We ensure that the input n can be converted into the form 2k, where k
            is a positive integer.
-----------------

# 370_Range_Addition
# 370. Range Addition

Assume you have an array of length n initialized with all 0's and
        are given k update operations.

    Each operation is represented as a triplet: [startIndex, endIndex, inc] which
        increments each element of subarray A[startIndex ... endIndex] (startIndex and
        endIndex inclusive) with inc.

    Return the modified array after all k operations were executed.

    Example:

    Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
Output: [-2,0,3,5,3]

    Explanation:

    Initial state:
[0,0,0,0,0]

After applying operation [1,3,2]:
[0,2,2,2,0]

After applying operation [2,4,3]:
[0,2,5,5,3]

After applying operation [0,2,-2]:
[-2,0,3,5,3]
-----------------

# 1321_Restaurant_Growth
# 1321. Restaurant Growth


-----------------

# 123_Best_Time_to_Buy_and_Sell_Stock_III
# 123. Best Time to Buy and Sell Stock III

Say you have an array for which the ith element is the price of a given
        stock on day i.

    Design an algorithm to find the maximum profit. You may complete at most two
        transactions.

    Note: You may not engage in multiple transactions at the same time
        (i.e., you must sell the stock before you buy again).

    Example 1:

    Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

    Example 2:

    Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

    Example 3:

    Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
-----------------

# 658_Find_K_Closest_Elements
# 658. Find K Closest Elements

Given a sorted array, two integers k and x, find the
        k closest elements to x in the array. The result should also be
        sorted in ascending order.
        If there is a tie, the smaller elements are always preferred.
    

    Example 1:
    Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]

    

    Example 2:
    Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]

    

    Note:
    
        The value k is positive and will always be smaller than the length of the sorted
            array.
        
         Length of the given array is positive and will not exceed 104
         Absolute value of elements in the array and x will not exceed 104
    
    

    

    
        UPDATE (2017/9/19):
        The arr parameter had been changed to an array of integers (instead of a list
        of integers). Please reload the code definition to get the latest changes.
-----------------

# 1143_Longest_Common_Subsequence
# 1143. Longest Common Subsequence

Given two strings text1 and text2, return the length of their
        longest common subsequence.

    A subsequence of a string is a new string generated from the original string with
        some characters(can be none) deleted without changing the relative order of the remaining
        characters. (eg, "ace" is a subsequence of "abcde" while "aec"
        is not). A common subsequence of two strings is a subsequence that is
        common to both strings.

     

    If there is no common subsequence, return 0.

     
    Example 1:

    Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

    Example 2:

    Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

    Example 3:

    Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

     
    Constraints:

    
        1 <= text1.length <= 1000
        1 <= text2.length <= 1000
        The input strings consist of lowercase English characters only.
-----------------

# 1745_Palindrome_Partitioning_IV
# 1745. Palindrome Partitioning IV


-----------------

# 1093_Statistics_from_a_Large_Sample
# 1093. Statistics from a Large Sample

We sampled integers between 0 and 255, and stored the results in an
        array count:  count[k] is the number of integers we sampled
        equal to k.

    Return the minimum, maximum, mean, median, and mode of the sample respectively, as an array
        of floating point numbers.  The mode is guaranteed to be unique.

    (Recall that the median of a sample is:

    
        The middle element, if the elements of the sample were sorted and the number of
            elements is odd;
        The average of the middle two elements, if the elements of the sample were sorted
            and the number of elements is even.)
    

     
    Example 1:
    Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,3.00000,2.37500,2.50000,3.00000]

    Example 2:
    Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,4.00000,2.18182,2.00000,1.00000]

     
    Constraints:

    
        count.length == 256
        1 <= sum(count) <= 10^9
        The mode of the sample that count represents is unique.
        Answers within 10^-5 of the true value will be accepted as correct.
-----------------

# 1523_Count_Odd_Numbers_in_an_Interval_Range
# 1523. Count Odd Numbers in an Interval Range


-----------------

# 470_Implement_Rand10()_Using_Rand7()
# 470. Implement Rand10() Using Rand7()

Given a function rand7 which generates a uniform random integer in the range 1
        to 7, write a function rand10 which generates a uniform random integer in
        the range 1 to 10.

    Do NOT use system's Math.random().
-----------------

# 1625_Lexicographically_Smallest_String_After_Applying_Operations
# 1625. Lexicographically Smallest String After Applying Operations


-----------------

# 858_Mirror_Reflection
# 858. Mirror Reflection

There is a special square room with mirrors on each of the four walls.  Except
        for the southwest corner, there are receptors on each of the remaining corners,
        numbered 0, 1, and 2.

    The square room has walls of length p, and a laser ray from the southwest corner first
        meets the east wall at a distance q from the 0th receptor.
    

    Return the number of the receptor that the ray meets first.  (It is guaranteed that the
        ray will meet a receptor eventually.)
-----------------

# 1193_Monthly_Transactions_I
# 1193. Monthly Transactions I

Table: Transactions

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| country       | varchar |
| state         | enum    |
| amount        | int     |
| trans_date    | date    |
+---------------+---------+
id is the primary key of this table.
The table has information about incoming transactions.
The state column is an enum of type ["approved", "declined"].

     

    Write an SQL query to find for each month and country, the number of transactions and their
        total amount, the number of approved transactions and their total amount.

    The query result format is in the following example:

    Transactions table:
+------+---------+----------+--------+------------+
| id   | country | state    | amount | trans_date |
+------+---------+----------+--------+------------+
| 121  | US      | approved | 1000   | 2018-12-18 |
| 122  | US      | declined | 2000   | 2018-12-19 |
| 123  | US      | approved | 2000   | 2019-01-01 |
| 124  | DE      | approved | 2000   | 2019-01-07 |
+------+---------+----------+--------+------------+

Result table:
+----------+---------+-------------+----------------+--------------------+-----------------------+
| month    | country | trans_count | approved_count | trans_total_amount | approved_total_amount |
+----------+---------+-------------+----------------+--------------------+-----------------------+
| 2018-12  | US      | 2           | 1              | 3000               | 1000                  |
| 2019-01  | US      | 1           | 1              | 2000               | 2000                  |
| 2019-01  | DE      | 1           | 1              | 2000               | 2000                  |
+----------+---------+-------------+----------------+--------------------+-----------------------+
-----------------

# 1308_Running_Total_for_Different_Genders
# 1308. Running Total for Different Genders


-----------------

# 1335_Minimum_Difficulty_of_a_Job_Schedule
# 1335. Minimum Difficulty of a Job Schedule


-----------------

# 1338_Reduce_Array_Size_to_The_Half
# 1338. Reduce Array Size to The Half


-----------------

# 1294_Weather_Type_in_Each_Country
# 1294. Weather Type in Each Country


-----------------

# 1026_Maximum_Difference_Between_Node_and_Ancestor
# 1026. Maximum Difference Between Node and Ancestor

Given the root of a binary tree, find the maximum value V for which
        there exists different nodes A and B where V
            = |A.val - B.val| and A is an ancestor of B.

    (A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is
        an ancestor of B.)

     

    Example 1:

    

    Input: [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: 
We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

     

    Note:

    
        The number of nodes in the tree is between 2 and 5000.
        Each node will have value between 0 and 100000.
-----------------

# 362_Design_Hit_Counter
# 362. Design Hit Counter

Design a hit counter which counts the number of hits received in the past 5 minutes.

    Each function accepts a timestamp parameter (in seconds granularity) and you may assume that
        calls are being made to the system in chronological order (ie, the timestamp is
        monotonically increasing). You may assume that the earliest timestamp starts at 1.

    It is possible that several hits arrive roughly at the same time.

    Example:

    HitCounter counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301);

    Follow up:
        What if the number of hits per second could be very large? Does your design scale?
-----------------

# 1642_Furthest_Building_You_Can_Reach
# 1642. Furthest Building You Can Reach


-----------------

# 479_Largest_Palindrome_Product
# 479. Largest Palindrome Product

Find the largest palindrome made from the product of two n-digit numbers.

    Since the result could be very large, you should return the largest palindrome mod 1337.

     

    Example:

    Input: 2

    Output: 987

    Explanation: 99 x 91 = 9009, 9009 % 1337 = 987

     

    Note:

    The range of n is [1,8].
-----------------

# 439_Ternary_Expression_Parser
# 439. Ternary Expression Parser

Given a string representing arbitrarily nested ternary expressions, calculate the result of
        the expression. You can always assume that the given expression is valid and only consists
        of digits 0-9, ?, :, T and
        F (T and F represent True and False respectively).

    Note:
    
        The length of the given string is ≤ 10000.
        Each number will contain only one digit.
        The conditional expressions group right-to-left (as usual in most languages).
        The condition will always be either T or F. That is, the
            condition will never be a digit.
        
        The result of the expression will always evaluate to either a digit 0-9,
            T or F.
        
    
    

    
        Example 1:
    Input: "T?2:3"

Output: "2"

Explanation: If true, then result is 2; otherwise result is 3.

    

    
        Example 2:
    Input: "F?1:T?4:5"

Output: "4"

Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:

             "(F ? 1 : (T ? 4 : 5))"                   "(F ? 1 : (T ? 4 : 5))"
          -> "(F ? 1 : 4)"                 or       -> "(T ? 4 : 5)"
          -> "4"                                    -> "4"

    

    
        Example 3:
    Input: "T?T?F:5:3"

Output: "F"

Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:

             "(T ? (T ? F : 5) : 3)"                   "(T ? (T ? F : 5) : 3)"
          -> "(T ? F : 3)"                 or       -> "(T ? F : 5)"
          -> "F"                                    -> "F"
-----------------

# 1447_Simplified_Fractions
# 1447. Simplified Fractions


-----------------

# 376_Wiggle_Subsequence
# 376. Wiggle Subsequence

A sequence of numbers is called a wiggle sequence if the differences between
        successive numbers strictly alternate between positive and negative. The first difference
        (if one exists) may be either positive or negative. A sequence with fewer than two elements
        is trivially a wiggle sequence.

    For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3)
        are alternately positive and negative. In contrast, [1,4,7,2,5] and [1,7,4,5,5]
        are not wiggle sequences, the first because its first two differences are positive and the
        second because its last difference is zero.

    Given a sequence of integers, return the length of the longest subsequence that is a wiggle
        sequence. A subsequence is obtained by deleting some number of elements (eventually, also
        zero) from the original sequence, leaving the remaining elements in their original
        order.

    Example 1:

    Input: [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence.
-----------------

# 457_Circular_Array_Loop
# 457. Circular Array Loop

You are given a circular array nums of positive and negative integers. If
        a number k at an index is positive, then move forward k steps. Conversely, if
        it's negative (-k), move backward k steps. Since the array is
        circular, you may assume that the last element's next element is the first element, and
        the first element's previous element is the last element.

    Determine if there is a loop (or a cycle) in nums. A cycle must start and end at
        the same index and the cycle's length > 1. Furthermore, movements in a cycle must all
        follow a single direction. In other words, a cycle must not consist of both forward and
        backward movements.

     

    Example 1:

    Input: [2,-1,1,2,2]
Output: true
Explanation: There is a cycle, from index 0 -> 2 -> 3 -> 0. The cycle's length is 3.

    Example 2:

    Input: [-1,2]
Output: false
Explanation: The movement from index 1 -> 1 -> 1 ... is not a cycle, because the cycle's length is 1. By definition the cycle's length must be greater than 1.

    Example 3:

    Input: [-2,1,-1,-2,-2]
Output: false
Explanation: The movement from index 1 -> 2 -> 1 -> ... is not a cycle, because movement from index 1 -> 2 is a forward movement, but movement from index 2 -> 1 is a backward movement. All movements in a cycle must follow a single direction.

     

    Note:

    
        -1000 ≤ nums[i] ≤ 1000
        nums[i] ≠ 0
        1 ≤ nums.length ≤ 5000
    

     

    Follow up:

    Could you solve it in O(n) time complexity and O(1) extra space
        complexity?
-----------------

# 203_Remove_Linked_List_Elements
# 203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

    Example:

    Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
-----------------

# 1606_Find_Servers_That_Handled_Most_Number_of_Requests
# 1606. Find Servers That Handled Most Number of Requests


-----------------

# 136_Single_Number
# 136. Single Number

Given a non-empty array of integers, every element appears
        twice except for one. Find that single one.

    Note:

    Your algorithm should have a linear runtime complexity. Could you implement it without using
        extra memory?

    Example 1:

    Input: [2,2,1]
Output: 1

    Example 2:

    Input: [4,1,2,1,2]
Output: 4
-----------------

# 691_Stickers_to_Spell_Word
# 691. Stickers to Spell Word

We are given N different types of stickers. Each sticker has a lowercase English word on it.
    
    
        You would like to spell out the given target string by cutting individual
        letters from your collection of stickers and rearranging them.
    
    
        You can use each sticker more than once if you want, and you have infinite quantities of
        each sticker.
    
    
        What is the minimum number of stickers that you need to spell out the target?
        If the task is impossible, return -1.
    

    Example 1:
    Input:
    ["with", "example", "science"], "thehat"

    

    Output:
    3

    

    Explanation:
    We can use 2 "with" stickers, and 1 "example" sticker.
After cutting and rearrange the letters of those stickers, we can form the target "thehat".
Also, this is the minimum number of stickers necessary to form the target string.

    

    Example 2:
    Input:
    ["notice", "possible"], "basicbasic"

    

    Output:
    -1

    

    Explanation:
    We can't form the target "basicbasic" from cutting letters from the given stickers.

    

    Note:
    stickers has length in the range [1, 50].
    stickers consists of lowercase English words (without apostrophes).
    target has length in the range [1, 15], and consists of lowercase
        English letters.
    
    In all test cases, all words were chosen randomly from the 1000 most common US
        English words, and the target was chosen as a concatenation of two random words.
    
    The time limit may be more challenging than usual. It is expected that a 50 sticker test
        case can be solved within 35ms on average.
-----------------

# 1554_Strings_Differ_by_One_Character
# 1554. Strings Differ by One Character


-----------------

# 1400_Construct_K_Palindrome_Strings
# 1400. Construct K Palindrome Strings


-----------------

# 1784_Check_if_Binary_String_Has_at_Most_One_Segment_of_Ones
# 1784. Check if Binary String Has at Most One Segment of Ones


-----------------

# 701_Insert_into_a_Binary_Search_Tree
# 701. Insert into a Binary Search Tree

Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert
        the value into the BST. Return the root node of the BST after the insertion. It is
        guaranteed that the new value does not exist in the original BST.

    Note that there may exist multiple valid ways for the insertion, as long as the
        tree remains a BST after insertion. You can return any of them.

    For example, 

    Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5

    You can return this binary search tree:

             4
       /   \
      2     7
     / \   /
    1   3 5

    This tree is also valid:

             5
       /   \
      2     7
     / \
    1   3
         \
          4
-----------------

# 1650_Lowest_Common_Ancestor_of_a_Binary_Tree_III
# 1650. Lowest Common Ancestor of a Binary Tree III


-----------------

# 990_Satisfiability_of_Equality_Equations
# 990. Satisfiability of Equality Equations

Given an array equations of strings that represent
        relationships between variables, each string equations[i] has length
        4 and takes one of two different forms: "a==b" or "a!=b". 
        Here, a and b are lowercase letters (not necessarily different)
        that represent one-letter variable names.

    Return true if and only if it is possible to assign integers to variable
        names so as to satisfy all the given equations.
-----------------

# 311_Sparse_Matrix_Multiplication
# 311. Sparse Matrix Multiplication

Given two sparse
        matrices A and B, return the result of AB.

    You may assume that A's column number is equal to B's row number.

    Example:

    Input:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

Output:

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
-----------------

# 249_Group_Shifted_Strings
# 249. Group Shifted Strings

Given a string, we can "shift" each of its letter to its successive letter, for
        example: "abc" -> "bcd". We can keep "shifting"
        which forms the sequence:

    "abc" -> "bcd" -> ... -> "xyz"

    Given a list of strings which contains only lowercase alphabets, group all strings that
        belong to the same shifting sequence.

    Example:

    Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output:
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
-----------------

# 1039_Minimum_Score_Triangulation_of_Polygon
# 1039. Minimum Score Triangulation of Polygon

Given N, consider a convex N-sided polygon with vertices labelled
        A[0], A[i], ..., A[N-1] in clockwise order.

    Suppose you triangulate the polygon into N-2 triangles.  For each triangle,
        the value of that triangle is the product of the labels of the
        vertices, and the total score of the triangulation is the sum of these values over
        all N-2 triangles in the triangulation.

    Return the smallest possible total score that you can achieve with some triangulation of the
        polygon.
-----------------

# 1577_Number_of_Ways_Where_Square_of_Number_Is_Equal_to_Product_of_Two_Numbers
# 1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers


-----------------

# 1219_Path_with_Maximum_Gold
# 1219. Path with Maximum Gold

In a gold mine grid of size m * n, each cell in this mine
        has an integer representing the amount of gold in that cell, 0 if it
        is empty.

    Return the maximum amount of gold you can collect under the conditions:

    
        Every time you are located in a cell you will collect all the gold in that cell.
        From your position you can walk one step to the left, right, up or down.
        You can't visit the same cell more than once.
        Never visit a cell with 0 gold.
        You can start and stop collecting gold from any position in the
            grid that has some gold.
        
    

     
    Example 1:

    Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.

    Example 2:

    Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

     
    Constraints:

    
        1 <= grid.length, grid[i].length <= 15
        0 <= grid[i][j] <= 100
        There are at most 25 cells containing gold.
-----------------

# 831_Masking_Personal_Information
# 831. Masking Personal Information

We are given a personal information string S, which may represent either
        an email address or a phone number.

    We would like to mask this personal information according to the following
        rules:

    
        1. Email address:

    We define a name to be a string of length ≥ 2
        consisting of only lowercase letters a-z or uppercase letters A-Z.
    

    An email address starts with a name, followed by the symbol '@',
        followed by a name, followed by the dot '.' and followed
        by a name. 

    All email addresses are guaranteed to be valid and in the format of "name1@name2.name3".
    

    To mask an email, all names must be converted to lowercase and all
        letters between the first and last letter of the first name must be replaced by 5
        asterisks '*'.

    
        2. Phone number:

    A phone number is a string consisting of only the digits 0-9 or the
        characters from the set {'+', '-', '(', ')', ' '}. You
        may assume a phone number contains 10 to 13 digits.

    The last 10 digits make up the local number, while the digits before those make up the
        country code. Note that the country code is optional. We want to expose only the last 4
        digits and mask all other digits.

    The local number should be formatted and masked as "***-***-1111", where
        1 represents the exposed digits.

    To mask a phone number with country code like "+111 111 111 1111", we
        write it in the form "+***-***-***-1111".  The
        '+' sign and the first '-' sign before
        the local number should only exist if there is a country code.  For example, a 12 digit
        phone number mask should start with "+**-".

    Note that extraneous characters like "(", ")", " ",
        as well as extra dashes or plus signs not part of the above formatting scheme should be
        removed.

     

    Return the correct "mask" of the information provided.

     

    Example 1:

    Input: "LeetCode@LeetCode.com"
Output: "l*****e@leetcode.com"
Explanation: All names are converted to lowercase, and the letters between the
             first and last letter of the first name is replaced by 5 asterisks.
             Therefore, "leetcode" -> "l*****e".

    Example 2:

    Input: "AB@qq.com"
Output: "a*****b@qq.com"
Explanation: There must be 5 asterisks between the first and last letter
             of the first name "ab". Therefore, "ab" -> "a*****b".

    Example 3:

    Input: "1(234)567-890"
Output: "***-***-7890"
Explanation: 10 digits in the phone number, which means all digits make up the local number.

    Example 4:

    Input: "86-(10)12345678"
Output: "+**-***-***-5678"
Explanation: 12 digits, 2 digits for country code and 10 digits for local number.

    Notes:

    
        S.length <= 40.
        Emails have length at least 8.
        Phone numbers have length at least 10.
-----------------

# 1281_Subtract_the_Product_and_Sum_of_Digits_of_an_Integer
# 1281. Subtract the Product and Sum of Digits of an Integer


-----------------

# 1567_Maximum_Length_of_Subarray_With_Positive_Product
# 1567. Maximum Length of Subarray With Positive Product


-----------------

# 1580_Put_Boxes_Into_the_Warehouse_II
# 1580. Put Boxes Into the Warehouse II


-----------------

# 357_Count_Numbers_with_Unique_Digits
# 357. Count Numbers with Unique Digits

Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤
        x < 10n.
-----------------

# 1132_Reported_Posts_II
# 1132. Reported Posts II

Table: Actions

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| post_id       | int     |
| action_date   | date    |
| action        | enum    |
| extra         | varchar |
+---------------+---------+
There is no primary key for this table, it may have duplicate rows.
The action column is an ENUM type of ('view', 'like', 'reaction', 'comment', 'report', 'share').
The extra column has optional information about the action such as a reason for report or a type of reaction. 

    Table: Removals

    +---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| post_id       | int     |
| remove_date   | date    |
+---------------+---------+
post_id is the primary key of this table.
Each row in this table indicates that some post was removed as a result of being reported or as a result of an admin review.

     

    Write an SQL query to find the average for daily percentage of posts that got removed
        after being reported as spam, rounded to 2 decimal places.

    The query result format is in the following example:

    Actions table:
+---------+---------+-------------+--------+--------+
| user_id | post_id | action_date | action | extra  |
+---------+---------+-------------+--------+--------+
| 1       | 1       | 2019-07-01  | view   | null   |
| 1       | 1       | 2019-07-01  | like   | null   |
| 1       | 1       | 2019-07-01  | share  | null   |
| 2       | 2       | 2019-07-04  | view   | null   |
| 2       | 2       | 2019-07-04  | report | spam   |
| 3       | 4       | 2019-07-04  | view   | null   |
| 3       | 4       | 2019-07-04  | report | spam   |
| 4       | 3       | 2019-07-02  | view   | null   |
| 4       | 3       | 2019-07-02  | report | spam   |
| 5       | 2       | 2019-07-03  | view   | null   |
| 5       | 2       | 2019-07-03  | report | racism |
| 5       | 5       | 2019-07-03  | view   | null   |
| 5       | 5       | 2019-07-03  | report | racism |
+---------+---------+-------------+--------+--------+

Removals table:
+---------+-------------+
| post_id | remove_date |
+---------+-------------+
| 2       | 2019-07-20  |
| 3       | 2019-07-18  |
+---------+-------------+

Result table:
+-----------------------+
| average_daily_percent |
+-----------------------+
| 75.00                 |
+-----------------------+
The percentage for 2019-07-04 is 50% because only one post of two spam reported posts was removed.
The percentage for 2019-07-02 is 100% because one post was reported as spam and it was removed.
The other days had no spam reports so the average is (50 + 100) / 2 = 75%
Note that the output is only one number and that we do not care about the remove dates.
-----------------

# 900_RLE_Iterator
# 900. RLE Iterator

Write an iterator that iterates through a run-length encoded sequence.

    The iterator is initialized by RLEIterator(int[] A), where A is a
        run-length encoding of some sequence.  More specifically, for all even i, A[i]
        tells us the number of times that the non-negative integer value A[i+1] is
        repeated in the sequence.

    The iterator supports one function: next(int n), which exhausts the next
        n elements (n >= 1) and returns the last element exhausted
        in this way.  If there is no element left to exhaust, next returns
        -1 instead.

    For example, we start with A = [3,8,0,9,2,5], which is a run-length encoding of
        the sequence [8,8,8,5,5].  This is because the sequence can be read as "three
        eights, zero nines, two fives".

     

    Example 1:

    Input: ["RLEIterator","next","next","next","next"], [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
Output: [null,8,8,5,-1]
Explanation: 
RLEIterator is initialized with RLEIterator([3,8,0,9,2,5]).
This maps to the sequence [8,8,8,5,5].
RLEIterator.next is then called 4 times:

.next(2) exhausts 2 terms of the sequence, returning 8.  The remaining sequence is now [8, 5, 5].

.next(1) exhausts 1 term of the sequence, returning 8.  The remaining sequence is now [5, 5].

.next(1) exhausts 1 term of the sequence, returning 5.  The remaining sequence is now [5].

.next(2) exhausts 2 terms, returning -1.  This is because the first term exhausted was 5,
but the second term did not exist.  Since the last term exhausted does not exist, we return -1.

    Note:

    
        0 <= A.length <= 1000
        A.length is an even integer.
        0 <= A[i] <= 10^9
        There are at most 1000 calls to RLEIterator.next(int n) per
            test case.
        
        Each call to RLEIterator.next(int n) will have 1 <= n
            <= 10^9.
-----------------

# 498_Diagonal_Traverse
# 498. Diagonal Traverse

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in
        diagonal order as shown in the below image.

     

    Example:

    Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Explanation:

     

    Note:

    The total number of elements of the given matrix will not exceed 10,000.
-----------------

# 1029_Two_City_Scheduling
# 1029. Two City Scheduling

There are 2N people a company is planning to interview. The cost of flying the
        i-th person to city A is costs[i][0], and the cost of
        flying the i-th person to city B is costs[i][1].

    Return the minimum cost to fly every person to a city such that exactly N people
        arrive in each city.

     

    Example 1:

    Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

     

    Note:

    
        1 <= costs.length <= 100
        It is guaranteed that costs.length is even.
        1 <= costs[i][0], costs[i][1] <= 1000
-----------------

# 1032_Stream_of_Characters
# 1032. Stream of Characters

Implement the StreamChecker class as follows:

    
        StreamChecker(words): Constructor, init the data structure with the given
            words.
        
        query(letter): returns true if and only if for some k >= 1,
            the last k characters queried (in order from oldest to newest,
            including this letter just queried) spell one of the words in the given list.
        
    

     

    Example:

    StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
streamChecker.query('a');          // return false
streamChecker.query('b');          // return false
streamChecker.query('c');          // return false
streamChecker.query('d');          // return true, because 'cd' is in the wordlist
streamChecker.query('e');          // return false
streamChecker.query('f');          // return true, because 'f' is in the wordlist
streamChecker.query('g');          // return false
streamChecker.query('h');          // return false
streamChecker.query('i');          // return false
streamChecker.query('j');          // return false
streamChecker.query('k');          // return false
streamChecker.query('l');          // return true, because 'kl' is in the wordlist

     

    Note:

    
        1 <= words.length <= 2000
        1 <= words[i].length <= 2000
        Words will only consist of lowercase English letters.
        Queries will only consist of lowercase English letters.
        The number of queries is at most 40000.
-----------------

# 1401_Circle_and_Rectangle_Overlapping
# 1401. Circle and Rectangle Overlapping


-----------------

# 551_Student_Attendance_Record_I
# 551. Student Attendance Record I

You are given a string representing an attendance record for a student. The record only contains
    the following three characters:

    
    
        'A' : Absent.
        'L' : Late.
        'P' : Present.
    
    

    
        A student could be rewarded if his attendance record doesn't contain more than one 'A'
        (absent) or more than two continuous 'L' (late). 

    You need to return whether the student could be rewarded according to his attendance
        record.

    Example 1:
    Input: "PPALLP"
Output: True

    

    Example 2:
    Input: "PPALLL"
Output: False
-----------------

# 804_Unique_Morse_Code_Words
# 804. Unique Morse Code Words

International Morse Code defines a standard encoding where each letter is mapped to a series
        of dots and dashes, as follows: "a" maps to
        ".-", "b" maps to
        "-...", "c" maps to
        "-.-.", and so on.

    For convenience, the full table for the 26 letters of the English alphabet is given
        below:

    [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    Now, given a list of words, each word can be written as a concatenation of the Morse code of
        each letter. For example, "cba" can be written as "-.-..--...", (which
        is the concatenation "-.-." + "-..." + ".-"). We'll call
        such a concatenation, the transformation of a word.

    Return the number of different transformations among all words we have.

    Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

    Note:

    
        The length of words will be at most 100.
        Each words[i] will have length in range [1, 12].
        words[i] will only consist of lowercase letters.
-----------------

# 348_Design_Tic-Tac-Toe
# 348. Design Tic-Tac-Toe

Design a Tic-tac-toe game that is played between two players on a n x n grid.
    

    You may assume the following rules:
    
        A move is guaranteed to be valid and is placed on an empty block.
        Once a winning condition is reached, no more moves is allowed.
        A player who succeeds in placing n of their marks in a horizontal, vertical, or
            diagonal row wins the game.
        
    
    

    Example:
    Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|

    

    Follow up:
        Could you do better than O(n2) per move() operation?
-----------------

# 684_Redundant_Connection
# 684. Redundant Connection

In this problem, a tree is an undirected graph that is connected and has no cycles.
    
    
        The given input is a graph that started as a tree with N nodes (with distinct values 1, 2,
        ..., N), with one additional edge added. The added edge has two different vertices chosen
        from 1 to N, and was not an edge that already existed.
    
    
        The resulting graph is given as a 2D-array of edges. Each element of edges
        is a pair [u, v] with u < v, that represents an undirected
        edge connecting nodes u and v.
    
    
        Return an edge that can be removed so that the resulting graph is a tree of N nodes. If
        there are multiple answers, return the answer that occurs last in the given 2D-array. The
        answer edge [u, v] should be in the same format, with u < v.
    
    Example 1:
    Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3

    
    Example 2:
    Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3

    
    Note:
    The size of the input 2D-array will be between 3 and 1000.
    Every integer represented in the 2D-array will be between 1 and N, where N is the size of
        the input array.
    
    

    

    
        Update (2017-09-26):
        We have overhauled the problem description + test cases and specified clearly the graph is
        an undirected graph. For the directed graph follow up please see
        Redundant
            Connection II). We apologize for any inconvenience caused.
-----------------

# 635_Design_Log_Storage_System
# 635. Design Log Storage System

You are given several logs that each log contains a unique id and timestamp. Timestamp is a
        string that has the following format: Year:Month:Day:Hour:Minute:Second, for
        example, 2017:01:01:23:59:59. All domains are zero-padded decimal numbers. 

    Design a log storage system to implement the following functions:

    void Put(int id, string timestamp): Given a log's unique id and timestamp, store
        the log in your storage system.
    
    int[] Retrieve(String start, String end, String granularity): Return the id of
        logs whose timestamps are within the range from start to end. Start and end all have the
        same format as timestamp. However, granularity means the time level for consideration. For
        example, start = "2017:01:01:23:59:59", end = "2017:01:02:23:59:59", granularity = "Day", it
        means that we need to find the logs within the range from Jan. 1st 2017 to Jan. 2nd 2017.
    

    Example 1:
    put(1, "2017:01:01:23:59:59");
put(2, "2017:01:01:22:59:59");
put(3, "2016:01:01:00:00:00");
retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Year"); // return [1,2,3], because you need to return all logs within 2016 and 2017.
retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Hour"); // return [1,2], because you need to return all logs start from 2016:01:01:01 to 2017:01:01:23, where log 3 is left outside the range.

    

    Note:
    
        There will be at most 300 operations of Put or Retrieve.
        Year ranges from [2000,2017]. Hour ranges from [00,23].
        Output for Retrieve has no order required.
-----------------

# 466_Count_The_Repetitions
# 466. Count The Repetitions

Define S = [s,n] as the string S which consists of n connected strings s. For
        example, ["abc", 3] ="abcabcabc". 
    On the other hand, we define that string s1 can be obtained from string s2 if we can remove
        some characters from s2 such that it becomes s1. For example, “abc” can be obtained from
        “abdbec” based on our definition, but it can not be obtained from “acbbe”.
    You are given two non-empty strings s1 and s2 (each at most 100 characters long) and two
        integers 0 ≤ n1 ≤ 106 and 1 ≤ n2 ≤ 106. Now consider the
        strings S1 and S2, where S1=[s1,n1] and S2=[s2,n2]. Find the
        maximum integer M such that [S2,M] can be obtained from S1.

    Example:
    Input:
s1="acb", n1=4
s2="ab", n2=2

Return:
2
-----------------

# 1675_Minimize_Deviation_in_Array
# 1675. Minimize Deviation in Array


-----------------

# 134_Gas_Station
# 134. Gas Station

There are N gas stations along a circular route, where the amount of gas at station
        i is gas[i].

    You have a car with an unlimited gas tank and it costs cost[i] of gas to travel
        from station i to its next station (i+1). You begin the journey with an
        empty tank at one of the gas stations.

    Return the starting gas station's index if you can travel around the circuit once in the
        clockwise direction, otherwise return -1.

    Note:

    
        If there exists a solution, it is guaranteed to be unique.
        Both input arrays are non-empty and have the same length.
        Each element in the input arrays is a non-negative integer.
    

    Example 1:

    Input:
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

    Example 2:

    Input:
gas  = [2,3,4]
cost = [3,4,3]

Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
-----------------

# 623_Add_One_Row_to_Tree
# 623. Add One Row to Tree

Given the root of a binary tree, then value v and depth d, you need
        to add a row of nodes with value v at the given depth d. The root
        node is at depth 1. 

    The adding rule is: given a positive integer depth d, for each NOT null tree
        nodes N in depth d-1, create two tree nodes with value
        v as N's left subtree root and right subtree root. And
        N's original left subtree should be the left subtree of the new left
        subtree root, its original right subtree should be the right subtree of the new right
        subtree root. If depth d is 1 that means there is no depth d-1 at all, then
        create a tree node with value v as the new root of the whole original tree, and the
        original tree is the new root's left subtree.

    Example 1:
    Input:
A binary tree as following:
       4
     /   \
    2     6
   / \   /
  3   1 5

v = 1

d = 2

Output:
       4
      / \
     1   1
    /     \
   2       6
  / \     /
 3   1   5

    

    Example 2:
    Input:
A binary tree as following:
      4
     /
    2
   / \
  3   1

v = 1

d = 3

Output:
      4
     /
    2
   / \
  1   1
 /     \
3       1

    

    Note:
    
        The given d is in range [1, maximum depth of the given tree + 1].
        The given binary tree has at least one tree node.
-----------------

# 1634_Add_Two_Polynomials_Represented_as_Linked_Lists
# 1634. Add Two Polynomials Represented as Linked Lists


-----------------

# 668_Kth_Smallest_Number_in_Multiplication_Table
# 668. Kth Smallest Number in Multiplication Table

Nearly every one have used the Multiplication
        Table. But could you find out the k-th smallest number quickly from the
        multiplication table?
    

    
        Given the height m and the length n of a m * n
        Multiplication Table, and a positive integer k, you need to return the k-th
        smallest number in this table.
    

    Example 1:
    Input: m = 3, n = 3, k = 5
Output:
Explanation:
The Multiplication Table:
1	2	3
2	4	6
3	6	9

The 5-th smallest number is 3 (1, 2, 2, 3, 3).

    

    Example 2:
    Input: m = 2, n = 3, k = 6
Output:
Explanation:
The Multiplication Table:
1	2	3
2	4	6

The 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).

    

    Note:
    
        The m and n will be in the range [1, 30000].
        The k will be in the range [1, m * n]
-----------------

# 1573_Number_of_Ways_to_Split_a_String
# 1573. Number of Ways to Split a String


-----------------

# 74_Search_a_2D_Matrix
# 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an m x n matrix.
        This matrix has the following properties:

    
        Integers in each row are sorted from left to right.
        The first integer of each row is greater than the last integer of the previous row.
    

    Example 1:

    Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

    Example 2:

    Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
-----------------

# 30_Substring_with_Concatenation_of_All_Words
# 30. Substring with Concatenation of All Words

You are given a string, s, and a list of words, words, that
        are all of the same length. Find all starting indices of substring(s) in s
        that is a concatenation of each word in words exactly once and without any
        intervening characters.

    Example 1:

    Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

    Example 2:

    Input:
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
Output: []
-----------------

# 1304_Find_N_Unique_Integers_Sum_up_to_Zero
# 1304. Find N Unique Integers Sum up to Zero


-----------------

# 392_Is_Subsequence
# 392. Is Subsequence

Given a string s and a string t, check if s is subsequence of t.
    

    
        You may assume that there is only lower case English letters in both s and t.
        t is potentially a very long (length ~= 500,000) string, and s is a short
        string (<=100).
    

    
        A subsequence of a string is a new string which is formed from the original string by
        deleting some (can be none) of the characters without disturbing the relative positions of
        the remaining characters. (ie, "ace" is a subsequence of "abcde"
        while "aec" is not).
    

    Example 1:
        s = "abc", t = "ahbgdc"
    
    
        Return true.
    

    Example 2:
        s = "axc", t = "ahbgdc"
    
    
        Return false.
    

    Follow up:
        If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check
        one by one to see if T has its subsequence. In this scenario, how would you change your
        code?

    Credits:Special thanks to @pbrother
        for adding this problem and creating all test cases.
-----------------

# 824_Goat_Latin
# 824. Goat Latin

A sentence S is given, composed of words separated by spaces. Each word consists
        of lowercase and uppercase letters only.

    We would like to convert the sentence to "Goat Latin" (a made-up
        language similar to Pig Latin.)

    The rules of Goat Latin are as follows:

    
        If a word begins with a vowel (a, e, i, o, or u), append "ma" to
            the end of the word.
            For example, the word 'apple' becomes 'applema'.
             
        
        If a word begins with a consonant (i.e. not a vowel), remove the first letter and append
            it to the end, then add "ma".
            For example, the word "goat" becomes "oatgma".
             
        
        Add one letter 'a' to the end of each word per its word index
            in the sentence, starting with 1.
            For example, the first word gets "a" added to the end, the
            second word gets "aa" added to the end and so on.
        
    

    Return the final sentence representing the conversion from S to Goat Latin. 
    

     

    Example 1:

    Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

    Example 2:

    Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

     

    Notes:

    
        S contains only uppercase, lowercase and spaces. Exactly one space
            between each word.
        
        1 <= S.length <= 150.
-----------------

# 1486_XOR_Operation_in_an_Array
# 1486. XOR Operation in an Array


-----------------

# 467_Unique_Substrings_in_Wraparound_String
# 467. Unique Substrings in Wraparound String

Consider the string s to be the infinite wraparound string of
        "abcdefghijklmnopqrstuvwxyz", so s will look like this:
        "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

    Now we have another string p. Your job is to find out how many unique non-empty
        substrings of p are present in s. In particular, your input is the
        string p and you need to output the number of different non-empty substrings of
        p in the string s.

    Note: p consists of only lowercase English letters and the size of p
        might be over 10000.

    Example 1:
    Input: "a"
Output: 1

Explanation: Only the substring "a" of string "a" is in the string s.

    

    Example 2:
    Input: "cac"
Output: 2
Explanation: There are two substrings "a", "c" of string "cac" in the string s.

    

    Example 3:
    Input: "zab"
Output: 6
Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
-----------------

# 1282_Group_the_People_Given_the_Group_Size_They_Belong_To
# 1282. Group the People Given the Group Size They Belong To


-----------------

# 371_Sum_of_Two_Integers
# 371. Sum of Two Integers

Calculate the sum of two integers a and b, but you are not allowed to
        use the operator + and -.
-----------------

# 1654_Minimum_Jumps_to_Reach_Home
# 1654. Minimum Jumps to Reach Home


-----------------

# 86_Partition_List
# 86. Partition List

Given a linked list and a value x, partition it such that all nodes less than
        x come before nodes greater than or equal to x.

    You should preserve the original relative order of the nodes in each of the two
        partitions.

    Example:

    Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
-----------------

# 22_Generate_Parentheses
# 22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of
        well-formed parentheses.
    

    
        For example, given n = 3, a solution set is:
    
    [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
-----------------

# 505_The_Maze_II
# 505. The Maze II

There is a ball in a maze with empty spaces and walls. The ball can go through empty
        spaces by rolling up, down, left or right, but it won't stop
        rolling until hitting a wall. When the ball stops, it could choose the next direction.

    Given the ball's start position, the destination and the maze, find
        the shortest distance for the ball to stop at the destination. The distance is defined by
        the number of empty spaces traveled by the ball from the start position (excluded) to
        the destination (included). If the ball cannot stop at the destination, return -1.

    The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space.
        You may assume that the borders of the maze are all walls. The start and destination
        coordinates are represented by row and column indexes.

     

    Example 1:

    Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

Output: 12

Explanation: One shortest way is : left -> down -> left -> down -> right -> down -> right.
             The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.

    Example 2:

    Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (3, 2)

Output: -1

Explanation: There is no way for the ball to stop at the destination.

     

    Note:

    
        There is only one ball and one destination in the maze.
        Both the ball and the destination exist on an empty space, and they will not be at the
            same position initially.
        
        The given maze does not contain border (like the red rectangle in the example pictures),
            but you could assume the border of the maze are all walls.
        
        The maze contains at least 2 empty spaces, and both the width and height of the maze won't
            exceed 100.
-----------------

# 447_Number_of_Boomerangs
# 447. Number of Boomerangs

Given n points in the plane that are all pairwise distinct, a "boomerang" is
        a tuple of points (i, j, k) such that the distance between i and
        j equals the distance between i and k (the order
            of the tuple matters).

    Find the number of boomerangs. You may assume that n will be at most 500 and
        coordinates of points are all in the range [-10000, 10000] (inclusive).

    Example:

    Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
-----------------

# 366_Find_Leaves_of_Binary_Tree
# 366. Find Leaves of Binary Tree

Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove
        all leaves, repeat until the tree is empty.

     

    Example:

    Input: [1,2,3,4,5]
 
          1
         / \
        2   3
       / \
      4   5

Output: [[4,5,3],[2],[1]]

     

    Explanation:

    1. Removing the leaves [4,5,3] would result in this tree:

              1
         /
        2

     

    2. Now removing the leaf [2] would result in this tree:

              1

     

    3. Now removing the leaf [1] would result in the empty tree:

              []
-----------------

# 1200_Minimum_Absolute_Difference
# 1200. Minimum Absolute Difference

Given an array of distinct integers arr, find
        all pairs of elements with the minimum absolute difference of any two elements. 

    Return a list of pairs in ascending order(with respect to pairs), each pair [a,
        b] follows

    
        a, b are from arr
        a < b
        b - a equals to the minimum absolute difference of any two elements in
            arr
    

     
    Example 1:

    Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

    Example 2:

    Input: arr = [1,3,6,10,15]
Output: [[1,3]]

    Example 3:

    Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]

     
    Constraints:

    
        2 <= arr.length <= 10^5
        -10^6 <= arr[i] <= 10^6
-----------------

# 515_Find_Largest_Value_in_Each_Tree_Row
# 515. Find Largest Value in Each Tree Row

You need to find the largest value in each row of a binary tree.

    Example:
    Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
-----------------

# 38_Count_and_Say
# 38. Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as
        following:

    1.     1
2.     11
3.     21
4.     1211
5.     111221

    1 is read off as "one 1" or 11.
        11 is read off as "two 1s" or 21.
        21 is read off as "one 2, then one 1" or
        1211.

    Given an integer n where 1 ≤ n ≤ 30, generate the
        nth term of the count-and-say sequence.

    Note: Each term of the sequence of integers will be represented as a string.

     

    Example 1:

    Input: 1
Output: "1"

    Example 2:

    Input: 4
Output: "1211"
-----------------

# 709_To_Lower_Case
# 709. To Lower Case

Implement function ToLowerCase() that has a string parameter str, and returns the same string
        in lowercase.
-----------------

# 916_Word_Subsets
# 916. Word Subsets

We are given two arrays A and B of words.  Each word is a
        string of lowercase letters.

    Now, say that word b is a subset of word
        a if every letter in b occurs in
        a, including multiplicity.  For example, "wrr"
        is a subset of "warrior", but is not a subset of "world".
    

    Now say a word a from A is universal if for every
        b in B, b is a subset of a. 
    

    Return a list of all universal words in A.  You can return the words in any
        order.
-----------------

# 1605_Find_Valid_Matrix_Given_Row_and_Column_Sums
# 1605. Find Valid Matrix Given Row and Column Sums


-----------------

# 363_Max_Sum_of_Rectangle_No_Larger_Than_K
# 363. Max Sum of Rectangle No Larger Than K

Given a non-empty 2D matrix matrix and an integer k, find the max sum of a
        rectangle in the matrix such that its sum is no larger than k.

    Example:

    Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of rectangle [[0, 1], [-2, 3]] is 2,
             and 2 is the max number no larger than k (k = 2).

    Note:

    
        The rectangle inside the matrix must have an area > 0.
        What if the number of rows is much larger than the number of columns?
-----------------

# 1403_Minimum_Subsequence_in_Non-Increasing_Order
# 1403. Minimum Subsequence in Non-Increasing Order


-----------------

# 1038_Binary_Search_Tree_to_Greater_Sum_Tree
# 1038. Binary Search Tree to Greater Sum Tree

Given the root of a binary search tree with distinct values, modify it so
        that every node has a new value equal to the sum of the values of the
        original tree that are greater than or equal to node.val.

    As a reminder, a binary search tree is a tree that satisfies these constraints:
    

    
        The left subtree of a node contains only nodes with keys less than the
            node's key.
        
        The right subtree of a node contains only nodes with keys greater
            than the node's key.
        
        Both the left and right subtrees must also be binary search trees.
    

     

    Example 1:

    

    Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
-----------------

# 239_Sliding_Window_Maximum
# 239. Sliding Window Maximum

Given an array nums, there is a slid